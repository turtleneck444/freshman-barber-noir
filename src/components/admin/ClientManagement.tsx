import { useState, useEffect } from 'react';
import { 
  Users, 
  Search, 
  Filter, 
  Plus, 
  Edit, 
  Trash2, 
  Eye, 
  Phone, 
  Mail, 
  MapPin, 
  Calendar, 
  DollarSign, 
  Star,
  MoreHorizontal,
  Download,
  RefreshCw,
  UserPlus,
  History,
  Heart
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';

const ClientManagement = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [sortBy, setSortBy] = useState('name');
  const [selectedClients, setSelectedClients] = useState<string[]>([]);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const clients = [
    {
      id: 'CL001',
      name: 'John Smith',
      email: 'john@email.com',
      phone: '+1 (555) 123-4567',
      avatar: '/api/placeholder/40/40',
      joinDate: '2023-06-15',
      lastVisit: '2024-01-10',
      totalVisits: 24,
      totalSpent: 1560,
      status: 'active',
      loyaltyPoints: 1250,
      preferredBarber: 'Mike Johnson',
      notes: 'Regular customer, prefers shorter on sides',
      address: '123 Main St, Toronto, ON',
      birthday: '1985-03-15',
      services: ['Haircut', 'Beard Trim', 'Hair Styling']
    },
    {
      id: 'CL002',
      name: 'Sarah Wilson',
      email: 'sarah@email.com',
      phone: '+1 (555) 234-5678',
      avatar: '/api/placeholder/40/40',
      joinDate: '2023-08-22',
      lastVisit: '2024-01-12',
      totalVisits: 18,
      totalSpent: 1280,
      status: 'active',
      loyaltyPoints: 980,
      preferredBarber: 'Lisa Brown',
      notes: 'Special occasion styling expert',
      address: '456 Oak Ave, Toronto, ON',
      birthday: '1990-07-22',
      services: ['Hair Styling', 'Haircut', 'Hair Wash']
    },
    {
      id: 'CL003',
      name: 'David Lee',
      email: 'david@email.com',
      phone: '+1 (555) 345-6789',
      avatar: '/api/placeholder/40/40',
      joinDate: '2024-01-05',
      lastVisit: '2024-01-14',
      totalVisits: 3,
      totalSpent: 240,
      status: 'new',
      loyaltyPoints: 120,
      preferredBarber: 'Tom Davis',
      notes: 'First time customer, very satisfied',
      address: '789 Pine St, Toronto, ON',
      birthday: '1988-11-10',
      services: ['Full Service', 'Haircut']
    },
    {
      id: 'CL004',
      name: 'Emma Taylor',
      email: 'emma@email.com',
      phone: '+1 (555) 456-7890',
      avatar: '/api/placeholder/40/40',
      joinDate: '2023-12-01',
      lastVisit: '2024-01-08',
      totalVisits: 8,
      totalSpent: 480,
      status: 'active',
      loyaltyPoints: 320,
      preferredBarber: 'Mike Johnson',
      notes: 'Quick trim customer, very punctual',
      address: '321 Elm St, Toronto, ON',
      birthday: '1992-05-18',
      services: ['Haircut', 'Hair Wash']
    },
    {
      id: 'CL005',
      name: 'Alex Johnson',
      email: 'alex@email.com',
      phone: '+1 (555) 567-8901',
      avatar: '/api/placeholder/40/40',
      joinDate: '2023-09-10',
      lastVisit: '2023-12-20',
      totalVisits: 12,
      totalSpent: 720,
      status: 'inactive',
      loyaltyPoints: 480,
      preferredBarber: 'Lisa Brown',
      notes: 'Moved to different city',
      address: '654 Maple Ave, Toronto, ON',
      birthday: '1987-09-25',
      services: ['Beard Trim', 'Haircut']
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'new': return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      case 'inactive': return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
      case 'vip': return 'bg-purple-500/20 text-purple-400 border-purple-500/30';
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'active': return 'Active';
      case 'new': return 'New';
      case 'inactive': return 'Inactive';
      case 'vip': return 'VIP';
      default: return 'Unknown';
    }
  };

  const filteredClients = clients.filter(client => {
    const matchesSearch = client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         client.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         client.phone.includes(searchTerm) ||
                         client.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || client.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const handleSelectClient = (clientId: string) => {
    setSelectedClients(prev => 
      prev.includes(clientId) 
        ? prev.filter(id => id !== clientId)
        : [...prev, clientId]
    );
  };

  const handleSelectAll = () => {
    setSelectedClients(
      selectedClients.length === filteredClients.length 
        ? [] 
        : filteredClients.map(client => client.id)
    );
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const getDaysSinceLastVisit = (lastVisit: string) => {
    const today = new Date();
    const lastVisitDate = new Date(lastVisit);
    const diffTime = Math.abs(today.getTime() - lastVisitDate.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white">Client Management</h1>
          <p className="text-slate-400">Manage your client database, profiles, and relationships.</p>
        </div>
        <div className="flex items-center space-x-3">
          <Button className="bg-blue-600 hover:bg-blue-700">
            <UserPlus className="h-4 w-4 mr-2" />
            Add Client
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
                <p className="text-sm font-medium text-slate-400">Total Clients</p>
                <p className="text-2xl font-bold text-white">{clients.length}</p>
                <p className="text-xs text-green-400">+12% this month</p>
              </div>
              <Users className="h-8 w-8 text-blue-500" />
            </div>
          </CardContent>
        </Card>
        <Card className="bg-slate-800/50 border-slate-700/50">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-400">Active Clients</p>
                <p className="text-2xl font-bold text-white">{clients.filter(c => c.status === 'active').length}</p>
                <p className="text-xs text-green-400">+8% this month</p>
              </div>
              <Heart className="h-8 w-8 text-green-500" />
            </div>
          </CardContent>
        </Card>
        <Card className="bg-slate-800/50 border-slate-700/50">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-400">New This Month</p>
                <p className="text-2xl font-bold text-white">{clients.filter(c => c.status === 'new').length}</p>
                <p className="text-xs text-blue-400">+3 this week</p>
              </div>
              <UserPlus className="h-8 w-8 text-purple-500" />
            </div>
          </CardContent>
        </Card>
        <Card className="bg-slate-800/50 border-slate-700/50">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-400">Total Revenue</p>
                <p className="text-2xl font-bold text-white">${clients.reduce((sum, client) => sum + client.totalSpent, 0).toLocaleString()}</p>
                <p className="text-xs text-green-400">+15% this month</p>
              </div>
              <DollarSign className="h-8 w-8 text-emerald-500" />
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
                  placeholder="Search clients by name, email, or phone..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 bg-slate-700/50 border-slate-600 text-white placeholder-slate-400"
                />
              </div>
            </div>
            <div className="flex gap-3">
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-40 bg-slate-700/50 border-slate-600 text-white">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="new">New</SelectItem>
                  <SelectItem value="inactive">Inactive</SelectItem>
                  <SelectItem value="vip">VIP</SelectItem>
                </SelectContent>
              </Select>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-40 bg-slate-700/50 border-slate-600 text-white">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="name">Name</SelectItem>
                  <SelectItem value="lastVisit">Last Visit</SelectItem>
                  <SelectItem value="totalSpent">Total Spent</SelectItem>
                  <SelectItem value="joinDate">Join Date</SelectItem>
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

      {/* Clients Grid/List */}
      <Card className="bg-slate-800/50 border-slate-700/50">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-white">
              Clients ({filteredClients.length})
            </CardTitle>
            <div className="flex items-center space-x-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={handleSelectAll}
                className="text-slate-400 hover:text-white"
              >
                {selectedClients.length === filteredClients.length ? 'Deselect All' : 'Select All'}
              </Button>
              {selectedClients.length > 0 && (
                <Button variant="outline" size="sm" className="border-red-500/30 text-red-400 hover:bg-red-500/10">
                  <Trash2 className="h-4 w-4 mr-2" />
                  Delete ({selectedClients.length})
                </Button>
              )}
            </div>
          </div>
        </CardHeader>
        <CardContent>
          {viewMode === 'grid' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredClients.map((client) => {
                const isSelected = selectedClients.includes(client.id);
                const daysSinceLastVisit = getDaysSinceLastVisit(client.lastVisit);
                
                return (
                  <div
                    key={client.id}
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
                          onChange={() => handleSelectClient(client.id)}
                          className="w-4 h-4 text-blue-600 bg-slate-700 border-slate-600 rounded focus:ring-blue-500"
                        />
                        <Avatar className="h-12 w-12">
                          <AvatarImage src={client.avatar} />
                          <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-500 text-white">
                            {client.name.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge className={`${getStatusColor(client.status)} text-xs`}>
                          {getStatusText(client.status)}
                        </Badge>
                        <Button variant="ghost" size="sm" className="text-slate-400 hover:text-white">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <div>
                        <h3 className="font-medium text-white">{client.name}</h3>
                        <p className="text-sm text-slate-400">#{client.id}</p>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2 text-sm text-slate-400">
                          <Mail className="h-4 w-4" />
                          <span>{client.email}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-sm text-slate-400">
                          <Phone className="h-4 w-4" />
                          <span>{client.phone}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-sm text-slate-400">
                          <MapPin className="h-4 w-4" />
                          <span>{client.address}</span>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4 pt-3 border-t border-slate-600/30">
                        <div>
                          <p className="text-xs text-slate-500">Total Visits</p>
                          <p className="text-sm font-medium text-white">{client.totalVisits}</p>
                        </div>
                        <div>
                          <p className="text-xs text-slate-500">Total Spent</p>
                          <p className="text-sm font-medium text-white">${client.totalSpent}</p>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-slate-400">Loyalty Points</span>
                          <span className="text-white font-medium">{client.loyaltyPoints}</span>
                        </div>
                        <Progress value={(client.loyaltyPoints / 2000) * 100} className="h-2" />
                      </div>
                      
                      <div className="text-xs text-slate-500">
                        <p>Last visit: {daysSinceLastVisit} days ago</p>
                        <p>Preferred barber: {client.preferredBarber}</p>
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
                        <History className="h-4 w-4 mr-1" />
                        History
                      </Button>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="space-y-4">
              {filteredClients.map((client) => {
                const isSelected = selectedClients.includes(client.id);
                const daysSinceLastVisit = getDaysSinceLastVisit(client.lastVisit);
                
                return (
                  <div
                    key={client.id}
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
                          onChange={() => handleSelectClient(client.id)}
                          className="w-4 h-4 text-blue-600 bg-slate-700 border-slate-600 rounded focus:ring-blue-500"
                        />
                        <Avatar className="h-10 w-10">
                          <AvatarImage src={client.avatar} />
                          <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-500 text-white">
                            {client.name.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="flex items-center space-x-2">
                            <h3 className="font-medium text-white">{client.name}</h3>
                            <Badge className={`${getStatusColor(client.status)} text-xs`}>
                              {getStatusText(client.status)}
                            </Badge>
                          </div>
                          <p className="text-sm text-slate-400">{client.email}</p>
                          <p className="text-xs text-slate-500">#{client.id}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center space-x-4">
                          <div className="text-sm">
                            <p className="text-slate-400">Total Spent</p>
                            <p className="text-white font-medium">${client.totalSpent}</p>
                          </div>
                          <div className="text-sm">
                            <p className="text-slate-400">Visits</p>
                            <p className="text-white font-medium">{client.totalVisits}</p>
                          </div>
                          <div className="text-sm">
                            <p className="text-slate-400">Last Visit</p>
                            <p className="text-white font-medium">{daysSinceLastVisit} days ago</p>
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

export default ClientManagement;
