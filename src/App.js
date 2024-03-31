import React from "react";
import "./assets/css/style.css";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import Menu from "./components/Menu";
import Product from "./components/Products";
import Review from "./components/Review";
import Contact from "./components/Contact";
import Blog from "./components/Blog";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App">
      <NavBar/>
      <Home/>
     <About/>
     <Menu/>
     <Product/>
     <Review/>
     <Blog/>
     <Contact/>
     <Footer/>
    
    </div>
  );
}

export default App;
