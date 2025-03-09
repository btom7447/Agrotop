import React from "react";
import cooProfile from '../images/timileyin-james-profile.png';
import ceoProfile from '../images/fola-adalemo-profile.png';
import execProfile from '../images/majoyeogbe-boluwatife-profile.png';
import cmcoProfile from '../images/miracle-igoh-profile.png';


const TeamSection = () => {
    return (
        <section className="team-section">
            <h5>Our Team</h5>
            <p>
                At AgroTop Global Resources LTD, we are committed to excellence, innovation, and sustainability in agriculture. Our dedicated team of professionals works tirelessly to ensure that our operations run smoothly and efficiently, providing top-notch services and products to our clients.
            </p>
            <p>
                We pride ourselves on fostering a collaborative and supportive work environment where innovation thrives. Our agronomists stay at the forefront of industry developments, implementing cutting-edge techniques to enhance crop yields and sustainability. Our engineers design and maintain state-of-the-art machinery and systems that streamline operations and reduce environmental impact.
            </p>
            <p>
                Research is a cornerstone of our approach, and our scientists are dedicated to exploring new methods and technologies that can revolutionize the agricultural sector. Their findings inform our practices and help us remain a leader in sustainable agriculture.
            </p>
            <p>
                Together, our team at AgroTop Global Resources LTD works with unwavering commitment to deliver exceptional results for our clients while promoting sustainable and innovative agricultural practices. We are proud to be at the forefront of the agricultural industry, driving positive change and contributing to a more sustainable future for all.
            </p>
            <div className="team-catalog">
                <div className="team-card">
                    <img src={cooProfile} alt="Picture of Timileyin James" />
                    <h4>Timileyin James</h4>
                    <h5>COO</h5>
                </div>
                <div className="team-card">
                    <img src={ceoProfile} alt="Picture of Fola Adalemo" />
                    <h4>Fola Adalemo</h4>
                    <h5>CEO</h5>
                </div>
                <div className="team-card">
                    <img src={execProfile} alt="Picture of Majoyeogbe Boluwatife" />
                    <h4>Majoyeogbe Boluwatife</h4>
                    <h5>Exec.Director/Legal</h5>
                </div>
                <div className="team-card">
                    <img src={cmcoProfile} alt="Picture of Miracle Igoh" />
                    <h4>Miracle Igoh</h4>
                    <h5>CMCO</h5>
                </div>
            </div>
        </section>
    )
};

export default TeamSection;