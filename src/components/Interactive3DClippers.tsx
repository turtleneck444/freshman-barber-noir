import { useState, useRef, useEffect } from 'react';
import { RotateCcw, ZoomIn, ZoomOut, Settings, Play, Pause, RotateCw, Scissors, Zap, Crown, Star, Sparkles, Power, Wifi, Battery, Volume2, VolumeX } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Slider } from '@/components/ui/slider';

const Interactive3DClippers = () => {
  const [selectedClipper, setSelectedClipper] = useState('premium');
  const [rotation, setRotation] = useState(0);
  const [zoom, setZoom] = useState(1);
  const [isRotating, setIsRotating] = useState(false);
  const [isPowered, setIsPowered] = useState(false);
  const [batteryLevel, setBatteryLevel] = useState(85);
  const [isCharging, setIsCharging] = useState(false);
  const [customization, setCustomization] = useState({
    body: 'titanium',
    grip: 'carbon-fiber',
    blade: 'ceramic',
    accent: 'gold',
    led: 'blue',
    weight: 50,
    power: 80
  });

  const clippers = [
    {
      id: 'premium',
      name: 'Professional Elite',
      description: 'Ultimate barbering precision with advanced features',
      price: '$899',
      features: ['Titanium Body', 'Ceramic Blades', 'LED Display', 'Wireless Charging', 'App Control'],
      icon: Crown
    },
    {
      id: 'classic',
      name: 'Vintage Master',
      description: 'Classic design with modern performance',
      price: '$599',
      features: ['Stainless Steel', 'Precision Blades', 'Ergonomic Grip', 'Long Battery', 'Quiet Motor'],
      icon: Scissors
    },
    {
      id: 'modern',
      name: 'Digital Pro',
      description: 'Smart clippers with AI-powered cutting',
      price: '$1,299',
      features: ['Smart Sensors', 'Auto-Adjust', 'Bluetooth', 'Voice Control', 'Haptic Feedback'],
      icon: Zap
    },
    {
      id: 'luxury',
      name: 'Diamond Collection',
      description: 'Luxury clippers with precious materials',
      price: '$2,499',
      features: ['Diamond Coating', 'Gold Accents', 'Leather Case', 'Limited Edition', 'Lifetime Warranty'],
      icon: Star
    }
  ];

  const materials = {
    body: [
      { id: 'titanium', name: 'Titanium', color: '#C0C0C0', price: 0 },
      { id: 'carbon-fiber', name: 'Carbon Fiber', color: '#2C2C2C', price: 150 },
      { id: 'stainless-steel', name: 'Stainless Steel', color: '#E5E5E5', price: 0 },
      { id: 'aluminum', name: 'Anodized Aluminum', color: '#4A90E2', price: 75 },
      { id: 'brass', name: 'Brass', color: '#B87333', price: 200 }
    ],
    grip: [
      { id: 'carbon-fiber', name: 'Carbon Fiber', color: '#1A1A1A', price: 100 },
      { id: 'rubber', name: 'Premium Rubber', color: '#2C2C2C', price: 0 },
      { id: 'leather', name: 'Italian Leather', color: '#8B4513', price: 150 },
      { id: 'wood', name: 'Walnut Wood', color: '#8B4513', price: 125 },
      { id: 'silicone', name: 'Silicone', color: '#4A4A4A', price: 50 }
    ],
    blade: [
      { id: 'ceramic', name: 'Ceramic Coated', color: '#F0F0F0', price: 200 },
      { id: 'titanium', name: 'Titanium', color: '#C0C0C0', price: 150 },
      { id: 'stainless', name: 'Stainless Steel', color: '#E5E5E5', price: 0 },
      { id: 'diamond', name: 'Diamond Coated', color: '#FFFFFF', price: 500 },
      { id: 'tungsten', name: 'Tungsten Carbide', color: '#A0A0A0', price: 300 }
    ],
    accent: [
      { id: 'gold', name: '24K Gold', color: '#FFD700', price: 300 },
      { id: 'silver', name: 'Sterling Silver', color: '#C0C0C0', price: 150 },
      { id: 'platinum', name: 'Platinum', color: '#E5E4E2', price: 400 },
      { id: 'copper', name: 'Copper', color: '#B87333', price: 100 },
      { id: 'black', name: 'Black Chrome', color: '#2C2C2C', price: 75 }
    ],
    led: [
      { id: 'blue', name: 'Electric Blue', color: '#00BFFF', price: 0 },
      { id: 'red', name: 'Crimson Red', color: '#DC143C', price: 25 },
      { id: 'green', name: 'Emerald Green', color: '#00FF7F', price: 25 },
      { id: 'purple', name: 'Royal Purple', color: '#8A2BE2', price: 25 },
      { id: 'white', name: 'Pure White', color: '#FFFFFF', price: 25 },
      { id: 'rainbow', name: 'Rainbow', color: 'linear-gradient(45deg, #ff0000, #ff7f00, #ffff00, #00ff00, #0000ff, #4b0082, #9400d3)', price: 100 }
    ]
  };

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isRotating) {
      interval = setInterval(() => {
        setRotation(prev => (prev + 2) % 360);
      }, 50);
    }
    return () => clearInterval(interval);
  }, [isRotating]);

  useEffect(() => {
    if (isPowered) {
      const interval = setInterval(() => {
        setBatteryLevel(prev => Math.max(0, prev - 0.1));
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [isPowered]);

  const handleCustomizationChange = (key: string, value: any) => {
    setCustomization(prev => ({ ...prev, [key]: value }));
  };

  const calculateTotalPrice = () => {
    const basePrice = clippers.find(c => c.id === selectedClipper)?.price.replace('$', '') || '0';
    const base = parseInt(basePrice);
    
    const bodyPrice = materials.body.find(m => m.id === customization.body)?.price || 0;
    const gripPrice = materials.grip.find(m => m.id === customization.grip)?.price || 0;
    const bladePrice = materials.blade.find(m => m.id === customization.blade)?.price || 0;
    const accentPrice = materials.accent.find(m => m.id === customization.accent)?.price || 0;
    const ledPrice = materials.led.find(m => m.id === customization.led)?.price || 0;
    
    return base + bodyPrice + gripPrice + bladePrice + accentPrice + ledPrice;
  };

  const getBatteryClass = () => {
    if (batteryLevel < 20) return 'battery-low';
    if (batteryLevel < 50) return 'battery-medium';
    return 'battery-high';
  };

  return (
    <section id="clippers" className="py-24 bg-gradient-to-br from-barbershop-black via-barbershop-gray-dark to-barbershop-black">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-orbitron font-bold text-barbershop-white mb-6 animate-fade-in-up">
            DESIGN YOUR <span className="text-shimmer">CLIPPERS</span>
          </h2>
          <p className="text-xl text-barbershop-gray-light max-w-3xl mx-auto leading-relaxed animate-fade-in-up-delay">
            Create the ultimate barbering tool. Customize every detail with premium materials, 
            advanced features, and luxury finishes. Build your perfect clippers in stunning 3D.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Advanced 3D Clipper Viewer */}
          <Card className="bg-gradient-to-br from-barbershop-gray-dark/50 to-barbershop-black/50 backdrop-blur-xl border border-barber-red/30 hover:border-barber-red/60 transition-all duration-500 hover:shadow-glow">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl text-barbershop-white">
                <Settings className="h-8 w-8 text-barber-red mr-3 animate-pulse" />
                3D Clipper Designer
              </CardTitle>
            </CardHeader>
            <CardContent>
              {/* Advanced 3D Canvas Area */}
              <div className="relative aspect-square bg-gradient-to-br from-barbershop-black to-barbershop-gray-dark rounded-xl overflow-hidden mb-6 clipper-3d">
                {/* Advanced 3D Clipper with Black & Gold Theme */}
                <div 
                  className="absolute inset-0 flex items-center justify-center clipper-hover"
                  style={{
                    transform: `rotateY(${rotation}deg) scale(${zoom})`,
                    transformStyle: 'preserve-3d',
                    transition: isRotating ? 'none' : 'transform 0.3s ease'
                  }}
                >
                  <div className="relative">
                    {/* Main Clipper Body - Black & Gold */}
                    <div 
                      className={`w-64 h-20 rounded-full relative clipper-glow ${customization.body === 'titanium' ? 'material-titanium' : 'material-carbon'}`}
                      style={{
                        background: `linear-gradient(135deg, 
                          #1a1a1a 0%, 
                          #2c2c2c 30%, 
                          #1a1a1a 70%, 
                          #0d0d0d 100%)`,
                        border: '2px solid #FFD700'
                      }}
                    >
                      {/* Gold Accent Strip */}
                      <div 
                        className="absolute top-2 left-6 right-6 h-1 rounded-full gold-accent"
                        style={{
                          background: 'linear-gradient(90deg, #FFD700 0%, #FFA500 50%, #FFD700 100%)'
                        }}
                      />
                      
                      {/* LED Status Strip */}
                      <div 
                        className={`absolute top-4 left-8 right-8 h-0.5 rounded-full led-strip ${isPowered ? 'led-flow' : ''}`}
                        style={{
                          background: isPowered 
                            ? (customization.led === 'rainbow' 
                                ? 'linear-gradient(90deg, #ff0000, #ff7f00, #ffff00, #00ff00, #0000ff, #4b0082, #9400d3)'
                                : materials.led.find(m => m.id === customization.led)?.color)
                            : '#333',
                          boxShadow: isPowered ? `0 0 15px ${materials.led.find(m => m.id === customization.led)?.color}80` : 'none'
                        }}
                      />
                      
                      {/* Gold Accent Details */}
                      <div 
                        className="absolute top-1 left-3 w-3 h-3 rounded-full glow-gold"
                        style={{
                          background: 'radial-gradient(circle, #FFD700 0%, #FFA500 100%)'
                        }}
                      />
                      <div 
                        className="absolute top-1 right-3 w-3 h-3 rounded-full glow-gold"
                        style={{
                          background: 'radial-gradient(circle, #FFD700 0%, #FFA500 100%)'
                        }}
                      />
                      
                      {/* Power Button - Gold */}
                      <div 
                        className={`absolute top-6 right-6 w-6 h-6 rounded-full border-2 cursor-pointer hover:scale-110 transition-transform duration-200 clipper-button ${isPowered ? 'power-on' : 'power-off'}`}
                        style={{
                          borderColor: '#FFD700'
                        }}
                        onClick={() => setIsPowered(!isPowered)}
                      />
                      
                      {/* Brand Logo */}
                      <div className="absolute top-2 left-1/2 transform -translate-x-1/2 text-xs font-bold text-yellow-400">
                        FRESHMAN
                      </div>
                    </div>
                    
                    {/* Advanced Grip Section - Black & Gold */}
                    <div 
                      className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-24 h-10 rounded-full"
                      style={{
                        background: `linear-gradient(135deg, 
                          #1a1a1a 0%, 
                          #2c2c2c 50%, 
                          #1a1a1a 100%)`,
                        border: '1px solid #FFD700',
                        boxShadow: '0 4px 16px rgba(255, 215, 0, 0.2)'
                      }}
                    >
                      {/* Grip Texture Lines */}
                      <div className="absolute top-1 left-2 right-2 h-0.5 bg-yellow-400/30 rounded-full" />
                      <div className="absolute top-2 left-2 right-2 h-0.5 bg-yellow-400/20 rounded-full" />
                      <div className="absolute top-3 left-2 right-2 h-0.5 bg-yellow-400/20 rounded-full" />
                      <div className="absolute top-4 left-2 right-2 h-0.5 bg-yellow-400/30 rounded-full" />
                    </div>
                    
                    {/* Advanced Blade Assembly - Black & Gold */}
                    <div 
                      className={`absolute -top-6 left-1/2 transform -translate-x-1/2 w-40 h-8 rounded-t-full blade-shine ${customization.blade === 'diamond' ? 'glow-gold' : ''}`}
                      style={{
                        background: `linear-gradient(135deg, 
                          #1a1a1a 0%, 
                          #2c2c2c 30%, 
                          #1a1a1a 70%, 
                          #0d0d0d 100%)`,
                        border: '2px solid #FFD700',
                        boxShadow: '0 4px 20px rgba(255, 215, 0, 0.3)'
                      }}
                    >
                      {/* Blade Teeth */}
                      <div className="absolute -top-1 left-4 right-4 h-2 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-t-full" />
                      <div className="absolute -top-0.5 left-6 right-6 h-1 bg-yellow-500 rounded-t-full" />
                      
                      {/* Gold Accent Line */}
                      <div 
                        className="absolute top-1 left-2 right-2 h-0.5 rounded-full gold-accent"
                        style={{
                          background: 'linear-gradient(90deg, #FFD700 0%, #FFA500 50%, #FFD700 100%)'
                        }}
                      />
                    </div>
                    
                    {/* Battery Indicator */}
                    <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-16 h-4 bg-black border border-yellow-400 rounded">
                      <div 
                        className={`h-full rounded ${getBatteryClass()}`}
                        style={{ width: `${batteryLevel}%` }}
                      />
                      <div className="absolute top-0 left-0 right-0 text-xs text-yellow-400 text-center font-bold">
                        {Math.round(batteryLevel)}%
                      </div>
                    </div>
                    
                    {/* Power Status Indicator */}
                    {isPowered && (
                      <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 flex items-center space-x-1">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                        <span className="text-xs text-green-400 font-bold">POWERED</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Advanced 3D Controls Overlay */}
                <div className="absolute top-4 left-4 flex space-x-2">
                  <Button
                    onClick={() => setIsRotating(!isRotating)}
                    size="sm"
                    className={`${isRotating ? 'bg-barber-red' : 'bg-barber-blue'} text-white`}
                  >
                    {isRotating ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                  </Button>
                  <Button
                    onClick={() => setRotation(0)}
                    size="sm"
                    variant="outline"
                    className="border-barber-red/30 text-barbershop-white hover:border-barber-red"
                  >
                    <RotateCcw className="h-4 w-4" />
                  </Button>
                  <Button
                    onClick={() => setIsPowered(!isPowered)}
                    size="sm"
                    variant="outline"
                    className="border-yellow-400/30 text-yellow-400 hover:border-yellow-400"
                  >
                    <Power className="h-4 w-4" />
                  </Button>
                </div>

                {/* Zoom Controls */}
                <div className="absolute top-4 right-4 flex space-x-2">
                  <Button
                    onClick={() => setZoom(Math.max(0.5, zoom - 0.1))}
                    size="sm"
                    variant="outline"
                    className="border-barber-red/30 text-barbershop-white hover:border-barber-red"
                  >
                    <ZoomOut className="h-4 w-4" />
                  </Button>
                  <Button
                    onClick={() => setZoom(Math.min(2, zoom + 0.1))}
                    size="sm"
                    variant="outline"
                    className="border-barber-red/30 text-barbershop-white hover:border-barber-red"
                  >
                    <ZoomIn className="h-4 w-4" />
                  </Button>
                </div>

                {/* Advanced Specs Overlay */}
                <div className="absolute bottom-4 left-4 bg-black/90 backdrop-blur-xl text-white px-4 py-3 rounded-lg border border-yellow-400/30">
                  <div className="text-sm space-y-1">
                    <div className="flex items-center space-x-2">
                      <Battery className="h-4 w-4 text-yellow-400" />
                      <span>Battery: {Math.round(batteryLevel)}%</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Zap className="h-4 w-4 text-yellow-400" />
                      <span>Power: {customization.power}%</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Scissors className="h-4 w-4 text-yellow-400" />
                      <span>Weight: {customization.weight}g</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Wifi className="h-4 w-4 text-yellow-400" />
                      <span>Status: {isPowered ? 'ONLINE' : 'OFFLINE'}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Clipper Selection */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                {clippers.map((clipper) => {
                  const IconComponent = clipper.icon;
                  return (
                    <Button
                      key={clipper.id}
                      onClick={() => setSelectedClipper(clipper.id)}
                      className={`p-4 h-auto ${
                        selectedClipper === clipper.id
                          ? 'bg-gradient-to-r from-barber-red to-barber-blue text-white'
                          : 'bg-barbershop-black/50 text-barbershop-gray hover:text-barber-red hover:bg-barber-red/20'
                      }`}
                    >
                      <div className="text-left">
                        <div className="flex items-center space-x-2 mb-1">
                          <IconComponent className="h-4 w-4" />
                          <span className="font-bold text-sm">{clipper.name}</span>
                        </div>
                        <div className="text-xs opacity-75">{clipper.price}</div>
                      </div>
                    </Button>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          {/* Customization Panel */}
          <Card className="bg-gradient-to-br from-barbershop-gray-dark/50 to-barbershop-black/50 backdrop-blur-xl border border-barber-blue/30 hover:border-barber-blue/60 transition-all duration-500 hover:shadow-glow">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl text-barbershop-white">
                <Sparkles className="h-8 w-8 text-barber-blue mr-3 animate-pulse" />
                Customize Your Clippers
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Body Material */}
              <div className="space-y-3">
                <label className="text-sm font-semibold text-barbershop-white">Body Material</label>
                <div className="grid grid-cols-3 gap-2">
                  {materials.body.map((material) => (
                    <button
                      key={material.id}
                      onClick={() => handleCustomizationChange('body', material.id)}
                      className={`p-3 rounded-lg border-2 transition-all duration-300 ${
                        customization.body === material.id
                          ? 'border-barber-red scale-105 shadow-glow'
                          : 'border-barbershop-gray hover:border-barber-red'
                      }`}
                    >
                      <div 
                        className="w-8 h-8 rounded-full mx-auto mb-2"
                        style={{ backgroundColor: material.color }}
                      />
                      <div className="text-xs text-center">
                        <div className="font-medium text-barbershop-white">{material.name}</div>
                        {material.price > 0 && (
                          <div className="text-barber-red">+${material.price}</div>
                        )}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Grip Material */}
              <div className="space-y-3">
                <label className="text-sm font-semibold text-barbershop-white">Grip Material</label>
                <div className="grid grid-cols-3 gap-2">
                  {materials.grip.map((material) => (
                    <button
                      key={material.id}
                      onClick={() => handleCustomizationChange('grip', material.id)}
                      className={`p-3 rounded-lg border-2 transition-all duration-300 ${
                        customization.grip === material.id
                          ? 'border-barber-red scale-105 shadow-glow'
                          : 'border-barbershop-gray hover:border-barber-red'
                      }`}
                    >
                      <div 
                        className="w-8 h-8 rounded-full mx-auto mb-2"
                        style={{ backgroundColor: material.color }}
                      />
                      <div className="text-xs text-center">
                        <div className="font-medium text-barbershop-white">{material.name}</div>
                        {material.price > 0 && (
                          <div className="text-barber-red">+${material.price}</div>
                        )}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Blade Type */}
              <div className="space-y-3">
                <label className="text-sm font-semibold text-barbershop-white">Blade Type</label>
                <div className="grid grid-cols-3 gap-2">
                  {materials.blade.map((material) => (
                    <button
                      key={material.id}
                      onClick={() => handleCustomizationChange('blade', material.id)}
                      className={`p-3 rounded-lg border-2 transition-all duration-300 ${
                        customization.blade === material.id
                          ? 'border-barber-red scale-105 shadow-glow'
                          : 'border-barbershop-gray hover:border-barber-red'
                      }`}
                    >
                      <div 
                        className="w-8 h-8 rounded-full mx-auto mb-2"
                        style={{ backgroundColor: material.color }}
                      />
                      <div className="text-xs text-center">
                        <div className="font-medium text-barbershop-white">{material.name}</div>
                        {material.price > 0 && (
                          <div className="text-barber-red">+${material.price}</div>
                        )}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Accent Color */}
              <div className="space-y-3">
                <label className="text-sm font-semibold text-barbershop-white">Accent Color</label>
                <div className="grid grid-cols-3 gap-2">
                  {materials.accent.map((material) => (
                    <button
                      key={material.id}
                      onClick={() => handleCustomizationChange('accent', material.id)}
                      className={`p-3 rounded-lg border-2 transition-all duration-300 ${
                        customization.accent === material.id
                          ? 'border-barber-red scale-105 shadow-glow'
                          : 'border-barbershop-gray hover:border-barber-red'
                      }`}
                    >
                      <div 
                        className="w-8 h-8 rounded-full mx-auto mb-2"
                        style={{ backgroundColor: material.color }}
                      />
                      <div className="text-xs text-center">
                        <div className="font-medium text-barbershop-white">{material.name}</div>
                        {material.price > 0 && (
                          <div className="text-barber-red">+${material.price}</div>
                        )}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* LED Color */}
              <div className="space-y-3">
                <label className="text-sm font-semibold text-barbershop-white">LED Color</label>
                <div className="grid grid-cols-3 gap-2">
                  {materials.led.map((material) => (
                    <button
                      key={material.id}
                      onClick={() => handleCustomizationChange('led', material.id)}
                      className={`p-3 rounded-lg border-2 transition-all duration-300 ${
                        customization.led === material.id
                          ? 'border-barber-red scale-105 shadow-glow'
                          : 'border-barbershop-gray hover:border-barber-red'
                      }`}
                    >
                      <div 
                        className="w-8 h-8 rounded-full mx-auto mb-2"
                        style={{ 
                          background: material.id === 'rainbow' 
                            ? 'linear-gradient(45deg, #ff0000, #ff7f00, #ffff00, #00ff00, #0000ff, #4b0082, #9400d3)'
                            : material.color 
                        }}
                      />
                      <div className="text-xs text-center">
                        <div className="font-medium text-barbershop-white">{material.name}</div>
                        {material.price > 0 && (
                          <div className="text-barber-red">+${material.price}</div>
                        )}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Weight Adjustment */}
              <div className="space-y-3">
                <label className="text-sm font-semibold text-barbershop-white">
                  Weight: {customization.weight}g
                </label>
                <Slider
                  value={[customization.weight]}
                  onValueChange={(value) => handleCustomizationChange('weight', value[0])}
                  max={100}
                  min={20}
                  step={5}
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-barbershop-gray-light">
                  <span>Light (20g)</span>
                  <span>Heavy (100g)</span>
                </div>
              </div>

              {/* Power Level */}
              <div className="space-y-3">
                <label className="text-sm font-semibold text-barbershop-white">
                  Power: {customization.power}%
                </label>
                <Slider
                  value={[customization.power]}
                  onValueChange={(value) => handleCustomizationChange('power', value[0])}
                  max={100}
                  min={20}
                  step={5}
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-barbershop-gray-light">
                  <span>Eco (20%)</span>
                  <span>Turbo (100%)</span>
                </div>
              </div>

              {/* Clipper Details */}
              <div className="bg-gradient-to-r from-barber-red/20 to-barber-blue/20 p-4 rounded-xl border border-barber-red/30">
                <h4 className="font-bold text-barbershop-white mb-2">
                  {clippers.find(c => c.id === selectedClipper)?.name}
                </h4>
                <p className="text-sm text-barbershop-gray-light mb-3">
                  {clippers.find(c => c.id === selectedClipper)?.description}
                </p>
                <div className="text-3xl font-bold text-barber-red mb-3">
                  ${calculateTotalPrice()}
                </div>
                <ul className="space-y-1">
                  {clippers.find(c => c.id === selectedClipper)?.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-sm text-barbershop-white">
                      <div className="w-2 h-2 bg-barber-red rounded-full mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-4">
                <Button className="flex-1 bg-gradient-to-r from-barber-red to-barber-blue hover:from-barber-blue hover:to-barber-red text-white font-bold py-3 px-6 rounded-xl shadow-luxury hover:shadow-glow transform hover:scale-105 transition-all duration-300">
                  Add to Cart
                </Button>
                <Button variant="outline" className="border-barber-red/30 text-barbershop-white hover:border-barber-red hover:bg-barber-red/20">
                  Save Design
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Interactive3DClippers;
