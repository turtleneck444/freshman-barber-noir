import { useState } from 'react';
import { 
  Scissors, 
  Plus, 
  Search, 
  Filter, 
  MoreVertical,
  Edit,
  Trash2,
  Eye,
  Clock,
  DollarSign,
  Star,
  Users,
  Zap,
  Crown
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const ServiceManagement = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');

  const services = [
    {
      id: 1,
      name: 'Signature Cut',
      category: 'Haircuts',
      price: 45,
      duration: 45,
      status: 'active',
      popularity: 95,
      bookings: 156,
      revenue: 7020,
      description: 'Precision cuts tailored to your style. Classic to contemporary, we\'ve got you covered.',
      features: ['Consultation', 'Wash & Style', 'Hot Towel Finish'],
      icon: Scissors,
      color: 'text-red-400'
    },
    {
      id: 2,
      name: 'Traditional Shave',
      category: 'Shaving',
      price: 35,
      duration: 30,
      status: 'active',
      popularity: 88,
      bookings: 98,
      revenue: 3430,
      description: 'Experience the art of traditional barbering with our hot towel straight razor shave.',
      features: ['Hot Towel Prep', 'Straight Razor', 'Aftershave Treatment'],
      icon: Crown,
      color: 'text-blue-400'
    },
    {
      id: 3,
      name: 'Royal Package',
      category: 'Premium',
      price: 80,
      duration: 90,
      status: 'active',
      popularity: 92,
      bookings: 67,
      revenue: 5360,
      description: 'The ultimate barbershop experience. Cut, shave, styling, and premium treatment.',
      features: ['Premium Cut', 'Traditional Shave', 'Beard Styling', 'Head Massage'],
      icon: Crown,
      color: 'text-purple-400'
    },
    {
      id: 4,
      name: 'Beard Grooming',
      category: 'Grooming',
      price: 25,
      duration: 30,
      status: 'active',
      popularity: 76,
      bookings: 89,
      revenue: 2225,
      description: 'Professional beard trimming and styling to keep you looking sharp and refined.',
      features: ['Trim & Shape', 'Beard Oil', 'Style Consultation'],
      icon: Zap,
      color: 'text-green-400'
    },
    {
      id: 5,
      name: 'Father & Son',
      category: 'Packages',
      price: 70,
      duration: 60,
      status: 'active',
      popularity: 82,
      bookings: 45,
      revenue: 3150,
      description: 'Create memories together with our special father and son package.',
      features: ['2 Premium Cuts', 'Father & Son Experience', 'Special Memories'],
      icon: Users,
      color: 'text-orange-400'
    },
    {
      id: 6,
      name: 'VIP Membership',
      category: 'Membership',
      price: 199,
      duration: 0,
      status: 'active',
      popularity: 68,
      bookings: 23,
      revenue: 4577,
      description: 'Unlimited premium services with priority booking and exclusive perks.',
      features: ['Unlimited Services', 'Priority Booking', 'Exclusive Products', 'Special Events'],
      icon: Star,
      color: 'text-yellow-400'
    }
  ];

  const categories = ['all', 'Haircuts', 'Shaving', 'Grooming', 'Premium', 'Packages', 'Membership'];
  const statuses = ['all', 'active', 'inactive', 'seasonal'];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'inactive': return 'bg-red-500/20 text-red-400 border-red-500/30';
      case 'seasonal': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  const filteredServices = services.filter(service => {
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter === 'all' || service.category === categoryFilter;
    const matchesStatus = statusFilter === 'all' || service.status === statusFilter;
    return matchesSearch && matchesCategory && matchesStatus;
  });

  const totalRevenue = services.reduce((sum, service) => sum + service.revenue, 0);
  const totalBookings = services.reduce((sum, service) => sum + service.bookings, 0);
  const averagePrice = services.reduce((sum, service) => sum + service.price, 0) / services.length;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
        <div>
          <h1 className="text-3xl font-orbitron font-bold text-barbershop-white">Service Management</h1>
          <p className="text-barbershop-gray-light">Manage your barbering services and pricing</p>
        </div>
        <Button className="bg-gradient-to-r from-barber-red to-barber-blue hover:from-barber-blue hover:to-barber-red text-white">
          <Plus className="h-5 w-5 mr-2" />
          Add Service
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="bg-gradient-to-br from-barbershop-gray-dark/50 to-barbershop-black/50 backdrop-blur-xl border border-green-500/30">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-barbershop-gray-light mb-1">Total Revenue</p>
                <p className="text-2xl font-bold text-green-400">${totalRevenue.toLocaleString()}</p>
              </div>
              <DollarSign className="h-8 w-8 text-green-400" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-barbershop-gray-dark/50 to-barbershop-black/50 backdrop-blur-xl border border-blue-500/30">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-barbershop-gray-light mb-1">Total Bookings</p>
                <p className="text-2xl font-bold text-blue-400">{totalBookings}</p>
              </div>
              <Users className="h-8 w-8 text-blue-400" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-barbershop-gray-dark/50 to-barbershop-black/50 backdrop-blur-xl border border-purple-500/30">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-barbershop-gray-light mb-1">Average Price</p>
                <p className="text-2xl font-bold text-purple-400">${averagePrice.toFixed(0)}</p>
              </div>
              <Star className="h-8 w-8 text-purple-400" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-barbershop-gray-dark/50 to-barbershop-black/50 backdrop-blur-xl border border-orange-500/30">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-barbershop-gray-light mb-1">Active Services</p>
                <p className="text-2xl font-bold text-orange-400">{services.filter(s => s.status === 'active').length}</p>
              </div>
              <Zap className="h-8 w-8 text-orange-400" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <Card className="bg-gradient-to-br from-barbershop-gray-dark/50 to-barbershop-black/50 backdrop-blur-xl border border-barber-red/30">
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-barbershop-gray" />
              <Input
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-barbershop-black/50 border-barber-red/30 text-barbershop-white placeholder-barbershop-gray focus:border-barber-red"
              />
            </div>
            
            <Select value={categoryFilter} onValueChange={setCategoryFilter}>
              <SelectTrigger className="bg-barbershop-black/50 border-barber-red/30 text-barbershop-white">
                <SelectValue placeholder="Filter by category" />
              </SelectTrigger>
              <SelectContent className="bg-barbershop-black border-barber-red/30">
                {categories.map(category => (
                  <SelectItem key={category} value={category} className="text-barbershop-white hover:bg-barber-red/20">
                    {category === 'all' ? 'All Categories' : category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="bg-barbershop-black/50 border-barber-red/30 text-barbershop-white">
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent className="bg-barbershop-black border-barber-red/30">
                {statuses.map(status => (
                  <SelectItem key={status} value={status} className="text-barbershop-white hover:bg-barber-red/20">
                    {status === 'all' ? 'All Status' : status.charAt(0).toUpperCase() + status.slice(1)}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Button variant="outline" className="border-barber-red/30 text-barbershop-white hover:border-barber-red hover:bg-barber-red/20">
              <Filter className="h-4 w-4 mr-2" />
              More Filters
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredServices.map((service) => {
          const IconComponent = service.icon;
          return (
            <Card key={service.id} className="bg-gradient-to-br from-barbershop-gray-dark/50 to-barbershop-black/50 backdrop-blur-xl border border-barber-red/30 hover:border-barber-red/60 transition-all duration-300 hover:shadow-glow">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className={`p-3 rounded-xl bg-gradient-to-br from-barber-red/20 to-barber-blue/20 border border-barber-red/30`}>
                      <IconComponent className={`h-6 w-6 ${service.color}`} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-barbershop-white">{service.name}</h3>
                      <p className="text-sm text-barbershop-gray-light">{service.category}</p>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm" className="text-barbershop-gray hover:text-barber-red">
                    <MoreVertical className="h-4 w-4" />
                  </Button>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                {/* Service Info */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-barbershop-gray-light">Price</span>
                    <span className="text-xl font-bold text-barber-red">${service.price}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-barbershop-gray-light">Duration</span>
                    <span className="text-sm text-barbershop-white flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {service.duration} min
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-barbershop-gray-light">Popularity</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-16 h-2 bg-barbershop-black rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-barber-red to-barber-blue rounded-full"
                          style={{ width: `${service.popularity}%` }}
                        />
                      </div>
                      <span className="text-sm text-barbershop-white">{service.popularity}%</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-barbershop-gray-light">Bookings</span>
                    <span className="text-sm text-barbershop-white">{service.bookings}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-barbershop-gray-light">Revenue</span>
                    <span className="text-sm font-bold text-barber-red">${service.revenue.toLocaleString()}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-barbershop-gray-light line-clamp-2">{service.description}</p>

                {/* Features */}
                <div className="space-y-1">
                  <p className="text-xs text-barbershop-gray-light font-semibold">Features:</p>
                  <div className="flex flex-wrap gap-1">
                    {service.features.slice(0, 3).map((feature, index) => (
                      <Badge key={index} className="bg-barbershop-black/50 text-barbershop-gray-light border-barber-red/20 text-xs">
                        {feature}
                      </Badge>
                    ))}
                    {service.features.length > 3 && (
                      <Badge className="bg-barbershop-black/50 text-barbershop-gray-light border-barber-red/20 text-xs">
                        +{service.features.length - 3} more
                      </Badge>
                    )}
                  </div>
                </div>

                {/* Status */}
                <div className="flex items-center justify-between">
                  <Badge className={getStatusColor(service.status)}>
                    {service.status}
                  </Badge>
                </div>

                {/* Actions */}
                <div className="flex space-x-2">
                  <Button size="sm" variant="outline" className="flex-1 border-barber-red/30 text-barbershop-white hover:border-barber-red hover:bg-barber-red/20">
                    <Eye className="h-4 w-4 mr-1" />
                    View
                  </Button>
                  <Button size="sm" variant="outline" className="flex-1 border-barber-blue/30 text-barbershop-white hover:border-barber-blue hover:bg-barber-blue/20">
                    <Edit className="h-4 w-4 mr-1" />
                    Edit
                  </Button>
                  <Button size="sm" variant="outline" className="border-red-500/30 text-red-400 hover:border-red-500 hover:bg-red-500/20">
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Quick Actions */}
      <Card className="bg-gradient-to-br from-barbershop-gray-dark/50 to-barbershop-black/50 backdrop-blur-xl border border-barber-blue/30">
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Button className="h-16 bg-gradient-to-br from-barber-red to-barber-blue hover:from-barber-blue hover:to-barber-red text-white flex flex-col space-y-2">
              <Scissors className="h-6 w-6" />
              <span className="text-sm">Bulk Pricing</span>
            </Button>
            <Button className="h-16 bg-gradient-to-br from-barber-blue to-purple-500 hover:from-purple-500 hover:to-barber-blue text-white flex flex-col space-y-2">
              <Clock className="h-6 w-6" />
              <span className="text-sm">Time Slots</span>
            </Button>
            <Button className="h-16 bg-gradient-to-br from-purple-500 to-pink-500 hover:from-pink-500 hover:to-purple-500 text-white flex flex-col space-y-2">
              <Star className="h-6 w-6" />
              <span className="text-sm">Popularity Report</span>
            </Button>
            <Button className="h-16 bg-gradient-to-br from-pink-500 to-red-500 hover:from-pink-500 hover:to-red-500 text-white flex flex-col space-y-2">
              <DollarSign className="h-6 w-6" />
              <span className="text-sm">Revenue Analysis</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ServiceManagement;
