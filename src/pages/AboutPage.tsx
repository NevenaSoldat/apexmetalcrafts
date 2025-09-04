import About from '../components/About';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              About <span className="text-orange-500">Apex Metal Crafts</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover our passion for metalwork and commitment to excellence in every project we undertake
            </p>
          </div>
        </div>
      </div>

      {/* About Component */}
      <div className="bg-white">
        <About />
      </div>

      {/* Company Story */}
      <div className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Story</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From humble beginnings to becoming a trusted leader in metal fabrication
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&h=400&fit=crop"
                alt="Metal workshop"
                className="rounded-lg shadow-lg w-full h-80 object-cover"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Founded on Passion</h3>
              <p className="text-gray-600 mb-4">
                Apex Metal Crafts was founded in 2008 with a simple vision: to create exceptional metalwork 
                that combines traditional craftsmanship with modern innovation. What started as a small workshop 
                has grown into a full-service metal fabrication company serving clients across the region.
              </p>
              <p className="text-gray-600 mb-4">
                Our founder, with over two decades of experience in the metalworking industry, believed that 
                every piece of metal has the potential to become something extraordinary. This philosophy 
                continues to drive our work today.
              </p>
              <p className="text-gray-600">
                Today, we're proud to have completed over 500 projects, from intricate artistic sculptures 
                to large-scale industrial fabrications, always maintaining our commitment to quality and 
                customer satisfaction.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our skilled craftsmen and fabricators bring years of experience and passion to every project
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-4xl">👨‍🔧</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Master Fabricator</h3>
              <p className="text-gray-600 mb-2">Lead Craftsman</p>
              <p className="text-sm text-gray-500">
                20+ years of experience in custom metal fabrication and welding
              </p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-4xl">👩‍💼</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Design Director</h3>
              <p className="text-gray-600 mb-2">Creative Lead</p>
              <p className="text-sm text-gray-500">
                Specializes in artistic metalwork and custom design solutions
              </p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-4xl">👨‍💻</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Project Manager</h3>
              <p className="text-gray-600 mb-2">Operations Lead</p>
              <p className="text-sm text-gray-500">
                Ensures every project meets our high standards and deadlines
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🎯</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Precision</h3>
              <p className="text-gray-600">
                Every cut, weld, and finish is executed with meticulous attention to detail
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">💡</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Innovation</h3>
              <p className="text-gray-600">
                We embrace new technologies while respecting traditional craftsmanship
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🤝</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Integrity</h3>
              <p className="text-gray-600">
                Honest communication and transparent practices in all our dealings
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">⭐</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Excellence</h3>
              <p className="text-gray-600">
                We strive for perfection in every project, no matter the size
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Certifications & Awards */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Certifications & Recognition</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our commitment to quality is recognized by industry leaders
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="text-4xl mb-4">🏆</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">AWS Certified</h3>
              <p className="text-gray-600">
                American Welding Society certified welders and fabricators
              </p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="text-4xl mb-4">🛡️</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Fully Insured</h3>
              <p className="text-gray-600">
                Comprehensive liability and workers' compensation insurance
              </p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="text-4xl mb-4">⭐</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">5-Star Rated</h3>
              <p className="text-gray-600">
                Consistently rated 5 stars by our satisfied customers
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Work with Us?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can bring your metalwork vision to life with our expertise and passion
          </p>
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-200">
            Start Your Project
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
