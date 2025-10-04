import { useState } from 'react';
import { 
  Scissors,
  Plus,
  Edit,
  Trash2,
  Eye,
  Clock,
  DollarSign,
  TrendingUp,
  Search,
  Filter,
  Download,
  ToggleLeft,
  ToggleRight,
  Star,
  Activity,
  X,
  CheckCircle
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

const ServiceManagement = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [selectedService, setSelectedService] = useState<any>(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  // Services data
  const services = [
    {
      id: 1,
      name: 'Signature Haircut',
      category: 'Haircut',
      price: 45,
      duration: '45 min',
      description: 'Premium haircut with consultation, wash, and style',
      bookings: 145,
      revenue: 6525,
      rating: 4.9,
      active: true,
      features: ['Consultation', 'Premium Wash', 'Precision Cut', 'Style & Finish']
    },
    {
      id: 2,
      name: 'Haircut + Beard Trim',
      category: 'Combo',
      price: 60,
      duration: '60 min',
      description: 'Complete grooming package for hair and beard',
      bookings: 98,
      revenue: 5880,
      rating: 4.8,
      active: true,
      features: ['Haircut', 'Beard Sculpting', 'Hot Towel', 'Styling']
    },
    {
      id: 3,
      name: 'Royal Package',
      category: 'Premium',
      price: 85,
      duration: '90 min',
      description: 'Full service premium grooming experience',
      bookings: 42,
      revenue: 3570,
      rating: 5.0,
      active: true,
      features: ['Haircut', 'Traditional Shave', 'Beard Styling', 'Head Massage']
    },
    {
      id: 4,
      name: 'Traditional Shave',
      category: 'Shave',
      price: 35,
      duration: '30 min',
      description: 'Classic straight razor shave with hot towels',
      bookings: 67,
      revenue: 2345,
      rating: 4.7,
      active: true,
      features: ['Hot Towel Prep', 'Straight Razor', 'Aftershave', 'Face Massage']
    },
    {
      id: 5,
      name: 'Beard Trim & Style',
      category: 'Beard',
      price: 30,
      duration: '25 min',
      description: 'Professional beard trimming and shaping',
      bookings: 89,
      revenue: 2670,
      rating: 4.6,
      active: true,
      features: ['Beard Consultation', 'Precision Trim', 'Beard Oil', 'Styling Tips']
    },
    {
      id: 6,
      name: "Kids' Haircut",
      category: 'Haircut',
      price: 35,
      duration: '30 min',
      description: 'Haircut for children 12 and under',
      bookings: 56,
      revenue: 1960,
      rating: 4.5,
      active: true,
      features: ['Kid-Friendly', 'Quick Service', 'Patient Approach', 'Fun Experience']
    },
    {
      id: 7,
      name: 'Premium Hair Wash',
      category: 'Add-on',
      price: 20,
      duration: '15 min',
      description: 'Luxurious hair washing and conditioning',
      bookings: 34,
      revenue: 680,
      rating: 4.8,
      active: true,
      features: ['Premium Shampoo', 'Deep Conditioning', 'Scalp Massage', 'Blow Dry']
    },
    {
      id: 8,
      name: 'Hair Coloring',
      category: 'Special',
      price: 75,
      duration: '120 min',
      description: 'Professional hair coloring service',
      bookings: 12,
      revenue: 900,
      rating: 4.9,
      active: false,
      features: ['Color Consultation', 'Premium Products', 'Application', 'Styling']
    }
  ];

  const filteredServices = services.filter(service => {
    const matchesSearch = service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = categoryFilter === 'all' || service.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  const stats = [
    { label: 'Total Services', value: services.length, icon: Scissors, color: 'text-blue-400', change: '+2 this month', bgColor: 'bg-blue-50', borderColor: 'border-blue-200' },
    { label: 'Active Services', value: services.filter(s => s.active).length, icon: Activity, color: 'text-emerald-400', change: '87.5% active', bgColor: 'bg-emerald-50', borderColor: 'border-emerald-200' },
    { label: 'Total Revenue', value: `$${services.reduce((sum, s) => sum + s.revenue, 0).toLocaleString()}`, icon: DollarSign, color: 'text-purple-400', change: '+15% vs last month', bgColor: 'bg-purple-50', borderColor: 'border-purple-200' },
    { label: 'Avg. Rating', value: (services.reduce((sum, s) => sum + s.rating, 0) / services.length).toFixed(1), icon: Star, color: 'text-yellow-400', change: 'Excellent', bgColor: 'bg-yellow-50', borderColor: 'border-yellow-200' }
  ];

  const categories = ['all', ...Array.from(new Set(services.map(s => s.category)))];

  const getCategoryColor = (category: string) => {
    const colors: any = {
      'Haircut': 'bg-blue-500/20 text-blue-600 border-blue-500/30',
      'Combo': 'bg-purple-500/20 text-purple-600 border-purple-500/30',
      'Premium': 'bg-yellow-500/20 text-yellow-600 border-yellow-500/30',
      'Shave': 'bg-emerald-500/20 text-emerald-600 border-emerald-500/30',
      'Beard': 'bg-orange-500/20 text-orange-600 border-orange-500/30',
      'Add-on': 'bg-cyan-500/20 text-cyan-600 border-cyan-500/30',
      'Special': 'bg-pink-500/20 text-pink-600 border-pink-500/30'
    };
    return colors[category] || 'bg-gray-500/20 text-gray-600 border-gray-500/30';
  };

  const handleViewService = (service: any) => {
    setSelectedService(service);
    setDialogOpen(true);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>Service Management</h1>
          <p className="text-gray-600" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>Manage your service catalog and pricing</p>
        </div>
        <Button className="bg-red-600 text-white hover:bg-red-700 shadow-md" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>
          <Plus className="h-4 w-4 mr-2" />
          Add Service
        </Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const IconComponent = stat.icon;
          return (
            <div key={index} className={`bg-white border ${stat.borderColor} rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 group cursor-pointer`}>
              <div className="flex items-center gap-3 mb-3">
                <div className={`p-3 ${stat.bgColor} rounded-xl group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className={`h-6 w-6 ${stat.color}`} />
                </div>
                <div>
                  <p className="text-sm text-gray-600 font-medium" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>{stat.label}</p>
                  <p className="text-2xl font-bold text-gray-900" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>{stat.value}</p>
                </div>
              </div>
              <p className="text-xs text-gray-500" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>{stat.change}</p>
            </div>
          );
        })}
      </div>

      {/* Filters */}
      <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <Input
              placeholder="Search services by name or description..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 h-12 text-gray-900 bg-gray-50 border-gray-200 focus:border-red-500 focus:ring-red-500/20"
              style={{ fontFamily: 'Gotham Bold, sans-serif' }}
            />
          </div>
          <Select value={categoryFilter} onValueChange={setCategoryFilter}>
            <SelectTrigger className="w-full sm:w-[200px] h-12 bg-gray-50 border-gray-200 text-gray-900" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>
              <SelectValue placeholder="Filter by category" />
            </SelectTrigger>
            <SelectContent className="bg-white border-gray-200">
              {categories.map(cat => (
                <SelectItem key={cat} value={cat} className="text-gray-900 capitalize" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>
                  {cat === 'all' ? 'All Categories' : cat}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <div className="flex gap-2">
            <Button variant="outline" size="lg" className="border-gray-300 text-gray-700 hover:bg-gray-100" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>
              <Filter className="h-4 w-4 mr-2" />
              More Filters
            </Button>
            <Button variant="outline" size="lg" className="border-gray-300 text-gray-700 hover:bg-gray-100" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>
              <Download className="h-4 w-4 mr-2" />
              Export
            </Button>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredServices.map((service, index) => (
          <div 
            key={service.id}
            className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer"
            style={{
              animation: `fadeInUp 0.5s ease-out ${index * 0.1}s both`
            }}
            onClick={() => handleViewService(service)}
          >
            {/* Header */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>{service.name}</h3>
                <Badge className={`${getCategoryColor(service.category)} text-xs font-semibold px-3 py-1`}>
                  {service.category}
                </Badge>
              </div>
              {service.active ? (
                <ToggleRight className="h-7 w-7 text-emerald-500" />
              ) : (
                <ToggleLeft className="h-7 w-7 text-gray-400" />
              )}
            </div>

            {/* Description */}
            <p className="text-sm text-gray-600 mb-4 line-clamp-2" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>{service.description}</p>

            {/* Price & Duration */}
            <div className="grid grid-cols-2 gap-3 mb-4">
              <div className="bg-gradient-to-br from-emerald-50 to-white p-4 rounded-xl border border-emerald-200 group-hover:border-emerald-300 transition-colors">
                <div className="flex items-center gap-2 mb-1">
                  <DollarSign className="h-4 w-4 text-emerald-600" />
                  <span className="text-xs text-gray-600 font-medium" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>Price</span>
                </div>
                <p className="text-2xl font-bold text-gray-900" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>${service.price}</p>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-white p-4 rounded-xl border border-blue-200 group-hover:border-blue-300 transition-colors">
                <div className="flex items-center gap-2 mb-1">
                  <Clock className="h-4 w-4 text-blue-600" />
                  <span className="text-xs text-gray-600 font-medium" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>Duration</span>
                </div>
                <p className="text-lg font-bold text-gray-900" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>{service.duration}</p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-3 mb-4 py-3 border-t border-gray-200">
              <div className="text-center">
                <p className="text-xl font-bold text-gray-900" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>{service.bookings}</p>
                <p className="text-xs text-gray-600" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>Bookings</p>
              </div>
              <div className="text-center">
                <p className="text-xl font-bold text-emerald-600" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>${service.revenue}</p>
                <p className="text-xs text-gray-600" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>Revenue</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center gap-1">
                  <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                  <p className="text-xl font-bold text-gray-900" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>{service.rating}</p>
                </div>
                <p className="text-xs text-gray-600" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>Rating</p>
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-2">
              <Button 
                variant="outline" 
                size="sm" 
                className="flex-1 border-gray-300 text-gray-700 hover:bg-gray-100 hover:border-gray-400"
                onClick={(e) => {
                  e.stopPropagation();
                  handleViewService(service);
                }}
                style={{ fontFamily: 'Gotham Bold, sans-serif' }}
              >
                <Eye className="h-4 w-4 mr-2" />
                View
              </Button>
              <Button 
                variant="outline" 
                size="sm" 
                className="flex-1 bg-red-50 border-red-200 text-red-600 hover:bg-red-100 hover:border-red-300"
                onClick={(e) => {
                  e.stopPropagation();
                  console.log('Edit service:', service.id);
                }}
                style={{ fontFamily: 'Gotham Bold, sans-serif' }}
              >
                <Edit className="h-4 w-4 mr-2" />
                Edit
              </Button>
            </div>
          </div>
        ))}
      </div>

      {/* Service Details Dialog */}
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-white">
          {selectedService && (
            <div className="space-y-6">
              <DialogHeader>
                <DialogTitle className="text-3xl font-bold text-gray-900" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>
                  {selectedService.name}
                </DialogTitle>
              </DialogHeader>

              {/* Header Info */}
              <div className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl border border-gray-200">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <Badge className={`${getCategoryColor(selectedService.category)} text-sm font-semibold px-4 py-2`}>
                      {selectedService.category}
                    </Badge>
                    <Badge className={`${
                      selectedService.active 
                        ? 'bg-emerald-500/20 text-emerald-600 border-emerald-500/30' 
                        : 'bg-red-500/20 text-red-600 border-red-500/30'
                    } text-sm font-semibold px-4 py-2`}>
                      {selectedService.active ? 'Active' : 'Inactive'}
                    </Badge>
                  </div>
                </div>
                <p className="text-gray-700 text-lg" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>{selectedService.description}</p>
              </div>

              {/* Pricing & Duration */}
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-emerald-50 to-white p-8 rounded-2xl border-2 border-emerald-200 shadow-sm">
                  <p className="text-sm text-gray-600 mb-2 font-semibold" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>Price</p>
                  <p className="text-5xl font-bold text-emerald-600" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>${selectedService.price}</p>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl border-2 border-blue-200 shadow-sm">
                  <p className="text-sm text-gray-600 mb-2 font-semibold" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>Duration</p>
                  <p className="text-5xl font-bold text-blue-600" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>{selectedService.duration}</p>
                </div>
              </div>

              {/* Performance Stats */}
              <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-200 shadow-sm">
                <h4 className="text-xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>Performance Metrics</h4>
                <div className="grid grid-cols-3 gap-6">
                  <div className="text-center p-4 bg-white rounded-xl border border-gray-200">
                    <p className="text-sm text-gray-600 mb-2 font-semibold" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>Total Bookings</p>
                    <p className="text-4xl font-bold text-gray-900" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>{selectedService.bookings}</p>
                  </div>
                  <div className="text-center p-4 bg-white rounded-xl border border-gray-200">
                    <p className="text-sm text-gray-600 mb-2 font-semibold" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>Total Revenue</p>
                    <p className="text-4xl font-bold text-emerald-600" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>${selectedService.revenue}</p>
                  </div>
                  <div className="text-center p-4 bg-white rounded-xl border border-gray-200">
                    <p className="text-sm text-gray-600 mb-2 font-semibold" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>Avg. Rating</p>
                    <div className="flex items-center justify-center gap-2">
                      <Star className="h-8 w-8 text-yellow-500 fill-yellow-500" />
                      <p className="text-4xl font-bold text-gray-900" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>{selectedService.rating}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Features */}
              <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-200 shadow-sm">
                <h4 className="text-xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>Service Includes</h4>
                <div className="grid grid-cols-2 gap-4">
                  {selectedService.features.map((feature: string, index: number) => (
                    <div key={index} className="flex items-center gap-3 text-gray-700 p-3 bg-white rounded-lg border border-gray-200">
                      <CheckCircle className="h-5 w-5 text-emerald-500 flex-shrink-0" />
                      <span className="font-medium" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-3 pt-4">
                <Button className="flex-1 bg-red-600 text-white hover:bg-red-700 h-12 text-base shadow-md" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>
                  <Edit className="h-5 w-5 mr-2" />
                  Edit Service
                </Button>
                <Button className="flex-1 bg-emerald-600 text-white hover:bg-emerald-700 h-12 text-base shadow-md" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>
                  {selectedService.active ? <ToggleLeft className="h-5 w-5 mr-2" /> : <ToggleRight className="h-5 w-5 mr-2" />}
                  {selectedService.active ? 'Deactivate' : 'Activate'}
                </Button>
                <Button variant="destructive" className="flex-1 h-12 text-base shadow-md" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>
                  <Trash2 className="h-5 w-5 mr-2" />
                  Delete
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ServiceManagement;
