import React from 'react';
import { CheckCircle, Mail, Phone, ArrowRight, Calendar, Star } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Phone, 
  MapPin, 
  CheckCircle, 
  Truck, 
  Hammer, 
  Ruler, 
  ArrowRight, 
  ShieldCheck, 
  Clock, 
  Star,
  HardHat,
  Trees,
  Mail,
  Calendar
} from 'lucide-react';

const Home: React.FC = () => {
  // Brand Colors used in Tailwind arbitrary values:
  // Red: #E60000
  // Yellow: #FFD700
  // Dark: #171717 (neutral-900)

  return (
    <div className="font-sans text-neutral-900 bg-white selection:bg-[#E60000] selection:text-white">
      <Helmet>
        <title>Faro Landscaping | Commercial Landscaping & Excavation Markham</title>
        <meta name="description" content="50 Years of Excellence in Commercial Landscaping, Excavating, and Grading. Serving Markham and the GTA. Licensed, Insured, and Trusted since 1974." />
        <link rel="canonical" href="https://farolandscaping.com/" />
      </Helmet>

      {/* HERO SECTION */}
      <section className="relative w-full h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden bg-neutral-900">
        {/* Background Image - Absolute Positioning */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop" 
            alt="Excavator machinery operating at sunset on a construction site" 
            className="w-full h-full object-cover opacity-80"
            loading="eager"
          />
          {/* Dark Overlay for Text Readability - Solid color with opacity, NO FILTERS */}
          <div className="absolute inset-0 bg-neutral-900/60 z-10"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-20 container mx-auto px-4 md:px-6 text-center text-white mt-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#E60000] text-white font-bold tracking-wider uppercase text-xs md:text-sm mb-6 rounded shadow-lg animate-fade-in-up">
            <Star className="w-4 h-4 fill-white" />
            Serving the GTA Since 1974
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 leading-tight drop-shadow-lg max-w-5xl mx-auto">
            BUILDING THE FOUNDATION <br />
            <span className="text-[#FFD700]">OF THE FUTURE</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-100 max-w-3xl mx-auto mb-10 leading-relaxed font-light drop-shadow-md">
            Premier commercial landscaping, excavating, and grading services in Markham and the Greater Toronto Area. 
            Trusted by developers and businesses for over 50 years.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              to="/contact" 
              className="w-full sm:w-auto px-8 py-4 bg-[#E60000] hover:bg-[#cc0000] text-white font-bold text-lg rounded transition-all duration-300 shadow-lg flex items-center justify-center gap-2 transform hover:-translate-y-1"
            >
              Get a Free Quote
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link 
              to="/services" 
              className="w-full sm:w-auto px-8 py-4 bg-white hover:bg-gray-100 text-neutral-900 font-bold text-lg rounded transition-all duration-300 shadow-lg flex items-center justify-center transform hover:-translate-y-1"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>

      {/* TRUST INDICATORS BANNER */}
      <section className="bg-[#FFD700] py-12 relative z-30 shadow-md">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-neutral-900">
            {[
              { icon: Clock, title: "50+ Years", desc: "Industry Experience" },
              { icon: ShieldCheck, title: "Fully Insured", desc: "WSIB Compliant" },
              { icon: Truck, title: "Modern Fleet", desc: "Advanced Equipment" },
              { icon: MapPin, title: "GTA Wide", desc: "Serving All Areas" },
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-4 justify-center md:justify-start group">
                <div className="p-3 bg-neutral-900 text-[#FFD700] rounded-full shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="font-bold text-xl leading-none mb-1">{item.title}</h3>
                  <p className="font-medium text-neutral-800/80 uppercase text-sm tracking-wide">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="py-20 md:py-28 bg-white overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            
            {/* Image Composition */}
            <div className="w-full lg:w-1/2 relative">
              <div className="absolute top-4 -left-4 w-full h-full border-4 border-[#E60000] z-0 hidden md:block rounded-lg"></div>
              <img 
                src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=2070&auto=format&fit=crop" 
                alt="Faro Landscaping team working on a commercial site" 
                className="relative z-10 w-full h-[500px] object-cover shadow-2xl rounded-lg bg-neutral-100"
              />
              <div className="absolute -bottom-8 -right-8 bg-neutral-900 text-white p-8 z-20 hidden md:block shadow-xl rounded-lg max-w-xs">
                 <p className="text-4xl font-bold text-[#FFD700] mb-2">100%</p>
                 <p className="text-sm font-medium uppercase tracking-wider leading-relaxed text-gray-300">Commitment to project deadlines and budget.</p>
              </div>
            </div>
            
            {/* Content */}
            <div className="w-full lg:w-1/2">
              <h4 className="text-[#E60000] font-bold uppercase tracking-widest mb-2 text-sm">About Faro Landscaping</h4>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-neutral-900 leading-tight">
                Quality Construction.<br/>Honest Service.
              </h2>
              <p className="text-lg text-neutral-600 mb-6 leading-relaxed">
                Founded in 1974, Faro Landscaping has established itself as a leader in commercial landscaping, excavation, and site development across Markham and the GTA. As a family-owned business, we bring a personal touch to large-scale industrial projects.
              </p>
              <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
                We understand the complexities of commercial grading and excavation. Our team combines decades of hands-on expertise with a modern fleet of heavy machinery to deliver results that stand the test of time.
              </p>
              
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {[
                  "Commercial & Industrial Specialists",
                  "Precision Grading & Leveling",
                  "Complete Site Preparation",
                  "Winter Maintenance Services"
                ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-[#E60000] shrink-0" />
                        <span className="font-medium text-neutral-800">{item}</span>
                    </li>
                ))}
              </ul>

              <Link 
                to="/about" 
                className="inline-flex items-center gap-2 text-[#E60000] font-bold hover:text-[#b30000] transition-colors text-lg group uppercase tracking-wide"
              >
                Learn More About Us
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES OVERVIEW */}
      <section className="py-20 bg-neutral-50 border-y border-neutral-200">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h4 className="text-[#E60000] font-bold uppercase tracking-widest mb-2 text-sm">Our Capabilities</h4>
            <h2 className="text-3xl md:text-5xl font-bold text-neutral-900 mb-6">Comprehensive Site Solutions</h2>
            <p className="text-lg text-neutral-600">
              From breaking ground to the final landscape touches, we handle every stage of your commercial site development with precision.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service Card 1: Excavation */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-300 flex flex-col h-full transform hover:-translate-y-2">
              <div className="h-64 overflow-hidden relative shrink-0">
                <div className="absolute inset-0 bg-neutral-900/20 group-hover:bg-neutral-900/10 transition-colors z-10"></div>
                <img 
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop" 
                  alt="Heavy Excavation Services" 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="p-8 border-b-4 border-transparent group-hover:border-[#E60000] transition-colors flex flex-col grow">
                <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-[#E60000] transition-colors duration-300">
                   <Hammer className="w-8 h-8 text-[#E60000] group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-neutral-900">Excavation</h3>
                <p className="text-neutral-600 mb-6 leading-relaxed grow">
                  Heavy-duty excavation for foundations, basements, and utility trenches. We move earth efficiently and safely using advanced machinery.
                </p>
                <Link to="/services" className="text-neutral-900 font-bold text-sm uppercase tracking-wide flex items-center gap-2 group-hover:text-[#E60000] transition-colors mt-auto">
                  View Details <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

             {/* Service Card 2: Grading */}
             <div className="bg-white rounded-lg shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-300 flex flex-col h-full transform hover:-translate-y-2">
              <div className="h-64 overflow-hidden relative shrink-0">
                <div className="absolute inset-0 bg-neutral-900/20 group-hover:bg-neutral-900/10 transition-colors z-10"></div>
                <img 
                  src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2069&auto=format&fit=crop" 
                  alt="Site Grading Services" 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="p-8 border-b-4 border-transparent group-hover:border-[#E60000] transition-colors flex flex-col grow">
                <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-[#E60000] transition-colors duration-300">
                    <Ruler className="w-8 h-8 text-[#E60000] group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-neutral-900">Grading & Site Prep</h3>
                <p className="text-neutral-600 mb-6 leading-relaxed grow">
                  Precision grading to ensure proper drainage and stability. We prepare your site specifically for construction success or final landscaping.
                </p>
                <Link to="/services" className="text-neutral-900 font-bold text-sm uppercase tracking-wide flex items-center gap-2 group-hover:text-[#E60000] transition-colors mt-auto">
                  View Details <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

             {/* Service Card 3: Landscaping */}
             <div className="bg-white rounded-lg shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-300 flex flex-col h-full transform hover:-translate-y-2">
              <div className="h-64 overflow-hidden relative shrink-0">
                <div className="absolute inset-0 bg-neutral-900/20 group-hover:bg-neutral-900/10 transition-colors z-10"></div>
                <img 
                  src="https://images.unsplash.com/photo-1558904541-efa843a96f01?q=80&w=2069&auto=format&fit=crop" 
                  alt="Commercial Landscaping Projects" 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="p-8 border-b-4 border-transparent group-hover:border-[#E60000] transition-colors flex flex-col grow">
                <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-[#E60000] transition-colors duration-300">
                    <Trees className="w-8 h-8 text-[#E60000] group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-neutral-900">Commercial Landscaping</h3>
                <p className="text-neutral-600 mb-6 leading-relaxed grow">
                  Complete softscape and hardscape installation for industrial parks, commercial plazas, and public spaces, improving curb appeal.
                </p>
                <Link to="/services" className="text-neutral-900 font-bold text-sm uppercase tracking-wide flex items-center gap-2 group-hover:text-[#E60000] transition-colors mt-auto">
                  View Details <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link 
                to="/services" 
                className="inline-block px-10 py-3 border-2 border-[#E60000] text-[#E60000] font-bold uppercase tracking-wider hover:bg-[#E60000] hover:text-white transition-colors duration-300 rounded hover:shadow-lg"
            >
                View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US / DARK SECTION */}
      <section className="py-20 bg-[#1a1a1a] text-white relative overflow-hidden">
        {/* Decorative background element - Solid color, no filters */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#E60000] opacity-5 -skew-x-12 transform translate-x-1/4"></div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
            <div className="w-full lg:w-1/2">
               <h4 className="text-[#FFD700] font-bold uppercase tracking-widest mb-2 text-sm">Why Choose Faro</h4>
               <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">Built on Trust, <br/>Driven by Excellence.</h2>
               <p className="text-gray-400 mb-8 text-lg leading-relaxed">
                 We don't just move dirt; we build relationships. Our long-standing reputation in Markham and the GTA is built on honest communication, transparent pricing, and a safety-first mindset.
               </p>
               
               <div className="space-y-8">
                 <div className="flex gap-4">
                    <div className="w-14 h-14 rounded bg-neutral-800 flex items-center justify-center shrink-0 text-[#E60000] shadow-inner border border-neutral-700">
                        <HardHat className="w-7 h-7" />
                    </div>
                    <div>
                        <h4 className="text-xl font-bold mb-2 text-white">Expert Operators</h4>
                        <p className="text-gray-400 leading-relaxed">Our operators are highly trained and licensed to handle complex heavy machinery operations in tight urban spaces.</p>
                    </div>
                 </div>
                 <div className="flex gap-4">
                    <div className="w-14 h-14 rounded bg-neutral-800 flex items-center justify-center shrink-0 text-[#E60000] shadow-inner border border-neutral-700">
                        <Clock className="w-7 h-7" />
                    </div>
                    <div>
                        <h4 className="text-xl font-bold mb-2 text-white">On-Time Delivery</h4>
                        <p className="text-gray-400 leading-relaxed">We respect project timelines and coordinate effectively with other trades on site to minimize downtime.</p>
                    </div>
                 </div>
               </div>
            </div>

            {/* Quick Contact Card */}
            <div className="w-full lg:w-5/12 bg-white text-neutral-900 p-8 md:p-10 rounded-lg shadow-2xl">
                <h3 className="text-2xl font-bold mb-6 text-center border-b border-gray-100 pb-4">Request a Consultation</h3>
                <p className="text-center text-gray-600 mb-8">Ready to start your project? Contact us today for a comprehensive quote.</p>
                <div className="space-y-4">
                    <a 
                        href="tel:9052091011" 
                        className="flex items-center justify-center gap-3 w-full py-4 bg-[#E60000] hover:bg-[#cc0000] text-white font-bold rounded transition-colors text-lg shadow-md"
                    >
                        <Phone className="w-5 h-5" />
                        (905) 209-1011
                    </a>
                    <Link 
                        to="/contact" 
                        className="flex items-center justify-center gap-3 w-full py-4 bg-neutral-900 hover:bg-neutral-800 text-white font-bold rounded transition-colors text-lg shadow-md"
                    >
                        <Mail className="w-5 h-5" />
                        Send a Message
                    </Link>
                </div>
                <div className="mt-6 text-center text-sm text-gray-500 flex items-center justify-center gap-2">
                    <Calendar className="w-4 h-4 text-green-600" />
                    <span className="font-medium text-gray-700">Booking Estimates for 2024 Season</span>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="py-24 bg-[#E60000] text-white text-center relative overflow-hidden">
        {/* Background texture pattern overlay */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Transform Your Site?</h2>
          <p className="text-xl text-red-100 max-w-2xl mx-auto mb-10 leading-relaxed">
            Contact Faro Landscaping today for professional excavation, grading, and commercial landscaping services in the GTA.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
             <Link 
                to="/contact" 
                className="px-10 py-4 bg-white text-[#E60000] font-bold text-lg rounded shadow-lg hover:bg-gray-100 transition-colors duration-300"
             >
                Contact Us Now
             </Link>
             <Link 
                to="/services" 
                className="px-10 py-4 border-2 border-white text-white font-bold text-lg rounded hover:bg-white/10 transition-colors duration-300"
             >
                View Services
             </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;