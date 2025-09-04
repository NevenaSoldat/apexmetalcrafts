const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Ready to start your next metalwork project? Contact us for a consultation and quote.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-white"
                  placeholder="Your full name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-white"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-white"
                  placeholder="(555) 123-4567"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Project Details
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-white"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full font-bold py-3 px-6 rounded-lg transition-colors duration-200"
                style={{
                  backgroundColor: '#f97316',
                  color: 'white',
                  border: 'none',
                  zIndex: 10
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#ea580c';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#f97316';
                }}
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <span className="text-orange-500 mr-3">📍</span>
                  <div>
                    <p className="font-medium">Address</p>
                    <p className="text-gray-300">123 Industrial Way, Metalwork City, MC 12345</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <span className="text-orange-500 mr-3">📞</span>
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-gray-300">(555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <span className="text-orange-500 mr-3">✉️</span>
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-gray-300">info@apexmetalcrafts.com</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <span className="text-orange-500 mr-3">🕒</span>
                  <div>
                    <p className="font-medium">Business Hours</p>
                    <p className="text-gray-300">Mon-Fri: 8AM-6PM</p>
                    <p className="text-gray-300">Sat: 9AM-4PM</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Emergency Services</h3>
              <p className="text-gray-300 mb-4">
                Need urgent metalwork repairs? We offer 24/7 emergency services for critical projects.
              </p>
              <button 
                className="font-bold py-2 px-6 rounded-lg transition-colors duration-200"
                style={{
                  backgroundColor: '#dc2626',
                  color: 'white',
                  border: 'none',
                  zIndex: 10
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#b91c1c';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#dc2626';
                }}
              >
                Emergency Contact
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
