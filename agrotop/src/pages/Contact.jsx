import React from "react";
import BreadCrumb from "../assets/components/BreadCrumb";
import ContactSection from "../assets/components/ContactSection";
import ContactForm from "../assets/components/ContactForm";

const Contact = () => {
    return (
        <>
            <BreadCrumb title="Contact Us" />
            <div className="contact-us-page">
                <ContactSection />
                <ContactForm />
            </div>
        </>
    )
};

export default Contact;