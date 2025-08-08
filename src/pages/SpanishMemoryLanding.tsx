import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Brain, Clock, Shield, CheckCircle } from 'lucide-react';
import VTurbPlayer from '../components/VTurbPlayer';
import { Button } from '../components/ui/Button';

const SpanishMemoryLanding: React.FC = () => {
  const [showContent, setShowContent] = useState(false);
  const [timeLeft, setTimeLeft] = useState(15 * 60); // 15 minutes in seconds

  // Delay implementation - show content after video progress
  useEffect(() => {
    const SECONDS_TO_DISPLAY = 442; // 7 minutes 22 seconds

    let attempts = 0;
    let elsDisplayed = false;
    const alreadyDisplayedKey = `alreadyElsDisplayedSpanish${SECONDS_TO_DISPLAY}`;
    const alreadyElsDisplayed = localStorage.getItem(alreadyDisplayedKey);

    const showHiddenElements = function () {
      elsDisplayed = true;
      setShowContent(true);
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
  }, []);

  // Countdown timer
  useEffect(() => {
    if (!showContent) return;

    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [showContent]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return { minutes: mins.toString().padStart(2, '0'), seconds: secs.toString().padStart(2, '0') };
  };

  const { minutes, seconds } = formatTime(timeLeft);

  const handleOrderClick = () => {
    window.open('https://pay.hotmart.com/G97220862L?checkoutMode=10', '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900">
      <Helmet>
        <title>Neurocientífico entrenado por la NASA - Truco cerebral de 8 segundos</title>
        <meta name="description" content="Descubre el truco cerebral de 8 segundos desarrollado por un neurocientífico entrenado por la NASA para una memoria más fuerte." />
      </Helmet>

      {/* Header */}
      <header className="py-6 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-3 mb-2">
            <Brain className="w-8 h-8 text-purple-400" />
            <span className="text-xl font-bold text-white">MemoriaNASA</span>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-12 lg:py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-blue-900/20"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-8 leading-tight">
            Neurocientífico entrenado por la NASA:<br />
            "Haz este truco cerebral de 8 segundos"<br />
            <span className="inline-block mt-2 px-4 py-2 rounded-lg" style={{ background: '#a5db69' }}>
              <span style={{ color: '#000' }}>Para una memoria más fuerte</span>
            </span>
          </h2>

          {/* Video Player */}
          <div className="mb-12">
            <div className="max-w-4xl mx-auto aspect-video relative bg-black/10 rounded-xl shadow-2xl border-2 border-purple-200/30">
              <VTurbPlayer videoId="6887d00cdedd7dfd420df7b0" className="absolute inset-0 rounded-xl overflow-hidden" />
            </div>
          </div>

          {/* Content that appears after delay */}
          {showContent && (
            <div className="animate-fade-in">
              {/* Urgency Section */}
              <div className="bg-gradient-to-r from-red-600/20 to-orange-600/20 border border-red-500/30 rounded-xl p-8 mb-12 max-w-4xl mx-auto">
                <h3 className="text-2xl lg:text-3xl font-bold text-white mb-6 leading-tight">
                  Obtén tu Canción del Cerebro 🧠 antes de que cerremos nuestras puertas.<br />
                  Tu pedido está garantizado por:
                </h3>

                {/* Countdown Timer */}
                <div className="flex justify-center items-center space-x-4 mb-8">
                  <div className="bg-black/50 rounded-lg p-4 text-center min-w-[80px]">
                    <div className="text-3xl lg:text-4xl font-bold text-red-400">{minutes}</div>
                    <div className="text-sm text-gray-300">MIN</div>
                  </div>
                  <div className="text-2xl text-white font-bold">:</div>
                  <div className="bg-black/50 rounded-lg p-4 text-center min-w-[80px]">
                    <div className="text-3xl lg:text-4xl font-bold text-red-400">{seconds}</div>
                    <div className="text-sm text-gray-300">SEG</div>
                  </div>
                </div>

                {/* CTA Button */}
                <div className="text-center">
                  <Button 
                    size="lg" 
                    className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white text-xl px-12 py-6 rounded-xl shadow-2xl transform hover:scale-105 transition-all duration-300"
                    onClick={handleOrderClick}
                  >
                    <Clock className="w-6 h-6 mr-3" />
                    ¡OBTENER ACCESO AHORA!
                  </Button>
                </div>

                {/* Guarantee */}
                <div className="flex items-center justify-center mt-6 text-green-400">
                  <Shield className="w-5 h-5 mr-2" />
                  <span className="text-sm">Garantía de 30 días o tu dinero de vuelta</span>
                </div>
              </div>

              {/* Benefits Section */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
                <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-6 text-center">
                  <Brain className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">Método NASA</h3>
                  <p className="text-gray-300">Técnica desarrollada por neurocientíficos de la NASA</p>
                </div>
                <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-6 text-center">
                  <Clock className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">Solo 8 Segundos</h3>
                  <p className="text-gray-300">Resultados rápidos con práctica diaria mínima</p>
                </div>
                <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-6 text-center">
                  <CheckCircle className="w-12 h-12 text-green-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">Comprobado</h3>
                  <p className="text-gray-300">Miles de personas han mejorado su memoria</p>
                </div>
              </div>

              {/* Final CTA */}
              <div className="text-center">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white text-2xl px-16 py-8 rounded-xl shadow-2xl transform hover:scale-105 transition-all duration-300 animate-pulse"
                  onClick={handleOrderClick}
                >
                  ¡SÍ, QUIERO MEJORAR MI MEMORIA AHORA!
                </Button>
                <p className="text-gray-400 mt-4 text-sm">
                  * Oferta por tiempo limitado - No pierdas esta oportunidad
                </p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 bg-gray-900 py-8 mt-20">
        <div className="container mx-auto px-6 text-center">
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8 mb-6">
            <a href="/gjgkkks-esp/terms" className="text-gray-400 hover:text-purple-400 transition-colors">
              Términos de Uso
            </a>
            <a href="/gjgkkks-esp/privacy" className="text-gray-400 hover:text-purple-400 transition-colors">
              Política de Privacidad
            </a>
          </div>
          <p className="text-gray-500 text-sm">
            &copy; 2025 MemoriaNASA. Todos los derechos reservados.
          </p>
        </div>
      </footer>

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

export default SpanishMemoryLanding;