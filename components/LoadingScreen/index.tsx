import React from "react";

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 bg-white bg-opacity-95 z-50 flex flex-col items-center justify-center">
      <div className="relative w-24 h-24">
        {/* Mountain animation */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 bg-gradient-to-t from-blue-500 to-teal-400 rounded-lg transform rotate-45 animate-pulse"></div>
        </div>

        {/* Trekker animation */}
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2">
          <div className="w-2 h-4 bg-gray-800 animate-bounce"></div>
        </div>
      </div>

      <div className="mt-6 flex flex-col items-center">
        <h3 className="text-lg font-semibold text-gray-800">
          Preparing your adventure...
        </h3>
        <div className="mt-4 w-48 h-1 bg-gray-200 rounded-full overflow-hidden">
          <div className="h-full bg-primary rounded-full animate-loading-bar"></div>
        </div>
      </div>
    </div>
  );
};

// Don't forget to add this to your tailwind.config.js
// extend: {
//   animation: {
//     'loading-bar': 'loading 1.5s ease-in-out infinite',
//   },
//   keyframes: {
//     loading: {
//       '0%': { width: '0%' },
//       '50%': { width: '70%' },
//       '100%': { width: '100%' }
//     }
//   }
// }

export default LoadingScreen;
