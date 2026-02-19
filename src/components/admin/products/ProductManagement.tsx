import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { Package, Plus, Search, DollarSign, ShoppingBag, TrendingUp, Box, Tag, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';

const ProductManagement = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const { data: products = [], isLoading } = useQuery({
    queryKey: ['admin-products'],
    queryFn: async () => {
      const { data, error } = await supabase.from('products').select('*').order('name');
      if (error) throw error;
      return data;
    }
  });

  const filteredProducts = products.filter((p: any) => {
    const search = searchQuery.toLowerCase();
    return !search || p.name?.toLowerCase().includes(search) || p.category?.toLowerCase().includes(search);
  });

  const stats = [
    { label: 'Total Products', value: String(products.length), icon: Package, color: 'text-blue-500', bgColor: 'bg-blue-50' },
    { label: 'Active', value: String(products.filter((p: any) => p.status === 'active').length), icon: ShoppingBag, color: 'text-emerald-500', bgColor: 'bg-emerald-50' },
    { label: 'Low Stock', value: String(products.filter((p: any) => p.status === 'low_stock').length), icon: Box, color: 'text-amber-500', bgColor: 'bg-amber-50' },
    { label: 'Out of Stock', value: String(products.filter((p: any) => p.status === 'out_of_stock').length), icon: DollarSign, color: 'text-red-500', bgColor: 'bg-red-50' }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'active': return 'bg-emerald-50 text-emerald-600 border-emerald-200';
      case 'low_stock': return 'bg-amber-50 text-amber-600 border-amber-200';
      case 'out_of_stock': return 'bg-red-50 text-red-600 border-red-200';
      default: return 'bg-gray-50 text-gray-600 border-gray-200';
    }
  };

  if (isLoading) {
    return <div className="flex items-center justify-center py-20"><Loader2 className="h-8 w-8 animate-spin text-red-500" /></div>;
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 mb-1" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>Product Management</h1>
          <p className="text-sm text-gray-500" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>E-commerce & inventory management</p>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const IconComponent = stat.icon;
          return (
            <div key={index} className="bg-white border border-gray-200 rounded-xl p-5 hover:shadow-sm transition-shadow">
              <div className="flex items-center gap-3 mb-2">
                <div className={`p-2 ${stat.bgColor} rounded-lg`}><IconComponent className={`h-5 w-5 ${stat.color}`} /></div>
                <div>
                  <p className="text-xs text-gray-500 font-medium" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>{stat.label}</p>
                  <p className="text-2xl font-bold text-gray-900" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>{stat.value}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
        <div className="p-6 border-b border-gray-200">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <Input placeholder="Search products..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-400 h-10" style={{ fontFamily: 'Gotham Bold, sans-serif' }} />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="text-left py-3 px-6 text-xs font-semibold text-gray-500 uppercase tracking-wider" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>Product</th>
                <th className="text-left py-3 px-6 text-xs font-semibold text-gray-500 uppercase tracking-wider" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>Category</th>
                <th className="text-left py-3 px-6 text-xs font-semibold text-gray-500 uppercase tracking-wider" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>Price</th>
                <th className="text-left py-3 px-6 text-xs font-semibold text-gray-500 uppercase tracking-wider" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>Stock</th>
                <th className="text-left py-3 px-6 text-xs font-semibold text-gray-500 uppercase tracking-wider" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredProducts.length === 0 ? (
                <tr><td colSpan={5} className="py-12 text-center text-gray-500">No products found</td></tr>
              ) : filteredProducts.map((product: any) => (
                <tr key={product.id} className="hover:bg-gray-50 transition-colors cursor-pointer">
                  <td className="py-4 px-6">
                    <p className="text-sm font-medium text-gray-900" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>{product.name}</p>
                    {product.sku && <p className="text-xs text-gray-500">SKU: {product.sku}</p>}
                  </td>
                  <td className="py-4 px-6">
                    <Badge className="bg-blue-50 text-blue-600 border-blue-200 text-xs px-3 py-1 border font-medium">{product.category}</Badge>
                  </td>
                  <td className="py-4 px-6">
                    <p className="text-sm font-semibold text-gray-900" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>${product.price}</p>
                  </td>
                  <td className="py-4 px-6">
                    <p className="text-sm font-medium text-gray-900" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>{product.stock} units</p>
                  </td>
                  <td className="py-4 px-6">
                    <Badge className={`${getStatusBadge(product.status)} text-xs px-3 py-1 border uppercase font-semibold`}>
                      {product.status.replace('_', ' ')}
                    </Badge>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="px-6 py-4 border-t border-gray-200 bg-gray-50">
          <p className="text-sm text-gray-500" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>Showing {filteredProducts.length} of {products.length} products</p>
        </div>
      </div>
    </div>
  );
};

export default ProductManagement;
