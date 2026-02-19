import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { 
  UserCheck, Plus, Edit, Eye, Calendar, DollarSign, Star, Search, Filter, Download,
  ToggleLeft, ToggleRight, Award, Clock, Phone, Mail, MapPin, Briefcase, Loader2
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

const StaffManagement = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedStaff, setSelectedStaff] = useState<any>(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  const { data: staff = [], isLoading } = useQuery({
    queryKey: ['admin-staff'],
    queryFn: async () => {
      const { data, error } = await supabase.from('staff').select('*').order('name');
      if (error) throw error;
      return data;
    }
  });

  const filteredStaff = staff.filter((s: any) => {
    const search = searchQuery.toLowerCase();
    return !search || s.name?.toLowerCase().includes(search) || s.email?.toLowerCase().includes(search);
  });

  const stats = [
    { label: 'Total Staff', value: String(staff.length), icon: UserCheck, color: 'text-blue-400', bgColor: 'bg-blue-50', borderColor: 'border-blue-200' },
    { label: 'Active', value: String(staff.filter((s: any) => s.status === 'active').length), icon: Award, color: 'text-emerald-400', bgColor: 'bg-emerald-50', borderColor: 'border-emerald-200' },
    { label: 'On Leave', value: String(staff.filter((s: any) => s.status === 'on_leave').length), icon: Calendar, color: 'text-amber-400', bgColor: 'bg-amber-50', borderColor: 'border-amber-200' },
    { label: 'Avg Experience', value: staff.length ? `${Math.round(staff.reduce((sum: number, s: any) => sum + (s.experience_years || 0), 0) / staff.length)} yrs` : '0 yrs', icon: Star, color: 'text-purple-400', bgColor: 'bg-purple-50', borderColor: 'border-purple-200' }
  ];

  const getStatusColor = (status: string) => {
    const colors: Record<string, string> = {
      'active': 'bg-emerald-500/20 text-emerald-600 border-emerald-500/30',
      'on_leave': 'bg-yellow-500/20 text-yellow-600 border-yellow-500/30',
      'inactive': 'bg-red-500/20 text-red-600 border-red-500/30'
    };
    return colors[status] || 'bg-gray-500/20 text-gray-600 border-gray-500/30';
  };

  if (isLoading) {
    return <div className="flex items-center justify-center py-20"><Loader2 className="h-8 w-8 animate-spin text-red-500" /></div>;
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>Staff Management</h1>
          <p className="text-gray-600" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>Manage your team</p>
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
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          <Input placeholder="Search staff..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 h-12 text-gray-900 bg-gray-50 border-gray-200" style={{ fontFamily: 'Gotham Bold, sans-serif' }} />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredStaff.map((member: any) => (
          <div key={member.id} className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer"
            onClick={() => { setSelectedStaff(member); setDialogOpen(true); }}>
            <div className="flex items-start gap-4 mb-4">
              <Avatar className="h-16 w-16 ring-2 ring-gray-200 group-hover:ring-red-400 transition-all">
                <AvatarFallback className="bg-gradient-to-br from-red-500 to-orange-500 text-white text-lg font-bold">
                  {member.name.split(' ').map((n: string) => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-red-600 transition-colors" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>{member.name}</h3>
                <div className="flex gap-2">
                  {member.specialty && <Badge className="bg-blue-500/20 text-blue-600 border-blue-500/30 text-xs">{member.specialty}</Badge>}
                  <Badge className={`${getStatusColor(member.status)} text-xs`}>{member.status}</Badge>
                </div>
              </div>
            </div>

            <div className="space-y-2 mb-4 pb-4 border-b border-gray-200">
              {member.email && <div className="flex items-center gap-2 text-sm text-gray-600"><Mail className="h-4 w-4 text-gray-400" /><span>{member.email}</span></div>}
              {member.phone && <div className="flex items-center gap-2 text-sm text-gray-600"><Phone className="h-4 w-4 text-gray-400" /><span>{member.phone}</span></div>}
              <div className="flex items-center gap-2 text-sm text-gray-600"><Briefcase className="h-4 w-4 text-gray-400" /><span>{member.experience_years || 0} years experience</span></div>
            </div>

            {member.commission_rate > 0 && (
              <div className="text-center p-3 bg-emerald-50 rounded-xl">
                <p className="text-xl font-bold text-emerald-600">{member.commission_rate}%</p>
                <p className="text-xs text-gray-600">Commission Rate</p>
              </div>
            )}
          </div>
        ))}
      </div>

      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="max-w-2xl bg-white">
          {selectedStaff && (
            <div className="space-y-6">
              <DialogHeader>
                <DialogTitle className="text-3xl font-bold text-gray-900" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>{selectedStaff.name}</DialogTitle>
              </DialogHeader>
              <div className="flex items-start gap-6">
                <Avatar className="h-24 w-24 ring-4 ring-red-200">
                  <AvatarFallback className="bg-gradient-to-br from-red-500 to-orange-500 text-white text-3xl font-bold">
                    {selectedStaff.name.split(' ').map((n: string) => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1 space-y-2">
                  <div className="flex gap-2">
                    {selectedStaff.specialty && <Badge className="bg-blue-500/20 text-blue-600 text-sm px-4 py-2">{selectedStaff.specialty}</Badge>}
                    <Badge className={`${getStatusColor(selectedStaff.status)} text-sm px-4 py-2`}>{selectedStaff.status}</Badge>
                  </div>
                  {selectedStaff.email && <div className="flex items-center gap-2"><Mail className="h-5 w-5 text-gray-400" /><span>{selectedStaff.email}</span></div>}
                  {selectedStaff.phone && <div className="flex items-center gap-2"><Phone className="h-5 w-5 text-gray-400" /><span>{selectedStaff.phone}</span></div>}
                  <div className="flex items-center gap-2"><Briefcase className="h-5 w-5 text-gray-400" /><span>{selectedStaff.experience_years || 0} years experience</span></div>
                </div>
              </div>
              {selectedStaff.bio && <p className="text-gray-700">{selectedStaff.bio}</p>}
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default StaffManagement;
