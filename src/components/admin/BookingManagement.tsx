import { useState, useEffect } from 'react';
import { 
  Calendar, 
  Clock, 
  User, 
  Scissors, 
  Search, 
  Filter, 
  Plus, 
  Edit, 
  Trash2, 
  CheckCircle, 
  XCircle, 
  AlertCircle,
  Phone,
  Mail,
  MapPin,
  MoreHorizontal,
  Download,
  RefreshCw
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const BookingManagement = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [dateFilter, setDateFilter] = useState('today');
  const [selectedBookings, setSelectedBookings] = useState<string[]>([]);

  const bookings = [
    {
      id: 'BK001',
      client: {
        name: 'John Smith',
        email: 'john@email.com',
        phone: '+1 (555) 123-4567',
        avatar: '/api/placeholder/40/40'
      },
      service: {
        name: 'Haircut & Beard Trim',
        duration: 45,
        price: 65
      },
      barber: {
        name: 'Mike Johnson',
        avatar: '/api/placeholder/40/40'
      },
      date: '2024-01-15',
      time: '10:30 AM',
      status: 'confirmed',
      notes: 'Regular customer, prefers shorter on sides',
      createdAt: '2024-01-14T15:30:00Z'
    },
    {
      id: 'BK002',
      client: {
        name: 'Sarah Wilson',
        email: 'sarah@email.com',
        phone: '+1 (555) 234-5678',
        avatar: '/api/placeholder/40/40'
      },
      service: {
        name: 'Hair Styling',
        duration: 60,
        price: 85
      },
      barber: {
        name: 'Lisa Brown',
        avatar: '/api/placeholder/40/40'
      },
      date: '2024-01-15',
      time: '11:15 AM',
      status: 'in-progress',
      notes: 'Special occasion styling',
      createdAt: '2024-01-14T16:45:00Z'
    },
    {
      id: 'BK003',
      client: {
        name: 'David Lee',
        email: 'david@email.com',
        phone: '+1 (555) 345-6789',
        avatar: '/api/placeholder/40/40'
      },
      service: {
        name: 'Full Service',
        duration: 90,
        price: 120
      },
      barber: {
        name: 'Tom Davis',
        avatar: '/api/placeholder/40/40'
      },
      date: '2024-01-15',
      time: '12:00 PM',
      status: 'pending',
      notes: 'First time customer',
      createdAt: '2024-01-15T08:20:00Z'
    },
    {
      id: 'BK004',
      client: {
        name: 'Emma Taylor',
        email: 'emma@email.com',
        phone: '+1 (555) 456-7890',
        avatar: '/api/placeholder/40/40'
      },
      service: {
        name: 'Haircut',
        duration: 30,
        price: 45
      },
      barber: {
        name: 'Mike Johnson',
        avatar: '/api/placeholder/40/40'
      },
      date: '2024-01-15',
      time: '1:30 PM',
      status: 'completed',
      notes: 'Quick trim, very satisfied',
      createdAt: '2024-01-14T20:15:00Z'
    },
    {
      id: 'BK005',
      client: {
        name: 'Alex Johnson',
        email: 'alex@email.com',
        phone: '+1 (555) 567-8901',
        avatar: '/api/placeholder/40/40'
      },
      service: {
        name: 'Beard Trim',
        duration: 20,
        price: 25
      },
      barber: {
        name: 'Lisa Brown',
        avatar: '/api/placeholder/40/40'
      },
      date: '2024-01-15',
      time: '2:15 PM',
      status: 'cancelled',
      notes: 'Client cancelled due to emergency',
      createdAt: '2024-01-15T09:30:00Z'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed': return 'luxury-badge bg-emerald-500/20 text-emerald-400 border-emerald-500/30';
      case 'in-progress': return 'luxury-badge bg-blue-500/20 text-blue-400 border-blue-500/30';
      case 'pending': return 'luxury-badge bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'completed': return 'luxury-badge bg-gray-500/20 text-gray-400 border-gray-500/30';
      case 'cancelled': return 'luxury-badge bg-red-500/20 text-red-400 border-red-500/30';
      default: return 'luxury-badge bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'confirmed': return CheckCircle;
      case 'in-progress': return Clock;
      case 'pending': return AlertCircle;
      case 'completed': return CheckCircle;
      case 'cancelled': return XCircle;
      default: return AlertCircle;
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'confirmed': return 'Confirmed';
      case 'in-progress': return 'In Progress';
      case 'pending': return 'Pending';
      case 'completed': return 'Completed';
      case 'cancelled': return 'Cancelled';
      default: return 'Unknown';
    }
  };

  const filteredBookings = bookings.filter(booking => {
    const matchesSearch = booking.client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         booking.service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         booking.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || booking.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const handleSelectBooking = (bookingId: string) => {
    setSelectedBookings(prev => 
      prev.includes(bookingId) 
        ? prev.filter(id => id !== bookingId)
        : [...prev, bookingId]
    );
  };

  const handleSelectAll = () => {
    setSelectedBookings(
      selectedBookings.length === filteredBookings.length 
        ? [] 
        : filteredBookings.map(booking => booking.id)
    );
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="luxury-card p-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold text-white mb-2 luxury-text-gradient luxury-text-glow">
              Booking Management
            </h1>
            <p className="text-gray-400 text-lg">Manage appointments, schedules, and client bookings at FRESHMEN Barbershop.</p>
          </div>
          <div className="flex items-center space-x-3">
            <Button className="luxury-button-primary">
              <Plus className="h-4 w-4 mr-2" />
              New Booking
            </Button>
            <Button variant="outline" className="luxury-button border-white/20 text-gray-300 hover:bg-white/10 hover:border-white/30">
              <Download className="h-4 w-4 mr-2" />
              Export
            </Button>
          </div>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="luxury-card p-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search bookings, clients, or services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 luxury-input text-white placeholder-gray-400"
              />
            </div>
          </div>
          <div className="flex gap-3">
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-40 luxury-input text-white">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="confirmed">Confirmed</SelectItem>
                <SelectItem value="in-progress">In Progress</SelectItem>
                <SelectItem value="completed">Completed</SelectItem>
                <SelectItem value="cancelled">Cancelled</SelectItem>
              </SelectContent>
            </Select>
            <Select value={dateFilter} onValueChange={setDateFilter}>
              <SelectTrigger className="w-40 luxury-input text-white">
                <SelectValue placeholder="Date" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="today">Today</SelectItem>
                <SelectItem value="tomorrow">Tomorrow</SelectItem>
                <SelectItem value="week">This Week</SelectItem>
                <SelectItem value="month">This Month</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" className="luxury-button border-white/20 text-gray-300 hover:bg-white/10 hover:border-white/30">
              <Filter className="h-4 w-4 mr-2" />
              More Filters
            </Button>
          </div>
        </div>
      </div>

      {/* Bookings List */}
      <div className="luxury-card p-6">
        <div className="flex items-center justify-between pb-6">
          <div>
            <h2 className="text-2xl font-bold text-white luxury-text-glow">
              Bookings ({filteredBookings.length})
            </h2>
            <p className="text-gray-400 text-sm mt-1">Manage all your appointments and schedules</p>
          </div>
          <div className="flex items-center space-x-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={handleSelectAll}
              className="text-gray-400 hover:text-white hover:bg-white/10 luxury-button"
            >
              {selectedBookings.length === filteredBookings.length ? 'Deselect All' : 'Select All'}
            </Button>
            {selectedBookings.length > 0 && (
              <Button variant="outline" size="sm" className="luxury-button border-red-500/30 text-red-400 hover:bg-red-500/10">
                <Trash2 className="h-4 w-4 mr-2" />
                Delete ({selectedBookings.length})
              </Button>
            )}
          </div>
        </div>
        <div className="space-y-4">
          {filteredBookings.map((booking) => {
            const StatusIcon = getStatusIcon(booking.status);
            const isSelected = selectedBookings.includes(booking.id);
            
            return (
              <div
                key={booking.id}
                className={`luxury-card p-6 transition-all duration-300 hover:scale-[1.01] ${
                  isSelected 
                    ? 'luxury-glow border-blue-500/30' 
                    : 'luxury-glow hover:border-white/20'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <input
                      type="checkbox"
                      checked={isSelected}
                      onChange={() => handleSelectBooking(booking.id)}
                      className="w-4 h-4 text-blue-600 bg-gray-700 border-gray-600 rounded focus:ring-blue-500"
                    />
                    <Avatar className="h-12 w-12 luxury-avatar">
                      <AvatarImage src={booking.client.avatar} />
                      <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-500 text-white font-semibold">
                        {booking.client.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="flex items-center space-x-2">
                        <h3 className="font-medium text-white luxury-text-glow">{booking.client.name}</h3>
                        <Badge className={`${getStatusColor(booking.status)} text-xs`}>
                          <StatusIcon className="h-3 w-3 mr-1" />
                          {getStatusText(booking.status)}
                        </Badge>
                      </div>
                      <p className="text-sm text-gray-400">{booking.service.name}</p>
                      <div className="flex items-center space-x-4 mt-1 text-xs text-gray-500">
                        <span>#{booking.id}</span>
                        <span>Barber: {booking.barber.name}</span>
                        <span>{booking.service.duration} min</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center space-x-2 mb-2">
                      <Calendar className="h-4 w-4 text-gray-400" />
                      <span className="text-sm text-gray-300">{booking.date}</span>
                    </div>
                    <div className="flex items-center space-x-2 mb-2">
                      <Clock className="h-4 w-4 text-gray-400" />
                      <span className="text-sm text-gray-300">{booking.time}</span>
                    </div>
                    <div className="text-lg font-bold text-white luxury-text-glow">${booking.service.price}</div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white hover:bg-white/10 luxury-button">
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white hover:bg-white/10 luxury-button">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                {booking.notes && (
                  <div className="mt-4 p-3 luxury-glass rounded-xl">
                    <p className="text-sm text-gray-300">{booking.notes}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Calendar View */}
      <div className="luxury-card p-6">
        <div className="pb-6">
          <h2 className="text-2xl font-bold text-white luxury-text-glow">Calendar View</h2>
          <p className="text-gray-400 text-sm mt-1">Visual calendar for better scheduling</p>
        </div>
        <div className="h-96 flex items-center justify-center luxury-glass rounded-2xl border border-white/10">
          <div className="text-center">
            <Calendar className="h-16 w-16 text-gray-400 mx-auto mb-4 luxury-glow" />
            <p className="text-gray-400 font-medium">Calendar integration will be here</p>
            <p className="text-xs text-gray-500 mt-1">Full calendar component needed</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingManagement;
