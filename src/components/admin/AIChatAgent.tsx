import { useState } from 'react';
import { MessageCircle, X, Send, Sparkles, TrendingUp, DollarSign, Users, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';

const AIChatAgent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'ai',
      text: "Hello! I'm your AI business assistant. I can help you analyze revenue, bookings, client data, and answer any questions about your barbershop. How can I help you today?",
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const quickActions = [
    { icon: DollarSign, label: 'Revenue Analysis', query: 'Show me revenue analysis for this month' },
    { icon: Calendar, label: 'Today\'s Schedule', query: 'What\'s on the schedule today?' },
    { icon: Users, label: 'Client Insights', query: 'Give me insights about my clients' },
    { icon: TrendingUp, label: 'Performance', query: 'How is the business performing?' }
  ];

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = {
      id: messages.length + 1,
      type: 'user',
      text: input,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages([...messages, userMessage]);
    setInput('');
    setIsTyping(true);

    // Simulate AI response (in production, this would call your ChatGPT API)
    setTimeout(() => {
      const aiResponse = generateAIResponse(input);
      setMessages(prev => [...prev, {
        id: prev.length + 1,
        type: 'ai',
        text: aiResponse,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }]);
      setIsTyping(false);
    }, 1500);
  };

  const handleQuickAction = (query: string) => {
    setInput(query);
    setTimeout(() => handleSend(), 100);
  };

  const generateAIResponse = (query: string): string => {
    const lowerQuery = query.toLowerCase();
    
    if (lowerQuery.includes('revenue') || lowerQuery.includes('money') || lowerQuery.includes('income')) {
      return "📊 Based on your current data:\n\n• Today's Revenue: $2,450 (+12%)\n• This Month: $12,450 (+15.3%)\n• Top Service: Signature Haircut ($6,525)\n• Average Booking Value: $65\n\nYour revenue is trending positively! The Signature Haircut and Royal Package are your top performers. Consider promoting these services more.";
    }
    
    if (lowerQuery.includes('schedule') || lowerQuery.includes('today') || lowerQuery.includes('appointment')) {
      return "📅 Today's Schedule:\n\n• 24 Total Bookings\n• 5 Pending Confirmations\n• Next: John Doe at 10:00 AM (Signature Haircut)\n• Peak Time: 2:00-5:00 PM\n• Available Slots: 3\n\nYou have a busy day ahead! Make sure to follow up on pending confirmations.";
    }
    
    if (lowerQuery.includes('client') || lowerQuery.includes('customer')) {
      return "👥 Client Insights:\n\n• Total Active Clients: 2,847 (+8.2%)\n• New Clients Today: 8\n• VIP Clients: 42\n• Average Satisfaction: 4.9/5 ⭐\n• Retention Rate: 87%\n\nYour client base is growing steadily! Consider launching a loyalty program for your VIP clients.";
    }
    
    if (lowerQuery.includes('performance') || lowerQuery.includes('how') || lowerQuery.includes('doing')) {
      return "📈 Business Performance:\n\n✅ Revenue: Up 15.3%\n✅ Bookings: Up 12.5%\n✅ Client Growth: Up 8.2%\n✅ Customer Satisfaction: 4.9/5\n⚠️ Products: Down 2.1%\n\nOverall, your business is performing excellently! Consider focusing on product sales to improve that metric.";
    }
    
    if (lowerQuery.includes('staff') || lowerQuery.includes('team') || lowerQuery.includes('barber')) {
      return "👔 Staff Overview:\n\n• Active Staff: 8 barbers\n• Top Performer: Mike (156 bookings)\n• Average Rating: 4.8/5\n• Team Utilization: 85%\n\nYour team is performing well! Consider additional training for new services to boost revenue.";
    }
    
    if (lowerQuery.includes('product') || lowerQuery.includes('inventory')) {
      return "📦 Product Insights:\n\n• Total Products: 6 items\n• Best Seller: Premium Hair Wax (156 sold)\n• Low Stock: Professional Shave Cream (8 left)\n• This Month Revenue: $11,532\n\nRestock needed for shave cream! Consider bundling products with services.";
    }

    return "I understand you're asking about your business. I can help you with:\n\n• Revenue & Financial Analysis\n• Booking & Schedule Management  \n• Client Insights & Analytics\n• Staff Performance\n• Product Inventory\n• Business Performance Metrics\n\nWhat specific information would you like to know?";
  };

  return (
    <>
      {/* Chat Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-gradient-to-br from-red-600 to-red-700 text-white rounded-full shadow-2xl hover:shadow-red-500/50 transition-all duration-300 flex items-center justify-center group hover:scale-110"
          style={{ fontFamily: 'Gotham Bold, sans-serif' }}
        >
          <MessageCircle className="h-7 w-7 group-hover:scale-110 transition-transform" />
          <Badge className="absolute -top-1 -right-1 w-6 h-6 flex items-center justify-center p-0 bg-yellow-400 text-gray-900 rounded-full text-xs font-bold animate-pulse">
            <Sparkles className="h-3 w-3" />
          </Badge>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-96 h-[600px] bg-white rounded-2xl shadow-2xl border border-gray-200 flex flex-col overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-red-600 to-red-700 p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                <Sparkles className="h-5 w-5 text-white" />
              </div>
              <div>
                <h3 className="text-white font-bold" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>AI Assistant</h3>
                <p className="text-white/80 text-xs" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>Business Intelligence</p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(false)}
              className="text-white hover:bg-white/20"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>

          {/* Quick Actions */}
          <div className="p-3 bg-gray-50 border-b border-gray-200">
            <div className="grid grid-cols-2 gap-2">
              {quickActions.map((action, index) => {
                const IconComponent = action.icon;
                return (
                  <button
                    key={index}
                    onClick={() => handleQuickAction(action.query)}
                    className="flex items-center gap-2 p-2 bg-white border border-gray-200 rounded-lg hover:border-red-300 hover:bg-red-50 transition-all duration-200 text-left"
                  >
                    <IconComponent className="h-4 w-4 text-red-600" />
                    <span className="text-xs font-semibold text-gray-700" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>{action.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl p-3 ${
                    message.type === 'user'
                      ? 'bg-red-600 text-white'
                      : 'bg-white border border-gray-200 text-gray-900'
                  }`}
                >
                  <p className="text-sm whitespace-pre-line" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>{message.text}</p>
                  <p className={`text-xs mt-1 ${message.type === 'user' ? 'text-red-100' : 'text-gray-500'}`}>
                    {message.time}
                  </p>
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white border border-gray-200 rounded-2xl p-3">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="p-4 bg-white border-t border-gray-200">
            <div className="flex gap-2">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask about your business..."
                className="flex-1 bg-gray-50 border-gray-200 focus:border-red-500 focus:ring-red-500/20"
                style={{ fontFamily: 'Gotham Bold, sans-serif' }}
              />
              <Button
                onClick={handleSend}
                disabled={!input.trim()}
                className="bg-red-600 hover:bg-red-700 text-white"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
            <p className="text-xs text-gray-500 mt-2 text-center" style={{ fontFamily: 'Gotham Bold, sans-serif' }}>
              Powered by AI • Real-time business intelligence
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default AIChatAgent;
