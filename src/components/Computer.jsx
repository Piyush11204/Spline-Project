import { useState } from 'react';
import Spline from '@splinetool/react-spline';
import Certificates from './Certificates';
import Projects from './Projects';
import PropTypes from 'prop-types';
import { 
  Code, 
  Terminal, 
  MonitorSmartphone, 
  XCircle,
  Zap 
} from 'lucide-react';

const Popup = ({ title, children, onClose }) => (
  <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex justify-center items-center z-50 p-4">
    <div className="bg-gray-900 border-2 border-cyan-500 rounded-xl shadow-2xl shadow-cyan-500/30 max-w-4xl w-full relative overflow-hidden">
      <div className="bg-gradient-to-r from-cyan-500/30 to-blue-500/30 absolute top-0 left-0 right-0 h-1"></div>
      
      <button 
        onClick={onClose}
        className="absolute top-14 right-4 text-3xl text-cyan-400 hover:text-cyan-200 transition-colors"
      >
        <XCircle className='text-4xl' />
      </button>
      
      <div className="p-8">
        <div className="flex items-center mb-6">
          <Terminal className="text-cyan-400 mr-4" size={32} />
          <h2 className="text-3xl font-bold text-cyan-300 tracking-wide">{title}</h2>
        </div>
        
        <div className="text-gray-300 popup-content">
          {children}
        </div>
      </div>
    </div>
  </div>
);

Popup.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  onClose: PropTypes.func.isRequired,
};

export const Computer = () => {
  const [showProjectsPopup, setShowProjectsPopup] = useState(false);
  const [showCertificatesPopup, setShowCertificatesPopup] = useState(false);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 overflow-hidden">
      <div className="absolute inset-0 z-0">
        {/* Golbe */}
        <Spline 
          scene="https://prod.spline.design/G-orvUU9sXIjtbKf/scene.splinecode" 
          className="w-full h-full opacity-50"
        />
      </div>
      {/* https://prod.spline.design/6uDDpBrhnxVOSVlT/scene.splinecode */}
      <div className="relative z-10 container mx-auto px-4 py-16 min-h-screen flex flex-col justify-center">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="flex flex-col space-y-6">
            <button 
              onClick={() => setShowProjectsPopup(true)}
              className="flex items-center justify-between bg-cyan-900/50 border-2 border-cyan-500 text-cyan-300 px-6 py-4 rounded-xl hover:bg-cyan-900/70 transition-all group"
            >
              <div className="flex items-center">
                <Code className="mr-4 text-cyan-400 group-hover:animate-pulse" size={32} />
                <span className="text-xl font-medium">Explore My Projects</span>
              </div>
              <Zap className="text-cyan-400 group-hover:rotate-45 transition-transform" size={24} />
            </button>
            
            <div className="bg-gray-800/50 p-4 rounded-xl border border-cyan-500/30">
              <p className="text-gray-300 leading-relaxed">
                Dive into a collection of innovative digital solutions that showcase my passion for creating cutting-edge web experiences.
              </p>
            </div>
          </div>

          <div className="flex flex-col space-y-6">
            <button 
              onClick={() => setShowCertificatesPopup(true)}
              className="flex items-center justify-between bg-green-900/50 border-2 border-green-500 text-green-300 px-6 py-4 rounded-xl hover:bg-green-900/70 transition-all group"
            >
              <div className="flex items-center">
                <MonitorSmartphone className="mr-4 text-green-400 group-hover:animate-pulse" size={32} />
                <span className="text-xl font-medium">My Certifications</span>
              </div>
              <Zap className="text-green-400 group-hover:rotate-45 transition-transform" size={24} />
            </button>
            
            <div className="bg-gray-800/50 p-4 rounded-xl border border-green-500/30">
              <p className="text-gray-300 leading-relaxed">
                Check out the professional certifications that validate my skills and commitment to continuous learning.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Projects Popup */}
      {showProjectsPopup && (
        <Popup
          title="My Projects"
          onClose={() => setShowProjectsPopup(false)}
        >
          <Projects />
        </Popup>
      )}

      {/* Certificates Popup */}
      {showCertificatesPopup && (
        <Popup
          title="My Certificates"
          onClose={() => setShowCertificatesPopup(false)}
        >
          <Certificates />
        </Popup>
      )}
    </div>
  );
};

export default Computer;