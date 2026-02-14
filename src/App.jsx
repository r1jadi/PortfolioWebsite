import { DarkModeProvider } from './context/DarkModeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

/**
 * App — Root component
 * Wraps everything in DarkModeProvider and renders all sections.
 */
function App() {
    return (
        <DarkModeProvider>
            <div className="min-h-screen bg-white dark:bg-dark-bg transition-colors duration-300">
                <Navbar />
                <main>
                    <Hero />
                    <About />
                    <Projects />
                    <Experience />
                    <Skills />
                    <Contact />
                </main>
                <Footer />
                <ScrollToTop />
            </div>
        </DarkModeProvider>
    );
}

export default App;
