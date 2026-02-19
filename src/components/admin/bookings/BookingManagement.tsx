import { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { 
  Calendar as CalendarIcon,
  Clock,
  User,
  Phone,
  DollarSign,
  CheckCircle,
  AlertCircle,
  Plus,
  Search,
  Filter,
  Download,
  MoreVertical,
  Loader2
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { toast } from 'sonner';

const BookingManagement = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const queryClient = useQueryClient();

  const { data: bookings = [], isLoading } = useQuery({
    queryKey: ['admin-bookings'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('bookings')
        .select('*, services(name), staff(name)')
        .order('booking_date', { ascending: false })
        .order('booking_time', { ascending: false });
      if (error) throw error;
      return data;
    }
  });

  const updateStatusMutation = useMutation({
    mutationFn: async ({ id, status }: { id: string; status: string }) => {
      const { error } = await supabase
        .from('bookings')
        .update({ status: status as any })
        .eq('id', id);
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['admin-bookings'] });
      toast.success('Booking status updated');
    }
  });

  const filteredBookings = bookings.filter((b: any) => {
    const search = searchQuery.toLowerCase();
    return !search || 
      b.client_name?.toLowerCase().includes(search) ||
      b.client_email?.toLowerCase().includes(search) ||
      b.services?.name?.toLowerCase().includes(search);
  });

  const todayStr = new Date().toISOString().split('T')[0];
  const todayBookings = bookings.filter((b: any) => b.booking_date === todayStr);
  const confirmedToday = todayBookings.filter((b: any) => b.status === 'confirmed');
  const pendingToday = todayBookings.filter((b: any) => b.status === 'pending');
  const completedToday = todayBookings.filter((b: any) => b.status === 'completed');

  const stats = [
    { label: 'Total Today', value: String(todayBookings.length), icon: CalendarIcon, color: 'text-blue-500', bgColor: 'bg-blue-50' },
    { label: 'Confirmed', value: String(confirmedToday.length), icon: CheckCircle, color: 'text-emerald-500', bgColor: 'bg-emerald-50' },
    { label: 'Pending', value: String(pendingToday.length), icon: AlertCircle, color: 'text-amber-500', bgColor: 'bg-amber-50' },
    { label: 'Completed', value: String(completedToday.length), icon: CheckCircle, color: 'text-purple-500', bgColor: 'bg-purple-50' }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed': return 'bg-emerald-50 text-emerald-600 border-emerald-200';
      case 'pending': return 'bg-amber-50 text-amber-600 border-amber-200';
      case 'completed': return 'bg-blue-50 text-blue-600 border-blue-200';
      case 'cancelled': return 'bg-red-50 text-red-600 border-red-200';
      case 'in_progress': return 'bg-purple-50 text-purple-600 border-purple-200';
      default: return 'bg-gray-50 text-gray-600 border-gray-200';
    }
  };

  const getInitials = (name: string | null) => {
    if (!name) return '??';
    return name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-20">
        <Loader2 className="h-8 w-8 animate-spin text-red-500" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 mb-1" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>Booking Management</h1>
          <p className="text-sm text-gray-500" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>Manage appointments and scheduling</p>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const IconComponent = stat.icon;
          return (
            <div key={index} className="bg-white border border-gray-200 rounded-xl p-5 hover:shadow-sm transition-shadow">
              <div className="flex items-center gap-3 mb-2">
                <div className={`p-2 ${stat.bgColor} rounded-lg`}>
                  <IconComponent className={`h-5 w-5 ${stat.color}`} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-medium" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>{stat.label}</p>
                  <p className="text-2xl font-bold text-gray-900" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>{stat.value}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Table Container */}
      <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
        <div className="p-6 border-b border-gray-200">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <Input
              placeholder="Search bookings..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-400 h-10"
              style={{ fontFamily: 'Gotham Bold, sans-serif' }}
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="text-left py-3 px-6 text-xs font-semibold text-gray-500 uppercase tracking-wider" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>Client</th>
                <th className="text-left py-3 px-6 text-xs font-semibold text-gray-500 uppercase tracking-wider" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>Service</th>
                <th className="text-left py-3 px-6 text-xs font-semibold text-gray-500 uppercase tracking-wider" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>Date & Time</th>
                <th className="text-left py-3 px-6 text-xs font-semibold text-gray-500 uppercase tracking-wider" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>Duration</th>
                <th className="text-left py-3 px-6 text-xs font-semibold text-gray-500 uppercase tracking-wider" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>Barber</th>
                <th className="text-left py-3 px-6 text-xs font-semibold text-gray-500 uppercase tracking-wider" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>Amount</th>
                <th className="text-left py-3 px-6 text-xs font-semibold text-gray-500 uppercase tracking-wider" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredBookings.length === 0 ? (
                <tr>
                  <td colSpan={7} className="py-12 text-center text-gray-500">
                    No bookings found
                  </td>
                </tr>
              ) : filteredBookings.map((booking: any) => (
                <tr key={booking.id} className="hover:bg-gray-50 transition-colors cursor-pointer">
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-3">
                      <Avatar className="h-10 w-10 bg-blue-500 text-white font-semibold">
                        <AvatarFallback className="bg-blue-500 text-white">
                          {getInitials(booking.client_name)}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-sm font-medium text-gray-900" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>{booking.client_name || 'Walk-in'}</p>
                        <p className="text-xs text-gray-500" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>{booking.client_phone || ''}</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <p className="text-sm text-gray-600" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>{booking.services?.name || 'N/A'}</p>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1 text-sm text-gray-600">
                        <CalendarIcon className="h-4 w-4 text-gray-400" />
                        <span style={{ fontFamily: 'Gotham Bold, sans-serif' }}>{new Date(booking.booking_date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
                      </div>
                      <div className="flex items-center gap-1 text-sm text-gray-600">
                        <Clock className="h-4 w-4 text-gray-400" />
                        <span style={{ fontFamily: 'Gotham Bold, sans-serif' }}>{booking.booking_time}</span>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <p className="text-sm text-gray-600" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>{booking.duration_minutes ? `${booking.duration_minutes} min` : 'N/A'}</p>
                  </td>
                  <td className="py-4 px-6">
                    <p className="text-sm text-gray-600" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>{booking.staff?.name || 'Any'}</p>
                  </td>
                  <td className="py-4 px-6">
                    <p className="text-sm font-semibold text-gray-900" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>{booking.price ? `$${booking.price}` : 'N/A'}</p>
                  </td>
                  <td className="py-4 px-6">
                    <Badge className={`${getStatusColor(booking.status)} text-xs px-3 py-1 border uppercase font-semibold cursor-pointer`}
                      onClick={() => {
                        const next: Record<string, string> = { pending: 'confirmed', confirmed: 'in_progress', in_progress: 'completed', completed: 'completed', cancelled: 'cancelled' };
                        updateStatusMutation.mutate({ id: booking.id, status: next[booking.status] || 'confirmed' });
                      }}
                    >
                      {booking.status}
                    </Badge>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="px-6 py-4 border-t border-gray-200 bg-gray-50">
          <p className="text-sm text-gray-500" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>
            Showing {filteredBookings.length} of {bookings.length} bookings
          </p>
        </div>
      </div>
    </div>
  );
};

export default BookingManagement;
