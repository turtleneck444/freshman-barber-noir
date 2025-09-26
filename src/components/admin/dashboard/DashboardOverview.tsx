import { 
  DollarSign, 
  Users, 
  Calendar, 
  ShoppingCart, 
  TrendingUp, 
  TrendingDown,
  Clock,
  Star,
  Zap,
  Target,
  Award,
  Activity
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const DashboardOverview = () => {
  const stats = [
    {
      title: 'Total Revenue',
      value: '$45,230',
      change: '+12.5%',
      changeType: 'positive',
      icon: DollarSign,
      color: 'text-green-400',
      bgColor: 'bg-green-500/20',
      borderColor: 'border-green-500/30'
    },
    {
      title: 'Active Clients',
      value: '1,247',
      change: '+8.2%',
      changeType: 'positive',
      icon: Users,
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/20',
      borderColor: 'border-blue-500/30'
    },
    {
      title: 'Bookings Today',
      value: '24',
      change: '+3',
      changeType: 'positive',
      icon: Calendar,
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/20',
      borderColor: 'border-purple-500/30'
    },
    {
      title: 'Products Sold',
      value: '156',
      change: '+23.1%',
      changeType: 'positive',
      icon: ShoppingCart,
      color: 'text-orange-400',
      bgColor: 'bg-orange-500/20',
      borderColor: 'border-orange-500/30'
    }
  ];

  const recentBookings = [
    {
      id: 1,
      client: 'Mike Johnson',
      service: 'Signature Cut',
      barber: 'Alex Chen',
      time: '2:30 PM',
      status: 'confirmed',
      price: '$45'
    },
    {
      id: 2,
      client: 'David Kim',
      service: 'Traditional Shave',
      barber: 'Sarah Wilson',
      time: '3:00 PM',
      status: 'in-progress',
      price: '$35'
    },
    {
      id: 3,
      client: 'Ryan Smith',
      service: 'Royal Package',
      barber: 'Alex Chen',
      time: '3:30 PM',
      status: 'waiting',
      price: '$80'
    },
    {
      id: 4,
      client: 'Tom Brown',
      service: 'Beard Grooming',
      barber: 'Sarah Wilson',
      time: '4:00 PM',
      status: 'confirmed',
      price: '$25'
    }
  ];

  const topServices = [
    { name: 'Signature Cut', bookings: 45, revenue: '$2,025', growth: '+15%' },
    { name: 'Traditional Shave', bookings: 32, revenue: '$1,120', growth: '+8%' },
    { name: 'Royal Package', bookings: 28, revenue: '$2,240', growth: '+22%' },
    { name: 'Beard Grooming', bookings: 24, revenue: '$600', growth: '+5%' }
  ];

  const staffPerformance = [
    { name: 'Alex Chen', clients: 45, rating: 4.9, revenue: '$2,340' },
    { name: 'Sarah Wilson', clients: 38, rating: 4.8, revenue: '$1,890' },
    { name: 'Mike Davis', clients: 32, rating: 4.7, revenue: '$1,560' }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed': return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'in-progress': return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      case 'waiting': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'completed': return 'bg-purple-500/20 text-purple-400 border-purple-500/30';
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-barber-red/20 to-barber-blue/20 p-6 rounded-2xl border border-barber-red/30">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-orbitron font-bold text-barbershop-white mb-2">
              Welcome to Barber Vault
            </h1>
            <p className="text-barbershop-gray-light">
              Your ultimate barbershop management command center
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <div className="text-right">
              <div className="text-2xl font-bold text-barber-red">Live</div>
              <div className="text-sm text-barbershop-gray-light">System Status</div>
            </div>
            <div className="w-4 h-4 bg-green-400 rounded-full animate-pulse" />
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const IconComponent = stat.icon;
          return (
            <Card key={index} className={`bg-gradient-to-br from-barbershop-gray-dark/50 to-barbershop-black/50 backdrop-blur-xl border ${stat.borderColor} hover:shadow-glow transition-all duration-300`}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-barbershop-gray-light mb-1">{stat.title}</p>
                    <p className="text-3xl font-bold text-barbershop-white">{stat.value}</p>
                    <div className="flex items-center space-x-1 mt-2">
                      {stat.changeType === 'positive' ? (
                        <TrendingUp className="h-4 w-4 text-green-400" />
                      ) : (
                        <TrendingDown className="h-4 w-4 text-red-400" />
                      )}
                      <span className={`text-sm ${stat.changeType === 'positive' ? 'text-green-400' : 'text-red-400'}`}>
                        {stat.change}
                      </span>
                    </div>
                  </div>
                  <div className={`p-3 rounded-xl ${stat.bgColor} border ${stat.borderColor}`}>
                    <IconComponent className={`h-6 w-6 ${stat.color}`} />
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Bookings */}
        <Card className="bg-gradient-to-br from-barbershop-gray-dark/50 to-barbershop-black/50 backdrop-blur-xl border border-barber-red/30">
          <CardHeader>
            <CardTitle className="flex items-center text-xl text-barbershop-white">
              <Clock className="h-6 w-6 text-barber-red mr-3" />
              Today's Bookings
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentBookings.map((booking) => (
                <div key={booking.id} className="flex items-center justify-between p-4 bg-gradient-to-r from-barbershop-black/50 to-barbershop-gray-dark/50 rounded-lg border border-barber-red/20">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-barber-red to-barber-blue rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">
                        {booking.client.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <p className="font-semibold text-barbershop-white">{booking.client}</p>
                      <p className="text-sm text-barbershop-gray-light">{booking.service} • {booking.barber}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <Badge className={`mb-2 ${getStatusColor(booking.status)}`}>
                      {booking.status.replace('-', ' ')}
                    </Badge>
                    <p className="text-sm text-barber-red font-bold">{booking.price}</p>
                    <p className="text-xs text-barbershop-gray-light">{booking.time}</p>
                  </div>
                </div>
              ))}
            </div>
            <Button className="w-full mt-4 bg-gradient-to-r from-barber-red to-barber-blue hover:from-barber-blue hover:to-barber-red text-white">
              View All Bookings
            </Button>
          </CardContent>
        </Card>

        {/* Top Services */}
        <Card className="bg-gradient-to-br from-barbershop-gray-dark/50 to-barbershop-black/50 backdrop-blur-xl border border-barber-blue/30">
          <CardHeader>
            <CardTitle className="flex items-center text-xl text-barbershop-white">
              <Target className="h-6 w-6 text-barber-blue mr-3" />
              Top Services
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {topServices.map((service, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-gradient-to-r from-barbershop-black/50 to-barbershop-gray-dark/50 rounded-lg border border-barber-blue/20">
                  <div>
                    <p className="font-semibold text-barbershop-white">{service.name}</p>
                    <p className="text-sm text-barbershop-gray-light">{service.bookings} bookings</p>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-bold text-barber-blue">{service.revenue}</p>
                    <p className="text-sm text-green-400">{service.growth}</p>
                  </div>
                </div>
              ))}
            </div>
            <Button className="w-full mt-4 bg-gradient-to-r from-barber-blue to-barber-red hover:from-barber-red hover:to-barber-blue text-white">
              Manage Services
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Staff Performance */}
      <Card className="bg-gradient-to-br from-barbershop-gray-dark/50 to-barbershop-black/50 backdrop-blur-xl border border-barber-red/30">
        <CardHeader>
          <CardTitle className="flex items-center text-xl text-barbershop-white">
            <Award className="h-6 w-6 text-barber-red mr-3" />
            Staff Performance
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {staffPerformance.map((staff, index) => (
              <div key={index} className="p-6 bg-gradient-to-br from-barbershop-black/50 to-barbershop-gray-dark/50 rounded-xl border border-barber-red/20">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-barber-red to-barber-blue rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">
                      {staff.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-barbershop-white">{staff.name}</p>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-barbershop-gray-light">{staff.rating}</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-barbershop-gray-light">Clients</span>
                    <span className="text-sm font-semibold text-barbershop-white">{staff.clients}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-barbershop-gray-light">Revenue</span>
                    <span className="text-sm font-semibold text-barber-red">{staff.revenue}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <Card className="bg-gradient-to-br from-barbershop-gray-dark/50 to-barbershop-black/50 backdrop-blur-xl border border-barber-blue/30">
        <CardHeader>
          <CardTitle className="flex items-center text-xl text-barbershop-white">
            <Zap className="h-6 w-6 text-barber-blue mr-3" />
            Quick Actions
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Button className="h-20 bg-gradient-to-br from-barber-red to-barber-blue hover:from-barber-blue hover:to-barber-red text-white flex flex-col space-y-2">
              <Calendar className="h-6 w-6" />
              <span className="text-sm">New Booking</span>
            </Button>
            <Button className="h-20 bg-gradient-to-br from-barber-blue to-purple-500 hover:from-purple-500 hover:to-barber-blue text-white flex flex-col space-y-2">
              <Users className="h-6 w-6" />
              <span className="text-sm">Add Client</span>
            </Button>
            <Button className="h-20 bg-gradient-to-br from-purple-500 to-pink-500 hover:from-pink-500 hover:to-purple-500 text-white flex flex-col space-y-2">
              <ShoppingCart className="h-6 w-6" />
              <span className="text-sm">New Product</span>
            </Button>
            <Button className="h-20 bg-gradient-to-br from-pink-500 to-red-500 hover:from-red-500 hover:to-pink-500 text-white flex flex-col space-y-2">
              <Activity className="h-6 w-6" />
              <span className="text-sm">View Reports</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DashboardOverview;
