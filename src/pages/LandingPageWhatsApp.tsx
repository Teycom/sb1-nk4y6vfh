import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';

const LandingPageWhatsApp: React.FC = () => {
  useEffect(() => {
    // Redirect to WhatsApp immediately
    const whatsappUrl = 'https://api.whatsapp.com/send/?phone=5585987654321&text=Hi%21+I%27m+interested+in+NullShade+traffic+filtering+service.+Can+you+help+me+with+more+information%3F&type=phone_number&app_absent=0';
    window.location.replace(whatsappUrl);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900 flex items-center justify-center">
      <Helmet>
        <title>Redirecting to WhatsApp - NullShade Support</title>
        <meta name="description" content="Redirecting you to WhatsApp to chat with NullShade support team." />
      </Helmet>

      <div className="text-center">
        <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-purple-600 mx-auto mb-4"></div>
        <h1 className="text-2xl font-bold text-white mb-2">Redirecting to WhatsApp...</h1>
        <p className="text-gray-400">
          If you're not redirected automatically, 
          <a 
            href="https://api.whatsapp.com/send/?phone=5585987654321&text=Hi%21+I%27m+interested+in+NullShade+traffic+filtering+service.+Can+you+help+me+with+more+information%3F&type=phone_number&app_absent=0"
            className="text-purple-400 hover:text-purple-300 ml-1"
            target="_blank"
            rel="noopener noreferrer"
          >
            click here
          </a>
        </p>
      </div>
    </div>
  );
};

export default LandingPageWhatsApp;