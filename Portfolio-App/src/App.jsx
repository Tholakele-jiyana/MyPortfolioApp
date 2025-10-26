//Import the components to be used in the App component
import Header from "./Components/Header";
import About from "./Components/About";
import Hero from "./Components/Hero";
import Projects from "./Components/Projects";
import Footer from "./Components/Footer"; 
import Home from"./Components/Home";
import Contact from "./Components/Contact";

//Export the App components that uses the imported components
export default function App() {
  return (
    <div>
      <Header />
      <About />
      <Hero />
      <Projects />
      <Footer />
      <Home />
      <Contact />
    </div>
  );
}