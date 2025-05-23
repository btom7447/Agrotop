import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IonIcon } from "@ionic/react";
import { eyeOffOutline, eyeOutline } from "ionicons/icons";
import loginPoster from "../assets/images/login-poster.jpg";
import { toast } from "react-toastify";
import { useAuth } from "../assets/lib/AuthContext.jsx";
import "react-toastify/dist/ReactToastify.css";

const baseURL = import.meta.env.VITE_API_BASE_URL;

const Login = () => {
    const [identifier, setIdentifier] = useState("");
    const [password, setPassword] = useState("");
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [rememberMe, setRememberMe] = useState(false);
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const { login } = useAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(`${baseURL}/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ identifier, password }),
            });

            if (!response.ok) {
                throw new Error("Invalid email or password");
            }

            const data = await response.json();

            login(data.token, data.user, rememberMe);
            toast.success("Login successful!", { autoClose: 3000 });

            const is_verified = data.user.is_verified === true || data.user.is_verified === "true";

            if (is_verified) {
                navigate("/user-dashboard");
            } 
            else {
                navigate("/email-verification", { state: { email: data.user.email } });
            }
        } catch (err) {
            setError(err.message);
            toast.error(err.message, { autoClose: 3000 });
        }
    };

    return (
        <section className="login-page">
            <div className="login-form-container">
                <h3>Welcome Back,</h3>
                <h4>Login Here</h4>
                <p>Securely Login to your Account</p>

                {error && <div className="error-message">{error}</div>}

                <form className="login-form" onSubmit={handleSubmit}>
                    <div className="input-group">
                        <label>Email or Username</label>
                        <input
                            type="text"
                            placeholder="Enter Your Email or Username"
                            value={identifier}
                            onChange={(e) => setIdentifier(e.target.value)}
                            required
                        />
                    </div>

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

                    <div className="login-options">
                        <label className="remember-me">
                            <input
                                type="checkbox"
                                checked={rememberMe}
                                onChange={(e) => setRememberMe(e.target.checked)}
                            />
                            Remember Me
                        </label>
                        <Link to="/forgot-password" className="forgot-password">
                            Forgot Password?
                        </Link>
                    </div>

                    <button type="submit" className="login-btn">Login</button>

                    <div className="login-links">
                        <p>Don't have an account? Sign Up</p>
                        <Link to="/signup"> Here</Link>
                    </div>
                </form>
            </div>

            <div className="login-poster">
                <img src={loginPoster} alt="Login poster image" />
                <div className="login-poster-banner"></div>
            </div>
        </section>
    );
};

export default Login;
