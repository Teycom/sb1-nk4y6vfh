import React from 'react';
import { Shield } from 'lucide-react';
import { Button } from './ui/Button';

const Header: React.FC = () => {
  return (
    <header className="border-b border-gray-800 bg-gray-900/50 backdrop-blur-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2 sm:space-x-3">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl flex items-center justify-center">
              <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </div>
            <span className="text-lg sm:text-xl font-bold text-white">NullShade</span>
          </div>

          <nav className="flex items-center space-x-4">
            <Button 
              variant="outline" 
              className="border-gray-600 text-gray-300 hover:bg-gray-700 text-sm"
              onClick={() => window.open('https://nullshade.online/login?lang=en', '_blank')}
            >
              Login
            </Button>
            <Button 
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-sm"
              onClick={() => window.open('https://nullshade.online/register?lang=en-US', '_blank')}
            >
              Sign Up
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;