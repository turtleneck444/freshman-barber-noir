import { useState } from 'react';
import { 
  Calendar, 
  Clock, 
  User, 
  Scissors, 
  Plus, 
  Search, 
  Filter, 
  MoreVertical,
  CheckCircle,
  XCircle,
  AlertCircle,
  Edit,
  Trash2,
  Eye
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const BookingManagement = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [dateFilter, setDateFilter] = useState('today');

  const bookings = [
    {
      id: 1,
      client: 'Mike Johnson',
      phone: '(905) 483-7374',
      email: 'mike.johnson@email.com',
      service: 'Signature Cut',
      barber: 'Alex Chen',
      date: '2024-01-15',
      time: '2:30 PM',
      duration: '45 min',
      status: 'confirmed',
      price: '$45',
      notes: 'Regular client, prefers shorter on sides'
    },
    {
      id: 2,
      client: 'David Kim',
      phone: '(905) 234-5678',
      email: 'david.kim@email.com',
      service: 'Traditional Shave',
      barber: 'Sarah Wilson',
      date: '2024-01-15',
      time: '3:00 PM',
      duration: '30 min',
      status: 'in-progress',
      price: '$35',
      notes: 'First time getting a shave'
    },
    {
      id: 3,
      client: 'Ryan Smith',
      phone: '(905) 345-6789',
      email: 'ryan.smith@email.com',
      service: 'Royal Package',
      barber: 'Alex Chen',
      date: '2024-01-15',
      time: '3:30 PM',
      duration: '90 min',
      status: 'waiting',
      price: '$80',
      notes: 'Anniversary special'
    },
    {
      id: 4,
      client: 'Tom Brown',
      phone: '(905) 456-7890',
      email: 'tom.brown@email.com',
      service: 'Beard Grooming',
      barber: 'Sarah Wilson',
      date: '2024-01-15',
      time: '4:00 PM',
      duration: '30 min',
      status: 'confirmed',
      price: '$25',
      notes: 'Beard trim and styling'
    },
    {
      id: 5,
      client: 'James Wilson',
      phone: '(905) 567-8901',
      email: 'james.wilson@email.com',
      service: 'Father & Son',
      barber: 'Mike Davis',
      date: '2024-01-15',
      time: '4:30 PM',
      duration: '60 min',
      status: 'completed',
      price: '$70',
      notes: 'Special package for father and son'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed': return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'in-progress': return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      case 'waiting': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'completed': return 'bg-purple-500/20 text-purple-400 border-purple-500/30';
      case 'cancelled': return 'bg-red-500/20 text-red-400 border-red-500/30';
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'confirmed': return <CheckCircle className="h-4 w-4" />;
      case 'in-progress': return <Clock className="h-4 w-4" />;
      case 'waiting': return <AlertCircle className="h-4 w-4" />;
      case 'completed': return <CheckCircle className="h-4 w-4" />;
      case 'cancelled': return <XCircle className="h-4 w-4" />;
      default: return <Clock className="h-4 w-4" />;
    }
  };

  const filteredBookings = bookings.filter(booking => {
    const matchesSearch = booking.client.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         booking.phone.includes(searchTerm) ||
                         booking.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || booking.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
        <div>
          <h1 className="text-3xl font-orbitron font-bold text-barbershop-white">Booking Management</h1>
          <p className="text-barbershop-gray-light">Manage all appointments and scheduling</p>
        </div>
        <Button className="bg-gradient-to-r from-barber-red to-barber-blue hover:from-barber-blue hover:to-barber-red text-white">
          <Plus className="h-5 w-5 mr-2" />
          New Booking
        </Button>
      </div>

      {/* Filters */}
      <Card className="bg-gradient-to-br from-barbershop-gray-dark/50 to-barbershop-black/50 backdrop-blur-xl border border-barber-red/30">
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-barbershop-gray" />
              <Input
                placeholder="Search bookings..."
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
                <SelectItem value="all" className="text-barbershop-white hover:bg-barber-red/20">All Status</SelectItem>
                <SelectItem value="confirmed" className="text-barbershop-white hover:bg-barber-red/20">Confirmed</SelectItem>
                <SelectItem value="in-progress" className="text-barbershop-white hover:bg-barber-red/20">In Progress</SelectItem>
                <SelectItem value="waiting" className="text-barbershop-white hover:bg-barber-red/20">Waiting</SelectItem>
                <SelectItem value="completed" className="text-barbershop-white hover:bg-barber-red/20">Completed</SelectItem>
                <SelectItem value="cancelled" className="text-barbershop-white hover:bg-barber-red/20">Cancelled</SelectItem>
              </SelectContent>
            </Select>

            <Select value={dateFilter} onValueChange={setDateFilter}>
              <SelectTrigger className="bg-barbershop-black/50 border-barber-red/30 text-barbershop-white">
                <SelectValue placeholder="Filter by date" />
              </SelectTrigger>
              <SelectContent className="bg-barbershop-black border-barber-red/30">
                <SelectItem value="today" className="text-barbershop-white hover:bg-barber-red/20">Today</SelectItem>
                <SelectItem value="tomorrow" className="text-barbershop-white hover:bg-barber-red/20">Tomorrow</SelectItem>
                <SelectItem value="week" className="text-barbershop-white hover:bg-barber-red/20">This Week</SelectItem>
                <SelectItem value="month" className="text-barbershop-white hover:bg-barber-red/20">This Month</SelectItem>
              </SelectContent>
            </Select>

            <Button variant="outline" className="border-barber-red/30 text-barbershop-white hover:border-barber-red hover:bg-barber-red/20">
              <Filter className="h-4 w-4 mr-2" />
              More Filters
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Bookings List */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {filteredBookings.map((booking) => (
          <Card key={booking.id} className="bg-gradient-to-br from-barbershop-gray-dark/50 to-barbershop-black/50 backdrop-blur-xl border border-barber-red/30 hover:border-barber-red/60 transition-all duration-300 hover:shadow-glow">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-barber-red to-barber-blue rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">
                      {booking.client.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-barbershop-white">{booking.client}</h3>
                    <p className="text-sm text-barbershop-gray-light">{booking.phone}</p>
                  </div>
                </div>
                <Button variant="ghost" size="sm" className="text-barbershop-gray hover:text-barber-red">
                  <MoreVertical className="h-4 w-4" />
                </Button>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-4">
              {/* Service Info */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-barbershop-gray-light">Service</span>
                  <span className="text-sm font-semibold text-barbershop-white">{booking.service}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-barbershop-gray-light">Barber</span>
                  <span className="text-sm text-barber-red">{booking.barber}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-barbershop-gray-light">Time</span>
                  <span className="text-sm text-barbershop-white">{booking.time}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-barbershop-gray-light">Duration</span>
                  <span className="text-sm text-barbershop-white">{booking.duration}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-barbershop-gray-light">Price</span>
                  <span className="text-sm font-bold text-barber-red">{booking.price}</span>
                </div>
              </div>

              {/* Status */}
              <div className="flex items-center justify-between">
                <Badge className={`${getStatusColor(booking.status)} flex items-center space-x-1`}>
                  {getStatusIcon(booking.status)}
                  <span>{booking.status.replace('-', ' ')}</span>
                </Badge>
              </div>

              {/* Notes */}
              {booking.notes && (
                <div className="p-3 bg-barbershop-black/50 rounded-lg border border-barber-red/20">
                  <p className="text-xs text-barbershop-gray-light">{booking.notes}</p>
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

      {/* Calendar View Toggle */}
      <Card className="bg-gradient-to-br from-barbershop-gray-dark/50 to-barbershop-black/50 backdrop-blur-xl border border-barber-blue/30">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-barbershop-white">Calendar View</h3>
              <p className="text-sm text-barbershop-gray-light">Switch to calendar view for better scheduling</p>
            </div>
            <Button className="bg-gradient-to-r from-barber-blue to-barber-red hover:from-barber-red hover:to-barber-blue text-white">
              <Calendar className="h-5 w-5 mr-2" />
              Open Calendar
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default BookingManagement;
