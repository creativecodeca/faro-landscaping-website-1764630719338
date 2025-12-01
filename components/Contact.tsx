import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2, Building2, ArrowRight, User, AtSign, MessageSquare } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    // Simulate API call
    setTimeout(() => {
      setFormStatus('success');
      setFormData({ name: '', email: '', phone: '', service: '', message: '' });
      setTimeout(() => setFormStatus('idle'), 5000);
    }, 1500);
  };

  const primaryRed = '#E60000';
  const primaryYellow = '#FFD700';
  const darkGray = '#1A1A1A';

  return (
    <>
      <Helmet>
        <title>Contact Us - Faro Landscaping | Commercial Landscaping Markham</title>
        <meta 
          name="description" 
          content="Contact Faro Landscaping in Markham for professional commercial landscaping, excavation, and grading services. Call (905) 209-1011. Serving the GTA for 50 years." 
        />
        <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </Helmet>

      {/* Main Page Content - Navbar handled by App.tsx */}
      <div className="min-h-screen bg-white font-sans text-[#1A1A1A] pt-20 lg:pt-24">
        
        {/* Hero Section */}
        <section className="bg-[#1A1A1A] text-white py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          {/* Decorative background elements - Solid colors/gradients only, NO BLUR */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-b from-[#E60000] to-transparent opacity-10 rounded-full transform translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-t from-[#FFD700] to-transparent opacity-5 rounded-full transform -translate-x-1/3 translate-y-1/3 pointer-events-none"></div>
          
          <div className="max-w-7xl mx-auto relative z-10 text-center md:text-left">
            <div className="inline-flex items-center space-x-2 bg-[#2A2A2A] px-4 py-2 rounded-full mb-6 border border-gray-700">
              <span className="w-2 h-2 rounded-full bg-[#E60000]"></span>
              <span className="text-sm font-medium tracking-wide uppercase text-gray-300">Available for 2024 Season</span>
            </div>
            <h1 
              className="text-5xl md:text-7xl font-bold uppercase tracking-tight mb-6 leading-tight"
              style={{ fontFamily: 'Oswald, sans-serif' }}
            >
              Start Your <span style={{ color: primaryRed }}>Project</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl font-light leading-relaxed md:mx-0 mx-auto">
              Ready to elevate your commercial property? With over 50 years of excellence in the GTA, Faro Landscaping is your trusted partner for large-scale landscaping, excavation, and site management.
            </p>
          </div>
        </section>

        {/* Contact Information Cards - Floating overlap effect */}
        <section className="px-4 sm:px-6 lg:px-8 bg-[#F4F4F4] pb-20">
          <div className="max-w-7xl mx-auto">
            {/* Grid container with negative top margin to overlap hero */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 -mt-16 relative z-20">
              
              {/* Phone Card */}
              <div className="bg-white p-8 lg:p-10 shadow-xl border-b-4 hover:transform hover:-translate-y-1 transition-all duration-300 group" style={{ borderColor: primaryRed }}>
                <div className="w-14 h-14 rounded-full flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300" style={{ backgroundColor: primaryYellow }}>
                  <Phone className="w-7 h-7 text-[#1A1A1A]" />
                </div>
                <h3 className="text-2xl font-bold uppercase mb-3" style={{ fontFamily: 'Oswald, sans-serif' }}>Call Us</h3>
                <p className="text-gray-600 mb-6 text-sm leading-relaxed">Direct line to our dispatch and project management team.</p>
                <a 
                  href="tel:905-209-1011" 
                  className="text-2xl lg:text-3xl font-bold block transition-colors duration-200"
                  style={{ color: primaryRed }}
                >
                  (905) 209-1011
                </a>
                <div className="mt-4 flex items-center text-sm text-gray-500 bg-gray-50 p-2 rounded w-fit">
                  <Clock className="w-4 h-4 mr-2 text-gray-400" />
                  <span>Mon-Sat: 7:00 AM - 6:00 PM</span>
                </div>
              </div>

              {/* Email Card */}
              <div className="bg-white p-8 lg:p-10 shadow-xl border-b-4 hover:transform hover:-translate-y-1 transition-all duration-300 group" style={{ borderColor: primaryYellow }}>
                <div className="w-14 h-14 rounded-full flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300" style={{ backgroundColor: darkGray }}>
                  <Mail className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold uppercase mb-3" style={{ fontFamily: 'Oswald, sans-serif' }}>Email Us</h3>
                <p className="text-gray-600 mb-6 text-sm leading-relaxed">Send us your project details, RFPs, or general inquiries.</p>
                <a 
                  href="mailto:info@farolandscaping.ca" 
                  className="text-xl lg:text-2xl font-bold block break-words hover:opacity-80 transition-opacity"
                  style={{ color: darkGray }}
                >
                  info@farolandscaping.ca
                </a>
                <div className="mt-4 flex items-center text-sm text-gray-500 bg-gray-50 p-2 rounded w-fit">
                  <CheckCircle2 className="w-4 h-4 mr-2 text-gray-400" />
                  <span>Responses within 24 hours</span>
                </div>
              </div>

              {/* Location Card */}
              <div className="bg-white p-8 lg:p-10 shadow-xl border-b-4 hover:transform hover:-translate-y-1 transition-all duration-300 group" style={{ borderColor: primaryRed }}>
                <div className="w-14 h-14 rounded-full flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300" style={{ backgroundColor: primaryYellow }}>
                  <MapPin className="w-7 h-7 text-[#1A1A1A]" />
                </div>
                <h3 className="text-2xl font-bold uppercase mb-3" style={{ fontFamily: 'Oswald, sans-serif' }}>Visit Office</h3>
                <p className="text-gray-600 mb-6 text-sm leading-relaxed">Our headquarters and equipment yard in Markham.</p>
                <address className="text-xl lg:text-2xl font-bold not-italic block mb-2" style={{ color: darkGray }}>
                  2516 9th Line<br />
                  Markham, ON L6B 1A8
                </address>
                <div className="mt-4 flex items-center text-sm text-gray-500 bg-gray-50 p-2 rounded w-fit">
                  <Building2 className="w-4 h-4 mr-2 text-gray-400" />
                  <span>Serving the Entire GTA</span>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Main Content Area: Form & Map */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              
              {/* Form Section */}
              <div>
                <div className="mb-10">
                  <h2 className="text-4xl font-bold uppercase mb-4" style={{ fontFamily: 'Oswald, sans-serif', color: darkGray }}>
                    Request a <span style={{ color: primaryRed }}>Quote</span>
                  </h2>
                  <p className="text-gray-600 text-lg">
                    Fill out the form below to discuss your commercial landscaping, excavation, or grading needs. We specialize in large-scale projects and property management.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Name */}
                    <div className="group">
                      <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2 uppercase tracking-wide">Full Name</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <User className="h-5 w-5 text-gray-400 group-focus-within:text-[#E60000] transition-colors" />
                        </div>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-none focus:ring-2 focus:ring-[#E60000] focus:border-transparent transition-all outline-none bg-gray-50 focus:bg-white"
                          placeholder="John Smith"
                        />
                      </div>
                    </div>

                    {/* Email */}
                    <div className="group">
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2 uppercase tracking-wide">Email Address</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <AtSign className="h-5 w-5 text-gray-400 group-focus-within:text-[#E60000] transition-colors" />
                        </div>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-none focus:ring-2 focus:ring-[#E60000] focus:border-transparent transition-all outline-none bg-gray-50 focus:bg-white"
                          placeholder="john@company.com"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Phone */}
                    <div className="group">
                      <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2 uppercase tracking-wide">Phone Number</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Phone className="h-5 w-5 text-gray-400 group-focus-within:text-[#E60000] transition-colors" />
                        </div>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-none focus:ring-2 focus:ring-[#E60000] focus:border-transparent transition-all outline-none bg-gray-50 focus:bg-white"
                          placeholder="(905) 555-0123"
                        />
                      </div>
                    </div>

                    {/* Service Type */}
                    <div className="group">
                      <label htmlFor="service" className="block text-sm font-semibold text-gray-700 mb-2 uppercase tracking-wide">Service Interested In</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Building2 className="h-5 w-5 text-gray-400 group-focus-within:text-[#E60000] transition-colors" />
                        </div>
                        <select
                          id="service"
                          name="service"
                          required
                          value={formData.service}
                          onChange={handleInputChange}
                          className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-none focus:ring-2 focus:ring-[#E60000] focus:border-transparent transition-all outline-none bg-gray-50 focus:bg-white appearance-none"
                        >
                          <option value="" disabled>Select a Service</option>
                          <option value="Commercial Landscaping">Commercial Landscaping</option>
                          <option value="Excavation">Excavation & Grading</option>
                          <option value="Snow Removal">Snow & Ice Management</option>
                          <option value="Site Management">Site Management</option>
                          <option value="Other">Other Inquiry</option>
                        </select>
                        <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                           <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="group">
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2 uppercase tracking-wide">Project Details</label>
                    <div className="relative">
                      <div className="absolute top-3 left-3 flex items-start pointer-events-none">
                        <MessageSquare className="h-5 w-5 text-gray-400 group-focus-within:text-[#E60000] transition-colors" />
                      </div>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        required
                        value={formData.message}
                        onChange={handleInputChange}
                        className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-none focus:ring-2 focus:ring-[#E60000] focus:border-transparent transition-all outline-none bg-gray-50 focus:bg-white resize-none"
                        placeholder="Please describe your project scope, timeline, and any specific requirements..."
                      ></textarea>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={formStatus === 'submitting' || formStatus === 'success'}
                    className={`
                      w-full py-4 px-8 text-white font-bold uppercase tracking-widest text-lg transition-all duration-300 flex items-center justify-center space-x-2
                      ${formStatus === 'success' ? 'bg-green-600' : 'bg-[#E60000] hover:bg-[#CC0000]'}
                    `}
                  >
                    {formStatus === 'submitting' ? (
                      <span className="animate-pulse">Sending...</span>
                    ) : formStatus === 'success' ? (
                      <>
                        <CheckCircle2 className="w-6 h-6" />
                        <span>Message Sent</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="w-5 h-5" />
                      </>
                    )}
                  </button>
                </form>
              </div>

              {/* Map Section */}
              <div className="h-full min-h-[500px] w-full bg-gray-200 relative shadow-lg border border-gray-200">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2879.4347719660235!2d-79.23190448450123!3d43.89679097911363!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4d62137998b3b%3A0x63351910609366e!2s2516%20Ninth%20Line%2C%20Markham%2C%20ON%20L6B%201A8!5e0!3m2!1sen!2sca!4v1620141670982!5m2!1sen!2sca" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0, minHeight: '500px' }} 
                  allowFullScreen 
                  loading="lazy" 
                  title="Faro Landscaping Location"
                  className="grayscale hover:grayscale-0 transition-all duration-500"
                ></iframe>
                
                {/* Overlay Card on Map */}
                <div className="absolute bottom-6 left-6 right-6 md:left-6 md:right-auto md:w-80 bg-white p-6 shadow-xl border-l-4" style={{ borderColor: primaryRed }}>
                  <h4 className="font-bold text-lg mb-2 flex items-center" style={{ fontFamily: 'Oswald, sans-serif' }}>
                    <MapPin className="w-5 h-5 mr-2" style={{ color: primaryRed }} />
                    Service Area
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Proudly serving Markham, Richmond Hill, Scarborough, and the Greater Toronto Area.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* FAQ / Trust Section */}
        <section className="bg-[#1A1A1A] text-white py-20 px-4 sm:px-6 lg:px-8 border-t border-gray-800">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold uppercase mb-6" style={{ fontFamily: 'Oswald, sans-serif' }}>
                  Why Partner With <span style={{ color: primaryYellow }}>Faro?</span>
                </h2>
                <p className="text-gray-400 mb-8 leading-relaxed">
                  We understand the complexities of commercial property management. Our team delivers reliable, high-quality service ensuring your property remains safe, accessible, and visually impressive year-round.
                </p>
                
                <div className="space-y-4">
                  {[
                    "50 Years of Industry Experience",
                    "Fully Licensed & Insured",
                    "Modern Equipment Fleet",
                    "24/7 Emergency Response"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center" style={{ backgroundColor: primaryRed }}>
                        <CheckCircle2 className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-lg font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-[#252525] p-8 md:p-12 rounded-lg border border-gray-700 relative">
                <div className="absolute top-0 right-0 w-20 h-20 bg-[#E60000] opacity-10 rounded-bl-full"></div>
                <h3 className="text-2xl font-bold mb-4 text-white" style={{ fontFamily: 'Oswald, sans-serif' }}>Emergency Services</h3>
                <p className="text-gray-400 mb-6">
                  For urgent excavation or storm damage requirements, our dispatch team is available to assist contract clients.
                </p>
                <a 
                  href="tel:905-209-1011"
                  className="inline-flex items-center text-[#FFD700] font-bold uppercase tracking-wider hover:text-white transition-colors"
                >
                  Contact Dispatch <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;