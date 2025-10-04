import { useState } from 'react';
import { 
  Calendar as CalendarIcon,
  Clock,
  User,
  Phone,
  DollarSign,
  CheckCircle,
  AlertCircle,
  Plus,
  Search,
  Filter,
  Download,
  MoreVertical
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

const BookingManagement = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  const bookings = [
    { id: 1, client: 'John Doe', initials: 'JD', phone: '(905) 123-4567', service: 'Signature Haircut', date: 'Oct 3', time: '10:00 AM', duration: '45 min', barber: 'Shoaib Ghori', amount: '$45', avatarColor: 'bg-blue-500' },
    { id: 2, client: 'Mike Smith', initials: 'MS', phone: '(905) 234-5678', service: 'Haircut + Beard Trim', date: 'Oct 3', time: '11:30 AM', duration: '60 min', barber: 'Shoaib Ghori', amount: '$60', avatarColor: 'bg-purple-500' },
    { id: 3, client: 'David Johnson', initials: 'DJ', phone: '(905) 345-6789', service: 'Royal Package', date: 'Oct 3', time: '2:00 PM', duration: '90 min', barber: 'Shoaib Ghori', amount: '$85', avatarColor: 'bg-indigo-500' },
    { id: 4, client: 'Robert Williams', initials: 'RW', phone: '(905) 456-7890', service: 'Traditional Shave', date: 'Oct 3', time: '3:30 PM', duration: '30 min', barber: 'Shoaib Ghori', amount: '$35', avatarColor: 'bg-pink-500' },
    { id: 5, client: 'James Brown', initials: 'JB', phone: '(905) 567-8901', service: 'Beard Trim & Style', date: 'Oct 3', time: '5:00 PM', duration: '25 min', barber: 'Shoaib Ghori', amount: '$30', avatarColor: 'bg-orange-500' },
    { id: 6, client: 'Chris Anderson', initials: 'CA', phone: '(905) 678-9012', service: 'Kids Haircut', date: 'Oct 4', time: '10:00 AM', duration: '30 min', barber: 'Shoaib Ghori', amount: '$35', avatarColor: 'bg-teal-500' },
    { id: 7, client: 'Tom Wilson', initials: 'TW', phone: '(905) 789-0123', service: 'Signature Haircut', date: 'Oct 4', time: '1:00 PM', duration: '45 min', barber: 'Shoaib Ghori', amount: '$45', avatarColor: 'bg-cyan-500' }
  ];

  const stats = [
    { label: 'Total Today', value: '5', icon: CalendarIcon, color: 'text-blue-500', bgColor: 'bg-blue-50' },
    { label: 'Confirmed', value: '4', icon: CheckCircle, color: 'text-emerald-500', bgColor: 'bg-emerald-50' },
    { label: 'Pending', value: '1', icon: AlertCircle, color: 'text-amber-500', bgColor: 'bg-amber-50' },
    { label: 'Completed', value: '1', icon: CheckCircle, color: 'text-purple-500', bgColor: 'bg-purple-50' }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 mb-1" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>Booking Management</h1>
          <p className="text-sm text-gray-500" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>Manage appointments and scheduling</p>
        </div>
        <Button className="bg-red-600 text-white hover:bg-red-700 shadow-sm" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>
          <Plus className="h-4 w-4 mr-2" />
          New Booking
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
              placeholder="Search bookings..."
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
                <th className="text-left py-3 px-6 text-xs font-semibold text-gray-500 uppercase tracking-wider" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>Service</th>
                <th className="text-left py-3 px-6 text-xs font-semibold text-gray-500 uppercase tracking-wider" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>Date & Time</th>
                <th className="text-left py-3 px-6 text-xs font-semibold text-gray-500 uppercase tracking-wider" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>Duration</th>
                <th className="text-left py-3 px-6 text-xs font-semibold text-gray-500 uppercase tracking-wider" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>Barber</th>
                <th className="text-left py-3 px-6 text-xs font-semibold text-gray-500 uppercase tracking-wider" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>Amount</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {bookings.map((booking) => (
                <tr key={booking.id} className="hover:bg-gray-50 transition-colors cursor-pointer">
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-3">
                      <Avatar className={`h-10 w-10 ${booking.avatarColor} text-white font-semibold`}>
                        <AvatarFallback className="bg-transparent text-white">
                          {booking.initials}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-sm font-medium text-gray-900" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>{booking.client}</p>
                        <p className="text-xs text-gray-500" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>{booking.phone}</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <p className="text-sm text-gray-600" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>{booking.service}</p>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1 text-sm text-gray-600">
                        <CalendarIcon className="h-4 w-4 text-gray-400" />
                        <span style={{ fontFamily: 'Gotham Bold, sans-serif' }}>{booking.date}</span>
                      </div>
                      <div className="flex items-center gap-1 text-sm text-gray-600">
                        <Clock className="h-4 w-4 text-gray-400" />
                        <span style={{ fontFamily: 'Gotham Bold, sans-serif' }}>{booking.time}</span>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <p className="text-sm text-gray-600" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>{booking.duration}</p>
                  </td>
                  <td className="py-4 px-6">
                    <p className="text-sm text-gray-600" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>{booking.barber}</p>
                  </td>
                  <td className="py-4 px-6">
                    <p className="text-sm font-semibold text-gray-900" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>{booking.amount}</p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-gray-200 bg-gray-50">
          <p className="text-sm text-gray-500" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>
            Showing {bookings.length} of {bookings.length} bookings
          </p>
        </div>
      </div>
    </div>
  );
};

export default BookingManagement;
