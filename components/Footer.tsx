import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0a0a0a] border-t" style={{ borderColor: 'Mainly Vibrant Red40', backgroundColor: '#0a0a0a' }}>
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">
              Faro Landscaping
              <span style={{ color: 'Mainly Vibrant Red' }}> </span>
            </h3>
            <p className="text-slate-400 text-sm">Landscaping Company</p>
            <p className="text-slate-500 text-xs mt-2">Trustworthy, Experienced, Professional</p>
          </div>
          
          <div>
            <h3 className="text-white font-semibold text-lg mb-4" style={{ color: 'Vibrant Yellow' }}>Quick Links</h3>
            <div className="flex flex-col gap-2">
            <Link to="/" className="text-slate-400 hover:text-white transition-colors duration-200">
              Home
            </Link>
            <Link to="/services" className="text-slate-400 hover:text-white transition-colors duration-200">
              Services
            </Link>
            <Link to="/about" className="text-slate-400 hover:text-white transition-colors duration-200">
              About
            </Link>
            <Link to="/contact" className="text-slate-400 hover:text-white transition-colors duration-200">
              Contact
            </Link>
            <Link to="/attributions" className="text-slate-400 hover:text-white transition-colors duration-200">
              Attributions
            </Link>
            <Link to="/attributions" className="text-slate-400 hover:text-white transition-colors duration-200">
              Photo Credits
            </Link>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-semibold text-lg mb-4" style={{ color: 'Vibrant Yellow' }}>Contact Us</h3>
            <div className="flex flex-col gap-2 text-slate-400 text-sm">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" style={{ color: 'Mainly Vibrant Red' }} />
                <span>7639 Reesor Rd, Markham, ON L6B 1A8, Canada, Markham</span>
              </div>
              <a href="tel:(905)209-1011" className="flex items-center gap-2 hover:text-white transition-colors duration-200">
                <Phone className="w-4 h-4" style={{ color: 'Mainly Vibrant Red' }} />
                <span>(905) 209-1011</span>
              </a>
              <a href="mailto:info@farolandscaping.com" className="flex items-center gap-2 hover:text-white transition-colors duration-200">
                <Mail className="w-4 h-4" style={{ color: 'Mainly Vibrant Red' }} />
                <span>info@farolandscaping.com</span>
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-white/10 text-center text-slate-500 text-sm">
          <p>© 2025 Faro Landscaping. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;