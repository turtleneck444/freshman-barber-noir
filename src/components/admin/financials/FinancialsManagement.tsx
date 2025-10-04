import { useState } from 'react';
import { 
  DollarSign,
  TrendingUp,
  TrendingDown,
  CreditCard,
  Wallet,
  PiggyBank,
  Receipt,
  Download,
  Filter,
  Calendar,
  ArrowUpRight,
  ArrowDownRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const FinancialsManagement = () => {
  const [timeRange, setTimeRange] = useState('month');

  const stats = [
    { 
      label: 'Total Revenue', 
      value: '$45,550', 
      change: '+15.3%', 
      trend: 'up',
      icon: DollarSign, 
      color: 'text-emerald-400', 
      bgColor: 'bg-emerald-50', 
      borderColor: 'border-emerald-200',
      subtitle: 'vs last month'
    },
    { 
      label: 'Total Expenses', 
      value: '$12,340', 
      change: '+8.2%', 
      trend: 'up',
      icon: Receipt, 
      color: 'text-red-400', 
      bgColor: 'bg-red-50', 
      borderColor: 'border-red-200',
      subtitle: 'operational costs'
    },
    { 
      label: 'Net Profit', 
      value: '$33,210', 
      change: '+18.5%', 
      trend: 'up',
      icon: TrendingUp, 
      color: 'text-blue-400', 
      bgColor: 'bg-blue-50', 
      borderColor: 'border-blue-200',
      subtitle: '73% margin'
    },
    { 
      label: 'Average Transaction', 
      value: '$62', 
      change: '+5.2%', 
      trend: 'up',
      icon: CreditCard, 
      color: 'text-purple-400', 
      bgColor: 'bg-purple-50', 
      borderColor: 'border-purple-200',
      subtitle: 'per booking'
    }
  ];

  const revenueStreams = [
    { name: 'Haircut Services', amount: 28500, percentage: 63, growth: '+12%', color: 'bg-blue-500' },
    { name: 'Product Sales', amount: 8900, percentage: 20, growth: '+25%', color: 'bg-emerald-500' },
    { name: 'Chair Rentals', amount: 5150, percentage: 11, growth: '+8%', color: 'bg-purple-500' },
    { name: 'Other Services', amount: 3000, percentage: 6, growth: '+15%', color: 'bg-orange-500' }
  ];

  const expenses = [
    { category: 'Staff Salaries', amount: 7200, percentage: 58, color: 'bg-red-500' },
    { category: 'Rent & Utilities', amount: 2500, percentage: 20, color: 'bg-orange-500' },
    { category: 'Supplies & Products', amount: 1640, percentage: 13, color: 'bg-yellow-500' },
    { category: 'Marketing', amount: 800, percentage: 7, color: 'bg-blue-500' },
    { category: 'Other', amount: 200, percentage: 2, color: 'bg-gray-500' }
  ];

  const recentTransactions = [
    { id: 1, type: 'revenue', description: 'Haircut - John Doe', amount: 45, date: '2 hours ago', method: 'Card' },
    { id: 2, type: 'revenue', description: 'Royal Package - Mike Smith', amount: 85, date: '3 hours ago', method: 'Cash' },
    { id: 3, type: 'expense', description: 'Product Restocking', amount: -250, date: '5 hours ago', method: 'Transfer' },
    { id: 4, type: 'revenue', description: 'Beard Trim - David Johnson', amount: 30, date: '6 hours ago', method: 'Card' },
    { id: 5, type: 'expense', description: 'Utility Bill Payment', amount: -180, date: '1 day ago', method: 'Auto' }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>Financial Management</h1>
          <p className="text-gray-600" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>Track revenue, expenses, and profitability</p>
        </div>
        <div className="flex items-center gap-2">
          {['week', 'month', 'quarter', 'year'].map((range) => (
            <Button
              key={range}
              variant="ghost"
              size="sm"
              onClick={() => setTimeRange(range)}
              className={`${
                timeRange === range
                  ? 'bg-red-600 text-white border border-red-500'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100 border border-gray-300'
              }`}
              style={{ fontFamily: 'Gotham Bold, sans-serif' }}
            >
              {range.charAt(0).toUpperCase() + range.slice(1)}
            </Button>
          ))}
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const IconComponent = stat.icon;
          const TrendIcon = stat.trend === 'up' ? ArrowUpRight : ArrowDownRight;
          
          return (
            <div key={index} className={`bg-white border ${stat.borderColor} rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 group cursor-pointer`}>
              <div className="flex items-start justify-between mb-4">
                <div className={`p-3 ${stat.bgColor} rounded-xl group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className={`h-6 w-6 ${stat.color}`} />
                </div>
                <div className={`flex items-center gap-1 px-2 py-1 rounded-lg ${
                  stat.trend === 'up' ? 'bg-emerald-500/20 text-emerald-600' : 'bg-red-500/20 text-red-600'
                }`}>
                  <TrendIcon className="h-3 w-3" />
                  <span className="text-xs font-semibold">{stat.change}</span>
                </div>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-600 mb-1" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>{stat.label}</h3>
                <p className="text-3xl font-bold text-gray-900 mb-1" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>{stat.value}</p>
                <p className="text-xs text-gray-500" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>{stat.subtitle}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Revenue & Expenses Breakdown */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Revenue Streams */}
        <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-1" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>Revenue Streams</h3>
              <p className="text-sm text-gray-600" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>Income sources breakdown</p>
            </div>
            <Button variant="ghost" size="sm" className="text-gray-600 hover:text-gray-900" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>
              <Download className="h-4 w-4 mr-2" />
              Export
            </Button>
          </div>
          <div className="space-y-4">
            {revenueStreams.map((stream, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-gray-900" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>{stream.name}</span>
                    <Badge className="bg-emerald-500/20 text-emerald-600 border-emerald-500/30 text-xs">
                      {stream.growth}
                    </Badge>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-bold text-gray-900" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>${stream.amount.toLocaleString()}</p>
                    <p className="text-xs text-gray-600" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>{stream.percentage}%</p>
                  </div>
                </div>
                <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div 
                    className={`h-full ${stream.color} transition-all duration-500`}
                    style={{ width: `${stream.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Expenses Breakdown */}
        <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-1" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>Expenses Breakdown</h3>
              <p className="text-sm text-gray-600" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>Cost distribution</p>
            </div>
            <Button variant="ghost" size="sm" className="text-gray-600 hover:text-gray-900" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>
              <Download className="h-4 w-4 mr-2" />
              Export
            </Button>
          </div>
          <div className="space-y-4">
            {expenses.map((expense, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-900" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>{expense.category}</span>
                  <div className="text-right">
                    <p className="text-lg font-bold text-gray-900" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>${expense.amount.toLocaleString()}</p>
                    <p className="text-xs text-gray-600" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>{expense.percentage}%</p>
                  </div>
                </div>
                <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div 
                    className={`h-full ${expense.color} transition-all duration-500`}
                    style={{ width: `${expense.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Transactions */}
      <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-1" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>Recent Transactions</h3>
            <p className="text-sm text-gray-600" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>Latest financial activity</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" className="border-gray-300 text-gray-700 hover:bg-gray-100" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </Button>
            <Button variant="outline" size="sm" className="border-gray-300 text-gray-700 hover:bg-gray-100" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>
              <Download className="h-4 w-4 mr-2" />
              Export
            </Button>
          </div>
        </div>
        <div className="space-y-3">
          {recentTransactions.map((transaction) => (
            <div 
              key={transaction.id}
              className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors cursor-pointer"
            >
              <div className="flex items-center gap-4">
                <div className={`p-3 rounded-xl ${
                  transaction.type === 'revenue' ? 'bg-emerald-500/20' : 'bg-red-500/20'
                }`}>
                  {transaction.type === 'revenue' ? (
                    <TrendingUp className="h-5 w-5 text-emerald-600" />
                  ) : (
                    <TrendingDown className="h-5 w-5 text-red-600" />
                  )}
                </div>
                <div>
                  <p className="font-semibold text-gray-900" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>{transaction.description}</p>
                  <p className="text-sm text-gray-600" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>{transaction.date} • {transaction.method}</p>
                </div>
              </div>
              <p className={`text-xl font-bold ${
                transaction.amount > 0 ? 'text-emerald-600' : 'text-red-600'
              }`} style={{ fontFamily: 'Gotham Bold, sans-serif' }}>
                {transaction.amount > 0 ? '+' : ''}${Math.abs(transaction.amount)}
              </p>
            </div>
          ))}
        </div>
        <Button className="w-full mt-4 bg-red-600 text-white hover:bg-red-700" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>
          View All Transactions
        </Button>
      </div>
    </div>
  );
};

export default FinancialsManagement;
