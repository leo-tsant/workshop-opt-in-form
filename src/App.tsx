import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import FormModal from './components/modals/FormModal';
import VideoModal from './components/modals/VideoModal';

function App() {
  const [isFormModalOpen, setIsFormModalOpen] = useState(false);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[rgb(3,12,27)] text-white font-sans flex flex-col">
      <div className="container mx-auto px-4 md:px-10">
        <Header />
        <HomePage
          onOpenWaitlist={() => setIsFormModalOpen(true)}
          onOpenVideo={() => setIsVideoModalOpen(true)}
        />
        <Footer />
      </div>

      <FormModal isOpen={isFormModalOpen} onClose={() => setIsFormModalOpen(false)} />
      <VideoModal isOpen={isVideoModalOpen} onClose={() => setIsVideoModalOpen(false)} />
    </div>
  );
}

export default App;
