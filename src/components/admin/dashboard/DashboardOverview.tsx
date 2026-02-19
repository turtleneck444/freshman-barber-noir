import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { 
  TrendingUp, TrendingDown, DollarSign, Users, Calendar, Package,
  Clock, Star, Scissors, UserCheck, CheckCircle, Loader2,
  BarChart3, PieChart, LineChart
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

interface DashboardOverviewProps {
  onNavigate?: (page: string) => void;
}

const DashboardOverview = ({ onNavigate }: DashboardOverviewProps) => {
  const [timeRange, setTimeRange] = useState('today');
  const handleNavigate = (page: string) => onNavigate?.(page);

  const { data: bookings = [] } = useQuery({
    queryKey: ['dashboard-bookings'],
    queryFn: async () => {
      const { data, error } = await supabase.from('bookings').select('*, services(name), staff(name)').order('booking_date', { ascending: false }).limit(10);
      if (error) throw error;
      return data;
    }
  });

  const { data: allBookings = [] } = useQuery({
    queryKey: ['dashboard-all-bookings'],
    queryFn: async () => {
      const { data, error } = await supabase.from('bookings').select('price, status, booking_date');
      if (error) throw error;
      return data;
    }
  });

  const { data: clientCount = 0 } = useQuery({
    queryKey: ['dashboard-client-count'],
    queryFn: async () => {
      const { count, error } = await supabase.from('clients').select('*', { count: 'exact', head: true });
      if (error) throw error;
      return count || 0;
    }
  });

  const { data: services = [] } = useQuery({
    queryKey: ['dashboard-services'],
    queryFn: async () => {
      const { data, error } = await supabase.from('services').select('*').eq('status', 'active');
      if (error) throw error;
      return data;
    }
  });

  const { data: staffMembers = [] } = useQuery({
    queryKey: ['dashboard-staff'],
    queryFn: async () => {
      const { data, error } = await supabase.from('staff').select('*').eq('status', 'active');
      if (error) throw error;
      return data;
    }
  });

  const { data: products = [] } = useQuery({
    queryKey: ['dashboard-products'],
    queryFn: async () => {
      const { data, error } = await supabase.from('products').select('*');
      if (error) throw error;
      return data;
    }
  });

  const todayStr = new Date().toISOString().split('T')[0];
  const todayBookings = allBookings.filter((b: any) => b.booking_date === todayStr);
  const totalRevenue = allBookings.reduce((sum: number, b: any) => sum + (Number(b.price) || 0), 0);
  const pendingCount = todayBookings.filter((b: any) => b.status === 'pending').length;

  const metrics = [
    { title: 'Total Revenue', value: `$${totalRevenue.toLocaleString()}`, change: '', trend: 'up' as const, icon: DollarSign, color: 'text-emerald-400', bgColor: 'bg-emerald-500/10', subtitle: 'all time' },
    { title: 'Active Clients', value: String(clientCount), change: '', trend: 'up' as const, icon: Users, color: 'text-blue-400', bgColor: 'bg-blue-500/10', subtitle: 'total customers' },
    { title: 'Bookings Today', value: String(todayBookings.length), change: `${pendingCount} pending`, trend: 'up' as const, icon: Calendar, color: 'text-purple-400', bgColor: 'bg-purple-500/10', subtitle: '' },
    { title: 'Products', value: String(products.length), change: '', trend: 'up' as const, icon: Package, color: 'text-orange-400', bgColor: 'bg-orange-500/10', subtitle: 'in inventory' }
  ];

  const quickStats = [
    { label: 'Avg. Booking Value', value: allBookings.length ? `$${Math.round(totalRevenue / allBookings.length)}` : '$0', icon: DollarSign, color: 'text-emerald-400' },
    { label: 'Active Staff', value: String(staffMembers.length), icon: UserCheck, color: 'text-blue-400' },
    { label: 'Services Offered', value: String(services.length), icon: Scissors, color: 'text-purple-400' },
    { label: 'Total Bookings', value: String(allBookings.length), icon: Calendar, color: 'text-yellow-400' }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed': return 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30';
      case 'pending': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'completed': return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      case 'cancelled': return 'bg-red-500/20 text-red-400 border-red-500/30';
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  return (
    <div className="space-y-6 -mt-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>Dashboard Overview</h1>
          <p className="text-gray-600" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>Welcome back! Here's what's happening.</p>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric, index) => {
          const IconComponent = metric.icon;
          return (
            <div key={index} className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-lg group cursor-pointer transition-all"
              onClick={() => {
                if (metric.title.includes('Revenue')) handleNavigate('financials');
                else if (metric.title.includes('Clients')) handleNavigate('clients');
                else if (metric.title.includes('Bookings')) handleNavigate('bookings');
                else if (metric.title.includes('Products')) handleNavigate('products');
              }}>
              <div className="flex items-start justify-between mb-4">
                <div className={`p-3 rounded-xl ${metric.bgColor}`}><IconComponent className={`h-6 w-6 ${metric.color}`} /></div>
                {metric.change && <span className="text-xs text-amber-500 font-semibold">{metric.change}</span>}
              </div>
              <h3 className="text-sm font-semibold text-gray-700 mb-1" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>{metric.title}</h3>
              <p className="text-3xl font-bold text-gray-900 mb-1" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>{metric.value}</p>
              {metric.subtitle && <p className="text-xs text-gray-500">{metric.subtitle}</p>}
            </div>
          );
        })}
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {quickStats.map((stat, index) => {
          const IconComponent = stat.icon;
          return (
            <div key={index} className="bg-white border border-gray-200 p-4 rounded-xl hover:shadow-md transition-all">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg"><IconComponent className={`h-5 w-5 ${stat.color}`} /></div>
                <div>
                  <p className="text-xs font-medium text-gray-500">{stat.label}</p>
                  <p className="text-lg font-bold text-gray-900">{stat.value}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Recent Bookings */}
      <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-1" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>Recent Bookings</h3>
            <p className="text-sm text-gray-600">Latest appointments</p>
          </div>
          <Button variant="ghost" size="sm" className="text-gray-600 hover:text-gray-900" onClick={() => handleNavigate('bookings')}>View All</Button>
        </div>
        <div className="space-y-3">
          {bookings.length === 0 ? (
            <p className="text-center text-gray-500 py-8">No bookings yet</p>
          ) : bookings.slice(0, 5).map((booking: any) => (
            <div key={booking.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors cursor-pointer" onClick={() => handleNavigate('bookings')}>
              <div className="flex items-center gap-3">
                <Avatar className="h-10 w-10">
                  <AvatarFallback className="bg-blue-500 text-white text-sm font-bold">
                    {booking.client_name ? booking.client_name.split(' ').map((n: string) => n[0]).join('').slice(0, 2) : '??'}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-semibold text-gray-900">{booking.client_name || 'Walk-in'}</p>
                  <p className="text-xs text-gray-500">{booking.services?.name || 'Service'}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-right">
                  <p className="text-sm text-gray-600">{new Date(booking.booking_date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</p>
                  <p className="text-xs text-gray-500">{booking.booking_time}</p>
                </div>
                <Badge className={`${getStatusColor(booking.status)} text-xs px-2 py-1`}>{booking.status}</Badge>
                {booking.price && <p className="text-sm font-bold text-gray-900">${booking.price}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardOverview;
