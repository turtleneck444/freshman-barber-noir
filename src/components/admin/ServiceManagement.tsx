import { useState, useEffect } from 'react';
import { 
  Scissors, 
  Search, 
  Filter, 
  Plus, 
  Edit, 
  Trash2, 
  Eye, 
  Clock, 
  DollarSign, 
  Star,
  MoreHorizontal,
  Download,
  RefreshCw,
  Settings,
  Users,
  TrendingUp,
  TrendingDown
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';

const ServiceManagement = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const services = [
    {
      id: 'SV001',
      name: 'Haircut',
      description: 'Professional haircut with styling',
      category: 'Hair',
      duration: 30,
      price: 45,
      status: 'active',
      popularity: 95,
      totalBookings: 156,
      revenue: 7020,
      image: '/api/placeholder/300/200',
      features: ['Professional styling', 'Hair wash included', 'Consultation'],
      barbers: ['Mike Johnson', 'Lisa Brown', 'Tom Davis'],
      requirements: 'None',
      notes: 'Most popular service'
    },
    {
      id: 'SV002',
      name: 'Beard Trim',
      description: 'Precise beard trimming and shaping',
      category: 'Beard',
      duration: 20,
      price: 25,
      status: 'active',
      popularity: 78,
      totalBookings: 89,
      revenue: 2225,
      image: '/api/placeholder/300/200',
      features: ['Precise trimming', 'Beard oil', 'Styling'],
      barbers: ['Mike Johnson', 'Tom Davis'],
      requirements: 'Beard growth',
      notes: 'Quick service, high demand'
    },
    {
      id: 'SV003',
      name: 'Hair Styling',
      description: 'Advanced hair styling and treatments',
      category: 'Hair',
      duration: 60,
      price: 85,
      status: 'active',
      popularity: 65,
      totalBookings: 42,
      revenue: 3570,
      image: '/api/placeholder/300/200',
      features: ['Advanced styling', 'Hair treatments', 'Consultation'],
      barbers: ['Lisa Brown'],
      requirements: 'Hair length 2+ inches',
      notes: 'Premium service'
    },
    {
      id: 'SV004',
      name: 'Full Service',
      description: 'Complete hair and beard service',
      category: 'Complete',
      duration: 90,
      price: 120,
      status: 'active',
      popularity: 82,
      totalBookings: 38,
      revenue: 4560,
      image: '/api/placeholder/300/200',
      features: ['Haircut', 'Beard trim', 'Hair wash', 'Styling'],
      barbers: ['Mike Johnson', 'Lisa Brown', 'Tom Davis'],
      requirements: 'None',
      notes: 'Comprehensive service package'
    },
    {
      id: 'SV005',
      name: 'Hair Wash',
      description: 'Professional hair washing and conditioning',
      category: 'Hair',
      duration: 15,
      price: 20,
      status: 'active',
      popularity: 45,
      totalBookings: 67,
      revenue: 1340,
      image: '/api/placeholder/300/200',
      features: ['Professional wash', 'Conditioning', 'Blow dry'],
      barbers: ['Lisa Brown', 'Tom Davis'],
      requirements: 'None',
      notes: 'Add-on service'
    },
    {
      id: 'SV006',
      name: 'Hair Coloring',
      description: 'Professional hair coloring services',
      category: 'Hair',
      duration: 120,
      price: 150,
      status: 'inactive',
      popularity: 0,
      totalBookings: 0,
      revenue: 0,
      image: '/api/placeholder/300/200',
      features: ['Color consultation', 'Professional coloring', 'Aftercare'],
      barbers: ['Lisa Brown'],
      requirements: 'Hair consultation required',
      notes: 'Currently unavailable - training needed'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Categories', count: services.length },
    { id: 'Hair', name: 'Hair Services', count: services.filter(s => s.category === 'Hair').length },
    { id: 'Beard', name: 'Beard Services', count: services.filter(s => s.category === 'Beard').length },
    { id: 'Complete', name: 'Complete Services', count: services.filter(s => s.category === 'Complete').length }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'inactive': return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
      case 'maintenance': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'active': return 'Active';
      case 'inactive': return 'Inactive';
      case 'maintenance': return 'Maintenance';
      default: return 'Unknown';
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Hair': return 'text-blue-500 bg-blue-500/10';
      case 'Beard': return 'text-orange-500 bg-orange-500/10';
      case 'Complete': return 'text-purple-500 bg-purple-500/10';
      default: return 'text-gray-500 bg-gray-500/10';
    }
  };

  const filteredServices = services.filter(service => {
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter === 'all' || service.category === categoryFilter;
    const matchesStatus = statusFilter === 'all' || service.status === statusFilter;
    return matchesSearch && matchesCategory && matchesStatus;
  });

  const handleSelectService = (serviceId: string) => {
    setSelectedServices(prev => 
      prev.includes(serviceId) 
        ? prev.filter(id => id !== serviceId)
        : [...prev, serviceId]
    );
  };

  const handleSelectAll = () => {
    setSelectedServices(
      selectedServices.length === filteredServices.length 
        ? [] 
        : filteredServices.map(service => service.id)
    );
  };

  const totalRevenue = services.reduce((sum, service) => sum + service.revenue, 0);
  const totalBookings = services.reduce((sum, service) => sum + service.totalBookings, 0);
  const averagePrice = services.reduce((sum, service) => sum + service.price, 0) / services.length;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white">Service Management</h1>
          <p className="text-slate-400">Manage your service catalog, pricing, and availability.</p>
        </div>
        <div className="flex items-center space-x-3">
          <Button className="bg-orange-600 hover:bg-orange-700">
            <Plus className="h-4 w-4 mr-2" />
            New Service
          </Button>
          <Button variant="outline" className="border-slate-700 text-slate-300 hover:bg-slate-800">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="bg-slate-800/50 border-slate-700/50">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-400">Total Services</p>
                <p className="text-2xl font-bold text-white">{services.length}</p>
                <p className="text-xs text-green-400">+2 this month</p>
              </div>
              <Scissors className="h-8 w-8 text-orange-500" />
            </div>
          </CardContent>
        </Card>
        <Card className="bg-slate-800/50 border-slate-700/50">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-400">Total Bookings</p>
                <p className="text-2xl font-bold text-white">{totalBookings}</p>
                <p className="text-xs text-green-400">+15% this month</p>
              </div>
              <Users className="h-8 w-8 text-blue-500" />
            </div>
          </CardContent>
        </Card>
        <Card className="bg-slate-800/50 border-slate-700/50">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-400">Total Revenue</p>
                <p className="text-2xl font-bold text-white">${totalRevenue.toLocaleString()}</p>
                <p className="text-xs text-green-400">+22% this month</p>
              </div>
              <DollarSign className="h-8 w-8 text-green-500" />
            </div>
          </CardContent>
        </Card>
        <Card className="bg-slate-800/50 border-slate-700/50">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-400">Average Price</p>
                <p className="text-2xl font-bold text-white">${averagePrice.toFixed(0)}</p>
                <p className="text-xs text-blue-400">+5% this month</p>
              </div>
              <TrendingUp className="h-8 w-8 text-purple-500" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filters and Search */}
      <Card className="bg-slate-800/50 border-slate-700/50">
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
                <Input
                  placeholder="Search services by name or description..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 bg-slate-700/50 border-slate-600 text-white placeholder-slate-400"
                />
              </div>
            </div>
            <div className="flex gap-3">
              <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                <SelectTrigger className="w-40 bg-slate-700/50 border-slate-600 text-white">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category.id} value={category.id}>
                      {category.name} ({category.count})
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-40 bg-slate-700/50 border-slate-600 text-white">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="inactive">Inactive</SelectItem>
                  <SelectItem value="maintenance">Maintenance</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline" className="border-slate-700 text-slate-300 hover:bg-slate-800">
                <Filter className="h-4 w-4 mr-2" />
                More Filters
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Services Grid/List */}
      <Card className="bg-slate-800/50 border-slate-700/50">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-white">
              Services ({filteredServices.length})
            </CardTitle>
            <div className="flex items-center space-x-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={handleSelectAll}
                className="text-slate-400 hover:text-white"
              >
                {selectedServices.length === filteredServices.length ? 'Deselect All' : 'Select All'}
              </Button>
              {selectedServices.length > 0 && (
                <Button variant="outline" size="sm" className="border-red-500/30 text-red-400 hover:bg-red-500/10">
                  <Trash2 className="h-4 w-4 mr-2" />
                  Delete ({selectedServices.length})
                </Button>
              )}
            </div>
          </div>
        </CardHeader>
        <CardContent>
          {viewMode === 'grid' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredServices.map((service) => {
                const isSelected = selectedServices.includes(service.id);
                
                return (
                  <div
                    key={service.id}
                    className={`p-6 rounded-lg border transition-all duration-200 ${
                      isSelected 
                        ? 'bg-blue-500/10 border-blue-500/30' 
                        : 'bg-slate-700/30 border-slate-600/30 hover:bg-slate-700/50'
                    }`}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <input
                          type="checkbox"
                          checked={isSelected}
                          onChange={() => handleSelectService(service.id)}
                          className="w-4 h-4 text-blue-600 bg-slate-700 border-slate-600 rounded focus:ring-blue-500"
                        />
                        <div className="w-16 h-16 bg-slate-600 rounded-lg flex items-center justify-center">
                          <Scissors className="h-8 w-8 text-slate-400" />
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge className={`${getStatusColor(service.status)} text-xs`}>
                          {getStatusText(service.status)}
                        </Badge>
                        <Button variant="ghost" size="sm" className="text-slate-400 hover:text-white">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <div>
                        <h3 className="font-medium text-white">{service.name}</h3>
                        <p className="text-sm text-slate-400">{service.description}</p>
                        <Badge className={`${getCategoryColor(service.category)} text-xs mt-2`}>
                          {service.category}
                        </Badge>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div className="flex items-center space-x-2 text-sm text-slate-400">
                          <Clock className="h-4 w-4" />
                          <span>{service.duration} min</span>
                        </div>
                        <div className="flex items-center space-x-2 text-sm text-slate-400">
                          <DollarSign className="h-4 w-4" />
                          <span>${service.price}</span>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-slate-400">Popularity</span>
                          <span className="text-white font-medium">{service.popularity}%</span>
                        </div>
                        <Progress value={service.popularity} className="h-2" />
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4 pt-3 border-t border-slate-600/30">
                        <div>
                          <p className="text-xs text-slate-500">Total Bookings</p>
                          <p className="text-sm font-medium text-white">{service.totalBookings}</p>
                        </div>
                        <div>
                          <p className="text-xs text-slate-500">Revenue</p>
                          <p className="text-sm font-medium text-white">${service.revenue}</p>
                        </div>
                      </div>
                      
                      <div className="text-xs text-slate-500">
                        <p>Barbers: {service.barbers.join(', ')}</p>
                        <p>Requirements: {service.requirements}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-2 mt-4 pt-4 border-t border-slate-600/30">
                      <Button variant="ghost" size="sm" className="text-slate-400 hover:text-white">
                        <Eye className="h-4 w-4 mr-1" />
                        View
                      </Button>
                      <Button variant="ghost" size="sm" className="text-slate-400 hover:text-white">
                        <Edit className="h-4 w-4 mr-1" />
                        Edit
                      </Button>
                      <Button variant="ghost" size="sm" className="text-slate-400 hover:text-white">
                        <Settings className="h-4 w-4 mr-1" />
                        Settings
                      </Button>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="space-y-4">
              {filteredServices.map((service) => {
                const isSelected = selectedServices.includes(service.id);
                
                return (
                  <div
                    key={service.id}
                    className={`p-4 rounded-lg border transition-all duration-200 ${
                      isSelected 
                        ? 'bg-blue-500/10 border-blue-500/30' 
                        : 'bg-slate-700/30 border-slate-600/30 hover:bg-slate-700/50'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <input
                          type="checkbox"
                          checked={isSelected}
                          onChange={() => handleSelectService(service.id)}
                          className="w-4 h-4 text-blue-600 bg-slate-700 border-slate-600 rounded focus:ring-blue-500"
                        />
                        <div className="w-12 h-12 bg-slate-600 rounded-lg flex items-center justify-center">
                          <Scissors className="h-6 w-6 text-slate-400" />
                        </div>
                        <div>
                          <div className="flex items-center space-x-2">
                            <h3 className="font-medium text-white">{service.name}</h3>
                            <Badge className={`${getStatusColor(service.status)} text-xs`}>
                              {getStatusText(service.status)}
                            </Badge>
                            <Badge className={`${getCategoryColor(service.category)} text-xs`}>
                              {service.category}
                            </Badge>
                          </div>
                          <p className="text-sm text-slate-400">{service.description}</p>
                          <p className="text-xs text-slate-500">#{service.id}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center space-x-6">
                          <div className="text-sm">
                            <p className="text-slate-400">Duration</p>
                            <p className="text-white font-medium">{service.duration} min</p>
                          </div>
                          <div className="text-sm">
                            <p className="text-slate-400">Price</p>
                            <p className="text-white font-medium">${service.price}</p>
                          </div>
                          <div className="text-sm">
                            <p className="text-slate-400">Bookings</p>
                            <p className="text-white font-medium">{service.totalBookings}</p>
                          </div>
                          <div className="text-sm">
                            <p className="text-slate-400">Revenue</p>
                            <p className="text-white font-medium">${service.revenue}</p>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Button variant="ghost" size="sm" className="text-slate-400 hover:text-white">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm" className="text-slate-400 hover:text-white">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm" className="text-slate-400 hover:text-white">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default ServiceManagement;
