//Import the components to be used in the App component
import Header from "./Components/Header";
import About from "./Components/About";
import Home from "./Components/Home";
import Projects from "./Components/Projects";
import Footer from "./Components/Footer"; 
import Contact from "./Components/Contact";

//Export the App components that uses the imported components
function App() {
  return (
    <div>
      <Header />
      <About />
      <Home />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
export default App;