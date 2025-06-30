import React from 'react';
import { useNavigate } from 'react-router-dom';

const GetStarted: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="relative h-screen w-screen overflow-hidden">
     
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/gradient_background_video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      
      <div className="relative z-10 flex items-center justify-center h-full text-center flex-col bg-black/70">
        <div className="bg-white/20 p-10 rounded-xl shadow-lg backdrop-blur-md min-h-60 min-w-100">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-pink-500 via-blue-400 to-pink-500 bg-clip-text text-transparent">
            Cookie AI
          </h1>
          <p className="mb-6 mt-4 text-lg text-white font-sans">Your Daily Task Generator</p>
                    <p className="mb-6 mt-4 text-sm text-white font-sans">Co-powered By gemini api</p>

          <button
            onClick={() => navigate('/generate')}
            className="bg-gradient-to-r from-pink-500 via-blue-400 to-pink-500 font-bold text-white px-6 py-3 rounded-lg active:scale-90 transition"
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
