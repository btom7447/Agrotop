import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { IonIcon } from "@ionic/react";
import { eyeOffOutline, eyeOutline } from "ionicons/icons";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import loginPoster from "../assets/images/login-poster.jpg";

const baseURL = import.meta.env.VITE_API_BASE_URL;

const ResetPassword = () => {
    const { email, token } = useParams(); 
    const [formData, setFormData] = useState({
        email: email || "", 
        token: token || "",
        password: "",
        password_confirmation: "",
    });
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    // Handle input change
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        // Check if passwords match
        if (formData.password !== formData.password_confirmation) {
            toast.error("Passwords do not match", {
                position: "top-right",
                autoClose: 3000,
            });
            setLoading(false);
            return;
        }

        try {
            const response = await fetch(`${baseURL}/reset-password`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.message || "Password reset failed. Try again.");
            }

            // Show success toast
            toast.success("Your Password has been reset successfully!", {
                position: "top-right",
                autoClose: 3000,
            });

            // Redirect to login page after 3 seconds
            setTimeout(() => navigate("/login"), 3000);
        } catch (error) {
            // Show error toast
            toast.error(error.message, {
                position: "top-right",
                autoClose: 3000,
            });
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (!email || !token) {
            toast.error("Invalid or expired password reset link.");
            navigate("/forgot-password");
        }
    }, [email, token, navigate]);    

    return (
        <section className="login-page">
            <div className="login-form-container">
                <h3>Reset Password</h3>
                <form className="login-form" onSubmit={handleSubmit}>
                    {/* Email Input  */}
                    <div className="input-group">
                        <label>Email</label>
                            <input 
                            type="email" 
                            name="email" 
                            value={formData.email} 
                            readOnly 
                            required 
                        />
                    </div>

                    {/* Password Input */}
                    <div className="input-group password-group">
                        <label>Password</label>
                        <input
                            type={passwordVisible ? "text" : "password"}
                            name="password"
                            placeholder="Enter your password"
                            required
                            value={formData.password}
                            onChange={handleChange}
                        />
                        <IonIcon
                            icon={passwordVisible ? eyeOutline : eyeOffOutline}
                            className="password-toggle"
                            onClick={() => setPasswordVisible(!passwordVisible)}
                        />
                    </div>

                    {/* Confirm Password Input */}
                    <div className="input-group password-group">
                        <label>Confirm Password</label>
                        <input
                            type={passwordVisible ? "text" : "password"}
                            name="password_confirmation"
                            placeholder="Confirm your password"
                            required
                            value={formData.password_confirmation}
                            onChange={handleChange}
                        />
                        <IonIcon
                            icon={passwordVisible ? eyeOutline : eyeOffOutline}
                            className="password-toggle"
                            onClick={() => setPasswordVisible(!passwordVisible)}
                        />
                    </div>
                    <br />

                    {/* Reset Password Button */}
                    <button type="submit" className="login-btn" disabled={loading}>
                        {loading ? "Resetting Password..." : "Reset Password"}
                    </button>
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

export default ResetPassword;  