import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IonIcon } from "@ionic/react";
import { eyeOffOutline, eyeOutline } from "ionicons/icons";
import loginPoster from "../assets/images/login-poster.jpg";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const baseURL = import.meta.env.VITE_API_BASE_URL;

const Login = () => {
    const [email, setEmail] = useState(""); 
    const [password, setPassword] = useState(""); 
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [rememberMe, setRememberMe] = useState(false); 
    const [error, setError] = useState("");
    const navigate = useNavigate();

    
    const handleSubmit = async (e) => {
        e.preventDefault(); 

        try {
            const response = await fetch(`${baseURL}/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password }), 
            });

            if (!response.ok) {
                throw new Error("Invalid email or password");
            }

            const data = await response.json();

            // Save the token securely
            if (rememberMe) {
                localStorage.setItem("token", data.token); 
            } else {
                sessionStorage.setItem("token", data.token); 
            }

            toast.success("Login successful!", {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });
            // Redirect the user to a protected route (e.g., dashboard)
            navigate("/dashboard");
        } catch (err) {
            setError(err.message); 
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
                <h3>Welcome Back,</h3>
                <h4>Login Here</h4>
                <p>Securely Login to your Account</p>

                {/* Display error message if any */}
                {error && <div className="error-message">{error}</div>}

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

                    {/* Password Input with Eye Icon */}
                    <div className="input-group password-group">
                        <label>Password</label>
                        <input
                            type={passwordVisible ? "text" : "password"}
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <IonIcon
                            icon={passwordVisible ? eyeOutline : eyeOffOutline}
                            className="password-toggle"
                            onClick={() => setPasswordVisible(!passwordVisible)}
                        />
                    </div>

                    {/* Remember Me & Forgot Password */}
                    <div className="login-options">
                        <label className="remember-me">
                            <input
                                type="checkbox"
                                checked={rememberMe}
                                onChange={(e) => setRememberMe(e.target.checked)}
                            />
                            Remember Me
                        </label>
                        <Link to="/reset-password" className="forgot-password">
                            Forgot Password?
                        </Link>
                    </div>

                    {/* Login Button */}
                    <button type="submit" className="login-btn">
                        Login
                    </button>

                    {/* Sign Up Link */}
                    <div className="login-links">
                        <p>Don't have an account? Sign Up</p>
                        <Link to="/signup">Here</Link>
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

export default Login;