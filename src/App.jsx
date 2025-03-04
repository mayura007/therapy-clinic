import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Resources from './pages/Resources';
import Appointments from './pages/Appointments';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import Forms from './pages/Forms';
import PrivacyPolicy from './pages/PrivacyPolicy';
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
       <ScrollToTop />
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/appointments" element={<Appointments />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/forms" element={<Forms />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
