import React, { useState } from "react";
import { IonIcon } from "@ionic/react";
import { eyeOffOutline, eyeOutline } from "ionicons/icons";
import loginPoster from "../assets/images/login-poster.png";

const Login = () => {
    const [passwordVisible, setPasswordVisible] = useState(false);

    return (
        <section className="login-page">
            <div className="login-form-container">
                <h3>Welcome Back,</h3>
                <h4>Sign In Here</h4>
                <p>Securely Login to your Account</p>
                <form className="login-form">
                    {/* Username Input */}
                    <div className="input-group">
                        <label>Username</label>
                        <input type="text" placeholder="Enter your username" required />
                    </div>

                    {/* Password Input with Eye Icon */}
                    <div className="input-group password-group">
                        <label>Password</label>
                        <input 
                            type={passwordVisible ? "text" : "password"} 
                            placeholder="Enter your password" 
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
                            <input type="checkbox" /> Remember Me
                        </label>
                        <a href="#" className="forgot-password">Forgot Password?</a>
                    </div>

                    {/* Login Button */}
                    <button type="submit" className="login-btn">Login</button>
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