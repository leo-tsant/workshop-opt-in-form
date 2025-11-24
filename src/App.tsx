import Header from './components/Header';
import Footer from './components/Footer';
import VideoSection from './components/VideoSection';
import OptInForm from './components/OptInForm';

function App() {
  return (
    <div className="min-h-screen bg-[rgb(3,12,27)] text-white font-sans flex flex-col">
      <Header />
      <div className="flex-1 flex flex-col p-4 space-y-8 max-w-[1000px] mx-auto w-full">
        <VideoSection />
        <OptInForm />
      </div>
      <Footer />
    </div>
  );
}

export default App;
