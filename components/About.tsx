import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Award, Clock, MapPin, Phone, CheckCircle, Truck, Shield, Users, HardHat, Building, ArrowRight } from 'lucide-react';
const About: React.FC = () => {
  // Brand Colors
  const primaryRed = '#E60000';
  const primaryYellow = '#FFD700';
  
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact-info');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 flex flex-col">
      <Helmet>
        <title>About Us | Faro Landscaping - 50 Years of Excellence</title>
        <meta 
          name="description" 
          content="Faro Landscaping has served Markham and the Greater Toronto Area for over 50 years. We specialize in commercial landscaping, excavation, and interlocking with a legacy of trust." 
        />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 overflow-hidden">
        {/* Background Image - NO FILTERS */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
            alt="Commercial Construction Site" 
            className="w-full h-full object-cover"
          />
          {/* Solid overlay for legibility - NO BLUR */}
          <div className="absolute inset-0 bg-black/75"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center mb-6 px-6 py-2 rounded-sm border-2" style={{ borderColor: primaryYellow, color: primaryYellow }}>
            <span className="text-sm font-bold uppercase tracking-widest">Est. 1974</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 uppercase leading-tight" style={{ fontFamily: 'Oswald, sans-serif' }}>
            50 Years of <br className="hidden md:block" />
            <span style={{ color: primaryRed }}>Unwavering Excellence</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto mb-12 font-light leading-relaxed">
            From humble beginnings to an industry leader in the Greater Toronto Area. We provide industrial-grade landscaping, heavy excavation, and site management with professional integrity.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <button 
              onClick={scrollToContact}
              className="px-10 py-4 text-white rounded font-bold uppercase tracking-wide transition-transform hover:scale-105 shadow-xl flex items-center justify-center gap-2"
              style={{ backgroundColor: primaryRed }}
            >
              Start Your Project <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Our History / Narrative Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image Grid */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <img 
                  src="https://images.unsplash.com/photo-1590486803833-1c5dc8ddd4c8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Industrial Excavator" 
                  className="rounded-lg shadow-lg w-full h-64 object-cover"
                />
                <img 
                  src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Paver Installation" 
                  className="rounded-lg shadow-lg w-full h-64 object-cover mt-8"
                />
              </div>
              {/* Decorative Box */}
              <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[110%] h-[90%] bg-gray-100 rounded-xl"></div>
            </div>

            {/* Content */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-1 w-12" style={{ backgroundColor: primaryRed }}></div>
                <span className="text-sm font-bold uppercase tracking-widest text-gray-500">Our Story</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 uppercase" style={{ fontFamily: 'Oswald, sans-serif' }}>
                Building the Foundation of the <span style={{ color: primaryRed }}>GTA</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Founded in 1974, Faro Landscaping began with a single truck and a commitment to hard work. Over the last five decades, we have evolved into a premier commercial landscaping and excavation firm serving Markham, Toronto, and surrounding regions.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We believe that quality isn't just about the finished product—it's about the process. From the initial site survey to the final inspection, our team of seasoned professionals ensures every project meets the highest standards of safety, durability, and aesthetics.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gray-100 rounded-full">
                    <Clock className="w-6 h-6" style={{ color: primaryRed }} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">On-Time Delivery</h4>
                    <p className="text-sm text-gray-500">Strict timeline adherence for commercial projects.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gray-100 rounded-full">
                    <Shield className="w-6 h-6" style={{ color: primaryRed }} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">Fully Insured</h4>
                    <p className="text-sm text-gray-500">WSIB compliant and liability coverage.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Strip */}
      <section className="py-16 bg-zinc-900 text-white border-b-4" style={{ borderColor: primaryRed }}>
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="p-4">
              <div className="text-5xl font-bold mb-2" style={{ color: primaryYellow, fontFamily: 'Oswald, sans-serif' }}>50+</div>
              <div className="text-sm uppercase tracking-wider text-gray-400">Years Experience</div>
            </div>
            <div className="p-4">
              <div className="text-5xl font-bold mb-2" style={{ color: primaryYellow, fontFamily: 'Oswald, sans-serif' }}>1k+</div>
              <div className="text-sm uppercase tracking-wider text-gray-400">Projects Completed</div>
            </div>
            <div className="p-4">
              <div className="text-5xl font-bold mb-2" style={{ color: primaryYellow, fontFamily: 'Oswald, sans-serif' }}>100%</div>
              <div className="text-sm uppercase tracking-wider text-gray-400">Satisfaction Rate</div>
            </div>
            <div className="p-4">
              <div className="text-5xl font-bold mb-2" style={{ color: primaryYellow, fontFamily: 'Oswald, sans-serif' }}>24/7</div>
              <div className="text-sm uppercase tracking-wider text-gray-400">Emergency Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 uppercase" style={{ fontFamily: 'Oswald, sans-serif' }}>Our Core <span style={{ color: primaryRed }}>Values</span></h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              The principles that have guided our operations for over half a century.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Value 1 */}
            <div className="bg-white p-10 rounded-lg shadow-sm hover:shadow-xl transition-shadow duration-300 border-t-4" style={{ borderColor: primaryRed }}>
              <div className="mb-6 p-4 rounded-full w-16 h-16 flex items-center justify-center bg-red-50">
                <Award className="w-8 h-8" style={{ color: primaryRed }} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Quality Craftsmanship</h3>
              <p className="text-gray-600 leading-relaxed">
                We don't cut corners. Whether it's deep excavation or intricate interlocking, we use the best materials and proven techniques to ensure longevity.
              </p>
            </div>

            {/* Value 2 */}
            <div className="bg-white p-10 rounded-lg shadow-sm hover:shadow-xl transition-shadow duration-300 border-t-4" style={{ borderColor: primaryYellow }}>
              <div className="mb-6 p-4 rounded-full w-16 h-16 flex items-center justify-center bg-yellow-50">
                <Users className="w-8 h-8" style={{ color: '#D97706' }} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Client-Centric Approach</h3>
              <p className="text-gray-600 leading-relaxed">
                We work alongside property managers, developers, and homeowners to deliver solutions that fit specific budgets, timelines, and functional requirements.
              </p>
            </div>

            {/* Value 3 */}
            <div className="bg-white p-10 rounded-lg shadow-sm hover:shadow-xl transition-shadow duration-300 border-t-4" style={{ borderColor: primaryRed }}>
              <div className="mb-6 p-4 rounded-full w-16 h-16 flex items-center justify-center bg-red-50">
                <Truck className="w-8 h-8" style={{ color: primaryRed }} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Industrial Capacity</h3>
              <p className="text-gray-600 leading-relaxed">
                Our fleet of heavy machinery and skilled operators allows us to tackle large-scale commercial and industrial projects with efficiency and power.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Fleet / Capability Section */}
      <section className="py-20 lg:py-28 bg-white overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 order-2 lg:order-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-1 w-12" style={{ backgroundColor: primaryRed }}></div>
                <span className="text-sm font-bold uppercase tracking-widest text-gray-500">Our Equipment</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 uppercase" style={{ fontFamily: 'Oswald, sans-serif' }}>
                Ready for the <span style={{ color: primaryRed }}>Heavy Lifting</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                A landscaping company is only as good as its tools. At Faro, we own and maintain a comprehensive fleet of excavators, skid steers, dump trucks, and paving equipment. This reduces reliance on rentals and ensures we are always ready to mobilize.
              </p>
              
              <ul className="space-y-4 mb-8">
                {[
                  "Commercial Snow Removal Fleet",
                  "Heavy Excavation Machinery",
                  "Precision Grading Equipment",
                  "Concrete & Asphalt Tech"
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 flex-shrink-0" style={{ color: primaryRed }} />
                    <span className="text-gray-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>

              <button 
                onClick={scrollToContact}
                className="text-gray-900 font-bold uppercase tracking-wide border-b-2 hover:text-red-600 transition-colors pb-1"
                style={{ borderColor: primaryRed }}
              >
                Inquire About Machinery Services
              </button>
            </div>
            
            <div className="lg:w-1/2 order-1 lg:order-2">
              <div className="relative rounded-lg overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
                  alt="Faro Landscaping Heavy Machinery" 
                  className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <p className="text-white font-bold text-lg uppercase flex items-center gap-2">
                    <HardHat className="w-5 h-5" style={{ color: primaryYellow }} />
                    Professional Operators
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA / Contact Section Anchor */}
      <section id="contact-info" className="py-24 relative overflow-hidden">
        {/* Background - NO BLUR */}
        <div className="absolute inset-0 bg-zinc-900">
          <img 
            src="https://images.unsplash.com/photo-1605117882932-f9e32b03ef3c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
            alt="Dark Texture" 
            className="w-full h-full object-cover opacity-20"
          />
        </div>

        <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 uppercase" style={{ fontFamily: 'Oswald, sans-serif' }}>
            Ready to Transform Your Property?
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10">
            Partner with a team that brings 50 years of proven reliability to every job site. Contact Faro Landscaping today for a consultation.
          </p>
          
          <div className="flex flex-col md:flex-row justify-center gap-6">
            <a 
              href="/contact"
              className="px-10 py-5 bg-white text-gray-900 rounded font-bold uppercase tracking-wide hover:bg-gray-100 transition-colors shadow-lg flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Contact Us Now
            </a>
            <a 
              href="/services"
              className="px-10 py-5 text-white rounded font-bold uppercase tracking-wide transition-colors border-2 hover:bg-white/10 flex items-center justify-center gap-2"
              style={{ borderColor: primaryRed }}
            >
              <Building className="w-5 h-5" />
              View Services
            </a>
          </div>

          <div className="mt-12 flex flex-col md:flex-row justify-center items-center gap-8 text-gray-400">
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5" style={{ color: primaryRed }} />
              <span>Serving Markham & The GTA</span>
            </div>
            <div className="hidden md:block w-1.5 h-1.5 rounded-full bg-gray-600"></div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" style={{ color: primaryRed }} />
              <span>Est. 1974</span>
            </div>
          </div>
        </div>
      </section>

      </div>
  );
};

export default About;