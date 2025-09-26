import { useState, useEffect } from 'react';
import { 
  TrendingUp, 
  TrendingDown, 
  Users, 
  Calendar, 
  DollarSign, 
  Scissors, 
  Package, 
  Clock,
  Star,
  ArrowUpRight,
  ArrowDownRight,
  MoreHorizontal,
  Eye,
  Download,
  Filter,
  Activity,
  Target,
  Zap,
  Crown,
  Sparkles,
  BarChart3,
  TrendingUp as TrendUp
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const DashboardOverview = () => {
  const [timeRange, setTimeRange] = useState('7d');
  const [isLoading, setIsLoading] = useState(false);

  // Mock data - in real app, this would come from API
  const stats = [
    {
      title: 'Total Revenue',
      value: '$24,580',
      change: '+12.5%',
      trend: 'up',
      icon: DollarSign,
      color: 'text-emerald-400',
      bgColor: 'bg-emerald-500/10',
      borderColor: 'border-emerald-500/30',
      gradient: 'from-emerald-500/20 to-emerald-600/10',
      glow: 'luxury-glow-green'
    },
    {
      title: 'Active Bookings',
      value: '47',
      change: '+8.2%',
      trend: 'up',
      icon: Calendar,
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/10',
      borderColor: 'border-blue-500/30',
      gradient: 'from-blue-500/20 to-blue-600/10',
      glow: 'luxury-glow'
    },
    {
      title: 'Total Clients',
      value: '1,234',
      change: '+15.3%',
      trend: 'up',
      icon: Users,
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/10',
      borderColor: 'border-purple-500/30',
      gradient: 'from-purple-500/20 to-purple-600/10',
      glow: 'luxury-glow-purple'
    },
    {
      title: 'Services Completed',
      value: '892',
      change: '+5.7%',
      trend: 'up',
      icon: Scissors,
      color: 'text-orange-400',
      bgColor: 'bg-orange-500/10',
      borderColor: 'border-orange-500/30',
      gradient: 'from-orange-500/20 to-orange-600/10',
      glow: 'luxury-glow-orange'
    }
  ];

  const recentBookings = [
    {
      id: 'BK001',
      client: 'John Smith',
      service: 'Haircut & Beard Trim',
      time: '10:30 AM',
      status: 'confirmed',
      barber: 'Mike Johnson',
      avatar: '/api/placeholder/40/40',
      duration: '45 min',
      price: '$65'
    },
    {
      id: 'BK002',
      client: 'Sarah Wilson',
      service: 'Hair Styling',
      time: '11:15 AM',
      status: 'in-progress',
      barber: 'Lisa Brown',
      avatar: '/api/placeholder/40/40',
      duration: '60 min',
      price: '$85'
    },
    {
      id: 'BK003',
      client: 'David Lee',
      service: 'Full Service',
      time: '12:00 PM',
      status: 'pending',
      barber: 'Tom Davis',
      avatar: '/api/placeholder/40/40',
      duration: '90 min',
      price: '$120'
    },
    {
      id: 'BK004',
      client: 'Emma Taylor',
      service: 'Haircut',
      time: '1:30 PM',
      status: 'completed',
      barber: 'Mike Johnson',
      avatar: '/api/placeholder/40/40',
      duration: '30 min',
      price: '$45'
    }
  ];

  const topServices = [
    { name: 'Haircut', bookings: 45, revenue: '$1,350', growth: '+12%', color: 'bg-blue-500', glow: 'luxury-glow' },
    { name: 'Beard Trim', bookings: 32, revenue: '$960', growth: '+8%', color: 'bg-orange-500', glow: 'luxury-glow-orange' },
    { name: 'Hair Styling', bookings: 28, revenue: '$1,400', growth: '+15%', color: 'bg-purple-500', glow: 'luxury-glow-purple' },
    { name: 'Full Service', bookings: 22, revenue: '$1,760', growth: '+6%', color: 'bg-emerald-500', glow: 'luxury-glow-green' },
    { name: 'Hair Wash', bookings: 18, revenue: '$360', growth: '+3%', color: 'bg-cyan-500', glow: 'luxury-glow' }
  ];

  const recentClients = [
    {
      name: 'Alex Johnson',
      email: 'alex@email.com',
      phone: '+1 (555) 123-4567',
      joinDate: '2024-01-15',
      totalSpent: '$450',
      lastVisit: '2 days ago',
      avatar: '/api/placeholder/40/40',
      status: 'active'
    },
    {
      name: 'Maria Garcia',
      email: 'maria@email.com',
      phone: '+1 (555) 234-5678',
      joinDate: '2024-01-20',
      totalSpent: '$320',
      lastVisit: '1 week ago',
      avatar: '/api/placeholder/40/40',
      status: 'active'
    },
    {
      name: 'James Wilson',
      email: 'james@email.com',
      phone: '+1 (555) 345-6789',
      joinDate: '2024-01-25',
      totalSpent: '$280',
      lastVisit: '3 days ago',
      avatar: '/api/placeholder/40/40',
      status: 'new'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed': return 'luxury-badge bg-emerald-500/20 text-emerald-400 border-emerald-500/30';
      case 'in-progress': return 'luxury-badge bg-blue-500/20 text-blue-400 border-blue-500/30';
      case 'pending': return 'luxury-badge bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'completed': return 'luxury-badge bg-gray-500/20 text-gray-400 border-gray-500/30';
      default: return 'luxury-badge bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'confirmed': return 'Confirmed';
      case 'in-progress': return 'In Progress';
      case 'pending': return 'Pending';
      case 'completed': return 'Completed';
      default: return 'Unknown';
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="luxury-card p-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold text-white mb-2 luxury-text-gradient luxury-text-glow">
              Dashboard Overview
            </h1>
            <p className="text-gray-400 text-lg">Welcome back! Here's what's happening at FRESHMEN Barbershop.</p>
          </div>
          <div className="flex items-center space-x-3">
            <select 
              value={timeRange}
              onChange={(e) => setTimeRange(e.target.value)}
              className="luxury-input px-4 py-2 text-white text-sm focus:border-blue-500/50 focus:ring-blue-500/20 focus:outline-none transition-colors"
            >
              <option value="24h">Last 24 Hours</option>
              <option value="7d">Last 7 Days</option>
              <option value="30d">Last 30 Days</option>
              <option value="90d">Last 90 Days</option>
            </select>
            <Button variant="outline" size="sm" className="luxury-button border-white/20 text-gray-300 hover:bg-white/10 hover:border-white/30">
              <Download className="h-4 w-4 mr-2" />
              Export
            </Button>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const IconComponent = stat.icon;
          return (
            <div key={index} className={`luxury-card p-6 ${stat.glow} luxury-pulse`}>
              <div className="flex items-center justify-between">
                <div className="space-y-3">
                  <p className="text-sm font-medium text-gray-400">{stat.title}</p>
                  <p className="text-3xl font-bold text-white luxury-text-glow">{stat.value}</p>
                  <div className="flex items-center space-x-1">
                    {stat.trend === 'up' ? (
                      <ArrowUpRight className="h-4 w-4 text-emerald-400" />
                    ) : (
                      <ArrowDownRight className="h-4 w-4 text-red-400" />
                    )}
                    <span className={`text-sm font-medium ${
                      stat.trend === 'up' ? 'text-emerald-400' : 'text-red-400'
                    }`}>
                      {stat.change}
                    </span>
                    <span className="text-sm text-gray-500">vs last period</span>
                  </div>
                </div>
                <div className={`p-4 rounded-2xl ${stat.bgColor} ${stat.glow}`}>
                  <IconComponent className={`h-8 w-8 ${stat.color}`} />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recent Bookings */}
        <div className="lg:col-span-2 luxury-card p-6">
          <div className="flex flex-row items-center justify-between pb-6">
            <div>
              <h2 className="text-2xl font-bold text-white luxury-text-glow">Recent Bookings</h2>
              <p className="text-gray-400 text-sm mt-1">Today's appointments and schedule</p>
            </div>
            <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white hover:bg-white/10 luxury-button">
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </div>
          <div className="space-y-4">
            {recentBookings.map((booking, index) => (
              <div key={index} className="luxury-card p-4 luxury-glow hover:scale-[1.02] transition-all duration-300">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <Avatar className="h-12 w-12 luxury-avatar">
                      <AvatarImage src={booking.avatar} />
                      <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-500 text-white font-semibold">
                        {booking.client.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div className="space-y-1">
                      <h3 className="font-semibold text-white luxury-text-glow">{booking.client}</h3>
                      <p className="text-sm text-gray-400">{booking.service}</p>
                      <div className="flex items-center space-x-4 text-xs text-gray-500">
                        <span>Barber: {booking.barber}</span>
                        <span>{booking.duration}</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right space-y-2">
                    <Badge className={`${getStatusColor(booking.status)} text-xs px-3 py-1`}>
                      {getStatusText(booking.status)}
                    </Badge>
                    <div className="text-sm text-gray-300">{booking.time}</div>
                    <div className="text-lg font-bold text-white luxury-text-glow">{booking.price}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Top Services */}
        <div className="luxury-card p-6">
          <div className="pb-6">
            <h2 className="text-2xl font-bold text-white luxury-text-glow">Top Services</h2>
            <p className="text-gray-400 text-sm mt-1">Most popular services this month</p>
          </div>
          <div className="space-y-6">
            {topServices.map((service, index) => (
              <div key={index} className="luxury-card p-4 luxury-glow hover:scale-[1.02] transition-all duration-300">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className={`w-3 h-3 rounded-full ${service.color} ${service.glow}`} />
                      <span className="font-medium text-white luxury-text-glow">{service.name}</span>
                    </div>
                    <span className="text-sm text-gray-400">{service.bookings} bookings</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">{service.revenue}</span>
                    <span className="text-emerald-400 font-medium">{service.growth}</span>
                  </div>
                  <div className="luxury-progress h-2">
                    <div 
                      className="luxury-progress-bar h-full"
                      style={{ width: `${(service.bookings / 45) * 100}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Revenue Chart Placeholder */}
        <div className="luxury-card p-6">
          <div className="pb-6">
            <h2 className="text-2xl font-bold text-white luxury-text-glow">Revenue Trend</h2>
            <p className="text-gray-400 text-sm mt-1">Revenue performance over time</p>
          </div>
          <div className="h-64 flex items-center justify-center luxury-glass rounded-2xl border border-white/10">
            <div className="text-center">
              <Activity className="h-16 w-16 text-gray-400 mx-auto mb-4 luxury-glow" />
              <p className="text-gray-400 font-medium">Chart will be rendered here</p>
              <p className="text-xs text-gray-500 mt-1">Integration with chart library needed</p>
            </div>
          </div>
        </div>

        {/* Recent Clients */}
        <div className="luxury-card p-6">
          <div className="pb-6">
            <h2 className="text-2xl font-bold text-white luxury-text-glow">Recent Clients</h2>
            <p className="text-gray-400 text-sm mt-1">New and returning customers</p>
          </div>
          <div className="space-y-4">
            {recentClients.map((client, index) => (
              <div key={index} className="luxury-card p-3 luxury-glow hover:scale-[1.02] transition-all duration-300">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Avatar className="h-10 w-10 luxury-avatar">
                      <AvatarImage src={client.avatar} />
                      <AvatarFallback className="bg-gradient-to-br from-emerald-500 to-blue-500 text-white text-sm font-semibold">
                        {client.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-medium text-white luxury-text-glow">{client.name}</h3>
                      <p className="text-sm text-gray-400">{client.email}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-300 font-medium">{client.totalSpent}</div>
                    <div className="text-xs text-gray-500">{client.lastVisit}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="luxury-card p-6">
        <div className="pb-6">
          <h2 className="text-2xl font-bold text-white luxury-text-glow">Quick Actions</h2>
          <p className="text-gray-400 text-sm mt-1">Common tasks and shortcuts</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Button className="h-20 flex flex-col items-center justify-center space-y-2 luxury-button-primary rounded-2xl transition-all duration-300 hover:scale-105">
            <Calendar className="h-6 w-6" />
            <span className="text-sm font-medium">New Booking</span>
          </Button>
          <Button className="h-20 flex flex-col items-center justify-center space-y-2 luxury-button rounded-2xl transition-all duration-300 hover:scale-105 luxury-glow">
            <Users className="h-6 w-6" />
            <span className="text-sm font-medium">Add Client</span>
          </Button>
          <Button className="h-20 flex flex-col items-center justify-center space-y-2 luxury-button rounded-2xl transition-all duration-300 hover:scale-105 luxury-glow-orange">
            <Scissors className="h-6 w-6" />
            <span className="text-sm font-medium">New Service</span>
          </Button>
          <Button className="h-20 flex flex-col items-center justify-center space-y-2 luxury-button rounded-2xl transition-all duration-300 hover:scale-105 luxury-glow-purple">
            <Package className="h-6 w-6" />
            <span className="text-sm font-medium">Add Product</span>
          </Button>
        </div>
      </div>

      {/* Additional Analytics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="luxury-card p-6 luxury-glow-green">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-emerald-500/10 rounded-xl luxury-glow-green">
              <TrendUp className="h-6 w-6 text-emerald-400" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white luxury-text-glow">Growth Rate</h3>
              <p className="text-2xl font-bold text-emerald-400">+24.5%</p>
              <p className="text-sm text-gray-400">This month</p>
            </div>
          </div>
        </div>

        <div className="luxury-card p-6 luxury-glow-purple">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-purple-500/10 rounded-xl luxury-glow-purple">
              <BarChart3 className="h-6 w-6 text-purple-400" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white luxury-text-glow">Avg. Rating</h3>
              <p className="text-2xl font-bold text-purple-400">4.8/5</p>
              <p className="text-sm text-gray-400">Customer satisfaction</p>
            </div>
          </div>
        </div>

        <div className="luxury-card p-6 luxury-glow-orange">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-orange-500/10 rounded-xl luxury-glow-orange">
              <Target className="h-6 w-6 text-orange-400" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white luxury-text-glow">Efficiency</h3>
              <p className="text-2xl font-bold text-orange-400">94%</p>
              <p className="text-sm text-gray-400">Service completion</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardOverview;
