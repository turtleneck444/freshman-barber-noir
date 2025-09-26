import { useState } from 'react';
import { 
  Package, 
  Search, 
  Filter, 
  Plus, 
  Edit, 
  Trash2, 
  Eye, 
  DollarSign, 
  Star,
  MoreHorizontal,
  Download,
  RefreshCw,
  Settings,
  TrendingUp,
  ShoppingCart,
  AlertCircle
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Progress } from '@/components/ui/progress';

const ProductManagement = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');

  const products = [
    {
      id: 'PR001',
      name: 'Premium Hair Oil',
      description: 'Natural hair oil for styling and nourishment',
      category: 'Hair Care',
      price: 29.99,
      stock: 45,
      status: 'active',
      sales: 23,
      revenue: 689.77,
      image: '/api/placeholder/300/200',
      rating: 4.8,
      reviews: 156
    },
    {
      id: 'PR002',
      name: 'Beard Balm',
      description: 'Moisturizing beard balm with natural ingredients',
      category: 'Beard Care',
      price: 24.99,
      stock: 32,
      status: 'active',
      sales: 18,
      revenue: 449.82,
      image: '/api/placeholder/300/200',
      rating: 4.6,
      reviews: 89
    },
    {
      id: 'PR003',
      name: 'Styling Gel',
      description: 'Strong hold styling gel for all hair types',
      category: 'Hair Care',
      price: 19.99,
      stock: 0,
      status: 'out-of-stock',
      sales: 0,
      revenue: 0,
      image: '/api/placeholder/300/200',
      rating: 4.4,
      reviews: 67
    },
    {
      id: 'PR004',
      name: 'Barber Scissors',
      description: 'Professional grade barber scissors',
      category: 'Tools',
      price: 89.99,
      stock: 8,
      status: 'low-stock',
      sales: 5,
      revenue: 449.95,
      image: '/api/placeholder/300/200',
      rating: 4.9,
      reviews: 23
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30';
      case 'low-stock': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'out-of-stock': return 'bg-red-500/20 text-red-400 border-red-500/30';
      case 'inactive': return 'bg-slate-500/20 text-slate-400 border-slate-500/30';
      default: return 'bg-slate-500/20 text-slate-400 border-slate-500/30';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'active': return 'Active';
      case 'low-stock': return 'Low Stock';
      case 'out-of-stock': return 'Out of Stock';
      case 'inactive': return 'Inactive';
      default: return 'Unknown';
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Hair Care': return 'text-blue-500 bg-blue-500/10';
      case 'Beard Care': return 'text-orange-500 bg-orange-500/10';
      case 'Tools': return 'text-purple-500 bg-purple-500/10';
      default: return 'text-slate-500 bg-slate-500/10';
    }
  };

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter === 'all' || product.category === categoryFilter;
    const matchesStatus = statusFilter === 'all' || product.status === statusFilter;
    return matchesSearch && matchesCategory && matchesStatus;
  });

  const totalRevenue = products.reduce((sum, product) => sum + product.revenue, 0);
  const totalSales = products.reduce((sum, product) => sum + product.sales, 0);
  const totalStock = products.reduce((sum, product) => sum + product.stock, 0);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Product Management</h1>
          <p className="text-slate-400 text-lg">Manage your e-commerce products and inventory.</p>
        </div>
        <div className="flex items-center space-x-3">
          <Button className="bg-cyan-600 hover:bg-cyan-700 rounded-xl">
            <Plus className="h-4 w-4 mr-2" />
            New Product
          </Button>
          <Button variant="outline" className="border-slate-700/50 text-slate-300 hover:bg-slate-800/50 hover:border-slate-600/50 rounded-xl">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="bg-slate-800/40 border-slate-700/30 hover:border-slate-600/40 transition-colors">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-400">Total Products</p>
                <p className="text-2xl font-bold text-white">{products.length}</p>
                <p className="text-xs text-emerald-400">+2 this month</p>
              </div>
              <Package className="h-8 w-8 text-cyan-500" />
            </div>
          </CardContent>
        </Card>
        <Card className="bg-slate-800/40 border-slate-700/30 hover:border-slate-600/40 transition-colors">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-400">Total Sales</p>
                <p className="text-2xl font-bold text-white">{totalSales}</p>
                <p className="text-xs text-emerald-400">+18% this month</p>
              </div>
              <ShoppingCart className="h-8 w-8 text-emerald-500" />
            </div>
          </CardContent>
        </Card>
        <Card className="bg-slate-800/40 border-slate-700/30 hover:border-slate-600/40 transition-colors">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-400">Total Revenue</p>
                <p className="text-2xl font-bold text-white">${totalRevenue.toFixed(2)}</p>
                <p className="text-xs text-emerald-400">+25% this month</p>
              </div>
              <DollarSign className="h-8 w-8 text-green-500" />
            </div>
          </CardContent>
        </Card>
        <Card className="bg-slate-800/40 border-slate-700/30 hover:border-slate-600/40 transition-colors">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-400">Total Stock</p>
                <p className="text-2xl font-bold text-white">{totalStock}</p>
                <p className="text-xs text-yellow-400">3 low stock</p>
              </div>
              <AlertCircle className="h-8 w-8 text-yellow-500" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filters and Search */}
      <Card className="bg-slate-800/40 border-slate-700/30 hover:border-slate-600/40 transition-colors">
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
                <Input
                  placeholder="Search products by name or description..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 bg-slate-700/50 border-slate-600/50 text-white placeholder-slate-400 focus:border-cyan-500/50 focus:ring-cyan-500/20 rounded-xl"
                />
              </div>
            </div>
            <div className="flex gap-3">
              <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                <SelectTrigger className="w-40 bg-slate-700/50 border-slate-600/50 text-white rounded-xl">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="Hair Care">Hair Care</SelectItem>
                  <SelectItem value="Beard Care">Beard Care</SelectItem>
                  <SelectItem value="Tools">Tools</SelectItem>
                </SelectContent>
              </Select>
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-40 bg-slate-700/50 border-slate-600/50 text-white rounded-xl">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="low-stock">Low Stock</SelectItem>
                  <SelectItem value="out-of-stock">Out of Stock</SelectItem>
                  <SelectItem value="inactive">Inactive</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline" className="border-slate-700/50 text-slate-300 hover:bg-slate-800/50 hover:border-slate-600/50 rounded-xl">
                <Filter className="h-4 w-4 mr-2" />
                More Filters
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Products Grid */}
      <Card className="bg-slate-800/40 border-slate-700/30 hover:border-slate-600/40 transition-colors">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-white text-xl">Products ({filteredProducts.length})</CardTitle>
            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="sm" className="text-slate-400 hover:text-white hover:bg-slate-700/50">
                <RefreshCw className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="p-6 rounded-xl border border-slate-600/20 bg-slate-700/30 hover:bg-slate-700/50 transition-colors"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-16 h-16 bg-slate-600 rounded-lg flex items-center justify-center">
                      <Package className="h-8 w-8 text-slate-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">{product.name}</h3>
                      <p className="text-sm text-slate-400">#{product.id}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge className={`${getStatusColor(product.status)} text-xs`}>
                      {getStatusText(product.status)}
                    </Badge>
                    <Button variant="ghost" size="sm" className="text-slate-400 hover:text-white">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <p className="text-sm text-slate-400">{product.description}</p>
                  
                  <Badge className={`${getCategoryColor(product.category)} text-xs`}>
                    {product.category}
                  </Badge>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-xs text-slate-500">Price</p>
                      <p className="text-lg font-bold text-white">${product.price}</p>
                    </div>
                    <div>
                      <p className="text-xs text-slate-500">Stock</p>
                      <p className="text-lg font-bold text-white">{product.stock}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-400">Sales</span>
                      <span className="text-white font-medium">{product.sales}</span>
                    </div>
                    <Progress value={(product.sales / 25) * 100} className="h-2" />
                  </div>
                  
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="text-slate-300">{product.rating}</span>
                      <span className="text-slate-500">({product.reviews})</span>
                    </div>
                    <span className="text-slate-400">${product.revenue.toFixed(2)}</span>
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
                    <Settings className="h-4 w-4 mr-1" />
                    Settings
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProductManagement;
