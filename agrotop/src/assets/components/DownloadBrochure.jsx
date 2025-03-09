import React from "react";
import { IonIcon } from "@ionic/react";
import { downloadOutline } from "ionicons/icons";
import agrotopBrochure from "../data/agrotop-brochure.pdf";

const DownloadBrochure = () => {
    return (
        <div className="download-brochure">
            <h6>Download our curated brochure to guide you </h6>

            <a
                href={agrotopBrochure} 
                download="agrotop-brochure.pdf" 
                className="download-btn"
            >
                <IonIcon icon={downloadOutline} className="download-icon" />
                Get a Copy
            </a>
        </div>
    );
};

export default DownloadBrochure;