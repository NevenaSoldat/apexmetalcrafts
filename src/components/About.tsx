const About = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Crafting Excellence Since Day One
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              At Apex Metal Crafts, we combine traditional craftsmanship with modern technology to deliver 
              exceptional metalwork solutions. Our team of skilled artisans and fabricators brings decades 
              of experience to every project.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Whether you need custom fabrication, artistic metalwork, or structural steel solutions, 
              we approach each project with precision, creativity, and unwavering commitment to quality.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-500 mb-2">15+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-500 mb-2">500+</div>
                <div className="text-gray-600">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-500 mb-2">100%</div>
                <div className="text-gray-600">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-500 mb-2">24/7</div>
                <div className="text-gray-600">Support Available</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Why Choose Us?</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <span className="text-orange-200 mr-3">✓</span>
                  Expert craftsmanship and attention to detail
                </li>
                <li className="flex items-center">
                  <span className="text-orange-200 mr-3">✓</span>
                  State-of-the-art equipment and techniques
                </li>
                <li className="flex items-center">
                  <span className="text-orange-200 mr-3">✓</span>
                  Competitive pricing and timely delivery
                </li>
                <li className="flex items-center">
                  <span className="text-orange-200 mr-3">✓</span>
                  Custom solutions for every project
                </li>
                <li className="flex items-center">
                  <span className="text-orange-200 mr-3">✓</span>
                  Fully licensed and insured
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Meet Our Team Section */}
        <div className="border-t border-gray-200 pt-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Team</h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Led by experienced professionals who are passionate about metalcraft and committed to excellence.
            </p>
          </div>
          
          <div className="flex justify-center">
            <div className="bg-white rounded-lg shadow-lg p-8 max-w-md text-center">
              <div className="mb-6">
                <img 
                  src="/nemanja.jpeg" 
                  alt="Nemanja - CEO" 
                  className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-orange-500"
                />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Nemanja</h4>
              <p className="text-orange-500 font-semibold mb-3">Chief Executive Officer</p>
              <p className="text-gray-600 leading-relaxed">
                With over 15 years of experience in the metalworking industry, Nemanja leads our team 
                with a vision of excellence and innovation. His expertise in both traditional craftsmanship 
                and modern fabrication techniques ensures every project meets the highest standards.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
