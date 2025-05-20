import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

const ProfileForm = () => {
    const placeholderImage = "https://img.freepik.com/free-psd/3d-rendering-avatar_23-2150833554.jpg";
    
    const [profilePicture, setProfilePicture] = useState(placeholderImage); 
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [facebook, setFacebook] = useState("");
    const [twitter, setTwitter] = useState("");
    const [instagram, setInstagram] = useState("");
    const [linkedin, setLinkedin] = useState("");
    const [userData, setUserData] = useState(null);


    useEffect(() => {
    try {
        const userDataString = sessionStorage.getItem("userData") || localStorage.getItem("userData");
        const parsedData = userDataString ? JSON.parse(userDataString) : null;
        setUserData(parsedData);
    } catch (error) {
        console.error("Error parsing user data:", error);
        setUserData(null);
    }
}, []);


    useEffect(() => {
        if (userData) {
            setPhone(userData.phone_number || "");
            setAddress(userData.address || "");
            setFacebook(userData.facebook_url || "");
            setTwitter(userData.x_url || "");
            setInstagram(userData.ig_url || "");
            setLinkedin(userData.linkedln_url || "");
            if (userData.profile_picture) {
                setProfilePicture(`http://api.drixel.ng/storage/${userData.profile_picture}`);
            }
        }
    }, [userData]);

    const handleProfilePictureChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setProfilePicture(URL.createObjectURL(file));
            // TODO: handle uploading to server if necessary
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const updatedFields = {
            ...(phone && { phone_number: phone }),
            ...(address && { address }),
            ...(facebook && { facebook_url: facebook }),
            ...(twitter && { x_url: twitter }),
            ...(instagram && { ig_url: instagram }),
            ...(linkedin && { linkedln_url: linkedin }),
        };

        try {
            const response = await fetch(`http://api.drixel.ng/api/users/${userData?.id}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedFields),
            });

            const result = await response.json();

            if (response.ok) {
                toast.success("Profile updated successfully!");
            } else {
                toast.error("Failed to update profile: " + result.message);
            }
        } catch (err) {
            console.error("Error updating profile:", err);
            toast.error("An error occurred while updating profile.");
        }
    };

    const firstName = userData?.name?.split(" ")[0] || "";
    const lastName = userData?.name?.split(" ")[1] || "";

    return (
        <form onSubmit={handleSubmit} className="profile-form">
            <h2>Profile Information</h2>
            <div className="profile-section">
                <div className="profile-picture-canvas">
                    <img src={profilePicture} alt={userData?.name || "User"} className='profile-preview' />
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
