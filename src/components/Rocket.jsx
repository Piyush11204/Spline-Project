import Spline from '@splinetool/react-spline';
import { Cpu ,University } from 'lucide-react';

const Rocket = () => {
  return (
    <div>
        <div style={{ width: '100vw', height: '100vh' }}>
            <Spline scene="https://prod.spline.design/gBgh6kQn-aeDhNuw/scene.splinecode" />
        </div>
      
        <div className='absolute top-20 left-20'>
          
        <section className="bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 shadow-2xl border border-teal-800/30 hover:border-teal-600/50 transition-all duration-300">
            <div className="flex items-center mb-6">
              <Cpu className="text-teal-400 mr-4" size={32} />
              <h2 className="text-2xl font-bold text-teal-300">Skills</h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {['React', 'Node.js', 'MongoDB', 'Express', 'Next.js', 'Tailwind CSS', 'TypeScript'].map(skill => (
                <span 
                  key={skill} 
                  className="bg-teal-900/50 text-teal-300 px-3 py-1 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </section>
        </div>
        <div className='absolute right-20 bottom-20 ' >
        <section className="bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 shadow-2xl border border-teal-800/30 hover:border-teal-600/50 transition-all duration-300">
            <div className="flex items-center mb-6">
              <University className="text-teal-400 mr-4" size={32} />
              <h2 className="text-2xl font-bold text-teal-300">Education</h2>
            </div>
            <div className="text-gray-300">
              <h3 className="text-xl font-semibold text-teal-400 mb-2">
                VCET (Vidyalankar College of Engineering and Technology)
              </h3>
              <p>Bachelor of Engineering in Information Technology</p>
              <p className="text-gray-400">Third Year | Expected Graduation: 2026</p>
            </div>
          </section>
        </div>
        
    </div>
  )
}

export default Rocket;