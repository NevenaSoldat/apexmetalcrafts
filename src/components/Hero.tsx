import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const [isQuoteHovered, setIsQuoteHovered] = useState(false);
  const [isWorkHovered, setIsWorkHovered] = useState(false);
  const navigate = useNavigate();

  return (
    <section id="home" className="relative bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Precision Metal Crafting
            <span className="block text-orange-500">Excellence</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-300">
            Professional custom metal fabrication, welding, and crafting services. 
            From concept to completion, we deliver superior quality metalwork.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-30">
            <button 
              className="font-bold py-3 px-8 rounded-lg transition-colors duration-200 cursor-pointer relative z-40"
              style={{
                backgroundColor: isQuoteHovered ? 'rgb(234, 88, 12)' : 'rgb(249, 115, 22)', // orange-600 : orange-500
                color: 'white',
                border: 'none',
                fontSize: '1rem',
                fontFamily: 'inherit',
                outline: 'none',
                boxShadow: 'none',
                appearance: 'none',
                WebkitAppearance: 'none',
                pointerEvents: 'auto'
              }}
              onMouseEnter={() => setIsQuoteHovered(true)}
              onMouseLeave={() => setIsQuoteHovered(false)}
              onClick={() => {
                navigate('/contact');
              }}
            >
              Get Quote
            </button>
            <button 
              className="font-bold py-3 px-8 rounded-lg transition-colors duration-200 cursor-pointer relative z-40"
              style={{
                backgroundColor: isWorkHovered ? 'white' : 'transparent',
                color: isWorkHovered ? 'rgb(55, 65, 81)' : 'white', // gray-700 : white
                border: '2px solid white',
                fontSize: '1rem',
                fontFamily: 'inherit',
                outline: 'none',
                boxShadow: 'none',
                appearance: 'none',
                WebkitAppearance: 'none',
                pointerEvents: 'auto'
              }}
              onMouseEnter={() => setIsWorkHovered(true)}
              onMouseLeave={() => setIsWorkHovered(false)}
              onClick={() => {
                navigate('/gallery');
              }}
            >
              View Our Work
            </button>
          </div>
        </div>
      </div>
      
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10 z-0">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>
    </section>
  );
};

export default Hero;
