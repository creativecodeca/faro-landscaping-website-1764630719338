import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  
  const bgColor = 'Mainly Vibrant Red';
  const logoUrl = '';
  const primaryColor = 'Mainly Vibrant Red';
  const borderColor = 'rgba(255, 255, 255, 0.1)';
  const companyName = 'Faro Landscaping';

  return (
    <nav 
      className="fixed z-50 w-full top-0 shadow-lg" 
      style={{ 
        willChange: 'transform', 
        backgroundColor: bgColor,
        borderBottom: `1px solid ${borderColor}`
      }}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link
          to="/"
          className="text-white font-semibold tracking-tighter text-lg flex items-center gap-3 hover:opacity-80 transition-opacity"
          style={{ color: 'white' }}
        >
          {logoUrl ? (
            <img 
              src={logoUrl} 
              alt={companyName} 
              className="h-10 w-auto object-contain" 
            />
          ) : (
            <span style={{ color: 'white' }}>{companyName}</span>
          )}
        </Link>

        <div className="hidden md:flex items-center gap-10 text-sm font-semibold uppercase tracking-wider transition-opacity duration-200">
          <Link
            to="/"
            className={`hover:text-white transition-all duration-200 ${location.pathname === '/' ? 'text-white' : 'text-slate-400'}`}
          >
            Home
          </Link>
          <Link
            to="/services"
            className={`hover:text-white transition-all duration-200 ${location.pathname === '/services' ? 'text-white' : 'text-slate-400'}`}
          >
            Services
          </Link>
          <Link
            to="/about"
            className={`hover:text-white transition-all duration-200 ${location.pathname === '/about' ? 'text-white' : 'text-slate-400'}`}
          >
            About
          </Link>
          <Link
            to="/contact"
            className={`hover:text-white transition-all duration-200 ${location.pathname === '/contact' ? 'text-white' : 'text-slate-400'}`}
          >
            Contact
          </Link>
        </div>

        <button
          className="md:hidden text-white hover:opacity-80 transition-opacity"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
          style={{ color: 'white' }}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div 
          className="md:hidden border-t" 
          style={{ 
            backgroundColor: bgColor,
            borderTopColor: borderColor
          }}
        >
          <div className="flex flex-col p-6 gap-4">
            <Link
              to="/"
              className={`hover:text-white transition-all duration-200 ${location.pathname === '/' ? 'text-white' : 'text-slate-400'}`}
              onClick={() => setMobileMenuOpen(false)}
              style={{ color: location.pathname === '/' ? 'white' : 'rgb(148, 163, 184)' }}
            >
              Home
            </Link>
            <Link
              to="/services"
              className={`hover:text-white transition-all duration-200 ${location.pathname === '/services' ? 'text-white' : 'text-slate-400'}`}
              onClick={() => setMobileMenuOpen(false)}
              style={{ color: location.pathname === '/services' ? 'white' : 'rgb(148, 163, 184)' }}
            >
              Services
            </Link>
            <Link
              to="/about"
              className={`hover:text-white transition-all duration-200 ${location.pathname === '/about' ? 'text-white' : 'text-slate-400'}`}
              onClick={() => setMobileMenuOpen(false)}
              style={{ color: location.pathname === '/about' ? 'white' : 'rgb(148, 163, 184)' }}
            >
              About
            </Link>
            <Link
              to="/contact"
              className={`hover:text-white transition-all duration-200 ${location.pathname === '/contact' ? 'text-white' : 'text-slate-400'}`}
              onClick={() => setMobileMenuOpen(false)}
              style={{ color: location.pathname === '/contact' ? 'white' : 'rgb(148, 163, 184)' }}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;