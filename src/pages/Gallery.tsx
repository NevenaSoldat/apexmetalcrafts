const Gallery = () => {
  const galleryImages = [
    {
      id: 1,
      title: "Custom Steel Fabrication",
      description: "Heavy-duty industrial steel framework for commercial building",
      imageUrl: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=600&h=400&fit=crop"
    },
    {
      id: 2,
      title: "Decorative Metal Work",
      description: "Ornate wrought iron gates with custom design patterns",
      imageUrl: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=600&h=400&fit=crop"
    },
    {
      id: 3,
      title: "Precision Welding",
      description: "High-precision TIG welding on stainless steel components",
      imageUrl: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&h=400&fit=crop"
    },
    {
      id: 4,
      title: "Architectural Metalwork",
      description: "Modern steel staircase with glass railings",
      imageUrl: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop"
    },
    {
      id: 5,
      title: "Industrial Equipment",
      description: "Custom machinery housing and protective covers",
      imageUrl: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&h=400&fit=crop"
    },
    {
      id: 6,
      title: "Artistic Metal Sculpture",
      description: "Contemporary metal art installation for public space",
      imageUrl: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Our Work <span className="text-orange-500">Gallery</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our portfolio of custom metal fabrication, welding, and artistic metalwork projects
            </p>
          </div>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryImages.map((image) => (
            <div key={image.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="aspect-w-16 aspect-h-12">
                <img
                  src={image.imageUrl}
                  alt={image.title}
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{image.title}</h3>
                <p className="text-gray-600">{image.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Contact us today to discuss your custom metalwork needs
          </p>
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-200">
            Get a Quote
          </button>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
