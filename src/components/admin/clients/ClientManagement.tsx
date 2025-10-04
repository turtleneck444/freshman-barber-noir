import { useState } from 'react';
import { 
  Users,
  Plus,
  Search,
  Mail,
  Phone,
  MapPin,
  Calendar,
  DollarSign,
  Star,
  Eye,
  Edit,
  Trash2
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

const ClientManagement = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  const clients = [
    { id: 1, name: 'John Doe', initials: 'JD', email: 'john@email.com', phone: '(905) 123-4567', location: 'Toronto, ON', joined: 'Jan 2024', visits: 12, spent: '$540', rating: 5.0, avatarColor: 'bg-blue-500', status: 'active' },
    { id: 2, name: 'Mike Smith', initials: 'MS', email: 'mike@email.com', phone: '(905) 234-5678', location: 'Mississauga, ON', joined: 'Feb 2024', visits: 8, spent: '$480', rating: 4.8, avatarColor: 'bg-purple-500', status: 'active' },
    { id: 3, name: 'David Johnson', initials: 'DJ', email: 'david@email.com', phone: '(905) 345-6789', location: 'Brampton, ON', joined: 'Mar 2024', visits: 15, spent: '$1,275', rating: 5.0, avatarColor: 'bg-indigo-500', status: 'vip' },
    { id: 4, name: 'Robert Williams', initials: 'RW', email: 'robert@email.com', phone: '(905) 456-7890', location: 'Oakville, ON', joined: 'Dec 2023', visits: 6, spent: '$210', rating: 4.5, avatarColor: 'bg-pink-500', status: 'active' },
    { id: 5, name: 'James Brown', initials: 'JB', email: 'james@email.com', phone: '(905) 567-8901', location: 'Toronto, ON', joined: 'Jan 2024', visits: 10, spent: '$300', rating: 4.9, avatarColor: 'bg-orange-500', status: 'active' },
    { id: 6, name: 'Chris Anderson', initials: 'CA', email: 'chris@email.com', phone: '(905) 678-9012', location: 'Etobicoke, ON', joined: 'Feb 2024', visits: 4, spent: '$140', rating: 4.7, avatarColor: 'bg-teal-500', status: 'new' },
    { id: 7, name: 'Tom Wilson', initials: 'TW', email: 'tom@email.com', phone: '(905) 789-0123', location: 'North York, ON', joined: 'Mar 2024', visits: 9, spent: '$405', rating: 4.8, avatarColor: 'bg-cyan-500', status: 'active' }
  ];

  const stats = [
    { label: 'Total Clients', value: '2,847', icon: Users, color: 'text-blue-500', bgColor: 'bg-blue-50' },
    { label: 'New This Month', value: '156', icon: Plus, color: 'text-emerald-500', bgColor: 'bg-emerald-50' },
    { label: 'VIP Clients', value: '42', icon: Star, color: 'text-amber-500', bgColor: 'bg-amber-50' },
    { label: 'Total Revenue', value: '$45.2K', icon: DollarSign, color: 'text-purple-500', bgColor: 'bg-purple-50' }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'vip':
        return 'bg-amber-50 text-amber-600 border-amber-200';
      case 'new':
        return 'bg-blue-50 text-blue-600 border-blue-200';
      default:
        return 'bg-emerald-50 text-emerald-600 border-emerald-200';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 mb-1" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>Client Management</h1>
          <p className="text-sm text-gray-500" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>Manage your customer database</p>
        </div>
        <Button className="bg-red-600 text-white hover:bg-red-700 shadow-sm" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>
          <Plus className="h-4 w-4 mr-2" />
          Add Client
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const IconComponent = stat.icon;
          return (
            <div key={index} className="bg-white border border-gray-200 rounded-xl p-5 hover:shadow-sm transition-shadow">
              <div className="flex items-center gap-3 mb-2">
                <div className={`p-2 ${stat.bgColor} rounded-lg`}>
                  <IconComponent className={`h-5 w-5 ${stat.color}`} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-medium" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>{stat.label}</p>
                  <p className="text-2xl font-bold text-gray-900" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>{stat.value}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Table Container */}
      <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
        {/* Search Bar */}
        <div className="p-6 border-b border-gray-200">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <Input
              placeholder="Search clients..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-400 h-10"
              style={{ fontFamily: 'Gotham Bold, sans-serif' }}
            />
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="text-left py-3 px-6 text-xs font-semibold text-gray-500 uppercase tracking-wider" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>Client</th>
                <th className="text-left py-3 px-6 text-xs font-semibold text-gray-500 uppercase tracking-wider" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>Contact</th>
                <th className="text-left py-3 px-6 text-xs font-semibold text-gray-500 uppercase tracking-wider" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>Location</th>
                <th className="text-left py-3 px-6 text-xs font-semibold text-gray-500 uppercase tracking-wider" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>Visits</th>
                <th className="text-left py-3 px-6 text-xs font-semibold text-gray-500 uppercase tracking-wider" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>Total Spent</th>
                <th className="text-left py-3 px-6 text-xs font-semibold text-gray-500 uppercase tracking-wider" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>Rating</th>
                <th className="text-left py-3 px-6 text-xs font-semibold text-gray-500 uppercase tracking-wider" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {clients.map((client) => (
                <tr key={client.id} className="hover:bg-gray-50 transition-colors cursor-pointer">
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-3">
                      <Avatar className={`h-10 w-10 ${client.avatarColor} text-white font-semibold`}>
                        <AvatarFallback className="bg-transparent text-white">
                          {client.initials}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-sm font-medium text-gray-900" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>{client.name}</p>
                        <p className="text-xs text-gray-500" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>Joined {client.joined}</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Mail className="h-3 w-3 text-gray-400" />
                        <span style={{ fontFamily: 'Gotham Bold, sans-serif' }}>{client.email}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Phone className="h-3 w-3 text-gray-400" />
                        <span style={{ fontFamily: 'Gotham Bold, sans-serif' }}>{client.phone}</span>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-1 text-sm text-gray-600">
                      <MapPin className="h-4 w-4 text-gray-400" />
                      <span style={{ fontFamily: 'Gotham Bold, sans-serif' }}>{client.location}</span>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <p className="text-sm font-medium text-gray-900" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>{client.visits}</p>
                  </td>
                  <td className="py-4 px-6">
                    <p className="text-sm font-semibold text-gray-900" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>{client.spent}</p>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                      <span className="text-sm font-medium text-gray-900" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>{client.rating}</span>
                    </div>
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

        {/* Footer */}
        <div className="px-6 py-4 border-t border-gray-200 bg-gray-50">
          <p className="text-sm text-gray-500" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>
            Showing {clients.length} of {clients.length} clients
          </p>
        </div>
      </div>
    </div>
  );
};

export default ClientManagement;
