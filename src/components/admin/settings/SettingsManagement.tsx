import { Settings, Bell, Lock, User, Store, Palette, Database, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';

const SettingsManagement = () => {
  const settingSections = [
    {
      title: 'General Settings',
      icon: Store,
      color: 'text-blue-400',
      bgColor: 'bg-blue-50',
      settings: [
        { label: 'Business Name', value: 'Freshmen Barbershop', type: 'text' },
        { label: 'Business Hours', value: 'Mon-Sat: 9AM-7PM', type: 'text' },
        { label: 'Contact Email', value: 'info@freshmen.com', type: 'email' }
      ]
    },
    {
      title: 'Notifications',
      icon: Bell,
      color: 'text-purple-400',
      bgColor: 'bg-purple-50',
      settings: [
        { label: 'Email Notifications', value: true, type: 'toggle' },
        { label: 'SMS Notifications', value: true, type: 'toggle' },
        { label: 'Push Notifications', value: false, type: 'toggle' }
      ]
    },
    {
      title: 'Security',
      icon: Shield,
      color: 'text-red-400',
      bgColor: 'bg-red-50',
      settings: [
        { label: 'Two-Factor Authentication', value: true, type: 'toggle' },
        { label: 'Password Protection', value: true, type: 'toggle' },
        { label: 'Session Timeout', value: '30 minutes', type: 'select' }
      ]
    },
    {
      title: 'Appearance',
      icon: Palette,
      color: 'text-pink-400',
      bgColor: 'bg-pink-50',
      settings: [
        { label: 'Theme Mode', value: 'Light', type: 'select' },
        { label: 'Accent Color', value: 'Red', type: 'color' },
        { label: 'Compact View', value: false, type: 'toggle' }
      ]
    }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>Settings</h1>
        <p className="text-gray-600" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>Manage your system configuration and preferences</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {settingSections.map((section, index) => {
          const IconComponent = section.icon;
          return (
            <div key={index} className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className={`p-3 ${section.bgColor} rounded-xl`}>
                  <IconComponent className={`h-6 w-6 ${section.color}`} />
                </div>
                <h3 className="text-xl font-bold text-gray-900" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>{section.title}</h3>
              </div>
              <div className="space-y-4">
                {section.settings.map((setting, idx) => (
                  <div key={idx} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                    <span className="text-sm font-medium text-gray-900" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>{setting.label}</span>
                    {setting.type === 'toggle' ? (
                      <Switch checked={setting.value as boolean} />
                    ) : (
                      <span className="text-sm text-gray-600" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>{setting.value as string}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex justify-end gap-3">
        <Button variant="outline" className="border-gray-300 text-gray-700">Cancel</Button>
        <Button className="bg-red-600 text-white hover:bg-red-700">Save Changes</Button>
      </div>
    </div>
  );
};

export default SettingsManagement;
