import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { IonApp } from "@ionic/react";
import Header from "./assets/components/Header";
import Footer from "./assets/components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Listings from "./pages/Listings";
import Login from "./pages/Login";
import PropertyDetail from "./pages/PropertyDetail";
import ScrollToTop from "./assets/components/ScrollToTop";
import Signin from "./pages/Signup";
import ResetPassword from "./pages/ResetPassword";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import EmailVerification from "./pages/EmailVerification";



const App = () => {
  return (
    <>
      <IonApp>
        <Router>
          <ScrollToTop />
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/home' element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/listings" element={<Listings />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signin />} />
            <Route path="/reset-password" element={<ResetPassword />} />
            <Route path="/email-verification" element={<EmailVerification />} />
            <Route path="/property-details/:id" element={<PropertyDetail />} />
          </Routes>
          <Footer />
          <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
        </Router>
      </IonApp>

    </>
  )
};

export default App;