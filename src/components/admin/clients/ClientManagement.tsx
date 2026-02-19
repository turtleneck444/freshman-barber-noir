import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { 
  Users, Plus, Search, Mail, Phone, MapPin, Calendar, DollarSign, Star, Eye, Edit, Trash2, Loader2
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

const ClientManagement = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const { data: clients = [], isLoading } = useQuery({
    queryKey: ['admin-clients'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('clients')
        .select('*')
        .order('created_at', { ascending: false });
      if (error) throw error;
      return data;
    }
  });

  const filteredClients = clients.filter((c: any) => {
    const search = searchQuery.toLowerCase();
    return !search || c.name?.toLowerCase().includes(search) || c.email?.toLowerCase().includes(search) || c.phone?.includes(search);
  });

  const stats = [
    { label: 'Total Clients', value: String(clients.length), icon: Users, color: 'text-blue-500', bgColor: 'bg-blue-50' },
    { label: 'New Clients', value: String(clients.filter((c: any) => c.status === 'new').length), icon: Plus, color: 'text-emerald-500', bgColor: 'bg-emerald-50' },
    { label: 'VIP Clients', value: String(clients.filter((c: any) => c.status === 'vip').length), icon: Star, color: 'text-amber-500', bgColor: 'bg-amber-50' },
    { label: 'Active', value: String(clients.filter((c: any) => c.status === 'active').length), icon: DollarSign, color: 'text-purple-500', bgColor: 'bg-purple-50' }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'vip': return 'bg-amber-50 text-amber-600 border-amber-200';
      case 'new': return 'bg-blue-50 text-blue-600 border-blue-200';
      case 'inactive': return 'bg-gray-50 text-gray-600 border-gray-200';
      default: return 'bg-emerald-50 text-emerald-600 border-emerald-200';
    }
  };

  const getInitials = (name: string) => name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);

  if (isLoading) {
    return <div className="flex items-center justify-center py-20"><Loader2 className="h-8 w-8 animate-spin text-red-500" /></div>;
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 mb-1" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>Client Management</h1>
          <p className="text-sm text-gray-500" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>Manage your customer database</p>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const IconComponent = stat.icon;
          return (
            <div key={index} className="bg-white border border-gray-200 rounded-xl p-5 hover:shadow-sm transition-shadow">
              <div className="flex items-center gap-3 mb-2">
                <div className={`p-2 ${stat.bgColor} rounded-lg`}><IconComponent className={`h-5 w-5 ${stat.color}`} /></div>
                <div>
                  <p className="text-xs text-gray-500 font-medium" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>{stat.label}</p>
                  <p className="text-2xl font-bold text-gray-900" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>{stat.value}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
        <div className="p-6 border-b border-gray-200">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <Input placeholder="Search clients..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-400 h-10" style={{ fontFamily: 'Gotham Bold, sans-serif' }} />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="text-left py-3 px-6 text-xs font-semibold text-gray-500 uppercase tracking-wider" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>Client</th>
                <th className="text-left py-3 px-6 text-xs font-semibold text-gray-500 uppercase tracking-wider" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>Contact</th>
                <th className="text-left py-3 px-6 text-xs font-semibold text-gray-500 uppercase tracking-wider" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>Location</th>
                <th className="text-left py-3 px-6 text-xs font-semibold text-gray-500 uppercase tracking-wider" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>Loyalty Points</th>
                <th className="text-left py-3 px-6 text-xs font-semibold text-gray-500 uppercase tracking-wider" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredClients.length === 0 ? (
                <tr><td colSpan={5} className="py-12 text-center text-gray-500">No clients found</td></tr>
              ) : filteredClients.map((client: any) => (
                <tr key={client.id} className="hover:bg-gray-50 transition-colors cursor-pointer">
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-3">
                      <Avatar className="h-10 w-10 bg-blue-500 text-white font-semibold">
                        <AvatarFallback className="bg-blue-500 text-white">{getInitials(client.name)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-sm font-medium text-gray-900" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>{client.name}</p>
                        <p className="text-xs text-gray-500" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>Joined {new Date(client.created_at).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <div className="space-y-1">
                      {client.email && <div className="flex items-center gap-2 text-sm text-gray-600"><Mail className="h-3 w-3 text-gray-400" /><span style={{ fontFamily: 'Gotham Bold, sans-serif' }}>{client.email}</span></div>}
                      {client.phone && <div className="flex items-center gap-2 text-sm text-gray-600"><Phone className="h-3 w-3 text-gray-400" /><span style={{ fontFamily: 'Gotham Bold, sans-serif' }}>{client.phone}</span></div>}
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    {client.address && <div className="flex items-center gap-1 text-sm text-gray-600"><MapPin className="h-4 w-4 text-gray-400" /><span style={{ fontFamily: 'Gotham Bold, sans-serif' }}>{client.address}</span></div>}
                  </td>
                  <td className="py-4 px-6">
                    <p className="text-sm font-medium text-gray-900" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>{client.loyalty_points || 0}</p>
                  </td>
                  <td className="py-4 px-6">
                    <Badge className={`${getStatusBadge(client.status)} text-xs px-3 py-1 border uppercase font-semibold`}>
                      {client.status}
                    </Badge>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="px-6 py-4 border-t border-gray-200 bg-gray-50">
          <p className="text-sm text-gray-500" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>Showing {filteredClients.length} of {clients.length} clients</p>
        </div>
      </div>
    </div>
  );
};

export default ClientManagement;
