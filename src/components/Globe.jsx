
import Spline from '@splinetool/react-spline';


const Globe = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 overflow-hidden">
      {/* 3D Spline Background */}
      <div className="absolute inset-0 z-10">
        <Spline 
          scene="https://prod.spline.design/6uDDpBrhnxVOSVlT/scene.splinecode " 
          className="w-full h-full opacity-50"
        />
      </div>

      {/* Content Container */}
      <div className="relative z-0 container mx-auto px-4 py-16 flex flex-col items-center justify-center min-h-screen">
        {/* Header */}
        <header className="text-center mb-12 animate-fade-in">
          <h1 className="text-5xl font-bold text-teal-300 mb-4 drop-shadow-lg">
            Piyush Krishnadutt Yadav
          </h1>
          <p className="text-xl text-gray-300 tracking-wide max-w-2xl mx-auto">
            Full-Stack Developer | MERN Enthusiast | UI/UX Designer
          </p>
        </header>

        {/* Sections Container */}
       
      </div>
    </div>
  );
};

export default Globe;