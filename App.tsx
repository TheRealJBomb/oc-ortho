import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import InfoSection from "./components/InfoSection";
import Footer from "./components/Footer";
import ClosureModal from "./components/ClosureModal";

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    // Small delay to ensure smooth entrance animation
    const timer = setTimeout(() => {
      setIsModalOpen(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-pattern relative">
      <ClosureModal isOpen={isModalOpen} onClose={handleCloseModal} />

      <Header />

      <main className="flex-grow flex flex-col items-center justify-center">
        <InfoSection />
      </main>

      <Footer />
    </div>
  );
};

export default App;
