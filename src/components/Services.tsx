import automotiveAerospace from '../assets/automotive&aerospace.jpeg';
import energyConstruction from '../assets/energy&construction.jpeg';
import consumerElectronics from '../assets/consumerGoods&Electronics.jpeg';
import woodworkingTooling from '../assets/woodworking&tooling.jpeg';

const Services = () => {
  const services = [
    {
      title: "Automotive & Aerospace",
      description: "Precision parts, engine components, and structural elements",
      image: automotiveAerospace
    },
    {
      title: "Energy & Construction", 
      description: "Custom fittings, machinery parts, and tooling for heavy equipment.",
      image: energyConstruction
    },
    {
      title: "Consumer Goods & Electronics",
      description: "High-tolerance components and decorative finishes.",
      image: consumerElectronics
    },
    {
      title: "Woodworking & Tooling",
      description: "Durable molds, cutting dies, and specialized machinery.",
      image: woodworkingTooling
    },
  ];

  return (
    <section id="services" className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Industries we serve
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
           Our solutions power innovation across sectors:
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="mb-6">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-56 object-cover rounded-lg shadow-md"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 text-lg leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
