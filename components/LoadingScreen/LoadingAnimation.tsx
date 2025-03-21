import React from "react";

const LoadingAnimation: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 to-white">
      <div className="relative w-24 h-24">
        <div
          className="w-full h-full border-4 border-blue-500 rounded-full animate-spin relative
            before:content-[''] before:absolute before:top-1/2 before:left-[10%] before:right-[10%] 
            before:h-[2px] before:bg-blue-500 before:opacity-50
            after:content-[''] after:absolute after:top-[10%] after:bottom-[10%] after:left-1/2 
            after:w-[2px] after:bg-blue-500 after:opacity-50"
        >
          <span className="absolute text-2xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-[fly_2s_ease-in-out_infinite]">
            ✈️
          </span>
        </div>
      </div>
      <p className="mt-5 font-sans text-lg text-gray-800 tracking-wide">
        Planning your next adventure...
      </p>
    </div>
  );
};

export default LoadingAnimation;

// Add this to your tailwind.config.js to include the custom animation
/*
module.exports = {
  theme: {
    extend: {
      animation: {
        fly: 'fly 2s ease-in-out infinite'
      },
      keyframes: {
        fly: {
          '0%': { transform: 'translate(-50%, -50%) rotate(0deg) translateX(40px)' },
          '50%': { transform: 'translate(-50%, -50%) rotate(180deg) translateX(40px)' },
          '100%': { transform: 'translate(-50%, -50%) rotate(360deg) translateX(40px)' }
        }
      }
    }
  }
}
*/
