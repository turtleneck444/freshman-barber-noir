import { useState } from 'react';
import { 
  Users, 
  Plus, 
  Search, 
  Filter, 
  MoreVertical,
  Edit,
  Trash2,
  Eye,
  Star,
  Calendar,
  Phone,
  Mail,
  MapPin,
  Clock,
  DollarSign,
  Crown,
  Zap
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const ClientManagement = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [tierFilter, setTierFilter] = useState('all');

  const clients = [
    {
      id: 1,
      name: 'Mike Johnson',
      email: 'mike.johnson@email.com',
      phone: '(905) 123-4567',
      address: '123 Main St, Mississauga, ON',
      tier: 'VIP',
      status: 'active',
      totalVisits: 24,
      totalSpent: 1080,
      lastVisit: '2024-01-10',
      nextAppointment: '2024-01-17',
      preferredBarber: 'Alex Chen',
      favoriteService: 'Signature Cut',
      rating: 4.9,
      notes: 'Regular client, prefers shorter on sides, very satisfied'
    },
    {
      id: 2,
      name: 'David Kim',
      email: 'david.kim@email.com',
      phone: '(905) 234-5678',
      address: '456 Oak Ave, Mississauga, ON',
      tier: 'Gold',
      status: 'active',
      totalVisits: 18,
      totalSpent: 720,
      lastVisit: '2024-01-12',
      nextAppointment: '2024-01-20',
      preferredBarber: 'Sarah Wilson',
      favoriteService: 'Traditional Shave',
      rating: 4.7,
      notes: 'Prefers traditional shave, very particular about products'
    },
    {
      id: 3,
      name: 'Ryan Smith',
      email: 'ryan.smith@email.com',
      phone: '(905) 345-6789',
      address: '789 Pine Rd, Mississauga, ON',
      tier: 'Silver',
      status: 'active',
      totalVisits: 12,
      totalSpent: 480,
      lastVisit: '2024-01-08',
      nextAppointment: null,
      preferredBarber: 'Alex Chen',
      favoriteService: 'Royal Package',
      rating: 4.8,
      notes: 'Anniversary special customer, books quarterly'
    },
    {
      id: 4,
      name: 'Tom Brown',
      email: 'tom.brown@email.com',
      phone: '(905) 456-7890',
      address: '321 Elm St, Mississauga, ON',
      tier: 'Bronze',
      status: 'inactive',
      totalVisits: 6,
      totalSpent: 180,
      lastVisit: '2023-12-15',
      nextAppointment: null,
      preferredBarber: 'Sarah Wilson',
      favoriteService: 'Beard Grooming',
      rating: 4.5,
      notes: 'Haven\'t visited in a while, send follow-up'
    },
    {
      id: 5,
      name: 'James Wilson',
      email: 'james.wilson@email.com',
      phone: '(905) 567-8901',
      address: '654 Maple Dr, Mississauga, ON',
      tier: 'Gold',
      status: 'active',
      totalVisits: 15,
      totalSpent: 600,
      lastVisit: '2024-01-14',
      nextAppointment: '2024-01-21',
      preferredBarber: 'Mike Davis',
      favoriteService: 'Father & Son',
      rating: 4.9,
      notes: 'Brings his son regularly, family package customer'
    }
  ];

  const tiers = ['all', 'VIP', 'Gold', 'Silver', 'Bronze'];
  const statuses = ['all', 'active', 'inactive', 'new'];

  const getTierColor = (tier: string) => {
    switch (tier) {
      case 'VIP': return 'bg-gradient-to-r from-yellow-500/20 to-yellow-600/20 text-yellow-400 border-yellow-500/30';
      case 'Gold': return 'bg-gradient-to-r from-yellow-600/20 to-yellow-700/20 text-yellow-500 border-yellow-600/30';
      case 'Silver': return 'bg-gradient-to-r from-gray-400/20 to-gray-500/20 text-gray-400 border-gray-400/30';
      case 'Bronze': return 'bg-gradient-to-r from-orange-600/20 to-orange-700/20 text-orange-500 border-orange-600/30';
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  const getTierIcon = (tier: string) => {
    switch (tier) {
      case 'VIP': return <Crown className="h-4 w-4" />;
      case 'Gold': return <Star className="h-4 w-4" />;
      case 'Silver': return <Zap className="h-4 w-4" />;
      case 'Bronze': return <Users className="h-4 w-4" />;
      default: return <Users className="h-4 w-4" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'inactive': return 'bg-red-500/20 text-red-400 border-red-500/30';
      case 'new': return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  const filteredClients = clients.filter(client => {
    const matchesSearch = client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         client.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         client.phone.includes(searchTerm);
    const matchesStatus = statusFilter === 'all' || client.status === statusFilter;
    const matchesTier = tierFilter === 'all' || client.tier === tierFilter;
    return matchesSearch && matchesStatus && matchesTier;
  });

  const totalClients = clients.length;
  const activeClients = clients.filter(client => client.status === 'active').length;
  const vipClients = clients.filter(client => client.tier === 'VIP').length;
  const totalRevenue = clients.reduce((sum, client) => sum + client.totalSpent, 0);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
        <div>
          <h1 className="text-3xl font-orbitron font-bold text-barbershop-white">Client Management</h1>
          <p className="text-barbershop-gray-light">Manage your client database and relationships</p>
        </div>
        <Button className="bg-gradient-to-r from-barber-red to-barber-blue hover:from-barber-blue hover:to-barber-red text-white">
          <Plus className="h-5 w-5 mr-2" />
          Add Client
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="bg-gradient-to-br from-barbershop-gray-dark/50 to-barbershop-black/50 backdrop-blur-xl border border-blue-500/30">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-barbershop-gray-light mb-1">Total Clients</p>
                <p className="text-2xl font-bold text-blue-400">{totalClients}</p>
              </div>
              <Users className="h-8 w-8 text-blue-400" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-barbershop-gray-dark/50 to-barbershop-black/50 backdrop-blur-xl border border-green-500/30">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-barbershop-gray-light mb-1">Active Clients</p>
                <p className="text-2xl font-bold text-green-400">{activeClients}</p>
              </div>
              <Zap className="h-8 w-8 text-green-400" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-barbershop-gray-dark/50 to-barbershop-black/50 backdrop-blur-xl border border-yellow-500/30">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-barbershop-gray-light mb-1">VIP Clients</p>
                <p className="text-2xl font-bold text-yellow-400">{vipClients}</p>
              </div>
              <Crown className="h-8 w-8 text-yellow-400" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-barbershop-gray-dark/50 to-barbershop-black/50 backdrop-blur-xl border border-purple-500/30">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-barbershop-gray-light mb-1">Total Revenue</p>
                <p className="text-2xl font-bold text-purple-400">${totalRevenue.toLocaleString()}</p>
              </div>
              <DollarSign className="h-8 w-8 text-purple-400" />
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
                placeholder="Search clients..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-barbershop-black/50 border-barber-red/30 text-barbershop-white placeholder-barbershop-gray focus:border-barber-red"
              />
            </div>
            
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

            <Select value={tierFilter} onValueChange={setTierFilter}>
              <SelectTrigger className="bg-barbershop-black/50 border-barber-red/30 text-barbershop-white">
                <SelectValue placeholder="Filter by tier" />
              </SelectTrigger>
              <SelectContent className="bg-barbershop-black border-barber-red/30">
                {tiers.map(tier => (
                  <SelectItem key={tier} value={tier} className="text-barbershop-white hover:bg-barber-red/20">
                    {tier === 'all' ? 'All Tiers' : tier}
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

      {/* Clients Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredClients.map((client) => (
          <Card key={client.id} className="bg-gradient-to-br from-barbershop-gray-dark/50 to-barbershop-black/50 backdrop-blur-xl border border-barber-red/30 hover:border-barber-red/60 transition-all duration-300 hover:shadow-glow">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-barber-red to-barber-blue rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">
                      {client.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-barbershop-white">{client.name}</h3>
                    <p className="text-sm text-barbershop-gray-light">{client.email}</p>
                  </div>
                </div>
                <Button variant="ghost" size="sm" className="text-barbershop-gray hover:text-barber-red">
                  <MoreVertical className="h-4 w-4" />
                </Button>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-4">
              {/* Contact Info */}
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4 text-barber-red" />
                  <span className="text-sm text-barbershop-white">{client.phone}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4 text-barber-blue" />
                  <span className="text-sm text-barbershop-gray-light">{client.address}</span>
                </div>
              </div>

              {/* Client Stats */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-barbershop-gray-light">Total Visits</span>
                  <span className="text-sm font-semibold text-barbershop-white">{client.totalVisits}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-barbershop-gray-light">Total Spent</span>
                  <span className="text-sm font-bold text-barber-red">${client.totalSpent}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-barbershop-gray-light">Last Visit</span>
                  <span className="text-sm text-barbershop-white">{client.lastVisit}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-barbershop-gray-light">Next Appointment</span>
                  <span className="text-sm text-barber-blue">
                    {client.nextAppointment || 'Not scheduled'}
                  </span>
                </div>
              </div>

              {/* Preferences */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-barbershop-gray-light">Preferred Barber</span>
                  <span className="text-sm text-barbershop-white">{client.preferredBarber}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-barbershop-gray-light">Favorite Service</span>
                  <span className="text-sm text-barber-red">{client.favoriteService}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-barbershop-gray-light">Rating</span>
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-barbershop-white">{client.rating}</span>
                  </div>
                </div>
              </div>

              {/* Tier and Status */}
              <div className="flex items-center justify-between">
                <Badge className={`${getTierColor(client.tier)} flex items-center space-x-1`}>
                  {getTierIcon(client.tier)}
                  <span>{client.tier}</span>
                </Badge>
                <Badge className={getStatusColor(client.status)}>
                  {client.status}
                </Badge>
              </div>

              {/* Notes */}
              {client.notes && (
                <div className="p-3 bg-barbershop-black/50 rounded-lg border border-barber-red/20">
                  <p className="text-xs text-barbershop-gray-light">{client.notes}</p>
                </div>
              )}

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
        ))}
      </div>

      {/* Quick Actions */}
      <Card className="bg-gradient-to-br from-barbershop-gray-dark/50 to-barbershop-black/50 backdrop-blur-xl border border-barber-blue/30">
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Button className="h-16 bg-gradient-to-br from-barber-red to-barber-blue hover:from-barber-blue hover:to-barber-red text-white flex flex-col space-y-2">
              <Users className="h-6 w-6" />
              <span className="text-sm">Import Clients</span>
            </Button>
            <Button className="h-16 bg-gradient-to-br from-barber-blue to-purple-500 hover:from-purple-500 hover:to-barber-blue text-white flex flex-col space-y-2">
              <Mail className="h-6 w-6" />
              <span className="text-sm">Send Campaign</span>
            </Button>
            <Button className="h-16 bg-gradient-to-br from-purple-500 to-pink-500 hover:from-pink-500 hover:to-purple-500 text-white flex flex-col space-y-2">
              <Calendar className="h-6 w-6" />
              <span className="text-sm">Schedule Follow-up</span>
            </Button>
            <Button className="h-16 bg-gradient-to-br from-pink-500 to-red-500 hover:from-red-500 hover:to-pink-500 text-white flex flex-col space-y-2">
              <Star className="h-6 w-6" />
              <span className="text-sm">Loyalty Program</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ClientManagement;
