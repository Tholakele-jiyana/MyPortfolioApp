//Import the components to be used in the App component
import Header from "./Components/Header";
import Home from "./Components/Home";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Footer from "./Components/Footer"; 
import Contact from "./Components/Contact";

//Export the App components that uses the imported components
function App() {
  return (
    <div>
      <Header />
       <Home />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
export default App;