import { useState, useEffect, useRef } from 'react';
import { Mic, MicOff, Volume2, VolumeX, Settings, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface VoiceCommandsProps {
  onCommand?: (command: string) => void;
  onServiceSelect?: (service: string) => void;
  onBookingRequest?: () => void;
}

const VoiceCommands = ({ onCommand, onServiceSelect, onBookingRequest }: VoiceCommandsProps) => {
  const [isListening, setIsListening] = useState(false);
  const [isSupported, setIsSupported] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [isMuted, setIsMuted] = useState(false);
  const [recognition, setRecognition] = useState<any>(null);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  
  const recognitionRef = useRef<any>(null);

  const commands = [
    'book appointment',
    'schedule haircut',
    'traditional shave',
    'beard grooming',
    'royal package',
    'view services',
    'contact info',
    'hours of operation',
    'location address',
    'pricing information'
  ];

  useEffect(() => {
    // Check for speech recognition support
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      setIsSupported(true);
      const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
      const recognitionInstance = new SpeechRecognition();
      
      recognitionInstance.continuous = true;
      recognitionInstance.interimResults = true;
      recognitionInstance.lang = 'en-US';

      recognitionInstance.onstart = () => {
        setIsListening(true);
        setTranscript('');
      };

      recognitionInstance.onresult = (event) => {
        let finalTranscript = '';
        let interimTranscript = '';

        for (let i = event.resultIndex; i < event.results.length; i++) {
          const transcript = event.results[i][0].transcript;
          if (event.results[i].isFinal) {
            finalTranscript += transcript;
          } else {
            interimTranscript += transcript;
          }
        }

        setTranscript(finalTranscript || interimTranscript);
        
        if (finalTranscript) {
          processCommand(finalTranscript.toLowerCase());
        }
      };

      recognitionInstance.onerror = (event) => {
        console.error('Speech recognition error:', event.error);
        setIsListening(false);
      };

      recognitionInstance.onend = () => {
        setIsListening(false);
      };

      setRecognition(recognitionInstance);
      recognitionRef.current = recognitionInstance;
    }
  }, []);

  const processCommand = (command: string) => {
    const matchedCommand = commands.find(cmd => command.includes(cmd));
    
    if (matchedCommand) {
      onCommand?.(matchedCommand);
      
      // Process specific commands
      if (command.includes('book') || command.includes('appointment') || command.includes('schedule')) {
        onBookingRequest?.();
      } else if (command.includes('traditional shave')) {
        onServiceSelect?.('traditional-shave');
      } else if (command.includes('beard grooming')) {
        onServiceSelect?.('beard-grooming');
      } else if (command.includes('royal package')) {
        onServiceSelect?.('royal-package');
      } else if (command.includes('signature cut')) {
        onServiceSelect?.('signature-cut');
      }
    }
  };

  const startListening = () => {
    if (recognitionRef.current && !isListening) {
      recognitionRef.current.start();
    }
  };

  const stopListening = () => {
    if (recognitionRef.current && isListening) {
      recognitionRef.current.stop();
    }
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  const speak = (text: string) => {
    if (!isMuted && 'speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 0.9;
      utterance.pitch = 1;
      speechSynthesis.speak(utterance);
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    setTranscript(suggestion);
    processCommand(suggestion);
    speak(`I'll help you with ${suggestion}`);
  };

  useEffect(() => {
    // Generate suggestions based on current context
    const contextSuggestions = commands.filter(cmd => 
      !transcript || cmd.toLowerCase().includes(transcript.toLowerCase())
    ).slice(0, 5);
    setSuggestions(contextSuggestions);
  }, [transcript]);

  if (!isSupported) {
    return (
      <Card className="bg-gradient-to-br from-barbershop-gray-dark/50 to-barbershop-black/50 backdrop-blur-xl border border-barber-red/30">
        <CardContent className="p-6 text-center">
          <MicOff className="h-12 w-12 text-barber-red mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-barbershop-white mb-2">
            Voice Commands Not Supported
          </h3>
          <p className="text-barbershop-gray-light">
            Your browser doesn't support speech recognition. Please use the manual booking form.
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="bg-gradient-to-br from-barbershop-gray-dark/50 to-barbershop-black/50 backdrop-blur-xl border border-barber-red/30 hover:border-barber-red/60 transition-all duration-500">
      <CardHeader>
        <CardTitle className="flex items-center text-xl text-barbershop-white">
          <Mic className="h-6 w-6 text-barber-red mr-3 animate-pulse" />
          Voice Commands
          {isListening && (
            <div className="ml-auto flex items-center space-x-2">
              <div className="w-2 h-2 bg-barber-red rounded-full animate-pulse" />
              <span className="text-sm text-barber-red">Listening...</span>
            </div>
          )}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Voice Controls */}
        <div className="flex items-center justify-center space-x-4">
          <Button
            onClick={isListening ? stopListening : startListening}
            className={`${
              isListening 
                ? 'bg-gradient-to-r from-barber-red to-barber-red-dark hover:from-barber-red-dark hover:to-barber-red' 
                : 'bg-gradient-to-r from-barber-red to-barber-blue hover:from-barber-blue hover:to-barber-red'
            } text-white font-bold px-8 py-4 rounded-xl shadow-luxury hover:shadow-glow transform hover:scale-105 transition-all duration-300`}
          >
            {isListening ? <MicOff className="h-5 w-5 mr-2" /> : <Mic className="h-5 w-5 mr-2" />}
            {isListening ? 'Stop Listening' : 'Start Voice Commands'}
          </Button>
          
          <Button
            onClick={toggleMute}
            variant="outline"
            className={`border-barber-red/30 text-barbershop-gray hover:text-barber-red hover:border-barber-red ${
              isMuted ? 'bg-barber-red/20 text-barber-red' : ''
            }`}
          >
            {isMuted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
          </Button>
        </div>

        {/* Transcript Display */}
        {transcript && (
          <div className="bg-gradient-to-r from-barber-red/20 to-barber-blue/20 p-4 rounded-xl border border-barber-red/30">
            <h4 className="text-sm font-semibold text-barber-red mb-2">You said:</h4>
            <p className="text-barbershop-white">{transcript}</p>
          </div>
        )}

        {/* Command Suggestions */}
        <div className="space-y-3">
          <h4 className="text-sm font-semibold text-barbershop-white">Try saying:</h4>
          <div className="grid grid-cols-1 gap-2">
            {suggestions.map((suggestion, index) => (
              <Button
                key={index}
                onClick={() => handleSuggestionClick(suggestion)}
                variant="outline"
                className="justify-start text-left border-barber-red/30 text-barbershop-gray hover:text-barber-red hover:border-barber-red hover:bg-barber-red/10 transition-all duration-300"
              >
                <Zap className="h-4 w-4 mr-2 text-barber-red" />
                "{suggestion}"
              </Button>
            ))}
          </div>
        </div>

        {/* Available Commands */}
        <div className="space-y-3">
          <h4 className="text-sm font-semibold text-barbershop-white">Available Commands:</h4>
          <div className="grid grid-cols-2 gap-2 text-xs text-barbershop-gray-light">
            {commands.map((command, index) => (
              <div key={index} className="flex items-center space-x-2">
                <div className="w-1 h-1 bg-barber-red rounded-full" />
                <span>{command}</span>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default VoiceCommands;
