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
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import EmailVerification from "./pages/EmailVerification";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import MainLayout from "./assets/components/MainLayout";
import ProtectedRoute from "./assets/components/ProtectedRoute";
import UserDashboard from "./pages/UserDashboard";
import DashboardLayout from "./assets/components/DashboardLayout";
import UserAccount from "./pages/UserAccount";
import UserInbox from "./pages/UserInbox";
import UserTransactions from "./pages/UserTransactions";
import UserListings from "./pages/UserListings";



const App = () => {
  return (
    <>
      <IonApp>
        <Router>
          <ScrollToTop />
          <Routes>
            <Route element={<MainLayout />}>
              <Route path='/' element={<Home />} />
              <Route path='/home' element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/listings" element={<Listings />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signin />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
              <Route path="/reset-password/:email/:token" element={<ResetPassword />} />
              <Route path="/email-verification" element={<EmailVerification />} />
              <Route path="/property-details/:id" element={<PropertyDetail />} />
            </Route>

            {/* Protected Routes (Dashboard) */}
            <Route
              element={
                <DashboardLayout>
                  <ProtectedRoute />
                </DashboardLayout>
              }
            >
              <Route path="/user-dashboard" element={<UserDashboard />} />
              <Route path="/user-inbox" element={<UserInbox />} />
              <Route path="/user-transactions" element={<UserTransactions />} />
              <Route path="/user-listings" element={<UserListings />} />
              <Route path="/user-account" element={<UserAccount />} />
            </Route>
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