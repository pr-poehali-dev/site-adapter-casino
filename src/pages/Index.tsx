import { useState, useEffect } from "react";

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-red-900 to-black relative overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-yellow-400 rounded-full animate-pulse opacity-60"></div>
        <div className="absolute top-3/4 right-1/3 w-1 h-1 bg-red-400 rounded-full animate-pulse opacity-40"></div>
        <div className="absolute top-1/2 right-1/4 w-3 h-3 bg-yellow-500 rounded-full animate-pulse opacity-50"></div>
      </div>

      {/* Hero Section */}
      <div
        className={`relative z-10 min-h-screen flex flex-col justify-center items-center px-4 text-center transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
        {/* Main Title */}
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-yellow-400 via-yellow-500 to-red-500 bg-clip-text text-transparent animate-pulse">
            🎯 AVIAMASTERS
          </h1>
          <p className="text-xl md:text-3xl text-yellow-300 font-semibold mb-2">
            Легендарная игра казино
          </p>
          <p className="text-lg md:text-xl text-gray-300">
            Взлетай к победам! ✈️
          </p>
        </div>

        {/* Bonus Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl">
          <div className="bg-gradient-to-br from-yellow-600/20 to-red-600/20 backdrop-blur-sm border border-yellow-500/30 rounded-xl p-6 transform hover:scale-105 transition-all duration-300">
            <div className="text-3xl mb-2">💰</div>
            <h3 className="text-yellow-400 font-bold text-lg mb-2">
              БОНУС +100%
            </h3>
            <p className="text-gray-300 text-sm">При первом депозите</p>
          </div>

          <div className="bg-gradient-to-br from-red-600/20 to-yellow-600/20 backdrop-blur-sm border border-red-500/30 rounded-xl p-6 transform hover:scale-105 transition-all duration-300">
            <div className="text-3xl mb-2">🎰</div>
            <h3 className="text-red-400 font-bold text-lg mb-2">
              50 ФРИСПИНОВ
            </h3>
            <p className="text-gray-300 text-sm">Бесплатные вращения</p>
          </div>

          <div className="bg-gradient-to-br from-yellow-600/20 to-orange-600/20 backdrop-blur-sm border border-yellow-500/30 rounded-xl p-6 transform hover:scale-105 transition-all duration-300">
            <div className="text-3xl mb-2">🏆</div>
            <h3 className="text-yellow-400 font-bold text-lg mb-2">ДЖЕКПОТ</h3>
            <p className="text-gray-300 text-sm">До 1,000,000₽</p>
          </div>
        </div>

        {/* CTA Button */}
        <div className="mb-8">
          <a
            href="https://1wllkg.life/casino/play/v_bgaming:Aviamasters?open=register&p=lpl9"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center px-12 py-4 text-xl font-bold text-black bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 rounded-full shadow-2xl transform hover:scale-110 transition-all duration-300 hover:shadow-yellow-500/50"
          >
            <span className="relative z-10 flex items-center gap-3">
              🚀 ИГРАТЬ СЕЙЧАС
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-red-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
          </a>
        </div>

        {/* Features */}
        <div className="flex flex-wrap justify-center gap-8 text-sm md:text-base text-gray-300 max-w-2xl">
          <div className="flex items-center gap-2">
            <span className="text-green-400">✅</span>
            <span>Мгновенные выплаты</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-green-400">✅</span>
            <span>24/7 поддержка</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-green-400">✅</span>
            <span>Лицензированное казино</span>
          </div>
        </div>

        {/* Pulsing glow effect */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-yellow-500/10 to-red-500/10 rounded-full blur-3xl animate-pulse -z-10"></div>
      </div>
    </div>
  );
};

export default Index;
