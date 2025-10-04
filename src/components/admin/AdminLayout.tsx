import { useState, useEffect } from 'react';
import { 
  LayoutDashboard, 
  Calendar, 
  Users, 
  Scissors, 
  Package, 
  UserCheck, 
  BarChart3, 
  DollarSign, 
  Settings, 
  Menu, 
  X, 
  LogOut, 
  Bell, 
  Search,
  Plus,
  Filter,
  Download,
  Upload,
  RefreshCw,
  ChevronRight,
  Zap,
  Crown
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
import AIChatAgent from './AIChatAgent';

interface AdminLayoutProps {
  children: React.ReactNode;
  currentPage: string;
  onPageChange: (page: string) => void;
}

const AdminLayout = ({ children, currentPage, onPageChange }: AdminLayoutProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [notifications, setNotifications] = useState(12);
  const [user, setUser] = useState({
    name: 'Admin User',
    email: 'admin@freshmenbarber.com',
    avatar: '/api/placeholder/40/40',
    role: 'Super Admin'
  });

  const navigationItems = [
    {
      id: 'dashboard',
      label: 'Dashboard',
      icon: LayoutDashboard,
      description: 'Overview & Analytics',
      color: 'text-red-400',
      bgColor: 'bg-red-500/10',
      borderColor: 'border-red-500/30',
      gradient: 'from-red-500/20 to-red-600/10',
      glow: 'barbershop-glow'
    },
    {
      id: 'bookings',
      label: 'Bookings',
      icon: Calendar,
      description: 'Appointments & Scheduling',
      color: 'text-red-400',
      bgColor: 'bg-red-500/10',
      borderColor: 'border-red-500/30',
      gradient: 'from-red-500/20 to-red-600/10',
      glow: 'barbershop-glow',
      badge: '5'
    },
    {
      id: 'clients',
      label: 'Clients',
      icon: Users,
      description: 'Customer Management',
      color: 'text-red-400',
      bgColor: 'bg-red-500/10',
      borderColor: 'border-red-500/30',
      gradient: 'from-red-500/20 to-red-600/10',
      glow: 'barbershop-glow'
    },
    {
      id: 'services',
      label: 'Services',
      icon: Scissors,
      description: 'Service Catalog',
      color: 'text-red-400',
      bgColor: 'bg-red-500/10',
      borderColor: 'border-red-500/30',
      gradient: 'from-red-500/20 to-red-600/10',
      glow: 'barbershop-glow'
    },
    {
      id: 'products',
      label: 'Products',
      icon: Package,
      description: 'E-commerce & Inventory',
      color: 'text-red-400',
      bgColor: 'bg-red-500/10',
      borderColor: 'border-red-500/30',
      gradient: 'from-red-500/20 to-red-600/10',
      glow: 'barbershop-glow',
      badge: '3'
    },
    {
      id: 'staff',
      label: 'Staff',
      icon: UserCheck,
      description: 'Team Management',
      color: 'text-red-400',
      bgColor: 'bg-red-500/10',
      borderColor: 'border-red-500/30',
      gradient: 'from-red-500/20 to-red-600/10',
      glow: 'barbershop-glow'
    },
    {
      id: 'analytics',
      label: 'Analytics',
      icon: BarChart3,
      description: 'Reports & Insights',
      color: 'text-red-400',
      bgColor: 'bg-red-500/10',
      borderColor: 'border-red-500/30',
      gradient: 'from-red-500/20 to-red-600/10',
      glow: 'barbershop-glow'
    },
    {
      id: 'financials',
      label: 'Financials',
      icon: DollarSign,
      description: 'Revenue & Expenses',
      color: 'text-red-400',
      bgColor: 'bg-red-500/10',
      borderColor: 'border-red-500/30',
      gradient: 'from-red-500/20 to-red-600/10',
      glow: 'barbershop-glow'
    },
    {
      id: 'settings',
      label: 'Settings',
      icon: Settings,
      description: 'System Configuration',
      color: 'text-gray-400',
      bgColor: 'bg-gray-500/10',
      borderColor: 'border-gray-500/30',
      gradient: 'from-gray-500/20 to-gray-600/10',
      glow: 'barbershop-glow'
    }
  ];

  const quickActions = [
    { label: 'New Booking', icon: Plus, color: 'text-red-400', bgColor: 'bg-red-500/10', glow: 'barbershop-glow', action: () => onPageChange('bookings') },
    { label: 'Add Client', icon: Users, color: 'text-red-400', bgColor: 'bg-red-500/10', glow: 'barbershop-glow', action: () => onPageChange('clients') },
    { label: 'New Service', icon: Scissors, color: 'text-red-400', bgColor: 'bg-red-500/10', glow: 'barbershop-glow', action: () => onPageChange('services') },
    { label: 'Add Product', icon: Package, color: 'text-red-400', bgColor: 'bg-red-500/10', glow: 'barbershop-glow', action: () => onPageChange('products') }
  ];

  const stats = [
    { label: 'Today\'s Revenue', value: '$2,450', change: '+12%', positive: true, color: 'text-red-400', glow: 'barbershop-glow' },
    { label: 'Active Bookings', value: '24', change: '+3', positive: true, color: 'text-red-400', glow: 'barbershop-glow' },
    { label: 'New Clients', value: '8', change: '+2', positive: true, color: 'text-red-400', glow: 'barbershop-glow' },
    { label: 'Products Sold', value: '15', change: '-2', positive: false, color: 'text-gray-400', glow: '' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-20 w-80 bg-white border-r border-gray-200 shadow-xl transform transition-transform duration-300 ease-in-out lg:translate-x-0 ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        <div className="flex flex-col h-full pt-20">
          {/* Sidebar Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <div>
              <h1 className="text-xl font-bold text-gray-900" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>Admin Panel</h1>
              <p className="text-sm text-gray-600" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>Management Dashboard</p>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setSidebarOpen(false)}
              className="lg:hidden text-gray-600 hover:text-gray-900 hover:bg-gray-100"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>

          {/* Quick Stats */}
          <div className="p-6 border-b border-gray-200">
            <div className="grid grid-cols-2 gap-3">
              {stats.map((stat, index) => (
                <div key={index} className="bg-gradient-to-br from-red-50 to-white p-4 rounded-xl border border-red-100 hover:border-red-300 hover:shadow-md transition-all duration-300">
                  <div className="text-xs text-gray-600 mb-1 font-medium" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>{stat.label}</div>
                  <div className="text-lg font-bold text-gray-900 mb-1" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>{stat.value}</div>
                  <div className="text-xs font-medium text-red-600" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>
                    {stat.change}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex-1 overflow-y-auto p-4 space-y-2">
            {navigationItems.map((item) => {
              const IconComponent = item.icon;
              const isActive = currentPage === item.id;
              
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    onPageChange(item.id);
                    setSidebarOpen(false);
                  }}
                  className={`w-full flex items-center space-x-3 p-4 rounded-xl transition-all duration-300 ${
                    isActive 
                      ? 'bg-red-600 shadow-lg shadow-red-600/30' 
                      : 'hover:bg-gray-100'
                  }`}
                >
                  <div className={`p-2.5 rounded-xl transition-colors ${isActive ? 'bg-red-700' : 'bg-gray-100'}`}>
                    <IconComponent className={`h-5 w-5 transition-colors ${isActive ? 'text-white' : 'text-gray-600 group-hover:text-gray-900'}`} />
                  </div>
                  <div className="flex-1 text-left min-w-0">
                    <div className="flex items-center space-x-2">
                      <span className={`font-semibold transition-colors ${isActive ? 'text-white' : 'text-gray-900'}`} style={{ fontFamily: 'Gotham Bold, sans-serif' }}>
                        {item.label}
                      </span>
                      {item.badge && (
                        <Badge className="bg-red-100 text-red-600 border-red-200 text-xs px-2 py-0.5 rounded-full">
                          {item.badge}
                        </Badge>
                      )}
                    </div>
                    <p className={`text-xs transition-colors ${isActive ? 'text-red-100' : 'text-gray-600'}`} style={{ fontFamily: 'Gotham Bold, sans-serif' }}>
                      {item.description}
                    </p>
                  </div>
                  {isActive && (
                    <ChevronRight className="h-4 w-4 text-white" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Quick Actions */}
          {/* Quick Actions - Removed to match clean design reference */}

          {/* User Profile */}
          <div className="p-4 border-t border-gray-200">
            <div className="flex items-center space-x-3 p-3 rounded-xl bg-gray-50 border border-gray-200 hover:bg-gray-100 transition-all duration-300">
              <Avatar className="h-10 w-10 ring-2 ring-red-200">
                <AvatarImage src={user.avatar} />
                <AvatarFallback className="bg-gradient-to-br from-red-500 to-red-600 text-white font-semibold">
                  {user.name.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1 min-w-0">
                <div className="text-sm font-bold text-gray-900 truncate" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>{user.name}</div>
                <div className="text-xs text-gray-600 truncate" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>{user.role}</div>
              </div>
              <Button variant="ghost" size="sm" className="text-gray-600 hover:text-red-600 hover:bg-red-50">
                <LogOut className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Powerful Admin Toolbar Header - Full Width */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-40 shadow-md fixed w-full">
        <div className="w-full">
          <div className="flex items-center justify-between px-6 py-4">
            {/* Left: Logo & Page Title */}
            <div className="flex items-center space-x-6">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setSidebarOpen(true)}
                className="lg:hidden text-gray-600 hover:text-gray-900 hover:bg-gray-100"
              >
                <Menu className="h-5 w-5" />
              </Button>
              
              {/* Logo */}
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12">
                  <img 
                    src="/logo.png" 
                    alt="Freshmen Barbershop" 
                    className="w-full h-full object-contain"
                  />
                </div>
                <Separator orientation="vertical" className="h-8 bg-gray-300" />
                <div>
                  <h2 className="text-xl font-bold text-gray-900 capitalize" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>
                    {navigationItems.find(item => item.id === currentPage)?.label || 'Dashboard'}
                  </h2>
                  <p className="text-xs text-gray-600" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>
                    {navigationItems.find(item => item.id === currentPage)?.description || 'Overview & Analytics'}
                  </p>
                </div>
              </div>
            </div>

            {/* Center: Search & Quick Actions */}
            <div className="flex items-center space-x-3 flex-1 justify-center max-w-2xl">
              <div className="relative w-full max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search bookings, clients, services..."
                  className="pl-10 w-full bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-500 focus:border-red-500 focus:ring-red-500/20"
                  style={{ fontFamily: 'Gotham Bold, sans-serif' }}
                />
              </div>
              
              {/* Quick Action Buttons */}
              <Button 
                size="sm" 
                onClick={() => onPageChange('bookings')}
                className="bg-red-600 hover:bg-red-700 text-white shadow-sm hidden xl:flex"
                style={{ fontFamily: 'Gotham Bold, sans-serif' }}
              >
                <Plus className="h-4 w-4 mr-2" />
                New Booking
              </Button>
              <Button 
                size="sm"
                variant="outline"
                onClick={() => onPageChange('clients')}
                className="border-gray-300 text-gray-700 hover:bg-gray-100 hidden xl:flex"
                style={{ fontFamily: 'Gotham Bold, sans-serif' }}
              >
                <Users className="h-4 w-4 mr-2" />
                Add Client
              </Button>
            </div>

            {/* Right: Toolbar Actions & User */}
            <div className="flex items-center space-x-2">
              {/* Notifications */}
              <Button variant="ghost" size="sm" className="relative text-gray-600 hover:text-gray-900 hover:bg-gray-100">
                <Bell className="h-5 w-5" />
                {notifications > 0 && (
                  <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs bg-red-600 text-white rounded-full animate-pulse">
                    {notifications}
                  </Badge>
                )}
              </Button>

              {/* Refresh */}
              <Button variant="ghost" size="sm" className="text-gray-600 hover:text-gray-900 hover:bg-gray-100">
                <RefreshCw className="h-4 w-4" />
              </Button>

              {/* Filter */}
              <Button variant="ghost" size="sm" className="text-gray-600 hover:text-gray-900 hover:bg-gray-100">
                <Filter className="h-4 w-4" />
              </Button>

              {/* Export */}
              <Button variant="ghost" size="sm" className="text-gray-600 hover:text-gray-900 hover:bg-gray-100">
                <Download className="h-4 w-4" />
              </Button>

              {/* Upload */}
              <Button variant="ghost" size="sm" className="text-gray-600 hover:text-gray-900 hover:bg-gray-100">
                <Upload className="h-4 w-4" />
              </Button>

              <Separator orientation="vertical" className="h-8 bg-gray-300" />

              {/* User Profile */}
              <div className="flex items-center space-x-3 pl-2">
                <Avatar className="h-9 w-9 ring-2 ring-gray-200">
                  <AvatarImage src={user.avatar} />
                  <AvatarFallback className="bg-gradient-to-br from-red-500 to-blue-500 text-white text-sm font-semibold">
                    {user.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <div className="hidden lg:block">
                  <div className="text-sm font-bold text-gray-900" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>{user.name}</div>
                  <div className="text-xs text-gray-600" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>{user.role}</div>
                </div>
                <Button variant="ghost" size="sm" className="text-gray-600 hover:text-red-600 hover:bg-red-50">
                  <LogOut className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="lg:pl-80 pt-20 bg-gray-50 min-h-screen">
        {/* Page Content */}
        <main className="px-6 pb-6">
          <div className="max-w-7xl mx-auto">
            {children}
          </div>
        </main>
      </div>

      {/* AI Chat Agent */}
      <AIChatAgent />
    </div>
  );
};

export default AdminLayout;
