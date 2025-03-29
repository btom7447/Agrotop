import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import loginPoster from "../assets/images/login-poster.jpg";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const baseURL = import.meta.env.VITE_API_BASE_URL;

const EmailVerification = () => {
    const location = useLocation();
    const [formData, setFormData] = useState({
        email: location.state?.email || "",
    });
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    // Set the email from location state when component mounts
    useEffect(() => {
        if (location.state?.email) {
            setFormData(prev => ({ ...prev, email: location.state.email }));
        }
    }, [location.state]);

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const response = await fetch(`${baseURL}/send-verification-email`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.message || "Failed to send verification email. Try again.");
            }

            toast.success("Verification email resent!", {
                position: "top-right",
                autoClose: 3000,
            });
        } catch (error) {
            toast.error(error.message, {
                position: "top-right",
                autoClose: 3000,
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="login-page">
            <div className="login-form-container verification">
                <p>Registration successful. Please check your email for a verification link, to verify your email</p> <br />
                <p>If you did not recieve the email, <span onClick={handleSubmit} className="resend-link">Click here to request another</span></p>
            </div>

            {/* Login Poster */}
            <div className="login-poster">
                <img src={loginPoster} alt="Login poster image" />
                <div className="login-poster-banner"></div>
            </div>
        </section>
    );
};

export default EmailVerification;