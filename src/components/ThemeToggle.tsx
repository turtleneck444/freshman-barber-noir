import { useState, useEffect } from "react";
import { Sun, Moon, Monitor } from "lucide-react";
import { Button } from "@/components/ui/button";

const ThemeToggle = () => {
  const [theme, setTheme] = useState<'light' | 'dark' | 'system'>('dark');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | 'system' || 'dark';
    setTheme(savedTheme);
    applyTheme(savedTheme);
  }, []);

  const applyTheme = (newTheme: 'light' | 'dark' | 'system') => {
    const root = document.documentElement;
    
    if (newTheme === 'system') {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      root.classList.toggle('dark', systemTheme === 'dark');
    } else {
      root.classList.toggle('dark', newTheme === 'dark');
    }
  };

  const handleThemeChange = (newTheme: 'light' | 'dark' | 'system') => {
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    applyTheme(newTheme);
  };

  if (!mounted) {
    return null;
  }

  return (
    <div className="flex items-center space-x-2 bg-gradient-to-r from-barbershop-black/50 to-barbershop-gray-dark/50 backdrop-blur-xl rounded-full p-1 border border-barber-red/30">
      <Button
        variant="ghost"
        size="sm"
        onClick={() => handleThemeChange('light')}
        className={`p-2 rounded-full transition-all duration-300 ${
          theme === 'light' 
            ? 'bg-gradient-to-r from-barber-red to-barber-blue text-white shadow-glow' 
            : 'text-barbershop-gray hover:text-barbershop-white hover:bg-barber-red/20'
        }`}
      >
        <Sun className="h-4 w-4" />
      </Button>
      
      <Button
        variant="ghost"
        size="sm"
        onClick={() => handleThemeChange('dark')}
        className={`p-2 rounded-full transition-all duration-300 ${
          theme === 'dark' 
            ? 'bg-gradient-to-r from-barber-red to-barber-blue text-white shadow-glow' 
            : 'text-barbershop-gray hover:text-barbershop-white hover:bg-barber-red/20'
        }`}
      >
        <Moon className="h-4 w-4" />
      </Button>
      
      <Button
        variant="ghost"
        size="sm"
        onClick={() => handleThemeChange('system')}
        className={`p-2 rounded-full transition-all duration-300 ${
          theme === 'system' 
            ? 'bg-gradient-to-r from-barber-red to-barber-blue text-white shadow-glow' 
            : 'text-barbershop-gray hover:text-barbershop-white hover:bg-barber-red/20'
        }`}
      >
        <Monitor className="h-4 w-4" />
      </Button>
    </div>
  );
};

export default ThemeToggle;
