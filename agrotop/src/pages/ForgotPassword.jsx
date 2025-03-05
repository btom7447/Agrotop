import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify"; 
import loginPoster from "../assets/images/login-poster.jpg";

const baseURL = import.meta.env.VITE_API_BASE_URL;

const ForgotPassword = () => {
    const [email, setEmail] = useState(""); 
    const navigate = useNavigate(); 

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault(); 

        try {
            const response = await fetch(`${baseURL}/forgot-password`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email }), 
            });
            
            const result = await response.json(); // ✅ Parse response before accessing properties
            
            if (!response.ok) {
                throw new Error(result.message || "Failed to send reset link. Please try again.");
            }

            navigate(`/reset-password/${encodeURIComponent(result.email)}/${encodeURIComponent(result.token)}`);
        } catch (err) {
            toast.error(err.message, {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });
        }
    };

    return (
        <section className="login-page">
            <div className="login-form-container">
                <h3>Reset Password</h3>
                <p>
                    Please enter the email address for your account.
                    <strong> A verification email will be sent to you. </strong>
                    Once you have received the email and clicked on the link, you will be able to choose a new password for your account.
                </p>

                <form className="login-form" onSubmit={handleSubmit}>
                    {/* Email Input */}
                    <div className="input-group">
                        <label>Email</label>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    <br />
                    <br />
                    <button type="submit" className="login-btn">
                        Send Password Reset Link
                    </button>

                    {/* Cancel button */}
                    <Link to="/login">
                        <button type="button" className="cancel-btn">
                            Cancel
                        </button>
                    </Link>
                </form>
            </div>

            {/* Login Poster */}
            <div className="login-poster">
                <img src={loginPoster} alt="Login poster image" />
                <div className="login-poster-banner"></div>
            </div>
        </section>
    );
};

export default ForgotPassword;