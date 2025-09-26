import { useState, useRef, useEffect } from 'react';
import { RotateCcw, ZoomIn, ZoomOut, Settings, Play, Pause, RotateCw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Slider } from '@/components/ui/slider';

const Interactive3DChairs = () => {
  const [selectedChair, setSelectedChair] = useState('classic');
  const [rotation, setRotation] = useState(0);
  const [zoom, setZoom] = useState(1);
  const [isRotating, setIsRotating] = useState(false);
  const [customization, setCustomization] = useState({
    leather: 'black',
    metal: 'chrome',
    cushion: 'red',
    height: 50,
    recline: 30
  });

  const chairs = [
    {
      id: 'classic',
      name: 'Classic Barber Chair',
      description: 'Traditional vintage style with modern comfort',
      price: '$2,499',
      features: ['Hydraulic lift', 'Leather upholstery', 'Chrome finish', '360° rotation']
    },
    {
      id: 'premium',
      name: 'Premium Executive',
      description: 'Luxury chair with advanced features',
      price: '$4,999',
      features: ['Memory foam', 'Heated seats', 'Massage function', 'Wireless charging']
    },
    {
      id: 'modern',
      name: 'Modern Minimalist',
      description: 'Sleek contemporary design',
      price: '$3,299',
      features: ['Carbon fiber', 'LED lighting', 'Touch controls', 'Bluetooth speakers']
    },
    {
      id: 'vintage',
      name: 'Vintage Restoration',
      description: 'Authentic 1950s barber chair restored',
      price: '$5,999',
      features: ['Original mechanics', 'Hand-restored', 'Antique finish', 'Collector quality']
    }
  ];

  const materials = {
    leather: ['black', 'brown', 'red', 'blue', 'white'],
    metal: ['chrome', 'brass', 'copper', 'matte-black', 'gold'],
    cushion: ['red', 'blue', 'green', 'black', 'white']
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

  const handleCustomizationChange = (key: string, value: any) => {
    setCustomization(prev => ({ ...prev, [key]: value }));
  };

  return (
    <section className="py-24 bg-gradient-to-br from-barbershop-black via-barbershop-gray-dark to-barbershop-black">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-orbitron font-bold text-barbershop-white mb-6 animate-fade-in-up">
            INTERACTIVE <span className="text-shimmer">3D CHAIRS</span>
          </h2>
          <p className="text-xl text-barbershop-gray-light max-w-3xl mx-auto leading-relaxed animate-fade-in-up-delay">
            Experience our premium barber chairs in stunning 3D. Customize every detail, 
            rotate, zoom, and see how they'll look in your space.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* 3D Viewer */}
          <Card className="bg-gradient-to-br from-barbershop-gray-dark/50 to-barbershop-black/50 backdrop-blur-xl border border-barber-red/30 hover:border-barber-red/60 transition-all duration-500 hover:shadow-glow">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl text-barbershop-white">
                <Settings className="h-8 w-8 text-barber-red mr-3 animate-pulse" />
                3D Chair Viewer
              </CardTitle>
            </CardHeader>
            <CardContent>
              {/* 3D Canvas Area */}
              <div className="relative aspect-square bg-gradient-to-br from-barbershop-black to-barbershop-gray-dark rounded-xl overflow-hidden mb-6">
                {/* Simulated 3D Chair */}
                <div 
                  className="absolute inset-0 flex items-center justify-center"
                  style={{
                    transform: `rotateY(${rotation}deg) scale(${zoom})`,
                    transformStyle: 'preserve-3d',
                    transition: isRotating ? 'none' : 'transform 0.3s ease'
                  }}
                >
                  <div className="relative">
                    {/* Chair Base */}
                    <div 
                      className="w-32 h-40 rounded-t-full"
                      style={{
                        background: `linear-gradient(135deg, 
                          ${customization.metal === 'chrome' ? '#E5E7EB' : 
                            customization.metal === 'brass' ? '#B8860B' :
                            customization.metal === 'copper' ? '#B87333' :
                            customization.metal === 'matte-black' ? '#1F2937' : '#FFD700'
                          } 0%, 
                          ${customization.metal === 'chrome' ? '#9CA3AF' : 
                            customization.metal === 'brass' ? '#8B6914' :
                            customization.metal === 'copper' ? '#8B4513' :
                            customization.metal === 'matte-black' ? '#111827' : '#B8860B'
                          } 100%)`
                      }}
                    />
                    
                    {/* Chair Back */}
                    <div 
                      className="absolute top-0 left-1/2 transform -translate-x-1/2 w-28 h-32 rounded-t-full"
                      style={{
                        background: `linear-gradient(135deg, 
                          ${customization.leather === 'black' ? '#1F2937' : 
                            customization.leather === 'brown' ? '#8B4513' :
                            customization.leather === 'red' ? '#DC2626' :
                            customization.leather === 'blue' ? '#2563EB' : '#F3F4F6'
                          } 0%, 
                          ${customization.leather === 'black' ? '#111827' : 
                            customization.leather === 'brown' ? '#654321' :
                            customization.leather === 'red' ? '#B91C1C' :
                            customization.leather === 'blue' ? '#1D4ED8' : '#E5E7EB'
                          } 100%)`
                      }}
                    />
                    
                    {/* Headrest */}
                    <div 
                      className="absolute top-2 left-1/2 transform -translate-x-1/2 w-20 h-8 rounded-full"
                      style={{
                        background: `linear-gradient(135deg, 
                          ${customization.cushion === 'red' ? '#DC2626' : 
                            customization.cushion === 'blue' ? '#2563EB' :
                            customization.cushion === 'green' ? '#059669' :
                            customization.cushion === 'black' ? '#1F2937' : '#F3F4F6'
                          } 0%, 
                          ${customization.cushion === 'red' ? '#B91C1C' : 
                            customization.cushion === 'blue' ? '#1D4ED8' :
                            customization.cushion === 'green' ? '#047857' :
                            customization.cushion === 'black' ? '#111827' : '#E5E7EB'
                          } 100%)`
                      }}
                    />
                    
                    {/* Armrests */}
                    <div 
                      className="absolute top-16 left-0 w-4 h-16 rounded-full"
                      style={{
                        background: customization.metal === 'chrome' ? '#E5E7EB' : 
                          customization.metal === 'brass' ? '#B8860B' :
                          customization.metal === 'copper' ? '#B87333' :
                          customization.metal === 'matte-black' ? '#1F2937' : '#FFD700'
                      }}
                    />
                    <div 
                      className="absolute top-16 right-0 w-4 h-16 rounded-full"
                      style={{
                        background: customization.metal === 'chrome' ? '#E5E7EB' : 
                          customization.metal === 'brass' ? '#B8860B' :
                          customization.metal === 'copper' ? '#B87333' :
                          customization.metal === 'matte-black' ? '#1F2937' : '#FFD700'
                      }}
                    />
                  </div>
                </div>

                {/* 3D Controls Overlay */}
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
              </div>

              {/* Chair Selection */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                {chairs.map((chair) => (
                  <Button
                    key={chair.id}
                    onClick={() => setSelectedChair(chair.id)}
                    className={`p-4 h-auto ${
                      selectedChair === chair.id
                        ? 'bg-gradient-to-r from-barber-red to-barber-blue text-white'
                        : 'bg-barbershop-black/50 text-barbershop-gray hover:text-barber-red hover:bg-barber-red/20'
                    }`}
                  >
                    <div className="text-left">
                      <div className="font-bold text-sm">{chair.name}</div>
                      <div className="text-xs opacity-75">{chair.price}</div>
                    </div>
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Customization Panel */}
          <Card className="bg-gradient-to-br from-barbershop-gray-dark/50 to-barbershop-black/50 backdrop-blur-xl border border-barber-blue/30 hover:border-barber-blue/60 transition-all duration-500 hover:shadow-glow">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl text-barbershop-white">
                <Settings className="h-8 w-8 text-barber-blue mr-3 animate-pulse" />
                Customize Your Chair
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Leather Color */}
              <div className="space-y-3">
                <label className="text-sm font-semibold text-barbershop-white">Leather Color</label>
                <div className="flex space-x-2">
                  {materials.leather.map((color) => (
                    <button
                      key={color}
                      onClick={() => handleCustomizationChange('leather', color)}
                      className={`w-8 h-8 rounded-full border-2 ${
                        customization.leather === color
                          ? 'border-barber-red scale-110'
                          : 'border-barbershop-gray hover:border-barber-red'
                      }`}
                      style={{
                        backgroundColor: color === 'black' ? '#1F2937' :
                          color === 'brown' ? '#8B4513' :
                          color === 'red' ? '#DC2626' :
                          color === 'blue' ? '#2563EB' : '#F3F4F6'
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* Metal Finish */}
              <div className="space-y-3">
                <label className="text-sm font-semibold text-barbershop-white">Metal Finish</label>
                <div className="flex space-x-2">
                  {materials.metal.map((finish) => (
                    <button
                      key={finish}
                      onClick={() => handleCustomizationChange('metal', finish)}
                      className={`w-8 h-8 rounded-full border-2 ${
                        customization.metal === finish
                          ? 'border-barber-red scale-110'
                          : 'border-barbershop-gray hover:border-barber-red'
                      }`}
                      style={{
                        backgroundColor: finish === 'chrome' ? '#E5E7EB' :
                          finish === 'brass' ? '#B8860B' :
                          finish === 'copper' ? '#B87333' :
                          finish === 'matte-black' ? '#1F2937' : '#FFD700'
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* Cushion Color */}
              <div className="space-y-3">
                <label className="text-sm font-semibold text-barbershop-white">Cushion Color</label>
                <div className="flex space-x-2">
                  {materials.cushion.map((color) => (
                    <button
                      key={color}
                      onClick={() => handleCustomizationChange('cushion', color)}
                      className={`w-8 h-8 rounded-full border-2 ${
                        customization.cushion === color
                          ? 'border-barber-red scale-110'
                          : 'border-barbershop-gray hover:border-barber-red'
                      }`}
                      style={{
                        backgroundColor: color === 'red' ? '#DC2626' :
                          color === 'blue' ? '#2563EB' :
                          color === 'green' ? '#059669' :
                          color === 'black' ? '#1F2937' : '#F3F4F6'
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* Height Adjustment */}
              <div className="space-y-3">
                <label className="text-sm font-semibold text-barbershop-white">
                  Height: {customization.height}%
                </label>
                <Slider
                  value={[customization.height]}
                  onValueChange={(value) => handleCustomizationChange('height', value[0])}
                  max={100}
                  min={0}
                  step={1}
                  className="w-full"
                />
              </div>

              {/* Recline Angle */}
              <div className="space-y-3">
                <label className="text-sm font-semibold text-barbershop-white">
                  Recline: {customization.recline}°
                </label>
                <Slider
                  value={[customization.recline]}
                  onValueChange={(value) => handleCustomizationChange('recline', value[0])}
                  max={60}
                  min={0}
                  step={1}
                  className="w-full"
                />
              </div>

              {/* Chair Details */}
              <div className="bg-gradient-to-r from-barber-red/20 to-barber-blue/20 p-4 rounded-xl border border-barber-red/30">
                <h4 className="font-bold text-barbershop-white mb-2">
                  {chairs.find(c => c.id === selectedChair)?.name}
                </h4>
                <p className="text-sm text-barbershop-gray-light mb-3">
                  {chairs.find(c => c.id === selectedChair)?.description}
                </p>
                <div className="text-2xl font-bold text-barber-red mb-3">
                  {chairs.find(c => c.id === selectedChair)?.price}
                </div>
                <ul className="space-y-1">
                  {chairs.find(c => c.id === selectedChair)?.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-sm text-barbershop-gray-light">
                      <div className="w-1 h-1 bg-barber-red rounded-full mr-2" />
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
                  Save Configuration
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Interactive3DChairs;
