import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { IonApp } from "@ionic/react";
import Header from "./assets/components/Header";
import Footer from "./assets/components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import ListedProperties from "./pages/ListedProperties";
import Contact from "./pages/Contact";



const App = () => {
  return (
    <>
      <IonApp>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/home' element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/listed-properties" element={<ListedProperties />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
        </Router>
      </IonApp>
    </>
  )
};

export default App;