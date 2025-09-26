import { useState, useRef, useEffect } from 'react';
import { Camera, Settings, Wifi, Bluetooth, Volume2, VolumeX, Sun, Moon, Thermometer, Droplets } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Slider } from '@/components/ui/slider';

const SmartMirror = () => {
  const [isActive, setIsActive] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [weather, setWeather] = useState({
    temperature: 22,
    condition: 'Sunny',
    humidity: 65
  });
  const [mirrorSettings, setMirrorSettings] = useState({
    brightness: 80,
    contrast: 70,
    temperature: 6500,
    volume: 50,
    wifi: true,
    bluetooth: true
  });
  const [selectedApp, setSelectedApp] = useState('home');
  const [isRecording, setIsRecording] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const apps = [
    { id: 'home', name: 'Home', icon: '🏠' },
    { id: 'weather', name: 'Weather', icon: '🌤️' },
    { id: 'music', name: 'Music', icon: '🎵' },
    { id: 'news', name: 'News', icon: '📰' },
    { id: 'calendar', name: 'Calendar', icon: '📅' },
    { id: 'camera', name: 'Camera', icon: '📷' },
    { id: 'settings', name: 'Settings', icon: '⚙️' }
  ];

  const handleSettingChange = (key: string, value: number) => {
    setMirrorSettings(prev => ({ ...prev, [key]: value }));
  };

  const toggleRecording = () => {
    setIsRecording(!isRecording);
  };

  return (
    <section className="py-24 bg-gradient-to-br from-barbershop-black via-barbershop-gray-dark to-barbershop-black">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-orbitron font-bold text-barbershop-white mb-6 animate-fade-in-up">
            SMART <span className="text-shimmer">MIRROR</span>
          </h2>
          <p className="text-xl text-barbershop-gray-light max-w-3xl mx-auto leading-relaxed animate-fade-in-up-delay">
            Experience the future of barbering with our AI-powered smart mirrors. 
            Get style recommendations, weather updates, and entertainment while you wait.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Smart Mirror Display */}
          <Card className="bg-gradient-to-br from-barbershop-gray-dark/50 to-barbershop-black/50 backdrop-blur-xl border border-barber-red/30 hover:border-barber-red/60 transition-all duration-500 hover:shadow-glow">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl text-barbershop-white">
                <Camera className="h-8 w-8 text-barber-red mr-3 animate-pulse" />
                Smart Mirror Interface
              </CardTitle>
            </CardHeader>
            <CardContent>
              {/* Mirror Screen */}
              <div className="relative aspect-video bg-gradient-to-br from-barbershop-black to-barbershop-gray-dark rounded-xl overflow-hidden mb-6">
                {/* Mirror Content */}
                <div className="absolute inset-0 p-6">
                  {/* Status Bar */}
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center space-x-4 text-sm text-barbershop-gray-light">
                      <div className="flex items-center space-x-1">
                        <Wifi className="h-4 w-4" />
                        <span>{mirrorSettings.wifi ? 'Connected' : 'Offline'}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Bluetooth className="h-4 w-4" />
                        <span>{mirrorSettings.bluetooth ? 'On' : 'Off'}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-barbershop-white">
                        {currentTime.toLocaleTimeString()}
                      </div>
                      <div className="text-sm text-barbershop-gray-light">
                        {currentTime.toLocaleDateString()}
                      </div>
                    </div>
                  </div>

                  {/* Weather Widget */}
                  <div className="bg-gradient-to-r from-barber-red/20 to-barber-blue/20 p-4 rounded-xl border border-barber-red/30 mb-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-2xl font-bold text-barbershop-white">{weather.temperature}°C</div>
                        <div className="text-sm text-barbershop-gray-light">{weather.condition}</div>
                      </div>
                      <div className="text-right text-sm text-barbershop-gray-light">
                        <div className="flex items-center space-x-1">
                          <Droplets className="h-4 w-4" />
                          <span>{weather.humidity}%</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* App Grid */}
                  <div className="grid grid-cols-4 gap-3 mb-4">
                    {apps.map((app) => (
                      <button
                        key={app.id}
                        onClick={() => setSelectedApp(app.id)}
                        className={`p-3 rounded-lg text-center transition-all duration-300 ${
                          selectedApp === app.id
                            ? 'bg-gradient-to-r from-barber-red to-barber-blue text-white'
                            : 'bg-barbershop-black/50 text-barbershop-gray hover:text-barber-red hover:bg-barber-red/20'
                        }`}
                      >
                        <div className="text-2xl mb-1">{app.icon}</div>
                        <div className="text-xs">{app.name}</div>
                      </button>
                    ))}
                  </div>

                  {/* Recording Indicator */}
                  {isRecording && (
                    <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold flex items-center space-x-2">
                      <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                      <span>REC</span>
                    </div>
                  )}

                  {/* Control Overlay */}
                  <div className="absolute bottom-4 right-4 flex space-x-2">
                    <Button
                      onClick={toggleRecording}
                      size="sm"
                      className={`${
                        isRecording ? 'bg-red-500 hover:bg-red-600' : 'bg-barber-red hover:bg-barber-red-dark'
                      } text-white`}
                    >
                      <Camera className="h-4 w-4" />
                    </Button>
                    <Button
                      onClick={() => setIsActive(!isActive)}
                      size="sm"
                      variant="outline"
                      className="border-barber-red/30 text-barbershop-white hover:border-barber-red"
                    >
                      <Settings className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>

              {/* Mirror Controls */}
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <Button
                    onClick={() => setIsActive(!isActive)}
                    className={`${
                      isActive 
                        ? 'bg-gradient-to-r from-barber-red to-barber-blue hover:from-barber-blue hover:to-barber-red' 
                        : 'bg-gradient-to-r from-barber-blue to-barber-red hover:from-barber-red hover:to-barber-blue'
                    } text-white font-bold py-3 px-6 rounded-xl shadow-luxury hover:shadow-glow transform hover:scale-105 transition-all duration-300`}
                  >
                    {isActive ? 'Deactivate Mirror' : 'Activate Mirror'}
                  </Button>
                  
                  <Button
                    variant="outline"
                    className="border-barber-red/30 text-barbershop-white hover:border-barber-red hover:bg-barber-red/20"
                  >
                    <Settings className="h-5 w-5 mr-2" />
                    Settings
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Mirror Settings & Controls */}
          <Card className="bg-gradient-to-br from-barbershop-gray-dark/50 to-barbershop-black/50 backdrop-blur-xl border border-barber-blue/30 hover:border-barber-blue/60 transition-all duration-500 hover:shadow-glow">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl text-barbershop-white">
                <Settings className="h-8 w-8 text-barber-blue mr-3 animate-pulse" />
                Mirror Settings
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Brightness Control */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <label className="text-sm font-semibold text-barbershop-white flex items-center">
                    <Sun className="h-4 w-4 mr-2 text-barber-red" />
                    Brightness
                  </label>
                  <span className="text-sm text-barber-red">{mirrorSettings.brightness}%</span>
                </div>
                <Slider
                  value={[mirrorSettings.brightness]}
                  onValueChange={(value) => handleSettingChange('brightness', value[0])}
                  max={100}
                  min={0}
                  step={1}
                  className="w-full"
                />
              </div>

              {/* Contrast Control */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <label className="text-sm font-semibold text-barbershop-white">Contrast</label>
                  <span className="text-sm text-barber-red">{mirrorSettings.contrast}%</span>
                </div>
                <Slider
                  value={[mirrorSettings.contrast]}
                  onValueChange={(value) => handleSettingChange('contrast', value[0])}
                  max={100}
                  min={0}
                  step={1}
                  className="w-full"
                />
              </div>

              {/* Color Temperature */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <label className="text-sm font-semibold text-barbershop-white flex items-center">
                    <Thermometer className="h-4 w-4 mr-2 text-barber-blue" />
                    Color Temperature
                  </label>
                  <span className="text-sm text-barber-blue">{mirrorSettings.temperature}K</span>
                </div>
                <Slider
                  value={[mirrorSettings.temperature]}
                  onValueChange={(value) => handleSettingChange('temperature', value[0])}
                  max={10000}
                  min={2000}
                  step={100}
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-barbershop-gray-light">
                  <span>Warm</span>
                  <span>Cool</span>
                </div>
              </div>

              {/* Volume Control */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <label className="text-sm font-semibold text-barbershop-white flex items-center">
                    {mirrorSettings.volume > 0 ? <Volume2 className="h-4 w-4 mr-2 text-barber-red" /> : <VolumeX className="h-4 w-4 mr-2 text-barber-red" />}
                    Volume
                  </label>
                  <span className="text-sm text-barber-red">{mirrorSettings.volume}%</span>
                </div>
                <Slider
                  value={[mirrorSettings.volume]}
                  onValueChange={(value) => handleSettingChange('volume', value[0])}
                  max={100}
                  min={0}
                  step={1}
                  className="w-full"
                />
              </div>

              {/* Connectivity */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-barbershop-white">Connectivity</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Wifi className="h-5 w-5 text-barber-red" />
                      <span className="text-barbershop-white">WiFi</span>
                    </div>
                    <Button
                      onClick={() => setMirrorSettings(prev => ({ ...prev, wifi: !prev.wifi }))}
                      className={`${
                        mirrorSettings.wifi 
                          ? 'bg-barber-red hover:bg-barber-red-dark' 
                          : 'bg-barbershop-gray hover:bg-barbershop-gray-dark'
                      } text-white`}
                    >
                      {mirrorSettings.wifi ? 'On' : 'Off'}
                    </Button>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Bluetooth className="h-5 w-5 text-barber-blue" />
                      <span className="text-barbershop-white">Bluetooth</span>
                    </div>
                    <Button
                      onClick={() => setMirrorSettings(prev => ({ ...prev, bluetooth: !prev.bluetooth }))}
                      className={`${
                        mirrorSettings.bluetooth 
                          ? 'bg-barber-blue hover:bg-barber-blue-dark' 
                          : 'bg-barbershop-gray hover:bg-barbershop-gray-dark'
                      } text-white`}
                    >
                      {mirrorSettings.bluetooth ? 'On' : 'Off'}
                    </Button>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-barbershop-white">Quick Actions</h3>
                <div className="grid grid-cols-2 gap-3">
                  <Button
                    variant="outline"
                    className="border-barber-red/30 text-barbershop-white hover:border-barber-red hover:bg-barber-red/20"
                  >
                    <Camera className="h-4 w-4 mr-2" />
                    Take Photo
                  </Button>
                  <Button
                    variant="outline"
                    className="border-barber-blue/30 text-barbershop-white hover:border-barber-blue hover:bg-barber-blue/20"
                  >
                    <Settings className="h-4 w-4 mr-2" />
                    Reset
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SmartMirror;
