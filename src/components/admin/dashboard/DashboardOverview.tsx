import { useState } from 'react';
import { 
  TrendingUp, 
  TrendingDown, 
  DollarSign, 
  Users, 
  Calendar, 
  Package,
  ArrowUp,
  ArrowDown,
  Clock,
  Star,
  Scissors,
  Award,
  Eye,
  Activity,
  ShoppingBag,
  UserCheck,
  Phone,
  Mail,
  MapPin,
  CheckCircle,
  AlertCircle,
  BarChart3,
  PieChart,
  LineChart
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface DashboardOverviewProps {
  onNavigate?: (page: string) => void;
}

const DashboardOverview = ({ onNavigate }: DashboardOverviewProps) => {
  const [timeRange, setTimeRange] = useState('today');

  const handleNavigate = (page: string) => {
    if (onNavigate) {
      onNavigate(page);
    }
  };

  // Key Metrics
  const metrics = [
    {
      title: 'Total Revenue',
      value: '$12,450',
      change: '+15.3%',
      trend: 'up',
      icon: DollarSign,
      color: 'text-emerald-400',
      bgColor: 'bg-emerald-500/10',
      borderColor: 'border-emerald-500/30',
      glow: 'luxury-glow-green',
      subtitle: 'vs last month'
    },
    {
      title: 'Active Clients',
      value: '2,847',
      change: '+8.2%',
      trend: 'up',
      icon: Users,
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/10',
      borderColor: 'border-blue-500/30',
      glow: 'luxury-glow',
      subtitle: 'total customers'
    },
    {
      title: 'Bookings Today',
      value: '24',
      change: '+3',
      trend: 'up',
      icon: Calendar,
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/10',
      borderColor: 'border-purple-500/30',
      glow: 'luxury-glow-purple',
      subtitle: '5 pending'
    },
    {
      title: 'Products Sold',
      value: '156',
      change: '-2.1%',
      trend: 'down',
      icon: Package,
      color: 'text-orange-400',
      bgColor: 'bg-orange-500/10',
      borderColor: 'border-orange-500/30',
      glow: 'luxury-glow-orange',
      subtitle: 'this month'
    }
  ];

  // Quick Stats
  const quickStats = [
    { label: 'Avg. Booking Value', value: '$65', icon: DollarSign, color: 'text-emerald-400' },
    { label: 'Customer Satisfaction', value: '4.9/5', icon: Star, color: 'text-yellow-400' },
    { label: 'Active Staff', value: '8', icon: UserCheck, color: 'text-blue-400' },
    { label: 'Services Offered', value: '12', icon: Scissors, color: 'text-purple-400' }
  ];

  // Recent Bookings
  const recentBookings = [
    {
      id: 1,
      client: 'John Doe',
      service: 'Signature Haircut',
      time: '10:00 AM',
      status: 'confirmed',
      amount: '$45',
      avatar: null
    },
    {
      id: 2,
      client: 'Mike Smith',
      service: 'Haircut + Beard Trim',
      time: '11:30 AM',
      status: 'pending',
      amount: '$60',
      avatar: null
    },
    {
      id: 3,
      client: 'David Johnson',
      service: 'Royal Package',
      time: '2:00 PM',
      status: 'confirmed',
      amount: '$85',
      avatar: null
    },
    {
      id: 4,
      client: 'Robert Williams',
      service: 'Traditional Shave',
      time: '3:30 PM',
      status: 'completed',
      amount: '$35',
      avatar: null
    },
    {
      id: 5,
      client: 'James Brown',
      service: 'Beard Trim & Style',
      time: '5:00 PM',
      status: 'confirmed',
      amount: '$30',
      avatar: null
    }
  ];

  // Top Services
  const topServices = [
    { name: 'Signature Haircut', bookings: 145, revenue: '$6,525', growth: '+12%', percentage: 85 },
    { name: 'Haircut + Beard', bookings: 98, revenue: '$5,880', growth: '+8%', percentage: 72 },
    { name: 'Royal Package', bookings: 42, revenue: '$3,570', growth: '+15%', percentage: 45 },
    { name: 'Traditional Shave', bookings: 67, revenue: '$2,345', growth: '+5%', percentage: 55 }
  ];

  // Revenue by Service (for chart)
  const revenueData = [
    { month: 'Jan', revenue: 8500 },
    { month: 'Feb', revenue: 9200 },
    { month: 'Mar', revenue: 10800 },
    { month: 'Apr', revenue: 11500 },
    { month: 'May', revenue: 12100 },
    { month: 'Jun', revenue: 12450 }
  ];

  // Recent Activity
  const recentActivity = [
    { id: 1, type: 'booking', message: 'New booking by John Doe', time: '2 minutes ago', icon: Calendar, color: 'text-blue-400' },
    { id: 2, type: 'product', message: 'Product "Premium Hair Wax" sold', time: '15 minutes ago', icon: Package, color: 'text-green-400' },
    { id: 3, type: 'client', message: 'New client registered', time: '1 hour ago', icon: Users, color: 'text-purple-400' },
    { id: 4, type: 'review', message: 'New 5-star review received', time: '2 hours ago', icon: Star, color: 'text-yellow-400' },
    { id: 5, type: 'booking', message: 'Booking completed', time: '3 hours ago', icon: CheckCircle, color: 'text-emerald-400' }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed':
        return 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30';
      case 'pending':
        return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'completed':
        return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      case 'cancelled':
        return 'bg-red-500/20 text-red-400 border-red-500/30';
      default:
        return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  return (
    <div className="space-y-6 -mt-6">
      {/* Header with Time Range Selector */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>Dashboard Overview</h1>
          <p className="text-gray-600" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>Welcome back! Here's what's happening today.</p>
        </div>
        <div className="flex items-center gap-2">
          {['today', 'week', 'month', 'year'].map((range) => (
            <Button
              key={range}
              variant="ghost"
              size="sm"
              onClick={() => setTimeRange(range)}
              className={`${
                timeRange === range
                  ? 'bg-red-600 text-white border border-red-500'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100 border border-gray-300'
              }`}
              style={{ fontFamily: 'Gotham Bold, sans-serif' }}
            >
              {range.charAt(0).toUpperCase() + range.slice(1)}
            </Button>
          ))}
        </div>
      </div>

      {/* Key Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric, index) => {
          const IconComponent = metric.icon;
          const TrendIcon = metric.trend === 'up' ? TrendingUp : TrendingDown;
          
          return (
            <div 
              key={index} 
              className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-lg group cursor-pointer"
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
              }}
              onClick={() => {
                // Navigate based on metric type
                if (metric.title.includes('Revenue')) handleNavigate('financials');
                else if (metric.title.includes('Clients')) handleNavigate('clients');
                else if (metric.title.includes('Bookings')) handleNavigate('bookings');
                else if (metric.title.includes('Products')) handleNavigate('products');
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px) scale(1.02)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
              }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`p-3 rounded-xl ${metric.bgColor} ${metric.glow} transition-all duration-300 group-hover:scale-110 group-hover:shadow-2xl`}>
                  <IconComponent className={`h-6 w-6 ${metric.color} transition-transform duration-300 group-hover:rotate-12`} />
                </div>
                <div className={`flex items-center gap-1 px-2 py-1 rounded-lg transition-all duration-300 ${
                  metric.trend === 'up' ? 'bg-emerald-500/20 text-emerald-400 group-hover:bg-emerald-500/30' : 'bg-red-500/20 text-red-400 group-hover:bg-red-500/30'
                }`}>
                  <TrendIcon className="h-3 w-3 animate-pulse" />
                  <span className="text-xs font-semibold">{metric.change}</span>
                </div>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-700 mb-1" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>{metric.title}</h3>
                <p className="text-3xl font-bold text-gray-900 mb-1 transition-all duration-300" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>{metric.value}</p>
                <p className="text-xs font-medium text-gray-700 group-hover:text-gray-800 transition-colors" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>{metric.subtitle}</p>
              </div>
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </div>
          );
        })}
      </div>

      {/* Quick Stats Row */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {quickStats.map((stat, index) => {
          const IconComponent = stat.icon;
          return (
            <div 
              key={index} 
              className="bg-white border border-gray-200 p-4 rounded-xl group cursor-pointer hover:shadow-md transition-all duration-300"
              style={{
                animation: `fadeInUp 0.5s ease-out ${index * 0.05}s both`
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 12px 40px rgba(0, 0, 0, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '';
              }}
            >
              <div className="flex items-center gap-3">
                <div className="p-2 bg-white/5 rounded-lg group-hover:bg-white/10 transition-all duration-300 group-hover:scale-110">
                  <IconComponent className={`h-5 w-5 ${stat.color} transition-transform duration-300 group-hover:rotate-12`} />
                </div>
              <div>
                <p className="text-xs font-medium text-gray-700 group-hover:text-gray-800 transition-colors" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>{stat.label}</p>
                <p className="text-lg font-bold text-gray-900 group-hover:scale-105 transition-transform inline-block" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>{stat.value}</p>
              </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Revenue Chart & Top Services */}
        <div className="lg:col-span-2 space-y-6">
          {/* Revenue Chart */}
          <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-1" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>Revenue Overview</h3>
                <p className="text-sm text-gray-600" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>Monthly revenue trend</p>
              </div>
              <div className="flex items-center gap-2">
                <LineChart className="h-5 w-5 text-blue-400" />
                <BarChart3 className="h-5 w-5 text-gray-400" />
                <PieChart className="h-5 w-5 text-gray-400" />
              </div>
            </div>
            
            {/* Simple Bar Chart */}
            <div className="flex items-end justify-between h-48 gap-4">
              {revenueData.map((data, index) => (
                <div 
                  key={index} 
                  className="flex-1 flex flex-col items-center gap-2"
                  style={{
                    animation: `slideUp 0.6s ease-out ${index * 0.1}s both`
                  }}
                >
                  <div className="w-full luxury-glass flex flex-col justify-end rounded-t-xl overflow-hidden group hover:bg-white/10 transition-all duration-300 cursor-pointer relative">
                    <div 
                      className="w-full bg-gradient-to-t from-blue-500 to-purple-500 rounded-t-xl transition-all duration-500 group-hover:from-blue-400 group-hover:to-purple-400 relative overflow-hidden"
                      style={{ 
                        height: `${(data.revenue / 12450) * 100}%`,
                        boxShadow: '0 -4px 20px rgba(59, 130, 246, 0.3)'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'scaleY(1.05)';
                        e.currentTarget.style.boxShadow = '0 -8px 40px rgba(59, 130, 246, 0.5)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'scaleY(1)';
                        e.currentTarget.style.boxShadow = '0 -4px 20px rgba(59, 130, 246, 0.3)';
                      }}
                    >
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center pt-2">
                        <p className="text-xs font-bold text-white drop-shadow-lg">${(data.revenue / 1000).toFixed(1)}k</p>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                  </div>
                  <p className="text-xs text-gray-600 font-medium group-hover:text-gray-700 transition-colors" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>{data.month}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Top Services */}
          <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-1" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>Top Services</h3>
                <p className="text-sm text-gray-600" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>Best performing services this month</p>
              </div>
              <Button 
                variant="ghost" 
                size="sm" 
                className="text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                onClick={() => handleNavigate('services')}
                style={{ fontFamily: 'Gotham Bold, sans-serif' }}
              >
                View All
              </Button>
            </div>
            <div className="space-y-4">
              {topServices.map((service, index) => (
                <div 
                  key={index} 
                  className="bg-gray-50 border border-gray-200 p-4 rounded-xl group cursor-pointer hover:bg-gray-100 hover:shadow-md transition-all duration-300"
                  style={{
                    animation: `fadeInLeft 0.6s ease-out ${index * 0.1}s both`
                  }}
                  onClick={() => handleNavigate('services')}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateX(8px)';
                    e.currentTarget.style.boxShadow = '0 8px 32px rgba(16, 185, 129, 0.2)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateX(0)';
                    e.currentTarget.style.boxShadow = '';
                  }}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1 transition-colors" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>{service.name}</h4>
                      <p className="text-sm text-gray-600 transition-colors" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>{service.bookings} bookings</p>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-bold text-emerald-400 group-hover:scale-110 transition-transform inline-block">{service.revenue}</p>
                      <p className="text-xs text-emerald-400">{service.growth}</p>
                    </div>
                  </div>
                  <div className="luxury-progress relative overflow-hidden">
                    <div 
                      className="luxury-progress-bar relative"
                      style={{ 
                        width: `${service.percentage}%`,
                        transition: 'width 0.5s ease-out'
                      }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar - Recent Bookings & Activity */}
        <div className="space-y-6">
          {/* Recent Bookings */}
          <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-1" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>Today's Bookings</h3>
                <p className="text-sm text-gray-600" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>Latest appointments</p>
              </div>
              <Badge className="luxury-badge bg-blue-500/20 text-blue-400 border-blue-500/30">
                {recentBookings.length}
              </Badge>
            </div>
            <div className="space-y-3">
              {recentBookings.map((booking, index) => (
                <div 
                  key={booking.id} 
                  className="bg-gray-50 border border-gray-200 p-4 rounded-xl hover:bg-gray-100 hover:shadow-sm transition-all duration-300 cursor-pointer group"
                  style={{
                    animation: `fadeInRight 0.5s ease-out ${index * 0.1}s both`
                  }}
                  onClick={() => handleNavigate('bookings')}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateX(-4px)';
                    e.currentTarget.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.3)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateX(0)';
                    e.currentTarget.style.boxShadow = '';
                  }}
                >
                  <div className="flex items-start gap-3">
                    <Avatar className="h-10 w-10 luxury-avatar">
                      <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-500 text-white text-sm font-semibold">
                        {booking.client.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="text-sm font-bold text-gray-900 truncate" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>{booking.client}</h4>
                        <Badge className={`luxury-badge text-xs ${getStatusColor(booking.status)}`}>
                          {booking.status}
                        </Badge>
                      </div>
                      <p className="text-xs font-medium text-gray-700 mb-1">{booking.service}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1 text-xs font-medium text-gray-700">
                          <Clock className="h-3 w-3" />
                          {booking.time}
                        </div>
                        <span className="text-sm font-bold text-emerald-400">{booking.amount}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <Button 
              className="w-full mt-4 bg-red-600 text-white hover:bg-red-700"
              onClick={() => handleNavigate('bookings')}
              style={{ fontFamily: 'Gotham Bold, sans-serif' }}
            >
              View All Bookings
            </Button>
          </div>

          {/* Recent Activity */}
          <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-1" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>Recent Activity</h3>
                <p className="text-sm text-gray-600" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>Latest updates</p>
              </div>
              <Activity className="h-5 w-5 text-gray-600" />
            </div>
            <div className="space-y-3">
              {recentActivity.map((activity, index) => {
                const IconComponent = activity.icon;
                return (
                  <div 
                    key={activity.id} 
                    className="flex items-start gap-3 p-2 rounded-lg hover:bg-gray-50 transition-all duration-300 cursor-pointer group"
                    style={{
                      animation: `fadeIn 0.5s ease-out ${index * 0.1}s both`
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateX(4px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateX(0)';
                    }}
                  >
                    <div className={`p-2 rounded-lg bg-gray-100 ${activity.color} group-hover:scale-110 group-hover:bg-gray-200 transition-all duration-300`}>
                      <IconComponent className="h-4 w-4 group-hover:rotate-12 transition-transform duration-300" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-800 mb-1 group-hover:text-gray-900 transition-colors" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>{activity.message}</p>
                      <p className="text-xs font-medium text-gray-700 group-hover:text-gray-800 transition-colors" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>{activity.time}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardOverview;
