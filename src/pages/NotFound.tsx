import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source
          src="/Media/Technology Network Background. 4827668 Stock Video at Vecteezy.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-700/95 via-primary-600/90 to-primary-800/95 backdrop-blur-[2px]" />

      {/* Content */}
      <div className="text-center p-8 bg-white/90 rounded-xl shadow-2xl hover:shadow-3xl transition-shadow duration-300 z-20">
        {/* Icon */}
        <div className="mb-6 animate-bounce">
          <svg
            className="w-24 h-24 mx-auto text-blue-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
        </div>

        {/* Heading */}
        <h1 className="text-6xl font-bold text-blue-900 mb-4">404</h1>
        <p className="text-2xl text-blue-700 mb-6">Oops! Page not found</p>

        {/* Return to Home Link */}
        <a
          href="/"
          className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-lg hover:scale-105 hover:ring-2 hover:ring-blue-400 hover:ring-offset-2 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 transition-all duration-300"
        >
          <svg
            className="w-5 h-5 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            ></path>
          </svg>
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;