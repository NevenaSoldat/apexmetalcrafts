import nemanjaPhoto from '../assets/nemanja.jpeg';
import puskaPhoto from '../assets/puska.jpeg';
import vodaPhoto from '../assets/voda.jpeg';
import vatraPhoto from '../assets/vatra.jpeg';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Meet Our <span className="text-orange-500">Team</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The passionate professionals behind Apex Metal Crafts
            </p>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Leadership</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Led by experienced professionals who are passionate about quality metalwork and customer satisfaction
            </p>
          </div>
          
          {/* CEO Profile */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <img
              src={nemanjaPhoto}
              alt="Nemanja - CEO"
              className="w-48 h-48 rounded-full mx-auto mb-6 border-4 border-orange-500 shadow-lg object-cover"
            />
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Nemanja</h3>
            <p className="text-xl text-orange-500 mb-4">Chief Executive Officer & Founder</p>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              With over 15 years of experience in metal fabrication and craftsmanship, Nemanja founded Apex Metal Crafts 
              with a vision to deliver exceptional quality and innovative solutions. His expertise in both traditional 
              techniques and modern technology ensures that every project meets the highest standards of excellence.
            </p>
          </div>

          {/* Team Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center bg-gray-50 p-8 rounded-lg">
              <div className="mb-4">
                <img 
                  src={puskaPhoto} 
                  alt="Master Fabricator" 
                  className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-orange-500"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Master Fabricator</h3>
              <p className="text-orange-500 mb-3">Lead Craftsman</p>
              <p className="text-gray-600">
                20+ years of experience in custom metal fabrication, welding, and precision engineering
              </p>
            </div>
            
            <div className="text-center bg-gray-50 p-8 rounded-lg">
              <div className="mb-4">
                <img 
                  src={vodaPhoto} 
                  alt="Design Director" 
                  className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-orange-500"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Design Director</h3>
              <p className="text-orange-500 mb-3">Creative Lead</p>
              <p className="text-gray-600">
                Specializes in artistic metalwork, custom design solutions, and bringing creative visions to life
              </p>
            </div>
            
            <div className="text-center bg-gray-50 p-8 rounded-lg">
              <div className="mb-4">
                <img 
                  src={vatraPhoto} 
                  alt="Project Manager" 
                  className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-orange-500"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Project Manager</h3>
              <p className="text-orange-500 mb-3">Operations Lead</p>
              <p className="text-gray-600">
                Ensures every project meets our high standards, deadlines, and exceeds client expectations
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Work with Our Team?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how our experienced team can bring your metalwork vision to life
          </p>
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-200">
            Contact Us Today
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
