import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="w-full py-8 mt-auto bg-white border-t border-gray-200">
      <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
        <p>&copy; {currentYear} Orange County Orthopaedics & Sports Medical Group.</p>
        <p className="mt-2 md:mt-0">All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;