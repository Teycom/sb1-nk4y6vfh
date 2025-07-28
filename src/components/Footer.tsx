import React from 'react';
import { Shield } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-gray-800 bg-gray-900 py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg font-bold text-white">NullShade</span>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              The most advanced solution for traffic filtering and digital campaign protection.
            </p>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-white font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              <li>
                <a href="#features" className="text-gray-400 hover:text-purple-400 transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#plans" className="text-gray-400 hover:text-purple-400 transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a 
                  href="https://nullshade.online/login?lang=en" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                >
                  Login
                </a>
              </li>
              <li>
                <a 
                  href="https://nullshade.online/register?lang=en-US" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                >
                  Sign Up
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <a href="#faq" className="text-gray-400 hover:text-purple-400 transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a 
                  href="https://nullshade.online/terms" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                >
                  Terms of Use
                </a>
              </li>
              <li>
                <a 
                  href="https://nullshade.online/privacy" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                >
                  Privacy
                </a>
              </li>
              <li>
                <span className="text-gray-400">24/7 Chat</span>
              </li>
              <li>
                <a 
                  href="https://api.whatsapp.com/send/?phone=5585987654321&text=Hi%21+I%27m+interested+in+NullShade+traffic+filtering+service.+Can+you+help+me+with+more+information%3F&type=phone_number&app_absent=0" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                >
                  WhatsApp Support
                </a>
              </li>
              <li>
                <span className="text-gray-500 text-sm">8am - 5pm (Brazil) Mon - Fri</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-500">&copy; 2025 NullShade. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;