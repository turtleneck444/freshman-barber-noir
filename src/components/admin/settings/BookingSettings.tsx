import { useState } from 'react';
import { Clock, Calendar, Settings, AlertCircle, CheckCircle, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Switch } from '@/components/ui/switch';
import { Badge } from '@/components/ui/badge';

const BookingSettings = () => {
  const [settings, setSettings] = useState({
    minimumGap: 20, // Minimum gap in minutes (shortest service duration)
    services: [
      { id: 1, name: 'Haircut', duration: 20, active: true },
      { id: 2, name: 'Haircut + Beard', duration: 30, active: true }
    ],
    businessHours: {
      start: '09:00',
      end: '18:00'
    },
    gapPrevention: true,
    bufferTime: 0 // Optional buffer between appointments
  });

  // Smart time slot generator with gap prevention
  const generateSmartTimeSlots = () => {
    const slots = [];
    const start = new Date(`2025-01-01T${settings.businessHours.start}`);
    const end = new Date(`2025-01-01T${settings.businessHours.end}`);
    
    let current = new Date(start);
    
    while (current < end) {
      const remainingMinutes = (end.getTime() - current.getTime()) / (1000 * 60);
      
      // Only add slot if remaining time is 0 or >= minimum gap
      if (remainingMinutes === 0 || remainingMinutes >= settings.minimumGap) {
        slots.push({
          time: current.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true }),
          available: true,
          remainingTime: remainingMinutes
        });
      }
      
      // Move to next potential slot (increment by shortest service)
      current = new Date(current.getTime() + settings.minimumGap * 60 * 1000);
    }
    
    return slots;
  };

  const exampleSlots = generateSmartTimeSlots().slice(0, 8);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>Smart Booking Settings</h1>
        <p className="text-gray-600" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>Configure intelligent gap prevention and scheduling</p>
      </div>

      {/* Gap Prevention Feature */}
      <div className="bg-gradient-to-br from-blue-50 to-white border-2 border-blue-200 rounded-2xl p-6 shadow-sm">
        <div className="flex items-start gap-4 mb-4">
          <div className="p-3 bg-blue-100 rounded-xl">
            <AlertCircle className="h-6 w-6 text-blue-600" />
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>Gap Prevention Enabled</h3>
            <p className="text-gray-700 mb-4" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>
              System automatically prevents scheduling gaps smaller than your shortest service (20 minutes).
              This ensures every available time slot can accommodate at least a haircut.
            </p>
            <div className="flex items-center gap-3">
              <Switch checked={settings.gapPrevention} />
              <span className="text-sm font-medium text-gray-700" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>
                Prevent gaps smaller than {settings.minimumGap} minutes
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Service Duration Configuration */}
      <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-purple-50 rounded-xl">
            <Clock className="h-6 w-6 text-purple-600" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>Service Durations</h3>
            <p className="text-sm text-gray-600" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>Configure how long each service takes</p>
          </div>
        </div>

        <div className="space-y-4">
          {settings.services.map((service) => (
            <div key={service.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
              <div className="flex items-center gap-4">
                <Switch checked={service.active} />
                <div>
                  <p className="font-semibold text-gray-900" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>{service.name}</p>
                  <p className="text-sm text-gray-600" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>Duration: {service.duration} minutes</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Input 
                  type="number" 
                  value={service.duration}
                  className="w-20 h-10 text-center"
                  min="10"
                  step="5"
                />
                <span className="text-sm text-gray-600">min</span>
                {service.duration === settings.minimumGap && (
                  <Badge className="bg-blue-500/20 text-blue-600 border-blue-500/30">
                    Shortest
                  </Badge>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded-xl">
          <div className="flex items-start gap-3">
            <Info className="h-5 w-5 text-yellow-600 flex-shrink-0 mt-0.5" />
            <div className="text-sm text-gray-700" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>
              <strong>Minimum Gap Setting:</strong> The system uses your shortest service duration ({settings.minimumGap} minutes) 
              as the minimum gap. Any remaining time must be either 0 or ≥ {settings.minimumGap} minutes.
            </div>
          </div>
        </div>
      </div>

      {/* Business Hours */}
      <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-emerald-50 rounded-xl">
            <Calendar className="h-6 w-6 text-emerald-600" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>Business Hours</h3>
            <p className="text-sm text-gray-600" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>Set your operating schedule</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>Opening Time</label>
            <Input type="time" value={settings.businessHours.start} className="h-12" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>Closing Time</label>
            <Input type="time" value={settings.businessHours.end} className="h-12" />
          </div>
        </div>
      </div>

      {/* Example Time Slots Preview */}
      <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-xl font-bold text-gray-900" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>Available Time Slots Preview</h3>
            <p className="text-sm text-gray-600" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>See how gap prevention affects available slots</p>
          </div>
          <Badge className="bg-emerald-500/20 text-emerald-600 border-emerald-500/30 px-4 py-2 text-sm">
            No Wasted Time
          </Badge>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {exampleSlots.map((slot, index) => (
            <div 
              key={index}
              className="p-4 bg-gradient-to-br from-emerald-50 to-white border-2 border-emerald-200 rounded-xl text-center hover:shadow-md transition-all cursor-pointer"
            >
              <div className="flex items-center justify-center gap-2 mb-2">
                <Clock className="h-4 w-4 text-emerald-600" />
                <p className="font-bold text-gray-900" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>{slot.time}</p>
              </div>
              <div className="flex items-center justify-center gap-1">
                <CheckCircle className="h-3 w-3 text-emerald-600" />
                <p className="text-xs text-emerald-600 font-medium">Available</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4 p-4 bg-emerald-50 border border-emerald-200 rounded-xl">
          <div className="flex items-start gap-3">
            <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-0.5" />
            <div className="text-sm text-gray-700" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>
              <strong>Smart Scheduling Active:</strong> All {exampleSlots.length} shown time slots can accommodate at least a 
              20-minute haircut. No unusable gaps will be created when clients book appointments.
            </div>
          </div>
        </div>
      </div>

      {/* How It Works */}
      <div className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl p-6 shadow-sm">
        <h3 className="text-xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>How Gap Prevention Works</h3>
        
        <div className="space-y-4">
          <div className="flex items-start gap-3 p-4 bg-white rounded-xl border border-gray-200">
            <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-emerald-600 font-bold">✓</span>
            </div>
            <div>
              <p className="font-semibold text-gray-900 mb-1" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>Good Example</p>
              <p className="text-sm text-gray-600" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>
                Client books 30-min service at 2:30 PM (ends 3:00 PM) - Perfect! No gap left.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-4 bg-white rounded-xl border border-gray-200">
            <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-emerald-600 font-bold">✓</span>
            </div>
            <div>
              <p className="font-semibold text-gray-900 mb-1" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>Good Example</p>
              <p className="text-sm text-gray-600" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>
                Client books 30-min service at 2:00 PM (ends 2:30 PM) - Leaves 30 minutes, enough for another service!
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-4 bg-red-50 rounded-xl border border-red-200">
            <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-red-600 font-bold">✗</span>
            </div>
            <div>
              <p className="font-semibold text-gray-900 mb-1" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>Prevented</p>
              <p className="text-sm text-gray-600" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>
                System blocks booking 30-min service at 2:40 PM (would end 3:10 PM) - Would leave only 10-minute gap.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-end gap-3">
        <Button variant="outline" className="border-gray-300 text-gray-700">Reset to Defaults</Button>
        <Button className="bg-red-600 text-white hover:bg-red-700">Save Settings</Button>
      </div>
    </div>
  );
};

export default BookingSettings;
