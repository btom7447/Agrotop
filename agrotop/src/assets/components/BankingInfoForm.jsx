import React, { useEffect, useState } from 'react';
import { BounceLoader } from 'react-spinners';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const baseURL = import.meta.env.VITE_API_BASE_URL || 'http://api.drixel.ng/api';

const BankingInfoForm = () => {
    const [bankName, setBankName] = useState("");
    const [accountNumber, setAccountNumber] = useState("");
    const [accountType, setAccountType] = useState("");
    const [loading, setLoading] = useState(false);
    const [fetchLoading, setFetchLoading] = useState(true);

    let userData;
    try {
        const userDataString = sessionStorage.getItem("userData") || localStorage.getItem("userData");
        userData = userDataString ? JSON.parse(userDataString) : null;
    } catch (error) {
        console.error("Error parsing user data:", error);
        userData = null;
    }

    const userId = userData?.id;
    const accountName = userData?.name || "";

    useEffect(() => {
        const fetchBankingInfo = async () => {
            if (!userId) return;
            setFetchLoading(true);
            try {
                const response = await fetch(`${baseURL}/banking/${userId}`);
                if (!response.ok) throw new Error('Failed to fetch');
                const result = await response.json();

                const data = result.data;

                setBankName(data?.bankname || "");
                setAccountNumber(data?.accountnumber || "");
                setAccountType(data?.accounttype || "");
            } catch (error) {
                toast.error("Failed to load banking info");
                console.error(error);
            } finally {
                setFetchLoading(false);
            }
        };

        fetchBankingInfo();
    }, [userId]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!userId) {
            toast.error("User not found");
            return;
        }

        setLoading(true);
        try {
        const updateData = {
            bankname: bankName,
            accountnumber: accountNumber,
            accounttype: accountType
        };

        const response = await fetch(`${baseURL}/banking/update/${userId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updateData)
        });

        if (!response.ok) throw new Error("Update failed");

        toast.success("Banking information updated!");
        } catch (error) {
            console.error("Update error:", error);
            toast.error("Failed to update banking information.");
        } finally {
            setLoading(false);
        }
    };

    if (fetchLoading) {
        return (
            <div
                style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "30dvh",
                width: "100%",
                }}
            >
                <BounceLoader size={80} color="#E1841A59" />
            </div>
        );
    }

    return (
        <>
            <form onSubmit={handleSubmit} className='profile-form'>
                <h2>Banking Information</h2>

                <div className="banking-form-inputs">
                    <label>
                        Bank name
                        <input
                            type="text"
                            name="bankName"
                            value={bankName}
                            onChange={(e) => setBankName(e.target.value)}
                        />
                    </label>

                    <label>
                        Account Name
                        <input
                            type="text"
                            name="accountName"
                            value={accountName}
                            disabled
                            readOnly
                        />
                    </label>

                    <label>
                        Account Number
                        <input
                            type="text"
                            name="accountNumber"
                            value={accountNumber}
                            onChange={(e) => setAccountNumber(e.target.value)}
                        />
                    </label>

                    <label>
                        Account Type
                        <input
                            type="text"
                            name="accountType"
                            value={accountType}
                            onChange={(e) => setAccountType(e.target.value)}
                        />
                    </label>
                </div>

                <button type="submit" className='save-btn update-info-btn' disabled={loading}>
                    {loading ? 'Saving...' : 'Save'}
                </button>
            </form>

        </>
    );
};

export default BankingInfoForm;
