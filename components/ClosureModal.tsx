import React, { useEffect, useState } from "react";
import { Info } from "lucide-react";

interface ClosureModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ClosureModal: React.FC<ClosureModalProps> = ({ isOpen, onClose }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
      document.body.style.overflow = "hidden";
    } else {
      const timer = setTimeout(() => setIsVisible(false), 300);
      document.body.style.overflow = "unset";
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!isVisible && !isOpen) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-opacity duration-500 ${
        isOpen ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-gray-900/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div
        className={`relative bg-white rounded-xl shadow-2xl max-w-md w-full overflow-hidden transform transition-all duration-500 ${
          isOpen ? "scale-100 translate-y-0" : "scale-95 translate-y-8"
        }`}
      >
        {/* Decorative Top Bar */}
        <div className="h-2 w-full bg-brand-dark"></div>

        <div className="p-8">
          <div className="flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-5">
              <Info className="w-6 h-6 text-gray-700" />
            </div>

            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-3">
              Practice Closure Notice
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Please be advised that the office of{" "}
              <span className="font-semibold text-gray-900">
                Orange County Orthopaedics & Sports Medical Group
              </span>{" "}
              has permanently closed.
            </p>

            <button
              onClick={onClose}
              className="w-full py-3 px-4 bg-brand-dark hover:bg-black text-white font-medium rounded-lg shadow-md transition-all duration-200 active:scale-[0.98]"
            >
              Close and View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClosureModal;
