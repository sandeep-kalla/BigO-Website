import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="relative px-4 sm:px-8 py-4">
      <div className="absolute inset-x-4 sm:inset-x-8 h-14 bg-purple-950/90 rounded-full backdrop-blur-sm"></div>
      
      {/* Desktop Navigation */}
      <div className="hidden lg:flex items-center justify-between relative z-10 max-w-7xl mx-auto">
        <div className="flex items-center gap-6">
          <a href="/" className="text-white hover:text-purple-400 px-5 py-2.5 rounded-full transition-all duration-200 hover:bg-purple-800/50">Home</a>
          <a href="/cpp" className="text-white hover:text-purple-400 px-5 py-2.5 rounded-full transition-all duration-200 hover:bg-purple-800/50">CPP</a>
          <a href="/" className="text-white hover:text-purple-400 px-5 py-2.5 rounded-full transition-all duration-200 hover:bg-purple-800/50">Lorem</a>
        </div>

        <a href="/" className="flex items-center justify-center mx-12">
          <div className="absolute w-16 h-16 bg-white rounded-full"></div>
          <img src="/logo.svg" alt="Logo" className="h-14 w-14 relative z-10" />
        </a>

        <div className="flex items-center gap-6">
          <a href="/" className="text-white hover:text-purple-400 px-5 py-2.5 rounded-full transition-all duration-200 hover:bg-purple-800/50">Sheets</a>
          <a href="/" className="text-white hover:text-purple-400 px-5 py-2.5 rounded-full transition-all duration-200 hover:bg-purple-800/50">Lorem</a>
          <button className="bg-white text-purple-900 px-7 py-2.5 rounded-full hover:bg-purple-100 transition-all duration-200 font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">Sign Up</button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="lg:hidden flex items-center justify-between relative z-10 max-w-7xl mx-auto">
        <a href="/" className="flex items-center">
          <div className="absolute w-14 h-14 bg-white rounded-full"></div>
          <img src="/logo.svg" alt="Logo" className="h-12 w-12 relative z-10" />
        </a>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-white p-2 focus:outline-none focus:ring-2 focus:ring-purple-400 rounded-lg"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-20 left-0 right-0 bg-purple-900/95 backdrop-blur-lg rounded-2xl mx-4 p-4 shadow-xl z-20 transform transition-all duration-200 ease-in-out">
          <div className="flex flex-col space-y-3">
            <a href="/" className="text-white hover:text-purple-400 px-4 py-2 rounded-lg transition-all duration-200 hover:bg-purple-800/50">Home</a>
            <a href="/cpp" className="text-white hover:text-purple-400 px-4 py-2 rounded-lg transition-all duration-200 hover:bg-purple-800/50">CPP</a>
            <a href="/" className="text-white hover:text-purple-400 px-4 py-2 rounded-lg transition-all duration-200 hover:bg-purple-800/50">Lorem</a>
            <a href="/" className="text-white hover:text-purple-400 px-4 py-2 rounded-lg transition-all duration-200 hover:bg-purple-800/50">Sheets</a>
            <a href="/" className="text-white hover:text-purple-400 px-4 py-2 rounded-lg transition-all duration-200 hover:bg-purple-800/50">Lorem</a>
            <button className="bg-white text-purple-900 px-6 py-2 rounded-lg hover:bg-purple-100 transition-all duration-200 font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 w-full">Sign Up</button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;