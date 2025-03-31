import React, { useState } from 'react'

const ChangePasswordForm = () => {
    const [currentPassword, setCurrentPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleSubmit = () => {

    }

    return (
        <form onSubmit={handleSubmit} className='profile-form'>
            <div className="change-password-inputs">
                <label className='current-password'>
                    Current Password
                    <div className=''>
                        <input type="password" name="currentPassword" value={currentPassword} onChange={(e) => setCurrentPassword(e.target.value)} />
                        <button type="button" className="forgot-password-btn">
                            Forgot Password?
                        </button>
                    </div>
                </label>
                <label>
                    New Password
                    <input type="password" name="newPassword" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
                </label>
                <label>
                    Confirm Password
                    <input type="password" name="confirmPassword" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                </label>
            </div>

            <button type="submit" className='update-info-btn' >
                Update Password
            </button>
        </form>
    )
}

export default ChangePasswordForm