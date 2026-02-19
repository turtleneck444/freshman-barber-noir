import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { 
  Scissors, Plus, Edit, Eye, Clock, DollarSign, TrendingUp, Search, Filter, Download,
  ToggleLeft, ToggleRight, Star, Activity, Loader2, CheckCircle
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

const ServiceManagement = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [selectedService, setSelectedService] = useState<any>(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  const { data: services = [], isLoading } = useQuery({
    queryKey: ['admin-services'],
    queryFn: async () => {
      const { data, error } = await supabase.from('services').select('*').order('sort_order');
      if (error) throw error;
      return data;
    }
  });

  const filteredServices = services.filter((s: any) => {
    const matchesSearch = !searchQuery || s.name.toLowerCase().includes(searchQuery.toLowerCase()) || s.description?.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = categoryFilter === 'all' || s.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  const categories = ['all', ...Array.from(new Set(services.map((s: any) => s.category)))];

  const stats = [
    { label: 'Total Services', value: String(services.length), icon: Scissors, color: 'text-blue-400', bgColor: 'bg-blue-50', borderColor: 'border-blue-200' },
    { label: 'Active', value: String(services.filter((s: any) => s.status === 'active').length), icon: Activity, color: 'text-emerald-400', bgColor: 'bg-emerald-50', borderColor: 'border-emerald-200' },
    { label: 'Avg Price', value: services.length ? `$${Math.round(services.reduce((sum: number, s: any) => sum + Number(s.price), 0) / services.length)}` : '$0', icon: DollarSign, color: 'text-purple-400', bgColor: 'bg-purple-50', borderColor: 'border-purple-200' },
    { label: 'Popular', value: String(services.filter((s: any) => s.popular).length), icon: Star, color: 'text-yellow-400', bgColor: 'bg-yellow-50', borderColor: 'border-yellow-200' }
  ];

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      'Hair': 'bg-blue-500/20 text-blue-600 border-blue-500/30',
      'Beard': 'bg-orange-500/20 text-orange-600 border-orange-500/30',
      'Combo': 'bg-purple-500/20 text-purple-600 border-purple-500/30',
      'Premium': 'bg-yellow-500/20 text-yellow-600 border-yellow-500/30',
    };
    return colors[category] || 'bg-gray-500/20 text-gray-600 border-gray-500/30';
  };

  if (isLoading) {
    return <div className="flex items-center justify-center py-20"><Loader2 className="h-8 w-8 animate-spin text-red-500" /></div>;
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>Service Management</h1>
          <p className="text-gray-600" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>Manage your service catalog and pricing</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const IconComponent = stat.icon;
          return (
            <div key={index} className={`bg-white border ${stat.borderColor} rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300`}>
              <div className="flex items-center gap-3 mb-3">
                <div className={`p-3 ${stat.bgColor} rounded-xl`}><IconComponent className={`h-6 w-6 ${stat.color}`} /></div>
                <div>
                  <p className="text-sm text-gray-600 font-medium" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>{stat.label}</p>
                  <p className="text-2xl font-bold text-gray-900" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>{stat.value}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <Input placeholder="Search services..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 h-12 text-gray-900 bg-gray-50 border-gray-200" style={{ fontFamily: 'Gotham Bold, sans-serif' }} />
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
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredServices.map((service: any) => (
          <div key={service.id} className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer"
            onClick={() => { setSelectedService(service); setDialogOpen(true); }}>
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>{service.name}</h3>
                <Badge className={`${getCategoryColor(service.category)} text-xs font-semibold px-3 py-1`}>{service.category}</Badge>
              </div>
              {service.status === 'active' ? <ToggleRight className="h-7 w-7 text-emerald-500" /> : <ToggleLeft className="h-7 w-7 text-gray-400" />}
            </div>
            <p className="text-sm text-gray-600 mb-4 line-clamp-2" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>{service.description}</p>
            <div className="grid grid-cols-2 gap-3 mb-4">
              <div className="bg-gradient-to-br from-emerald-50 to-white p-4 rounded-xl border border-emerald-200">
                <div className="flex items-center gap-2 mb-1"><DollarSign className="h-4 w-4 text-emerald-600" /><span className="text-xs text-gray-600 font-medium">Price</span></div>
                <p className="text-2xl font-bold text-gray-900" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>${service.price}</p>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-white p-4 rounded-xl border border-blue-200">
                <div className="flex items-center gap-2 mb-1"><Clock className="h-4 w-4 text-blue-600" /><span className="text-xs text-gray-600 font-medium">Duration</span></div>
                <p className="text-lg font-bold text-gray-900" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>{service.duration_minutes} min</p>
              </div>
            </div>
            {service.features && service.features.length > 0 && (
              <div className="space-y-1 mb-4">
                {service.features.slice(0, 3).map((f: string, i: number) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-gray-700">
                    <CheckCircle className="h-3 w-3 text-emerald-500" /><span>{f}</span>
                  </div>
                ))}
              </div>
            )}
            {service.popular && <Badge className="bg-yellow-50 text-yellow-600 border-yellow-200 text-xs">⭐ Popular</Badge>}
          </div>
        ))}
      </div>

      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="max-w-2xl bg-white">
          {selectedService && (
            <div className="space-y-6">
              <DialogHeader>
                <DialogTitle className="text-3xl font-bold text-gray-900" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>{selectedService.name}</DialogTitle>
              </DialogHeader>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-emerald-50 p-6 rounded-2xl border border-emerald-200">
                  <p className="text-sm text-gray-600 mb-1">Price</p>
                  <p className="text-4xl font-bold text-emerald-600">${selectedService.price}</p>
                </div>
                <div className="bg-blue-50 p-6 rounded-2xl border border-blue-200">
                  <p className="text-sm text-gray-600 mb-1">Duration</p>
                  <p className="text-4xl font-bold text-blue-600">{selectedService.duration_minutes} min</p>
                </div>
              </div>
              <p className="text-gray-700">{selectedService.description}</p>
              {selectedService.features?.length > 0 && (
                <div className="space-y-2">
                  <h4 className="font-bold text-gray-900">Features</h4>
                  {selectedService.features.map((f: string, i: number) => (
                    <div key={i} className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-emerald-500" /><span>{f}</span></div>
                  ))}
                </div>
              )}
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ServiceManagement;
