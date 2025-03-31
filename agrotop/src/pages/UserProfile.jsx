import React from "react";
import ProfileForm from "../assets/components/ProfileForm";
import BankingInfoForm from "../assets/components/BankingInfoForm";

const UserProfile = () => {
    return (
        <div className="create-listings-page">
            <h2>My Profile</h2>
            <ProfileForm />
            <br /><br />
            <BankingInfoForm />
        </div>
    )
};

export default UserProfile;