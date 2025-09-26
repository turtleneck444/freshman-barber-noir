import { useState, useRef, useEffect } from 'react';
import { Video, VideoOff, Mic, MicOff, Phone, PhoneOff, Users, MessageCircle, Heart, Share2, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';

const LiveStreaming = () => {
  const [isStreaming, setIsStreaming] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isVideoOn, setIsVideoOn] = useState(true);
  const [viewerCount, setViewerCount] = useState(1247);
  const [isInCall, setIsInCall] = useState(false);
  const [chatMessages, setChatMessages] = useState([
    { id: 1, user: 'Mike_R', message: 'Amazing work on that fade!', timestamp: '2m ago' },
    { id: 2, user: 'BarberPro', message: 'What products do you recommend?', timestamp: '1m ago' },
    { id: 3, user: 'StyleGuru', message: 'Can you show the back view?', timestamp: '30s ago' }
  ]);
  const [newMessage, setNewMessage] = useState('');
  const [likes, setLikes] = useState(89);
  const [isLiked, setIsLiked] = useState(false);

  const videoRef = useRef<HTMLVideoElement>(null);
  const streamRef = useRef<MediaStream | null>(null);

  useEffect(() => {
    // Simulate viewer count changes
    const interval = setInterval(() => {
      setViewerCount(prev => prev + Math.floor(Math.random() * 10) - 5);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const startStream = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true
      });
      
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        streamRef.current = stream;
      }
      
      setIsStreaming(true);
    } catch (error) {
      console.error('Error accessing media devices:', error);
    }
  };

  const stopStream = () => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach(track => track.stop());
      streamRef.current = null;
    }
    setIsStreaming(false);
  };

  const toggleMute = () => {
    if (streamRef.current) {
      const audioTracks = streamRef.current.getAudioTracks();
      audioTracks.forEach(track => {
        track.enabled = !track.enabled;
      });
      setIsMuted(!isMuted);
    }
  };

  const toggleVideo = () => {
    if (streamRef.current) {
      const videoTracks = streamRef.current.getVideoTracks();
      videoTracks.forEach(track => {
        track.enabled = !track.enabled;
      });
      setIsVideoOn(!isVideoOn);
    }
  };

  const sendMessage = () => {
    if (newMessage.trim()) {
      const message = {
        id: Date.now(),
        user: 'You',
        message: newMessage,
        timestamp: 'now'
      };
      setChatMessages(prev => [...prev, message]);
      setNewMessage('');
    }
  };

  const handleLike = () => {
    if (isLiked) {
      setLikes(prev => prev - 1);
    } else {
      setLikes(prev => prev + 1);
    }
    setIsLiked(!isLiked);
  };

  const joinCall = () => {
    setIsInCall(true);
    // Simulate joining a call
    setTimeout(() => {
      setIsInCall(false);
    }, 30000); // 30 second demo call
  };

  return (
    <section className="py-24 bg-gradient-to-br from-barbershop-black via-barbershop-gray-dark to-barbershop-black">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-orbitron font-bold text-barbershop-white mb-6 animate-fade-in-up">
            LIVE <span className="text-shimmer">STREAMING</span>
          </h2>
          <p className="text-xl text-barbershop-gray-light max-w-3xl mx-auto leading-relaxed animate-fade-in-up-delay">
            Watch our master barbers work in real-time. Get live consultations, 
            ask questions, and learn professional techniques from anywhere in the world.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Stream */}
          <div className="lg:col-span-2">
            <Card className="bg-gradient-to-br from-barbershop-gray-dark/50 to-barbershop-black/50 backdrop-blur-xl border border-barber-red/30 hover:border-barber-red/60 transition-all duration-500 hover:shadow-glow">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center text-xl text-barbershop-white">
                    <Video className="h-6 w-6 text-barber-red mr-3 animate-pulse" />
                    Live Barber Session
                  </CardTitle>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2 text-barbershop-gray-light">
                      <Users className="h-4 w-4 text-barber-blue" />
                      <span className="text-sm font-medium">{viewerCount.toLocaleString()} watching</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Heart 
                        className={`h-4 w-4 cursor-pointer transition-colors ${
                          isLiked ? 'text-barber-red fill-current' : 'text-barbershop-gray hover:text-barber-red'
                        }`}
                        onClick={handleLike}
                      />
                      <span className="text-sm text-barbershop-gray-light">{likes}</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                {/* Video Player */}
                <div className="relative aspect-video bg-gradient-to-br from-barbershop-black to-barbershop-gray-dark rounded-xl overflow-hidden mb-6">
                  {isStreaming ? (
                    <video
                      ref={videoRef}
                      autoPlay
                      muted={isMuted}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <Video className="h-16 w-16 text-barber-red mx-auto mb-4" />
                        <h3 className="text-xl font-bold text-barbershop-white mb-2">
                          Live Stream Offline
                        </h3>
                        <p className="text-barbershop-gray-light">
                          Stream will start at 2:00 PM EST
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Stream Overlay */}
                  <div className="absolute top-4 left-4 bg-barber-red/80 text-white px-3 py-1 rounded-full text-sm font-bold">
                    LIVE
                  </div>
                  
                  <div className="absolute top-4 right-4 bg-barbershop-black/80 text-white px-3 py-1 rounded-full text-sm">
                    HD 1080p
                  </div>

                  {/* Stream Controls */}
                  <div className="absolute bottom-4 left-4 flex space-x-2">
                    <Button
                      onClick={isStreaming ? stopStream : startStream}
                      className={`${
                        isStreaming 
                          ? 'bg-barber-red hover:bg-barber-red-dark' 
                          : 'bg-gradient-to-r from-barber-red to-barber-blue hover:from-barber-blue hover:to-barber-red'
                      } text-white`}
                    >
                      {isStreaming ? <VideoOff className="h-4 w-4 mr-2" /> : <Video className="h-4 w-4 mr-2" />}
                      {isStreaming ? 'End Stream' : 'Start Stream'}
                    </Button>
                    
                    {isStreaming && (
                      <>
                        <Button
                          onClick={toggleMute}
                          variant="outline"
                          className={`border-barber-red/30 text-barbershop-white hover:border-barber-red ${
                            isMuted ? 'bg-barber-red/20 text-barber-red' : ''
                          }`}
                        >
                          {isMuted ? <MicOff className="h-4 w-4" /> : <Mic className="h-4 w-4" />}
                        </Button>
                        
                        <Button
                          onClick={toggleVideo}
                          variant="outline"
                          className={`border-barber-red/30 text-barbershop-white hover:border-barber-red ${
                            !isVideoOn ? 'bg-barber-red/20 text-barber-red' : ''
                          }`}
                        >
                          {isVideoOn ? <Video className="h-4 w-4" /> : <VideoOff className="h-4 w-4" />}
                        </Button>
                      </>
                    )}
                  </div>
                </div>

                {/* Stream Info */}
                <div className="space-y-4">
                  <h3 className="text-lg font-bold text-barbershop-white">
                    Master Barber Session: Advanced Fade Techniques
                  </h3>
                  <p className="text-barbershop-gray-light">
                    Join our master barber as they demonstrate professional fade techniques, 
                    product recommendations, and answer your questions in real-time.
                  </p>
                  
                  <div className="flex items-center space-x-6 text-sm text-barbershop-gray-light">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-barber-red rounded-full animate-pulse" />
                      <span>Live for 2h 15m</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="h-4 w-4" />
                      <span>{viewerCount.toLocaleString()} viewers</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Heart className="h-4 w-4" />
                      <span>{likes} likes</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Chat & Controls */}
          <div className="space-y-6">
            {/* Live Chat */}
            <Card className="bg-gradient-to-br from-barbershop-gray-dark/50 to-barbershop-black/50 backdrop-blur-xl border border-barber-blue/30 hover:border-barber-blue/60 transition-all duration-500 hover:shadow-glow">
              <CardHeader>
                <CardTitle className="flex items-center text-lg text-barbershop-white">
                  <MessageCircle className="h-5 w-5 text-barber-blue mr-3" />
                  Live Chat
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {/* Chat Messages */}
                  <div className="h-64 overflow-y-auto space-y-3 pr-2">
                    {chatMessages.map((msg) => (
                      <div key={msg.id} className="flex flex-col space-y-1">
                        <div className="flex items-center space-x-2">
                          <span className="text-xs font-semibold text-barber-red">{msg.user}</span>
                          <span className="text-xs text-barbershop-gray">{msg.timestamp}</span>
                        </div>
                        <p className="text-sm text-barbershop-gray-light">{msg.message}</p>
                      </div>
                    ))}
                  </div>

                  {/* Chat Input */}
                  <div className="flex space-x-2">
                    <Input
                      value={newMessage}
                      onChange={(e) => setNewMessage(e.target.value)}
                      placeholder="Type a message..."
                      className="flex-1 bg-barbershop-black/50 border-barber-blue/30 text-barbershop-white placeholder-barbershop-gray focus:border-barber-blue"
                      onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                    />
                    <Button
                      onClick={sendMessage}
                      className="bg-gradient-to-r from-barber-blue to-barber-red hover:from-barber-red hover:to-barber-blue"
                    >
                      Send
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="bg-gradient-to-br from-barbershop-gray-dark/50 to-barbershop-black/50 backdrop-blur-xl border border-barber-red/30 hover:border-barber-red/60 transition-all duration-500 hover:shadow-glow">
              <CardHeader>
                <CardTitle className="text-lg text-barbershop-white">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button
                  onClick={joinCall}
                  className="w-full bg-gradient-to-r from-barber-red to-barber-blue hover:from-barber-blue hover:to-barber-red text-white font-bold py-3 px-6 rounded-xl shadow-luxury hover:shadow-glow transform hover:scale-105 transition-all duration-300"
                >
                  <Phone className="h-5 w-5 mr-2" />
                  Join 1-on-1 Call
                </Button>
                
                <Button
                  variant="outline"
                  className="w-full border-barber-red/30 text-barbershop-white hover:border-barber-red hover:bg-barber-red/20"
                >
                  <Share2 className="h-5 w-5 mr-2" />
                  Share Stream
                </Button>
                
                <Button
                  variant="outline"
                  className="w-full border-barber-blue/30 text-barbershop-white hover:border-barber-blue hover:bg-barber-blue/20"
                >
                  <Settings className="h-5 w-5 mr-2" />
                  Stream Settings
                </Button>
              </CardContent>
            </Card>

            {/* Upcoming Streams */}
            <Card className="bg-gradient-to-br from-barbershop-gray-dark/50 to-barbershop-black/50 backdrop-blur-xl border border-barber-red/30 hover:border-barber-red/60 transition-all duration-500 hover:shadow-glow">
              <CardHeader>
                <CardTitle className="text-lg text-barbershop-white">Upcoming Streams</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-barbershop-white">Beard Styling Masterclass</span>
                    <span className="text-xs text-barber-red">3:00 PM</span>
                  </div>
                  <p className="text-xs text-barbershop-gray-light">Learn advanced beard trimming techniques</p>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-barbershop-white">Product Review Session</span>
                    <span className="text-xs text-barber-red">4:30 PM</span>
                  </div>
                  <p className="text-xs text-barbershop-gray-light">Testing new barbering products</p>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-barbershop-white">Q&A with Master Barbers</span>
                    <span className="text-xs text-barber-red">6:00 PM</span>
                  </div>
                  <p className="text-xs text-barbershop-gray-light">Ask anything about barbering</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveStreaming;
