import { useState } from 'react';
import { 
  UserCheck,
  Plus,
  Edit,
  Trash2,
  Eye,
  Calendar,
  DollarSign,
  Star,
  Search,
  Filter,
  Download,
  ToggleLeft,
  ToggleRight,
  Award,
  Clock,
  Phone,
  Mail,
  MapPin,
  Briefcase
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
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

const StaffManagement = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [roleFilter, setRoleFilter] = useState('all');
  const [selectedStaff, setSelectedStaff] = useState<any>(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  // Staff data
  const staff = [
    {
      id: 1,
      name: 'Marcus Johnson',
      role: 'Master Barber',
      email: 'marcus@freshmen.com',
      phone: '(555) 123-4567',
      avatar: null,
      specialties: ['Fades', 'Beard Styling', 'Hot Towel Shave'],
      bookings: 245,
      revenue: 12250,
      rating: 4.9,
      experience: '8 years',
      status: 'active',
      schedule: 'Mon-Fri: 9AM-6PM'
    },
    {
      id: 2,
      name: 'James Williams',
      role: 'Senior Barber',
      email: 'james@freshmen.com',
      phone: '(555) 234-5678',
      avatar: null,
      specialties: ['Classic Cuts', 'Line Ups', 'Kids Cuts'],
      bookings: 198,
      revenue: 9900,
      rating: 4.8,
      experience: '6 years',
      status: 'active',
      schedule: 'Tue-Sat: 10AM-7PM'
    },
    {
      id: 3,
      name: 'David Martinez',
      role: 'Barber',
      email: 'david@freshmen.com',
      phone: '(555) 345-6789',
      avatar: null,
      specialties: ['Fades', 'Tapers', 'Designs'],
      bookings: 167,
      revenue: 8350,
      rating: 4.7,
      experience: '4 years',
      status: 'active',
      schedule: 'Mon-Fri: 11AM-8PM'
    },
    {
      id: 4,
      name: 'Robert Taylor',
      role: 'Junior Barber',
      email: 'robert@freshmen.com',
      phone: '(555) 456-7890',
      avatar: null,
      specialties: ['Basic Cuts', 'Beard Trims'],
      bookings: 89,
      revenue: 4450,
      rating: 4.5,
      experience: '2 years',
      status: 'active',
      schedule: 'Wed-Sun: 12PM-9PM'
    },
    {
      id: 5,
      name: 'Michael Brown',
      role: 'Master Barber',
      email: 'michael@freshmen.com',
      phone: '(555) 567-8901',
      avatar: null,
      specialties: ['Traditional Shaves', 'Beard Sculpting', 'Hair Coloring'],
      bookings: 212,
      revenue: 10600,
      rating: 5.0,
      experience: '10 years',
      status: 'vacation',
      schedule: 'Mon-Thu: 9AM-5PM'
    }
  ];

  const filteredStaff = staff.filter(member => {
    const matchesSearch = member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         member.email.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesRole = roleFilter === 'all' || member.role === roleFilter;
    return matchesSearch && matchesRole;
  });

  const stats = [
    { label: 'Total Staff', value: staff.length, icon: UserCheck, color: 'text-blue-400', change: '+1 this month', bgColor: 'bg-blue-50', borderColor: 'border-blue-200' },
    { label: 'Active Today', value: staff.filter(s => s.status === 'active').length, icon: Award, color: 'text-emerald-400', change: '80% utilization', bgColor: 'bg-emerald-50', borderColor: 'border-emerald-200' },
    { label: 'Total Revenue', value: `$${staff.reduce((sum, s) => sum + s.revenue, 0).toLocaleString()}`, icon: DollarSign, color: 'text-purple-400', change: '+18% vs last month', bgColor: 'bg-purple-50', borderColor: 'border-purple-200' },
    { label: 'Avg. Rating', value: (staff.reduce((sum, s) => sum + s.rating, 0) / staff.length).toFixed(1), icon: Star, color: 'text-yellow-400', change: 'Excellent', bgColor: 'bg-yellow-50', borderColor: 'border-yellow-200' }
  ];

  const roles = ['all', ...Array.from(new Set(staff.map(s => s.role)))];

  const getRoleColor = (role: string) => {
    const colors: any = {
      'Master Barber': 'bg-purple-500/20 text-purple-600 border-purple-500/30',
      'Senior Barber': 'bg-blue-500/20 text-blue-600 border-blue-500/30',
      'Barber': 'bg-emerald-500/20 text-emerald-600 border-emerald-500/30',
      'Junior Barber': 'bg-orange-500/20 text-orange-600 border-orange-500/30'
    };
    return colors[role] || 'bg-gray-500/20 text-gray-600 border-gray-500/30';
  };

  const getStatusColor = (status: string) => {
    const colors: any = {
      'active': 'bg-emerald-500/20 text-emerald-600 border-emerald-500/30',
      'vacation': 'bg-yellow-500/20 text-yellow-600 border-yellow-500/30',
      'inactive': 'bg-red-500/20 text-red-600 border-red-500/30'
    };
    return colors[status] || 'bg-gray-500/20 text-gray-600 border-gray-500/30';
  };

  const handleViewStaff = (member: any) => {
    setSelectedStaff(member);
    setDialogOpen(true);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>Staff Management</h1>
          <p className="text-gray-600" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>Manage your team and their schedules</p>
        </div>
        <Button className="bg-red-600 text-white hover:bg-red-700 shadow-md" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>
          <Plus className="h-4 w-4 mr-2" />
          Add Staff Member
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
              placeholder="Search staff by name or email..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 h-12 text-gray-900 bg-gray-50 border-gray-200 focus:border-red-500 focus:ring-red-500/20"
              style={{ fontFamily: 'Gotham Bold, sans-serif' }}
            />
          </div>
          <Select value={roleFilter} onValueChange={setRoleFilter}>
            <SelectTrigger className="w-full sm:w-[200px] h-12 bg-gray-50 border-gray-200 text-gray-900" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>
              <SelectValue placeholder="Filter by role" />
            </SelectTrigger>
            <SelectContent className="bg-white border-gray-200">
              {roles.map(role => (
                <SelectItem key={role} value={role} className="text-gray-900 capitalize" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>
                  {role === 'all' ? 'All Roles' : role}
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

      {/* Staff Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredStaff.map((member, index) => (
          <div 
            key={member.id}
            className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer"
            style={{
              animation: `fadeInUp 0.5s ease-out ${index * 0.1}s both`
            }}
            onClick={() => handleViewStaff(member)}
          >
            {/* Header */}
            <div className="flex items-start gap-4 mb-4">
              <Avatar className="h-16 w-16 ring-2 ring-gray-200 group-hover:ring-red-400 transition-all">
                <AvatarFallback className="bg-gradient-to-br from-red-500 to-orange-500 text-white text-lg font-bold">
                  {member.name.split(' ').map((n: string) => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-red-600 transition-colors" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>{member.name}</h3>
                <Badge className={`${getRoleColor(member.role)} text-xs font-semibold px-3 py-1 mb-2`}>
                  {member.role}
                </Badge>
                <Badge className={`${getStatusColor(member.status)} text-xs font-semibold px-3 py-1 ml-2`}>
                  {member.status}
                </Badge>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-2 mb-4 pb-4 border-b border-gray-200">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Mail className="h-4 w-4 text-gray-400" />
                <span style={{ fontFamily: 'Gotham Bold, sans-serif' }}>{member.email}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Phone className="h-4 w-4 text-gray-400" />
                <span style={{ fontFamily: 'Gotham Bold, sans-serif' }}>{member.phone}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Clock className="h-4 w-4 text-gray-400" />
                <span style={{ fontFamily: 'Gotham Bold, sans-serif' }}>{member.schedule}</span>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-3 mb-4">
              <div className="text-center p-3 bg-gray-50 rounded-xl">
                <p className="text-xl font-bold text-gray-900" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>{member.bookings}</p>
                <p className="text-xs text-gray-600" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>Bookings</p>
              </div>
              <div className="text-center p-3 bg-emerald-50 rounded-xl">
                <p className="text-xl font-bold text-emerald-600" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>${member.revenue}</p>
                <p className="text-xs text-gray-600" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>Revenue</p>
              </div>
              <div className="text-center p-3 bg-yellow-50 rounded-xl">
                <div className="flex items-center justify-center gap-1">
                  <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                  <p className="text-xl font-bold text-gray-900" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>{member.rating}</p>
                </div>
                <p className="text-xs text-gray-600" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>Rating</p>
              </div>
            </div>

            {/* Specialties */}
            <div className="mb-4">
              <p className="text-xs font-semibold text-gray-600 mb-2" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>Specialties:</p>
              <div className="flex flex-wrap gap-2">
                {member.specialties.map((specialty: string, i: number) => (
                  <Badge key={i} variant="outline" className="text-xs bg-blue-50 border-blue-200 text-blue-600">
                    {specialty}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-2">
              <Button 
                variant="outline" 
                size="sm" 
                className="flex-1 border-gray-300 text-gray-700 hover:bg-gray-100"
                onClick={(e) => {
                  e.stopPropagation();
                  handleViewStaff(member);
                }}
                style={{ fontFamily: 'Gotham Bold, sans-serif' }}
              >
                <Eye className="h-4 w-4 mr-2" />
                View
              </Button>
              <Button 
                variant="outline" 
                size="sm" 
                className="flex-1 bg-red-50 border-red-200 text-red-600 hover:bg-red-100"
                onClick={(e) => {
                  e.stopPropagation();
                  console.log('Edit staff:', member.id);
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

      {/* Staff Details Dialog */}
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-white">
          {selectedStaff && (
            <div className="space-y-6">
              <DialogHeader>
                <DialogTitle className="text-3xl font-bold text-gray-900" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>
                  {selectedStaff.name}
                </DialogTitle>
              </DialogHeader>

              {/* Header Info */}
              <div className="flex items-start gap-6">
                <Avatar className="h-24 w-24 ring-4 ring-red-200">
                  <AvatarFallback className="bg-gradient-to-br from-red-500 to-orange-500 text-white text-3xl font-bold">
                    {selectedStaff.name.split(' ').map((n: string) => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <Badge className={`${getRoleColor(selectedStaff.role)} text-sm font-semibold px-4 py-2`}>
                      {selectedStaff.role}
                    </Badge>
                    <Badge className={`${getStatusColor(selectedStaff.status)} text-sm font-semibold px-4 py-2`}>
                      {selectedStaff.status}
                    </Badge>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-gray-700">
                      <Mail className="h-5 w-5 text-gray-400" />
                      <span style={{ fontFamily: 'Gotham Bold, sans-serif' }}>{selectedStaff.email}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-700">
                      <Phone className="h-5 w-5 text-gray-400" />
                      <span style={{ fontFamily: 'Gotham Bold, sans-serif' }}>{selectedStaff.phone}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-700">
                      <Briefcase className="h-5 w-5 text-gray-400" />
                      <span style={{ fontFamily: 'Gotham Bold, sans-serif' }}>{selectedStaff.experience} experience</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-700">
                      <Clock className="h-5 w-5 text-gray-400" />
                      <span style={{ fontFamily: 'Gotham Bold, sans-serif' }}>{selectedStaff.schedule}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Performance Stats */}
              <div className="grid grid-cols-3 gap-6">
                <div className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl border-2 border-gray-200">
                  <p className="text-sm text-gray-600 mb-2 font-semibold" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>Total Bookings</p>
                  <p className="text-4xl font-bold text-gray-900" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>{selectedStaff.bookings}</p>
                </div>
                <div className="bg-gradient-to-br from-emerald-50 to-white p-6 rounded-2xl border-2 border-emerald-200">
                  <p className="text-sm text-gray-600 mb-2 font-semibold" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>Total Revenue</p>
                  <p className="text-4xl font-bold text-emerald-600" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>${selectedStaff.revenue}</p>
                </div>
                <div className="bg-gradient-to-br from-yellow-50 to-white p-6 rounded-2xl border-2 border-yellow-200">
                  <p className="text-sm text-gray-600 mb-2 font-semibold" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>Avg. Rating</p>
                  <div className="flex items-center gap-2">
                    <Star className="h-8 w-8 text-yellow-500 fill-yellow-500" />
                    <p className="text-4xl font-bold text-gray-900" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>{selectedStaff.rating}</p>
                  </div>
                </div>
              </div>

              {/* Specialties */}
              <div className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl border border-gray-200">
                <h4 className="text-xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>Specialties</h4>
                <div className="flex flex-wrap gap-3">
                  {selectedStaff.specialties.map((specialty: string, index: number) => (
                    <Badge key={index} className="bg-blue-500/20 text-blue-600 border-blue-500/30 text-base font-semibold px-4 py-2">
                      {specialty}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-3">
                <Button className="flex-1 bg-red-600 text-white hover:bg-red-700 h-12 text-base shadow-md" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>
                  <Edit className="h-5 w-5 mr-2" />
                  Edit Staff Member
                </Button>
                <Button className="flex-1 bg-blue-600 text-white hover:bg-blue-700 h-12 text-base shadow-md" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>
                  <Calendar className="h-5 w-5 mr-2" />
                  View Schedule
                </Button>
                <Button variant="outline" className="flex-1 h-12 text-base shadow-md" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>
                  <Briefcase className="h-5 w-5 mr-2" />
                  Performance
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default StaffManagement;
