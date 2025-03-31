import React, { useState } from 'react'

const BankingInfoForm = () => {
    const [bankName, setBankName] = useState("");
    const [accountName, setAccountName] = useState("");
    const [accountNumber, setAccountNumber] = useState("");
    const [accountType, setAccountType] = useState("");

    const handleSubmit = () => {

    }

    return (
        <form onSubmit={handleSubmit} className='profile-form' >
            <h2>Banking Information</h2>
            <div className="banking-form-inputs">
                <label>
                    Bank name
                    <input type="text" name="bankName" value={bankName} onChange={(e) => setBankName(e.target.value)} />
                </label>
                <label>
                    Account Name
                    <input type="text" name="accountName" value={bankName} onChange={(e) => setBankName(e.target.value)} />
                </label>
                <label>
                    Account Number
                    <input type="text" name="accountNumber" value={accountNumber} onChange={(e) => setAccountNumber(e.target.value)} />
                </label>
                <label>
                    Account Type
                    <input type="text" name="accountType" value={accountType} onChange={(e) => setAccountType(e.target.value)} />
                </label>
                
            </div>
            <button type="submit" className='save-btn update-info-btn'>Save</button>
        </form>
    )
}

export default BankingInfoForm