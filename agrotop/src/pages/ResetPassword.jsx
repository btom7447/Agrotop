import React, { useState } from "react";
import { Link } from "react-router-dom";
import loginPoster from "../assets/images/login-poster.jpg";

const ResetPassword = () => {
    const [email, setEmail] = useState(null);

    return (
        <section className="login-page">
            <div className="login-form-container">
                <h3>Reset Password</h3>
                <p>Please enter the email address for your account. 
                    <strong> A verification email will be sent to you. </strong>
                    Once you have received the email and clicked on the link, you will be able to choose a new password for your account.
                </p>
                <form className="login-form">
                    {/* Email Input */}
                    <div className="input-group">
                        <label>Email</label>
                        <input type="text" placeholder="Enter your email" required />
                    </div>

                    {/* Reset link button Button */}
                    <br />
                    <br />
                    <button type="submit" className="login-btn">Send Password reset link</button>
                    <button type="button" className="cancel-btn">Cancel</button>
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