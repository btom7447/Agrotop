import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IonIcon } from "@ionic/react";
import { eyeOffOutline, eyeOutline } from "ionicons/icons";
import loginPoster from "../assets/images/login-poster.jpg";

const Signup = () => {
    const [passwordVisible, setPasswordVisible] = useState(false);

    return (
        <section className="login-page">
            <div className="login-form-container">
                <h3>Create an Account</h3>
                <form className="login-form">
                    {/* Name Input */}
                    <div className="input-group">
                        <label>Name</label>
                        <input type="text" placeholder="Enter Name" required />
                    </div>

                    {/* Email Input */}
                    <div className="input-group">
                        <label>Email</label>
                        <input type="email" placeholder="Enter Email" required />
                    </div>

                    {/* Username Input */}
                    <div className="input-group">
                        <label>Username</label>
                        <input type="text" placeholder="Enter Username" required />
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

                    {/* Confirm Password Input with Eye Icon */}
                    <div className="input-group password-group">
                        <label>Confirm Password</label>
                        <input 
                            type={passwordVisible ? "text" : "password"} 
                            placeholder="Confirm your password" 
                            required 
                        />
                        <IonIcon 
                            icon={passwordVisible ? eyeOutline : eyeOffOutline} 
                            className="password-toggle" 
                            onClick={() => setPasswordVisible(!passwordVisible)}
                        />
                    </div>
                    <div className="login-links">
                        <p>By registering you accept our</p>
                        <Link to="/terms-of-use">Terms of Use</Link>
                        <p>and</p>
                        <Link to="/privacy-policy">Privacy</Link>
                        <p>and agree that we and our selected partners may contact you with relevant offers and services.</p>
                    </div>

                    {/* Login Button */}
                    <button type="submit" className="login-btn">Login</button>
                    <div className="login-links">
                        <p>Already have an account?</p>
                        <Link to="/login">Click here to log in </Link>
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