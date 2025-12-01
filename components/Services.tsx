import React, { useEffect } from 'react';
import { Phone, ArrowRight } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Truck, 
  Ruler, 
  LayoutGrid, 
  Trees, 
  Building2, 
  Leaf, 
  CheckCircle2, 
  ArrowRight, 
  Phone,
  HardHat,
  ShieldCheck,
  Shovel
} from 'lucide-react';
const Services: React.FC = () => {
  // Brand Colors
  const colors = {
    red: '#E60000',
    yellow: '#FFD700',
    dark: '#1A1A1A',
    grey: '#F4F4F4',
    white: '#FFFFFF'
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact-cta');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const services = [
    {
      id: 1,
      title: "Commercial Excavation",
      description: "Heavy-duty excavation for large-scale developments. We handle site preparation, trenching, and foundation digging with industrial-grade precision.",
      icon: <Truck className="w-10 h-10 text-white" />,
      features: ["Site Preparation", "Trenching & Drainage", "Foundation Digging"],
      bgImage: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: 2,
      title: "Precision Site Grading",
      description: "Professional land grading ensuring proper drainage and structural integrity. We adhere to strict engineering specs for long-term stability.",
      icon: <Ruler className="w-10 h-10 text-white" />,
      features: ["Laser Grading", "Slope Correction", "Soil Stabilization"],
      bgImage: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: 3,
      title: "Commercial Hardscaping",
      description: "Durable interlocking and retaining walls for high-traffic areas. Built to withstand heavy use while maintaining aesthetic appeal.",
      icon: <LayoutGrid className="w-10 h-10 text-white" />,
      features: ["Commercial Walkways", "Retaining Walls", "Permeable Pavers"],
      bgImage: "https://images.unsplash.com/photo-1592329347814-51988975a5e3?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: 4,
      title: "Large-Scale Sodding",
      description: "Instant green solutions for parks, office complexes, and new developments. We source premium sod for vast coverage areas.",
      icon: <Trees className="w-10 h-10 text-white" />,
      features: ["Parkland Turf", "Sports Fields", "Hydroseeding"],
      bgImage: "https://images.unsplash.com/photo-1558905545-78c24387611c?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: 5,
      title: "Mass Planting & Softscapes",
      description: "Comprehensive planting for commercial landscapes. Sourcing and installing mature trees, shrubs, and garden beds.",
      icon: <Leaf className="w-10 h-10 text-white" />,
      features: ["Mature Tree Install", "Native Species", "Seasonal Flower Beds"],
      bgImage: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?q=80&w=2089&auto=format&fit=crop"
    },
    {
      id: 6,
      title: "High-Rise Landscapes",
      description: "Specialized landscaping for condominiums and corporate towers. Expertise in podium decks, rooftops, and streetscapes.",
      icon: <Building2 className="w-10 h-10 text-white" />,
      features: ["Rooftop Gardens", "Podium Decks", "Streetscape Design"],
      bgImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      <Helmet>
        <title>Services | Faro Landscaping - Commercial & High-Rise Specialists</title>
        <meta name="description" content="Professional commercial landscaping services including excavation, grading, interlocking, and high-rise landscaping. Serving Toronto and the GTA." />
      </Helmet>

      {/* Hero Section */}
      

      {/* Intro / Value Prop Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <span className="text-[#E60000] font-bold tracking-wider uppercase text-sm mb-2 block">Why Choose Faro</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1A1A1A] mb-6">Building the Foundation of Your Landscape</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              We specialize in the heavy lifting required for major commercial projects. From the initial dig to the final planting, our fleet and experienced team ensure your project is delivered on time, within budget, and to the highest standards of safety and quality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#F4F4F4] p-8 rounded-lg border-b-4 border-[#E60000] hover:shadow-xl transition-shadow duration-300">
              <div className="bg-white w-14 h-14 rounded-full flex items-center justify-center mb-6 shadow-sm">
                <HardHat className="w-8 h-8 text-[#E60000]" />
              </div>
              <h3 className="text-xl font-bold text-[#1A1A1A] mb-3">Expert Team</h3>
              <p className="text-gray-600">
                Licensed operators and skilled landscapers with decades of combined experience in commercial sectors.
              </p>
            </div>
            <div className="bg-[#F4F4F4] p-8 rounded-lg border-b-4 border-[#E60000] hover:shadow-xl transition-shadow duration-300">
              <div className="bg-white w-14 h-14 rounded-full flex items-center justify-center mb-6 shadow-sm">
                <ShieldCheck className="w-8 h-8 text-[#E60000]" />
              </div>
              <h3 className="text-xl font-bold text-[#1A1A1A] mb-3">Safety First</h3>
              <p className="text-gray-600">
                Strict adherence to safety protocols and engineering specifications on every job site, big or small.
              </p>
            </div>
            <div className="bg-[#F4F4F4] p-8 rounded-lg border-b-4 border-[#E60000] hover:shadow-xl transition-shadow duration-300">
              <div className="bg-white w-14 h-14 rounded-full flex items-center justify-center mb-6 shadow-sm">
                <Shovel className="w-8 h-8 text-[#E60000]" />
              </div>
              <h3 className="text-xl font-bold text-[#1A1A1A] mb-3">Modern Fleet</h3>
              <p className="text-gray-600">
                Equipped with the latest heavy machinery and excavators to handle projects of any scale efficiently.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-[#1A1A1A] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Our Capabilities</h2>
            <div className="w-24 h-1 bg-[#E60000] mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.id} className="group relative bg-[#262626] rounded-xl overflow-hidden shadow-2xl transition-all duration-300 hover:-translate-y-2">
                {/* Image Header */}
                <div className="relative h-56 overflow-hidden">
                  <div className="absolute inset-0 bg-black/40 z-10 transition-opacity duration-300 group-hover:opacity-30"></div>
                  <img 
                    src={service.bgImage} 
                    alt={service.title}
                    className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute bottom-4 left-4 z-20 p-3 bg-[#E60000] rounded-lg shadow-lg">
                    {service.icon}
                  </div>
                </div>

                {/* Content Body */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-[#E60000] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-300">
                        <CheckCircle2 className="w-4 h-4 text-[#FFD700] mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Link 
                    to="/contact" 
                    className="inline-flex items-center text-sm font-bold text-white hover:text-[#E60000] transition-colors uppercase tracking-wider"
                  >
                    Learn More <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialized High-Rise Focus Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute right-0 top-0 w-1/3 h-full bg-[#F4F4F4] -skew-x-12 transform origin-top hidden lg:block"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <div className="w-full lg:w-1/2">
              <div className="relative rounded-lg overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1590497576571-0857329584b4?q=80&w=2074&auto=format&fit=crop" 
                  alt="High Rise Landscaping" 
                  className="w-full h-auto object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8">
                  <p className="text-[#FFD700] font-bold text-lg">Specialized Service</p>
                  <p className="text-white text-xl font-medium">Urban & High-Rise Developments</p>
                </div>
              </div>
            </div>
            
            <div className="w-full lg:w-1/2">
              <h2 className="text-3xl sm:text-4xl font-bold text-[#1A1A1A] mb-6">
                Complex Urban Landscapes
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Working in dense urban environments requires specialized logistics and planning. Faro Landscaping excels in high-rise applications, including crane-lifted materials, podium deck construction, and intensive green roof systems.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-10 h-10 rounded-full bg-[#E60000]/10 flex items-center justify-center">
                      <Building2 className="w-5 h-5 text-[#E60000]" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-xl font-bold text-[#1A1A1A]">Podium Decks</h4>
                    <p className="text-gray-600 mt-1">Transforming concrete slabs into lush, vibrant community spaces for residents.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-10 h-10 rounded-full bg-[#E60000]/10 flex items-center justify-center">
                      <Trees className="w-5 h-5 text-[#E60000]" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-xl font-bold text-[#1A1A1A]">Rooftop Gardens</h4>
                    <p className="text-gray-600 mt-1">Engineered soil systems and wind-resistant planting for elevated green spaces.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-10 h-10 rounded-full bg-[#E60000]/10 flex items-center justify-center">
                      <Truck className="w-5 h-5 text-[#E60000]" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-xl font-bold text-[#1A1A1A]">Logistics Management</h4>
                    <p className="text-gray-600 mt-1">Coordination of crane lifts, street closures, and material delivery in busy downtown cores.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact-cta" className="py-20 bg-[#E60000] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl text-red-100 max-w-2xl mx-auto mb-10">
            Contact our team today to discuss your commercial landscaping needs. We provide detailed quotes and professional consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link 
              to="/contact"
              className="px-10 py-4 bg-white text-[#E60000] font-bold text-lg rounded-md shadow-lg hover:bg-gray-100 transition-colors duration-300 w-full sm:w-auto"
            >
              Request a Consultation
            </Link>
            <a 
              href="tel:+15551234567" 
              className="flex items-center gap-3 text-white font-bold text-lg hover:text-[#FFD700] transition-colors duration-300"
            >
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                <Phone className="w-5 h-5" />
              </div>
              <span>(555) 123-4567</span>
            </a>
          </div>
        </div>
      </section>

      </div>
  );
};

export default Services;