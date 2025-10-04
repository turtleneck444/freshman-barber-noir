import { useState } from 'react';
import { 
  Package,
  Plus,
  Search,
  DollarSign,
  ShoppingBag,
  TrendingUp,
  Box,
  Tag,
  Image as ImageIcon
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';

const ProductManagement = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  const products = [
    { id: 1, name: 'Premium Hair Wax', category: 'Styling', price: '$24.99', stock: 45, sold: 128, revenue: '$3,199', status: 'in-stock', image: '🎨' },
    { id: 2, name: 'Beard Oil - Cedar', category: 'Grooming', price: '$18.99', stock: 32, sold: 96, revenue: '$1,822', status: 'in-stock', image: '🧴' },
    { id: 3, name: 'Hair Pomade Classic', category: 'Styling', price: '$22.99', stock: 18, sold: 145, revenue: '$3,334', status: 'low-stock', image: '💈' },
    { id: 4, name: 'Shampoo Bar Natural', category: 'Hair Care', price: '$15.99', stock: 67, sold: 89, revenue: '$1,423', status: 'in-stock', image: '🧼' },
    { id: 5, name: 'Styling Gel Strong Hold', category: 'Styling', price: '$19.99', stock: 8, sold: 76, revenue: '$1,519', status: 'low-stock', image: '💧' },
    { id: 6, name: 'Beard Balm', category: 'Grooming', price: '$21.99', stock: 0, sold: 134, revenue: '$2,947', status: 'out-of-stock', image: '🪒' },
    { id: 7, name: 'Hair Spray Medium', category: 'Styling', price: '$16.99', stock: 52, sold: 112, revenue: '$1,903', status: 'in-stock', image: '✨' }
  ];

  const stats = [
    { label: 'Total Products', value: '156', icon: Package, color: 'text-blue-500', bgColor: 'bg-blue-50' },
    { label: 'Total Sold', value: '1,245', icon: ShoppingBag, color: 'text-emerald-500', bgColor: 'bg-emerald-50' },
    { label: 'Low Stock', value: '12', icon: Box, color: 'text-amber-500', bgColor: 'bg-amber-50' },
    { label: 'Total Revenue', value: '$28.5K', icon: DollarSign, color: 'text-purple-500', bgColor: 'bg-purple-50' }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'in-stock':
        return 'bg-emerald-50 text-emerald-600 border-emerald-200';
      case 'low-stock':
        return 'bg-amber-50 text-amber-600 border-amber-200';
      case 'out-of-stock':
        return 'bg-red-50 text-red-600 border-red-200';
      default:
        return 'bg-gray-50 text-gray-600 border-gray-200';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 mb-1" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>Product Management</h1>
          <p className="text-sm text-gray-500" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>E-commerce & inventory management</p>
        </div>
        <Button className="bg-red-600 text-white hover:bg-red-700 shadow-sm" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>
          <Plus className="h-4 w-4 mr-2" />
          Add Product
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
              placeholder="Search products..."
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
                <th className="text-left py-3 px-6 text-xs font-semibold text-gray-500 uppercase tracking-wider" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>Product</th>
                <th className="text-left py-3 px-6 text-xs font-semibold text-gray-500 uppercase tracking-wider" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>Category</th>
                <th className="text-left py-3 px-6 text-xs font-semibold text-gray-500 uppercase tracking-wider" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>Price</th>
                <th className="text-left py-3 px-6 text-xs font-semibold text-gray-500 uppercase tracking-wider" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>Stock</th>
                <th className="text-left py-3 px-6 text-xs font-semibold text-gray-500 uppercase tracking-wider" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>Sold</th>
                <th className="text-left py-3 px-6 text-xs font-semibold text-gray-500 uppercase tracking-wider" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>Revenue</th>
                <th className="text-left py-3 px-6 text-xs font-semibold text-gray-500 uppercase tracking-wider" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {products.map((product) => (
                <tr key={product.id} className="hover:bg-gray-50 transition-colors cursor-pointer">
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 bg-gray-100 rounded-lg flex items-center justify-center text-2xl">
                        {product.image}
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>{product.name}</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <Badge className="bg-blue-50 text-blue-600 border-blue-200 text-xs px-3 py-1 border font-medium">
                      {product.category}
                    </Badge>
                  </td>
                  <td className="py-4 px-6">
                    <p className="text-sm font-semibold text-gray-900" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>{product.price}</p>
                  </td>
                  <td className="py-4 px-6">
                    <p className="text-sm font-medium text-gray-900" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>{product.stock} units</p>
                  </td>
                  <td className="py-4 px-6">
                    <p className="text-sm text-gray-600" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>{product.sold}</p>
                  </td>
                  <td className="py-4 px-6">
                    <p className="text-sm font-semibold text-emerald-600" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>{product.revenue}</p>
                  </td>
                  <td className="py-4 px-6">
                    <Badge className={`${getStatusBadge(product.status)} text-xs px-3 py-1 border uppercase font-semibold`}>
                      {product.status.replace('-', ' ')}
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
            Showing {products.length} of {products.length} products
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductManagement;
