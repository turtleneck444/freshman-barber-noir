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
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/10',
      borderColor: 'border-blue-500/30',
      gradient: 'from-blue-500/20 to-blue-600/10',
      glow: 'luxury-glow'
    },
    {
      id: 'bookings',
      label: 'Bookings',
      icon: Calendar,
      description: 'Appointments & Scheduling',
      color: 'text-emerald-400',
      bgColor: 'bg-emerald-500/10',
      borderColor: 'border-emerald-500/30',
      gradient: 'from-emerald-500/20 to-emerald-600/10',
      glow: 'luxury-glow-green',
      badge: '5'
    },
    {
      id: 'clients',
      label: 'Clients',
      icon: Users,
      description: 'Customer Management',
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/10',
      borderColor: 'border-purple-500/30',
      gradient: 'from-purple-500/20 to-purple-600/10',
      glow: 'luxury-glow-purple'
    },
    {
      id: 'services',
      label: 'Services',
      icon: Scissors,
      description: 'Service Catalog',
      color: 'text-orange-400',
      bgColor: 'bg-orange-500/10',
      borderColor: 'border-orange-500/30',
      gradient: 'from-orange-500/20 to-orange-600/10',
      glow: 'luxury-glow-orange'
    },
    {
      id: 'products',
      label: 'Products',
      icon: Package,
      description: 'E-commerce & Inventory',
      color: 'text-cyan-400',
      bgColor: 'bg-cyan-500/10',
      borderColor: 'border-cyan-500/30',
      gradient: 'from-cyan-500/20 to-cyan-600/10',
      glow: 'luxury-glow',
      badge: '3'
    },
    {
      id: 'staff',
      label: 'Staff',
      icon: UserCheck,
      description: 'Team Management',
      color: 'text-pink-400',
      bgColor: 'bg-pink-500/10',
      borderColor: 'border-pink-500/30',
      gradient: 'from-pink-500/20 to-pink-600/10',
      glow: 'luxury-glow-purple'
    },
    {
      id: 'analytics',
      label: 'Analytics',
      icon: BarChart3,
      description: 'Reports & Insights',
      color: 'text-indigo-400',
      bgColor: 'bg-indigo-500/10',
      borderColor: 'border-indigo-500/30',
      gradient: 'from-indigo-500/20 to-indigo-600/10',
      glow: 'luxury-glow'
    },
    {
      id: 'financials',
      label: 'Financials',
      icon: DollarSign,
      description: 'Revenue & Expenses',
      color: 'text-green-400',
      bgColor: 'bg-green-500/10',
      borderColor: 'border-green-500/30',
      gradient: 'from-green-500/20 to-green-600/10',
      glow: 'luxury-glow-green'
    },
    {
      id: 'settings',
      label: 'Settings',
      icon: Settings,
      description: 'System Configuration',
      color: 'text-slate-400',
      bgColor: 'bg-slate-500/10',
      borderColor: 'border-slate-500/30',
      gradient: 'from-slate-500/20 to-slate-600/10',
      glow: 'luxury-glow'
    }
  ];

  const quickActions = [
    { label: 'New Booking', icon: Plus, color: 'text-emerald-400', bgColor: 'bg-emerald-500/10', glow: 'luxury-glow-green' },
    { label: 'Add Client', icon: Users, color: 'text-blue-400', bgColor: 'bg-blue-500/10', glow: 'luxury-glow' },
    { label: 'New Service', icon: Scissors, color: 'text-orange-400', bgColor: 'bg-orange-500/10', glow: 'luxury-glow-orange' },
    { label: 'Add Product', icon: Package, color: 'text-cyan-400', bgColor: 'bg-cyan-500/10', glow: 'luxury-glow' }
  ];

  const stats = [
    { label: 'Today\'s Revenue', value: '$2,450', change: '+12%', positive: true, color: 'text-emerald-400', glow: 'luxury-glow-green' },
    { label: 'Active Bookings', value: '24', change: '+3', positive: true, color: 'text-blue-400', glow: 'luxury-glow' },
    { label: 'New Clients', value: '8', change: '+2', positive: true, color: 'text-purple-400', glow: 'luxury-glow-purple' },
    { label: 'Products Sold', value: '15', change: '-2', positive: false, color: 'text-red-400', glow: 'luxury-glow-red' }
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
      <div className={`fixed inset-y-0 left-0 z-50 w-80 luxury-sidebar transform transition-transform duration-300 ease-in-out lg:translate-x-0 ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        <div className="flex flex-col h-full">
          {/* Sidebar Header */}
          <div className="flex items-center justify-between p-6 border-b border-white/10">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-red-500 via-red-600 to-blue-500 rounded-2xl flex items-center justify-center shadow-2xl luxury-glow-red">
                <Crown className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold luxury-text-gradient luxury-text-glow">FRESHMEN Admin</h1>
                <p className="text-sm text-gray-400">Barbershop Management</p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setSidebarOpen(false)}
              className="lg:hidden text-gray-400 hover:text-white hover:bg-white/10 luxury-button"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>

          {/* Quick Stats */}
          <div className="p-6 border-b border-white/10">
            <div className="grid grid-cols-2 gap-3">
              {stats.map((stat, index) => (
                <div key={index} className={`luxury-stats-card p-4 ${stat.glow}`}>
                  <div className="text-xs text-gray-400 mb-1 font-medium">{stat.label}</div>
                  <div className="text-lg font-bold text-white mb-1">{stat.value}</div>
                  <div className={`text-xs font-medium ${stat.color}`}>
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
                  className={`w-full flex items-center space-x-3 p-4 luxury-sidebar-item ${isActive ? 'active' : ''} ${item.glow}`}
                >
                  <div className={`p-2.5 rounded-xl transition-colors ${isActive ? item.bgColor : 'bg-white/5'}`}>
                    <IconComponent className={`h-5 w-5 transition-colors ${isActive ? item.color : 'text-gray-400 group-hover:text-white'}`} />
                  </div>
                  <div className="flex-1 text-left min-w-0">
                    <div className="flex items-center space-x-2">
                      <span className={`font-medium transition-colors ${isActive ? 'text-white luxury-text-glow' : 'text-gray-300 group-hover:text-white'}`}>
                        {item.label}
                      </span>
                      {item.badge && (
                        <Badge className="luxury-badge bg-red-500/20 text-red-400 border-red-500/30 text-xs px-2 py-0.5">
                          {item.badge}
                        </Badge>
                      )}
                    </div>
                    <p className={`text-sm transition-colors ${isActive ? 'text-gray-300' : 'text-gray-500 group-hover:text-gray-400'}`}>
                      {item.description}
                    </p>
                  </div>
                  {isActive && (
                    <ChevronRight className="h-4 w-4 text-gray-400" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Quick Actions */}
          <div className="p-4 border-t border-white/10">
            <div className="text-xs font-semibold text-gray-400 mb-3 uppercase tracking-wider">
              Quick Actions
            </div>
            <div className="grid grid-cols-2 gap-2">
              {quickActions.map((action, index) => {
                const IconComponent = action.icon;
                return (
                  <Button
                    key={index}
                    variant="ghost"
                    size="sm"
                    className={`justify-start h-auto p-3 luxury-button hover:bg-white/10 transition-colors ${action.bgColor} ${action.glow}`}
                  >
                    <IconComponent className={`h-4 w-4 mr-2 ${action.color}`} />
                    <span className="text-xs text-gray-300 font-medium">{action.label}</span>
                  </Button>
                );
              })}
            </div>
          </div>

          {/* User Profile */}
          <div className="p-4 border-t border-white/10">
            <div className="flex items-center space-x-3 p-3 rounded-2xl luxury-glass">
              <Avatar className="h-10 w-10 luxury-avatar">
                <AvatarImage src={user.avatar} />
                <AvatarFallback className="bg-gradient-to-br from-red-500 to-blue-500 text-white font-semibold">
                  {user.name.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1 min-w-0">
                <div className="text-sm font-medium text-white luxury-text-glow truncate">{user.name}</div>
                <div className="text-xs text-gray-400 truncate">{user.role}</div>
              </div>
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white hover:bg-white/10 luxury-button">
                <LogOut className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="lg:pl-80">
        {/* Top Header */}
        <header className="luxury-header sticky top-0 z-30">
          <div className="flex items-center justify-between px-6 py-4">
            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setSidebarOpen(true)}
                className="lg:hidden text-gray-400 hover:text-white hover:bg-white/10 luxury-button"
              >
                <Menu className="h-5 w-5" />
              </Button>
              <div>
                <h2 className="text-2xl font-bold text-white capitalize luxury-text-glow">
                  {navigationItems.find(item => item.id === currentPage)?.label || 'Dashboard'}
                </h2>
                <p className="text-sm text-gray-400">
                  {navigationItems.find(item => item.id === currentPage)?.description || 'Overview & Analytics'}
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              {/* Search */}
              <div className="relative hidden md:block">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search..."
                  className="pl-10 w-64 luxury-input text-white placeholder-gray-400 focus:border-blue-500/50 focus:ring-blue-500/20"
                />
              </div>

              {/* Notifications */}
              <Button variant="ghost" size="sm" className="relative text-gray-400 hover:text-white hover:bg-white/10 luxury-button">
                <Bell className="h-5 w-5" />
                {notifications > 0 && (
                  <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs bg-red-500 text-white rounded-full luxury-glow-red">
                    {notifications}
                  </Badge>
                )}
              </Button>

              {/* Action Buttons */}
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white hover:bg-white/10 luxury-button">
                <RefreshCw className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white hover:bg-white/10 luxury-button">
                <Filter className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white hover:bg-white/10 luxury-button">
                <Download className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="p-6">
          <div className="max-w-7xl mx-auto">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
