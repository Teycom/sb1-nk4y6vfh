import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { 
  Shield, Bot, Wifi, Search, MapPin, Smartphone, 
  Check, Zap, Rocket, Star
} from 'lucide-react';

import Header from '../components/Header';
import Footer from '../components/Footer';
import VTurbPlayer from '../components/VTurbPlayer';
import { Button } from '../components/ui/Button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/Accordion';

const LandingPage: React.FC = () => {
  const [isYearly, setIsYearly] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [showFullContent, setShowFullContent] = useState(false);

  // Delay implementation - 7 minutes and 22 seconds = 442 seconds
  useEffect(() => {
    const SECONDS_TO_DISPLAY = 442;

    let attempts = 0;
    let elsDisplayed = false;
    const alreadyDisplayedKey = `alreadyElsDisplayed${SECONDS_TO_DISPLAY}`;
    const alreadyElsDisplayed = localStorage.getItem(alreadyDisplayedKey);

    const showHiddenElements = function () {
      elsDisplayed = true;
      setIsVisible(true);
      setShowFullContent(true);
      localStorage.setItem(alreadyDisplayedKey, 'true');
    };

    const startWatchVideoProgress = function () {
      if (typeof (window as any).smartplayer === 'undefined' || 
          !((window as any).smartplayer.instances && (window as any).smartplayer.instances.length)) {
        if (attempts >= 10) return;
        attempts += 1;
        return setTimeout(function () {
          startWatchVideoProgress();
        }, 1000);
      }

      (window as any).smartplayer.instances[0].on('timeupdate', () => {
        if (elsDisplayed || (window as any).smartplayer.instances[0].smartAutoPlay) return;
        if ((window as any).smartplayer.instances[0].video.currentTime < SECONDS_TO_DISPLAY) return;
        showHiddenElements();
      });
    };

    if (alreadyElsDisplayed === 'true') {
      setTimeout(function () {
        showHiddenElements();
      }, 100);
    } else {
      startWatchVideoProgress();
    }

    // Facebook Pixel
    const loadFacebookPixel = () => {
      if ((window as any).fbq) return;

      const pixelScript = document.createElement('script');
      pixelScript.innerHTML = `
        !function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', '1093258939518583');
        fbq('track', 'PageView');
      `;
      document.head.appendChild(pixelScript);
    };

    loadFacebookPixel();
  }, []);

  const handleRegisterClick = () => {
    window.open('https://nullshade.online/register?lang=en-US', '_blank');
  };

  const plans = [
    {
      id: "starter",
      name: "Starter Plan",
      description: "Perfect to get started",
      monthlyPrice: 39,
      yearlyPrice: 299,
      yearlyDiscount: 169,
      icon: Zap,
      features: [
        "20,000 requests per month",
        "$9.85 per 1,000 additional requests",
        "Unlimited campaigns",
        "All filtering options",
        "Multiple integrations",
        "60 days of request history",
        "24/7 chat support"
      ]
    },
    {
      id: "growth",
      name: "Growth Plan",
      description: "Ideal for growing businesses",
      monthlyPrice: 99,
      yearlyPrice: 799,
      yearlyDiscount: 389,
      icon: Rocket,
      features: [
        "100,000 requests per month",
        "$7.85 per 1,000 additional requests",
        "Unlimited campaigns",
        "All filtering options",
        "Multiple integrations",
        "120 days of request history",
        "24/7 chat support",
        "Priority support"
      ],
      popular: true
    },
    {
      id: "scale",
      name: "Scale Plan",
      description: "For high-volume traffic",
      monthlyPrice: 299,
      yearlyPrice: 1599,
      yearlyDiscount: 789,
      icon: Star,
      features: [
        "1,000,000 requests per month",
        "$5.85 per 1,000 additional requests",
        "Unlimited campaigns",
        "All filtering options",
        "Multiple integrations",
        "365 days of request history",
        "24/7 chat support",
        "Dedicated support",
        "Full API access"
      ]
    }
  ];

  const filters = [
    { icon: Shield, title: "Networks", description: "Filter access from analysis bots and moderators from traffic sources." },
    { icon: Bot, title: "Bots", description: "Filter access from bots and crawlers." },
    { icon: Wifi, title: "Proxy/VPN", description: "Filter access from virtual private networks and proxies." },
    { icon: Search, title: "AdSpy", description: "Filter access from spy applications." },
    { icon: MapPin, title: "Geolocation", description: "Filter access based on user location." },
    { icon: Smartphone, title: "Devices", description: "Filter the devices you want to accept or block." }
  ];

  const faqs = [
    {
      question: "If I change my mind, can I request a refund?",
      answer: "Yes, your refund is guaranteed! If within 7 days you don't like our platform or if it simply doesn't make sense for you or your product, we'll refund your invested amount, no bureaucracy."
    },
    {
      question: "What is a request?",
      answer: "A request is an access to your website, it's counted every time NullShade analyzes visitor data from the site"
    },
    {
      question: "What happens if I exceed my plan's request limit?",
      answer: "If you exceed the plan limit, NullShade will continue working normally, and at the end of the subscription period you'll be charged for the additional plan usage."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900">
      <Helmet>
        <title>NullShade - Advanced Traffic Filtering Solution</title>
        <meta name="description" content="Protect your online business from bots, spy services and unwanted traffic with the most advanced filtering system on the market." />
      </Helmet>

      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-blue-900/20"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-8 leading-tight">
            High-Level <br />
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Traffic Filtering
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Protect your online business from bots, spy services and unwanted traffic with the most advanced filtering system on the market.
          </p>

          {/* VTurb Video Player */}
          <div className="mb-12">
            <div className="max-w-4xl mx-auto aspect-video relative bg-black/10 rounded-xl shadow-2xl border-2 border-purple-200/30">
              <VTurbPlayer videoId="6887d00cdedd7dfd420df7b0" className="absolute inset-0 rounded-xl overflow-hidden" />
            </div>
          </div>

          {/* Elements that appear after delay */}
          {isVisible && (
            <>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in">
                <Button size="lg" onClick={handleRegisterClick}>
                  Start Free Trial
                </Button>
                <Button size="lg" variant="outline" onClick={handleRegisterClick}>
                  Create Account
                </Button>
              </div>
            </>
          )}

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-6">
              <div className="text-3xl font-bold text-purple-400 mb-2">99.9%</div>
              <div className="text-gray-300">Detection Accuracy</div>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-6">
              <div className="text-3xl font-bold text-blue-400 mb-2">50ms</div>
              <div className="text-gray-300">Response Time</div>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-6">
              <div className="text-3xl font-bold text-green-400 mb-2">24/7</div>
              <div className="text-gray-300">Active Monitoring</div>
            </div>
          </div>
        </div>
      </section>

      {/* Content that appears after delay */}
      {showFullContent && (
        <div className="animate-fade-in">
          {/* Features Section */}
          <section id="features" className="py-20 bg-gray-900/50">
            <div className="container mx-auto px-6">
              <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
                  Complete Filtering Options
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Control exactly who can access your content with our advanced filters
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filters.map((filter, index) => (
                  <Card key={index} className="hover:bg-gray-800/70 transition-colors">
                    <CardHeader>
                      <div className="flex items-center space-x-3">
                        <div className="p-2 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg">
                          <filter.icon className="h-6 w-6 text-white" />
                        </div>
                        <CardTitle>{filter.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-300">{filter.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Pricing Section */}
          <section id="plans" className="py-20">
            <div className="container mx-auto px-6">
              <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
                  Transparent Pricing
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                  No hidden costs. No surprises. Just the power you need to protect your business.
                </p>

                <div className="flex items-center justify-center gap-4 mb-8">
                  <span className={`text-lg ${!isYearly ? 'text-white font-semibold' : 'text-gray-400'}`}>
                    Monthly
                  </span>
                  <button
                    onClick={() => setIsYearly(!isYearly)}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      isYearly ? 'bg-purple-600' : 'bg-gray-600'
                    }`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        isYearly ? 'translate-x-6' : 'translate-x-1'
                      }`}
                    />
                  </button>
                  <span className={`text-lg ${isYearly ? 'text-white font-semibold' : 'text-gray-400'}`}>
                    Yearly
                  </span>
                  {isYearly && (
                    <Badge className="bg-green-600 text-white ml-2">
                      Save up to 35%
                    </Badge>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                {plans.map((plan) => (
                  <Card 
                    key={plan.id} 
                    className={`relative hover:bg-gray-800/70 transition-all duration-300 ${
                      plan.popular ? 'ring-2 ring-purple-600 scale-105' : ''
                    }`}
                  >
                    {plan.popular && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <Badge className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-1">
                          Most Popular
                        </Badge>
                      </div>
                    )}

                    <CardHeader className="text-center pb-8">
                      <div className="mx-auto mb-4 p-3 bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl w-fit">
                        <plan.icon className="h-8 w-8 text-white" />
                      </div>
                      <CardTitle className="text-2xl font-bold mb-2">{plan.name}</CardTitle>
                      <CardDescription className="text-lg">{plan.description}</CardDescription>

                      <div className="mt-6">
                        <div className="flex items-baseline justify-center">
                          <span className="text-5xl font-bold text-white">
                            ${isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                          </span>
                          <span className="text-gray-400 ml-2">
                            /{isYearly ? 'year' : 'month'}
                          </span>
                        </div>
                        {isYearly && (
                          <div className="mt-2">
                            <span className="text-gray-400 line-through">
                              ${plan.monthlyPrice * 12}
                            </span>
                            <span className="text-green-400 ml-2 font-semibold">
                              Save ${plan.yearlyDiscount}
                            </span>
                          </div>
                        )}
                      </div>
                    </CardHeader>

                    <CardContent className="space-y-4">
                      <Button 
                        className={`w-full py-3 text-lg font-semibold ${
                          plan.popular 
                            ? '' 
                            : 'bg-gray-700 hover:bg-gray-600 text-white'
                        }`}
                        onClick={handleRegisterClick}
                      >
                        Start {plan.name}
                      </Button>

                      <ul className="space-y-3">
                        {plan.features.map((feature, index) => (
                          <li key={index} className="flex items-start space-x-3">
                            <Check className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-300">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section id="faq" className="py-20 bg-gray-900/50">
            <div className="container mx-auto px-6">
              <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
                  Frequently Asked Questions
                </h2>
              </div>

              <div className="max-w-4xl mx-auto">
                <Accordion type="single" collapsible className="space-y-4">
                  {faqs.map((faq, index) => (
                    <AccordionItem 
                      key={index} 
                      value={`item-${index}`}
                      className="bg-gray-800/50 border border-gray-700 rounded-lg px-6 py-2"
                    >
                      <AccordionTrigger className="text-white hover:text-purple-400 text-left">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-300 pt-2">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
          </section>
        </div>
      )}

      <Footer />

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
      `}</style>
    </div>
  );
};

export default LandingPage;