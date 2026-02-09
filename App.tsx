import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import Works from './pages/Works';
import NeuralLink from './pages/NeuralLink';
import Contact from './pages/Contact';

/**
 * ScrollToTop Component
 * Ensures the page resets to top when navigating between routes
 */
const ScrollToTop = () => {
    const { pathname } = useLocation();
    
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    
    return null;
};

/**
 * App Component
 * 
 * Now functions as the Router provider.
 * The layout is consistent: Navbar -> Page Content -> Footer.
 */
const App: React.FC = () => {
  return (
    <Router>
        <div className="bg-cyber-black min-h-screen text-white selection:bg-cyber-red selection:text-white flex flex-col justify-between">
            <ScrollToTop />
            <Navbar />
            
            <main className="flex-grow">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/works" element={<Works />} />
                    <Route path="/neural-link" element={<NeuralLink />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </main>
            
            <Footer />
        </div>
    </Router>
  );
};

export default App;