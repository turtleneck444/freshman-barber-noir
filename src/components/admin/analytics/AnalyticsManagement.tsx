import { useState } from 'react';
import { 
  Activity, 
  TrendingUp, 
  Users, 
  Eye, 
  MousePointer,
  Clock,
  Globe,
  Smartphone,
  Monitor,
  Tablet,
  Search,
  BarChart3,
  PieChart,
  Calendar
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const AnalyticsManagement = () => {
  const [timeRange, setTimeRange] = useState('week');

  const keyMetrics = [
    { label: 'Total Visitors', value: '12,543', change: '+18%', trend: 'up', icon: Users, color: 'text-blue-500', bgColor: 'bg-blue-50' },
    { label: 'Page Views', value: '45,891', change: '+23%', trend: 'up', icon: Eye, color: 'text-emerald-500', bgColor: 'bg-emerald-50' },
    { label: 'Avg. Session', value: '3m 24s', change: '+12%', trend: 'up', icon: Clock, color: 'text-purple-500', bgColor: 'bg-purple-50' },
    { label: 'Bounce Rate', value: '42.3%', change: '-5%', trend: 'down', icon: MousePointer, color: 'text-amber-500', bgColor: 'bg-amber-50' }
  ];

  const trafficSources = [
    { source: 'Organic Search', visitors: 5420, percentage: 43.2, color: 'bg-blue-500' },
    { source: 'Direct', visitors: 3150, percentage: 25.1, color: 'bg-emerald-500' },
    { source: 'Social Media', visitors: 2210, percentage: 17.6, color: 'bg-purple-500' },
    { source: 'Referral', visitors: 1130, percentage: 9.0, color: 'bg-orange-500' },
    { source: 'Email', visitors: 633, percentage: 5.1, color: 'bg-pink-500' }
  ];

  const topPages = [
    { page: '/services', views: 8920, uniqueVisitors: 6234, avgTime: '4m 12s', bounceRate: '38%' },
    { page: '/booking', views: 7654, uniqueVisitors: 5890, avgTime: '5m 45s', bounceRate: '25%' },
    { page: '/', views: 6543, uniqueVisitors: 4321, avgTime: '2m 30s', bounceRate: '45%' },
    { page: '/portfolio', views: 4321, uniqueVisitors: 3456, avgTime: '3m 18s', bounceRate: '42%' },
    { page: '/contact', views: 3210, uniqueVisitors: 2890, avgTime: '2m 05s', bounceRate: '52%' }
  ];

  const deviceBreakdown = [
    { device: 'Mobile', users: 6890, percentage: 54.9, icon: Smartphone, color: 'text-blue-500' },
    { device: 'Desktop', users: 4320, percentage: 34.4, icon: Monitor, color: 'text-emerald-500' },
    { device: 'Tablet', users: 1333, percentage: 10.7, icon: Tablet, color: 'text-purple-500' }
  ];

  const topCountries = [
    { country: 'Canada', flag: '🇨🇦', users: 6234, percentage: 49.7 },
    { country: 'United States', flag: '🇺🇸', users: 3456, percentage: 27.5 },
    { country: 'United Kingdom', flag: '🇬🇧', users: 1234, percentage: 9.8 },
    { country: 'Australia', flag: '🇦🇺', users: 876, percentage: 7.0 },
    { country: 'India', flag: '🇮🇳', users: 743, percentage: 6.0 }
  ];

  const weeklyData = [
    { day: 'Mon', visitors: 1820 },
    { day: 'Tue', visitors: 2100 },
    { day: 'Wed', visitors: 1950 },
    { day: 'Thu', visitors: 2300 },
    { day: 'Fri', visitors: 2650 },
    { day: 'Sat', visitors: 1950 },
    { day: 'Sun', visitors: 1773 }
  ];

  const maxVisitors = Math.max(...weeklyData.map(d => d.visitors));

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 mb-1" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>Analytics & Reports</h1>
          <p className="text-sm text-gray-500" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>Website traffic and user behavior insights</p>
        </div>
        <div className="flex items-center gap-2">
          {['day', 'week', 'month', 'year'].map((range) => (
            <Button
              key={range}
              variant="ghost"
              size="sm"
              onClick={() => setTimeRange(range)}
              className={`${
                timeRange === range
                  ? 'bg-red-600 text-white'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
              }`}
              style={{ fontFamily: 'Gotham Bold, sans-serif' }}
            >
              {range.charAt(0).toUpperCase() + range.slice(1)}
            </Button>
          ))}
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-4 gap-6">
        {keyMetrics.map((metric, index) => {
          const IconComponent = metric.icon;
          return (
            <div key={index} className="bg-white border border-gray-200 rounded-xl p-5 hover:shadow-sm transition-shadow">
              <div className="flex items-center justify-between mb-3">
                <div className={`p-2 ${metric.bgColor} rounded-lg`}>
                  <IconComponent className={`h-5 w-5 ${metric.color}`} />
                </div>
                <Badge className={`${metric.trend === 'up' ? 'bg-emerald-50 text-emerald-600' : 'bg-red-50 text-red-600'} text-xs px-2 py-1 font-semibold`}>
                  {metric.change}
                </Badge>
              </div>
              <p className="text-xs text-gray-500 font-medium mb-1" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>{metric.label}</p>
              <p className="text-2xl font-bold text-gray-900" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>{metric.value}</p>
            </div>
          );
        })}
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-3 gap-6">
        {/* Visitors Chart */}
        <div className="col-span-2 bg-white border border-gray-200 rounded-xl p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-1" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>Weekly Visitors</h3>
              <p className="text-sm text-gray-500" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>Visitor trends over the past week</p>
            </div>
            <BarChart3 className="h-5 w-5 text-gray-400" />
          </div>
          
          <div className="flex items-end justify-between h-48 gap-2">
            {weeklyData.map((data, index) => (
              <div key={index} className="flex-1 flex flex-col items-center gap-2">
                <div className="w-full flex flex-col justify-end items-center">
                  <div 
                    className="w-full bg-gradient-to-t from-blue-500 to-blue-400 rounded-t-lg hover:from-blue-600 hover:to-blue-500 transition-all cursor-pointer relative group"
                    style={{ height: `${(data.visitors / maxVisitors) * 100}%` }}
                  >
                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="bg-gray-900 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                        {data.visitors} visitors
                      </div>
                    </div>
                  </div>
                </div>
                <p className="text-xs text-gray-600 font-medium" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>{data.day}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Real-time Stats */}
        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-1" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>Real-time</h3>
              <p className="text-sm text-gray-500" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>Active users now</p>
            </div>
            <Activity className="h-5 w-5 text-emerald-500 animate-pulse" />
          </div>
          
          <div className="text-center py-8">
            <div className="inline-flex items-center justify-center w-32 h-32 rounded-full bg-emerald-50 border-4 border-emerald-200 mb-4">
              <p className="text-5xl font-bold text-emerald-600" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>47</p>
            </div>
            <p className="text-sm text-gray-600 font-medium" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>Active Visitors</p>
          </div>
        </div>
      </div>

      {/* Traffic Sources & Device Breakdown */}
      <div className="grid grid-cols-2 gap-6">
        {/* Traffic Sources */}
        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-1" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>Traffic Sources</h3>
              <p className="text-sm text-gray-500" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>Where visitors come from</p>
            </div>
            <PieChart className="h-5 w-5 text-gray-400" />
          </div>
          
          <div className="space-y-4">
            {trafficSources.map((source, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-900" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>{source.source}</span>
                  <div className="text-right">
                    <p className="text-sm font-bold text-gray-900" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>{source.visitors.toLocaleString()}</p>
                    <p className="text-xs text-gray-500" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>{source.percentage}%</p>
                  </div>
                </div>
                <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div 
                    className={`h-full ${source.color} transition-all duration-500`}
                    style={{ width: `${source.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Device Breakdown */}
        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-1" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>Device Breakdown</h3>
              <p className="text-sm text-gray-500" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>User devices</p>
            </div>
            <Monitor className="h-5 w-5 text-gray-400" />
          </div>
          
          <div className="space-y-6">
            {deviceBreakdown.map((device, index) => {
              const IconComponent = device.icon;
              return (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-gray-50 rounded-lg">
                      <IconComponent className={`h-6 w-6 ${device.color}`} />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>{device.device}</p>
                      <p className="text-xs text-gray-500" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>{device.percentage}% of traffic</p>
                    </div>
                  </div>
                  <p className="text-lg font-bold text-gray-900" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>{device.users.toLocaleString()}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Top Pages Table */}
      <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-lg font-bold text-gray-900 mb-1" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>Top Pages</h3>
          <p className="text-sm text-gray-500" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>Most visited pages on your site</p>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="text-left py-3 px-6 text-xs font-semibold text-gray-500 uppercase tracking-wider" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>Page</th>
                <th className="text-left py-3 px-6 text-xs font-semibold text-gray-500 uppercase tracking-wider" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>Page Views</th>
                <th className="text-left py-3 px-6 text-xs font-semibold text-gray-500 uppercase tracking-wider" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>Unique Visitors</th>
                <th className="text-left py-3 px-6 text-xs font-semibold text-gray-500 uppercase tracking-wider" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>Avg. Time</th>
                <th className="text-left py-3 px-6 text-xs font-semibold text-gray-500 uppercase tracking-wider" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>Bounce Rate</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {topPages.map((page, index) => (
                <tr key={index} className="hover:bg-gray-50 transition-colors">
                  <td className="py-4 px-6">
                    <p className="text-sm font-medium text-gray-900" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>{page.page}</p>
                  </td>
                  <td className="py-4 px-6">
                    <p className="text-sm font-semibold text-gray-900" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>{page.views.toLocaleString()}</p>
                  </td>
                  <td className="py-4 px-6">
                    <p className="text-sm text-gray-600" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>{page.uniqueVisitors.toLocaleString()}</p>
                  </td>
                  <td className="py-4 px-6">
                    <p className="text-sm text-gray-600" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>{page.avgTime}</p>
                  </td>
                  <td className="py-4 px-6">
                    <Badge className="bg-gray-50 text-gray-600 border-gray-200 text-xs px-3 py-1">
                      {page.bounceRate}
                    </Badge>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Top Countries */}
      <div className="bg-white border border-gray-200 rounded-xl p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-1" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>Top Countries</h3>
            <p className="text-sm text-gray-500" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>Geographic distribution</p>
          </div>
          <Globe className="h-5 w-5 text-gray-400" />
        </div>
        
        <div className="grid grid-cols-5 gap-4">
          {topCountries.map((country, index) => (
            <div key={index} className="text-center p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors cursor-pointer">
              <div className="text-4xl mb-2">{country.flag}</div>
              <p className="text-sm font-medium text-gray-900 mb-1" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>{country.country}</p>
              <p className="text-lg font-bold text-gray-900 mb-1" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>{country.users.toLocaleString()}</p>
              <p className="text-xs text-gray-500" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>{country.percentage}%</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AnalyticsManagement;
