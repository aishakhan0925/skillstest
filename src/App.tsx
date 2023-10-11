import Navbar from "./components/navbar";
import HeroSection from "./components/hero-section";
import Footer from "./components/footer";
import HistorySection from "./components/history-section";
import ClimbSection from "./components/climb-section";

export const App: React.FC = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <HistorySection />
      <ClimbSection />
      <Footer />
    </div>
  );
};

export default App;
