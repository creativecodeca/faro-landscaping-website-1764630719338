import React from 'react';
import { Helmet } from 'react-helmet-async';

const Attributions: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Photo Attributions - Faro Landscaping</title>
        <meta name="description" content="Photo attributions and credits for Faro Landscaping" />
      </Helmet>
      
      <div className="pt-20 min-h-screen bg-[#020202]">
        <div className="max-w-4xl mx-auto px-6 py-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Photo Attributions</h1>
          <p className="text-slate-400 mb-8 text-lg">
            We would like to thank the talented photographers who have contributed images to this website. 
            All photos are used in accordance with their respective licenses.
          </p>
          
          <div className="bg-white/5 border border-white/10 rounded-xl p-8">
            <ul className="space-y-2">
            <li key={0} className="mb-2">
              <a 
                href="https://www.pexels.com/@binyaminmellish" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-300 hover:text-white transition-colors"
              >
                Photo by Binyamin Mellish on Pexels
              </a>
            </li>
            <li key={1} className="mb-2">
              <a 
                href="https://www.pexels.com/@olly" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-300 hover:text-white transition-colors"
              >
                Photo by Andrea Piacquadio on Pexels
              </a>
            </li>
            <li key={2} className="mb-2">
              <a 
                href="https://www.pexels.com/@hassan-bouamoud-1857973307" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-300 hover:text-white transition-colors"
              >
                Photo by Hassan Bouamoud on Pexels
              </a>
            </li>
            <li key={3} className="mb-2">
              <a 
                href="https://www.pexels.com/@alex-andrews-271121" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-300 hover:text-white transition-colors"
              >
                Photo by Alex Andrews on Pexels
              </a>
            </li>
            </ul>
          </div>
          
          <div className="mt-8 text-slate-500 text-sm">
            <p>
              All images are used under their respective licenses. 
              Please visit the photographer's profile for more information about usage rights.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Attributions;