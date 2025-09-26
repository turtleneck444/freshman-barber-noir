import { useState } from 'react';
import { 
  ShoppingCart, 
  Plus, 
  Search, 
  Filter, 
  MoreVertical,
  Edit,
  Trash2,
  Eye,
  Star,
  Package,
  DollarSign,
  TrendingUp,
  Image as ImageIcon,
  Tag,
  AlertCircle
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const ProductManagement = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');

  const products = [
    {
      id: 1,
      name: 'Premium Barber Scissors',
      category: 'Tools',
      price: 89.99,
      cost: 45.00,
      stock: 15,
      status: 'active',
      rating: 4.8,
      sales: 45,
      image: '/placeholder.svg',
      description: 'Professional-grade stainless steel barber scissors',
      sku: 'SCISS-001',
      tags: ['premium', 'professional', 'stainless-steel']
    },
    {
      id: 2,
      name: 'Beard Oil - Sandalwood',
      category: 'Grooming',
      price: 24.99,
      cost: 12.00,
      stock: 32,
      status: 'active',
      rating: 4.6,
      sales: 28,
      image: '/placeholder.svg',
      description: 'Natural beard oil with sandalwood scent',
      sku: 'BOIL-002',
      tags: ['natural', 'sandalwood', 'beard-care']
    },
    {
      id: 3,
      name: 'Hair Styling Pomade',
      category: 'Styling',
      price: 18.99,
      cost: 9.50,
      stock: 0,
      status: 'out-of-stock',
      rating: 4.4,
      sales: 67,
      image: '/placeholder.svg',
      description: 'High-hold pomade for classic styling',
      sku: 'POM-003',
      tags: ['high-hold', 'classic', 'styling']
    },
    {
      id: 4,
      name: 'Barber Cape - Black',
      category: 'Equipment',
      price: 45.99,
      cost: 22.00,
      stock: 8,
      status: 'active',
      rating: 4.7,
      sales: 23,
      image: '/placeholder.svg',
      description: 'Professional barber cape with snap closure',
      sku: 'CAPE-004',
      tags: ['professional', 'cape', 'equipment']
    },
    {
      id: 5,
      name: 'Aftershave Balm',
      category: 'Grooming',
      price: 32.99,
      cost: 16.50,
      stock: 12,
      status: 'active',
      rating: 4.9,
      sales: 89,
      image: '/placeholder.svg',
      description: 'Moisturizing aftershave balm with aloe vera',
      sku: 'ASB-005',
      tags: ['moisturizing', 'aloe-vera', 'aftershave']
    }
  ];

  const categories = ['all', 'Tools', 'Grooming', 'Styling', 'Equipment', 'Accessories'];
  const statuses = ['all', 'active', 'inactive', 'out-of-stock', 'discontinued'];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'inactive': return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
      case 'out-of-stock': return 'bg-red-500/20 text-red-400 border-red-500/30';
      case 'discontinued': return 'bg-orange-500/20 text-orange-400 border-orange-500/30';
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  const getStockColor = (stock: number) => {
    if (stock === 0) return 'text-red-400';
    if (stock < 10) return 'text-yellow-400';
    return 'text-green-400';
  };

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.sku.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter === 'all' || product.category === categoryFilter;
    const matchesStatus = statusFilter === 'all' || product.status === statusFilter;
    return matchesSearch && matchesCategory && matchesStatus;
  });

  const totalRevenue = products.reduce((sum, product) => sum + (product.price * product.sales), 0);
  const totalProfit = products.reduce((sum, product) => sum + ((product.price - product.cost) * product.sales), 0);
  const lowStockItems = products.filter(product => product.stock < 10).length;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
        <div>
          <h1 className="text-3xl font-orbitron font-bold text-barbershop-white">E-Commerce Management</h1>
          <p className="text-barbershop-gray-light">Manage products, inventory, and sales</p>
        </div>
        <Button className="bg-gradient-to-r from-barber-red to-barber-blue hover:from-barber-blue hover:to-barber-red text-white">
          <Plus className="h-5 w-5 mr-2" />
          Add Product
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="bg-gradient-to-br from-barbershop-gray-dark/50 to-barbershop-black/50 backdrop-blur-xl border border-green-500/30">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-barbershop-gray-light mb-1">Total Revenue</p>
                <p className="text-2xl font-bold text-green-400">${totalRevenue.toLocaleString()}</p>
              </div>
              <DollarSign className="h-8 w-8 text-green-400" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-barbershop-gray-dark/50 to-barbershop-black/50 backdrop-blur-xl border border-blue-500/30">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-barbershop-gray-light mb-1">Total Profit</p>
                <p className="text-2xl font-bold text-blue-400">${totalProfit.toLocaleString()}</p>
              </div>
              <TrendingUp className="h-8 w-8 text-blue-400" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-barbershop-gray-dark/50 to-barbershop-black/50 backdrop-blur-xl border border-purple-500/30">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-barbershop-gray-light mb-1">Total Products</p>
                <p className="text-2xl font-bold text-purple-400">{products.length}</p>
              </div>
              <Package className="h-8 w-8 text-purple-400" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-barbershop-gray-dark/50 to-barbershop-black/50 backdrop-blur-xl border border-red-500/30">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-barbershop-gray-light mb-1">Low Stock</p>
                <p className="text-2xl font-bold text-red-400">{lowStockItems}</p>
              </div>
              <AlertCircle className="h-8 w-8 text-red-400" />
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
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-barbershop-black/50 border-barber-red/30 text-barbershop-white placeholder-barbershop-gray focus:border-barber-red"
              />
            </div>
            
            <Select value={categoryFilter} onValueChange={setCategoryFilter}>
              <SelectTrigger className="bg-barbershop-black/50 border-barber-red/30 text-barbershop-white">
                <SelectValue placeholder="Filter by category" />
              </SelectTrigger>
              <SelectContent className="bg-barbershop-black border-barber-red/30">
                {categories.map(category => (
                  <SelectItem key={category} value={category} className="text-barbershop-white hover:bg-barber-red/20">
                    {category === 'all' ? 'All Categories' : category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="bg-barbershop-black/50 border-barber-red/30 text-barbershop-white">
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent className="bg-barbershop-black border-barber-red/30">
                {statuses.map(status => (
                  <SelectItem key={status} value={status} className="text-barbershop-white hover:bg-barber-red/20">
                    {status === 'all' ? 'All Status' : status.replace('-', ' ')}
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

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <Card key={product.id} className="bg-gradient-to-br from-barbershop-gray-dark/50 to-barbershop-black/50 backdrop-blur-xl border border-barber-red/30 hover:border-barber-red/60 transition-all duration-300 hover:shadow-glow">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-barber-red to-barber-blue rounded-lg flex items-center justify-center">
                    <ImageIcon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-barbershop-white">{product.name}</h3>
                    <p className="text-sm text-barbershop-gray-light">{product.sku}</p>
                  </div>
                </div>
                <Button variant="ghost" size="sm" className="text-barbershop-gray hover:text-barber-red">
                  <MoreVertical className="h-4 w-4" />
                </Button>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-4">
              {/* Product Info */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-barbershop-gray-light">Category</span>
                  <Badge className="bg-barber-blue/20 text-barber-blue border-barber-blue/30">
                    {product.category}
                  </Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-barbershop-gray-light">Price</span>
                  <span className="text-lg font-bold text-barber-red">${product.price}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-barbershop-gray-light">Cost</span>
                  <span className="text-sm text-barbershop-white">${product.cost}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-barbershop-gray-light">Stock</span>
                  <span className={`text-sm font-semibold ${getStockColor(product.stock)}`}>
                    {product.stock} units
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-barbershop-gray-light">Sales</span>
                  <span className="text-sm text-barbershop-white">{product.sales} sold</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-barbershop-gray-light">Rating</span>
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-barbershop-white">{product.rating}</span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm text-barbershop-gray-light line-clamp-2">{product.description}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1">
                {product.tags.slice(0, 3).map((tag, index) => (
                  <Badge key={index} className="bg-barbershop-black/50 text-barbershop-gray-light border-barber-red/20 text-xs">
                    <Tag className="h-3 w-3 mr-1" />
                    {tag}
                  </Badge>
                ))}
              </div>

              {/* Status */}
              <div className="flex items-center justify-between">
                <Badge className={`${getStatusColor(product.status)} flex items-center space-x-1`}>
                  <span>{product.status.replace('-', ' ')}</span>
                </Badge>
              </div>

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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Button className="h-16 bg-gradient-to-br from-barber-red to-barber-blue hover:from-barber-blue hover:to-barber-red text-white flex flex-col space-y-2">
              <Package className="h-6 w-6" />
              <span className="text-sm">Bulk Import</span>
            </Button>
            <Button className="h-16 bg-gradient-to-br from-barber-blue to-purple-500 hover:from-purple-500 hover:to-barber-blue text-white flex flex-col space-y-2">
              <TrendingUp className="h-6 w-6" />
              <span className="text-sm">Sales Report</span>
            </Button>
            <Button className="h-16 bg-gradient-to-br from-purple-500 to-pink-500 hover:from-pink-500 hover:to-purple-500 text-white flex flex-col space-y-2">
              <AlertCircle className="h-6 w-6" />
              <span className="text-sm">Low Stock Alert</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProductManagement;
