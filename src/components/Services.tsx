const Services = () => {
  const services = [
    {
      title: "Custom Fabrication",
      description: "Precision metal fabrication tailored to your specific requirements and designs.",
      icon: "🔧"
    },
    {
      title: "Welding Services", 
      description: "Professional welding for structural, decorative, and repair applications.",
      icon: "⚡"
    },
    {
      title: "Metal Art & Design",
      description: "Artistic metalwork including sculptures, decorative panels, and custom designs.",
      icon: "🎨"
    },
    {
      title: "Structural Steel",
      description: "Heavy-duty structural steel work for construction and industrial applications.",
      icon: "🏗️"
    },
    {
      title: "Restoration",
      description: "Expert restoration of vintage and antique metal pieces to their former glory.",
      icon: "🔄"
    },
    {
      title: "Consultation",
      description: "Professional consultation for your metalwork projects from concept to completion.",
      icon: "💡"
    }
  ];

  return (
    <section id="services" className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We offer comprehensive metal crafting services with attention to detail and commitment to quality
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
