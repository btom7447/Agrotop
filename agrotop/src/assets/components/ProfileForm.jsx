import React, { useState } from 'react';

const ProfileForm = () => {
    const placeholderImage = "https://img.freepik.com/free-psd/3d-rendering-avatar_23-2150833554.jpg?uid=R107376497&ga=GA1.1.1763716520.1741551944&semt=ais_hybrid"; 
    const [profilePicture, setProfilePicture] = useState(placeholderImage);    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [facebook, setFacebook] = useState("");
    const [twitter, setTwitter] = useState("");
    const [instagram, setInstagram] = useState("");
    const [linkedin, setLinkedin] = useState("");

    let userData;
    try {
        const userDataString = sessionStorage.getItem("userData") || localStorage.getItem("userData");
        userData = userDataString ? JSON.parse(userDataString) : null;
    } catch (error) {
        console.error("Error parsing user data:", error);
        userData = null;
    }

    const handleProfilePictureChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setProfilePicture(URL.createObjectURL(file));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const updatedData = {
            phone,
            address,
            social: { facebook, twitter, instagram, linkedin }
        };
        console.log("Updated Profile Data:", updatedData);
    };

    const firstName = userData?.name?.split(" ")[0] || "";
    const lastName = userData?.name?.split(" ")[1] || "";

    return (
        <form onSubmit={handleSubmit} className="profile-form">
            <h2>Profile Information</h2>
            <div className="profile-section">
                <div className="profile-picture-canvas">
                    <img src={profilePicture || "/default-avatar.png"} alt={userData?.firstName || "User"} className='profile-preview' />
                    <label className="change-image-btn">
                        Change Image
                        <input type="file" accept="image/*" onChange={handleProfilePictureChange} hidden />
                    </label>
                </div>

                <div className="profile-section-inputs">
                    <label>
                        Username
                        <input type="text" value={userData?.username || ""} readOnly />
                    </label>
                    <label>
                        Email
                        <input type="email" value={userData?.email || ""} readOnly />
                    </label>
                    <label>
                        First Name
                        <input type="text" value={firstName} readOnly />
                    </label>
                    <label>
                        Last Name
                        <input type="text" value={lastName} readOnly />
                    </label>
                    <label>
                        Phone Number
                        <input type="tel" name="phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
                    </label>
                    <label>
                        Address
                        <input type="text" name="address" value={address} onChange={(e) => setAddress(e.target.value)} />
                    </label>
                </div>
            </div>

            <div className="social-media-section">
                <label>
                    Facebook
                    <input type="text" name="facebook" value={facebook} onChange={(e) => setFacebook(e.target.value)} />
                </label>
                <label>
                    Twitter (X)
                    <input type="text" name="twitter" value={twitter} onChange={(e) => setTwitter(e.target.value)} />
                </label>
                <label>
                    Instagram
                    <input type="text" name="instagram" value={instagram} onChange={(e) => setInstagram(e.target.value)} />
                </label>
                <label>
                    LinkedIn
                    <input type="text" name="linkedin" value={linkedin} onChange={(e) => setLinkedin(e.target.value)} />
                </label>
            </div>

            <button type="submit" className='update-info-btn'>Update Information</button>
        </form>
    );
};

export default ProfileForm;
