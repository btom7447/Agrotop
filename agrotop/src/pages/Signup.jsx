import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IonIcon } from "@ionic/react";
import { eyeOffOutline, eyeOutline } from "ionicons/icons";
import loginPoster from "../assets/images/login-poster.jpg";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const baseURL = import.meta.env.VITE_API_BASE_URL;

const Signup = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
        username: "",
    });
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const baseURL = import.meta.env.VITE_API_BASE_URL;

    // Handle input change
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const response = await fetch(`${baseURL}/register`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.message || "Signup failed. Try again.");
            }

            toast.success("Account created successfully!", {
                position: "top-right",
                autoClose: 3000,
            });

            setTimeout(() => navigate("/login"), 3000);
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
            <div className="login-form-container">
                <h3>Create an Account</h3>
                <form className="login-form" onSubmit={handleSubmit}>
                    {/* Email Input */}
                    <div className="input-group">
                        <label>Name</label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Enter Name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                        />
                    </div>

                    {/* Email Input */}
                    <div className="input-group">
                        <label>Email</label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter Email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </div>

                    {/* Username Input */}
                    <div className="input-group">
                        <label>Username</label>
                        <input
                            type="text"
                            name="username"
                            placeholder="Enter Username"
                            required
                            value={formData.username}
                            onChange={handleChange}
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

                    <div className="login-links">
                        <p>By registering, you accept our</p>
                        <Link to="/terms-of-use">Terms of Use</Link>
                        <p>and</p>
                        <Link to="/privacy-policy">Privacy Policy</Link>
                    </div>

                    {/* Signup Button */}
                    <button type="submit" className="login-btn" disabled={loading}>
                        {loading ? "Creating Account..." : "Create Account"}
                    </button>

                    <div className="login-links">
                        <p>Already have an account?</p>
                        <Link to="/login">Click here to log in</Link>
                    </div>
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

export default Signup;