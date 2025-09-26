import { useState, useRef, useEffect } from "react";
import { Camera, Eye, Smartphone, Headphones, RotateCcw, Play, Pause } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ARExperience = () => {
  const [isARActive, setIsARActive] = useState(false);
  const [isVRMode, setIsVRMode] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentView, setCurrentView] = useState('lobby');
  const videoRef = useRef<HTMLVideoElement>(null);

  const views = [
    { id: 'lobby', name: 'Main Lobby', description: 'Welcome area with reception' },
    { id: 'cutting', name: 'Cutting Stations', description: 'Premium barber chairs and tools' },
    { id: 'shave', name: 'Shave Room', description: 'Traditional straight razor area' },
    { id: 'wash', name: 'Wash Station', description: 'Hair washing and styling area' },
    { id: 'waiting', name: 'Waiting Lounge', description: 'Comfortable seating area' }
  ];

  const handleARActivation = () => {
    setIsARActive(!isARActive);
    if (!isARActive) {
      // Simulate AR camera activation
      setTimeout(() => {
        setCurrentView('lobby');
      }, 1000);
    }
  };

  const handleVRToggle = () => {
    setIsVRMode(!isVRMode);
  };

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
    }
  };

  const handleViewChange = (viewId: string) => {
    setCurrentView(viewId);
  };

  return (
    <section className="py-24 bg-gradient-to-br from-barbershop-black via-barbershop-gray-dark to-barbershop-black">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-orbitron font-bold text-barbershop-white mb-6 animate-fade-in-up">
            AR/VR <span className="text-shimmer">EXPERIENCE</span>
          </h2>
          <p className="text-xl text-barbershop-gray-light max-w-3xl mx-auto leading-relaxed animate-fade-in-up-delay">
            Step into the future with our immersive AR/VR barbershop experience. 
            Take a virtual tour, try different styles, and book your appointment in a whole new way.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* AR/VR Controls */}
          <Card className="bg-gradient-to-br from-barbershop-gray-dark/50 to-barbershop-black/50 backdrop-blur-xl border border-barber-red/30 hover:border-barber-red/60 transition-all duration-500 hover:shadow-glow">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl text-barbershop-white">
                <Camera className="h-8 w-8 text-barber-red mr-3 animate-pulse" />
                Immersive Experience
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* AR Activation */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-barbershop-white">Augmented Reality</h3>
                    <p className="text-barbershop-gray-light text-sm">Point your camera at any surface to place our barbershop</p>
                  </div>
                  <Button
                    onClick={handleARActivation}
                    className={`${
                      isARActive 
                        ? 'bg-gradient-to-r from-barber-red to-barber-blue hover:from-barber-blue hover:to-barber-red' 
                        : 'bg-gradient-to-r from-barber-blue to-barber-red hover:from-barber-red hover:to-barber-blue'
                    }`}
                  >
                    <Camera className="h-5 w-5 mr-2" />
                    {isARActive ? 'Stop AR' : 'Start AR'}
                  </Button>
                </div>
              </div>

              {/* VR Mode */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-barbershop-white">Virtual Reality</h3>
                    <p className="text-barbershop-gray-light text-sm">Immersive 360° barbershop experience</p>
                  </div>
                  <Button
                    onClick={handleVRToggle}
                    className={`${
                      isVRMode 
                        ? 'bg-gradient-to-r from-barber-red to-barber-blue hover:from-barber-blue hover:to-barber-red' 
                        : 'bg-gradient-to-r from-barber-blue to-barber-red hover:from-barber-red hover:to-barber-blue'
                    }`}
                  >
                    <Headphones className="h-5 w-5 mr-2" />
                    {isVRMode ? 'Exit VR' : 'Enter VR'}
                  </Button>
                </div>
              </div>

              {/* View Selection */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-barbershop-white">Virtual Tour Locations</h3>
                <div className="grid grid-cols-1 gap-3">
                  {views.map((view) => (
                    <Button
                      key={view.id}
                      onClick={() => handleViewChange(view.id)}
                      variant="outline"
                      className={`justify-start p-4 h-auto ${
                        currentView === view.id
                          ? 'border-barber-red bg-barber-red/20 text-barber-red'
                          : 'border-barber-red/30 text-barbershop-gray-light hover:border-barber-red hover:text-barber-red'
                      }`}
                    >
                      <div className="text-left">
                        <div className="font-medium">{view.name}</div>
                        <div className="text-sm opacity-75">{view.description}</div>
                      </div>
                    </Button>
                  ))}
                </div>
              </div>

              {/* Media Controls */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-barbershop-white">Media Controls</h3>
                <div className="flex items-center space-x-4">
                  <Button
                    onClick={handlePlayPause}
                    className="bg-gradient-to-r from-barber-red to-barber-blue hover:from-barber-blue hover:to-barber-red"
                  >
                    {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
                  </Button>
                  <Button
                    variant="outline"
                    className="border-barber-red/30 text-barbershop-gray-light hover:border-barber-red hover:text-barber-red"
                  >
                    <RotateCcw className="h-5 w-5 mr-2" />
                    Reset View
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* AR/VR Preview */}
          <Card className="bg-gradient-to-br from-barbershop-gray-dark/50 to-barbershop-black/50 backdrop-blur-xl border border-barber-blue/30 hover:border-barber-blue/60 transition-all duration-500 hover:shadow-glow">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl text-barbershop-white">
                <Eye className="h-8 w-8 text-barber-blue mr-3 animate-pulse" />
                Live Preview
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="relative aspect-video bg-gradient-to-br from-barbershop-black to-barbershop-gray-dark rounded-xl overflow-hidden">
                {/* Simulated AR/VR View */}
                <div className="absolute inset-0 flex items-center justify-center">
                  {isARActive || isVRMode ? (
                    <div className="text-center">
                      <div className="w-32 h-32 bg-gradient-to-br from-barber-red to-barber-blue rounded-full mx-auto mb-4 animate-pulse" />
                      <h3 className="text-xl font-bold text-barbershop-white mb-2">
                        {views.find(v => v.id === currentView)?.name}
                      </h3>
                      <p className="text-barbershop-gray-light">
                        {isARActive ? 'AR Mode Active' : 'VR Mode Active'}
                      </p>
                    </div>
                  ) : (
                    <div className="text-center">
                      <Smartphone className="h-16 w-16 text-barber-blue mx-auto mb-4" />
                      <h3 className="text-xl font-bold text-barbershop-white mb-2">
                        Ready to Explore
                      </h3>
                      <p className="text-barbershop-gray-light">
                        Activate AR or VR to start your virtual tour
                      </p>
                    </div>
                  )}
                </div>

                {/* AR Overlay Elements */}
                {isARActive && (
                  <>
                    <div className="absolute top-4 left-4 bg-barber-red/80 text-white px-3 py-1 rounded-full text-sm font-bold">
                      AR ACTIVE
                    </div>
                    <div className="absolute bottom-4 right-4 bg-barber-blue/80 text-white px-3 py-1 rounded-full text-sm font-bold">
                      {currentView.toUpperCase()}
                    </div>
                  </>
                )}

                {/* VR Overlay Elements */}
                {isVRMode && (
                  <>
                    <div className="absolute top-4 left-4 bg-barber-blue/80 text-white px-3 py-1 rounded-full text-sm font-bold">
                      VR MODE
                    </div>
                    <div className="absolute bottom-4 right-4 bg-barber-red/80 text-white px-3 py-1 rounded-full text-sm font-bold">
                      360° VIEW
                    </div>
                  </>
                )}
              </div>

              {/* Instructions */}
              <div className="mt-6 space-y-3">
                <h4 className="text-lg font-semibold text-barbershop-white">How to Use:</h4>
                <div className="space-y-2 text-sm text-barbershop-gray-light">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-barber-red rounded-full" />
                    <span>AR: Point your camera at a flat surface</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-barber-blue rounded-full" />
                    <span>VR: Use your mouse to look around</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-barber-red rounded-full" />
                    <span>Select different areas to explore</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ARExperience;
