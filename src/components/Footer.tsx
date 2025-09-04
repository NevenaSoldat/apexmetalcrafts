const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold text-orange-500 mb-4">Apex Metal Crafts</h3>
            <p className="text-gray-300 mb-4">
              Professional metal fabrication and crafting services with precision and excellence.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-orange-500 transition-colors duration-200">
                Facebook
              </a>
              <a href="#" className="text-gray-300 hover:text-orange-500 transition-colors duration-200">
                Instagram
              </a>
              <a href="#" className="text-gray-300 hover:text-orange-500 transition-colors duration-200">
                LinkedIn
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-300 hover:text-orange-500 transition-colors duration-200">Home</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-orange-500 transition-colors duration-200">About</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-orange-500 transition-colors duration-200">Services</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-orange-500 transition-colors duration-200">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li className="text-gray-300">Custom Fabrication</li>
              <li className="text-gray-300">Welding Services</li>
              <li className="text-gray-300">Metal Art & Design</li>
              <li className="text-gray-300">Structural Steel</li>
              <li className="text-gray-300">Restoration</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            &copy; 2025 Apex Metal Crafts. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
