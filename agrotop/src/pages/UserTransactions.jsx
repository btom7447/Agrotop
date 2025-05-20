import React, { useEffect, useState } from 'react'
import UserTransactionsTable from '../assets/components/UserTransactionsTable';

const baseURL = import.meta.env.VITE_API_BASE_URL;

const UserTransactions = () => {
  const [transactionData, setTransactionData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  let userData;
    try {
      const userDataString = sessionStorage.getItem("userData") || localStorage.getItem("userData");
      userData = userDataString ? JSON.parse(userDataString) : null;
    } catch (error) {
      console.error("Error parsing user data:", error);
      userData = null;
  }

  useEffect(() => {
    const fetchTransaction = async () => {
      if (!userData?.id) {
        setLoading(false);
        return;
      }

      try {
        const response = await fetch(`${baseURL}/transactions/${userData.id}`);
        const result = await response.json();

        if (!response.ok) {
          throw new Error(result.message || "Failed to fetch transaction record");
        }

        if (!result.data || Object.keys(result.data).length === 0) {
          setTransactionData([]);
          return;
        }

      const transactions = Array.isArray(result.data) ? result.data : [result.data];
      setTransactionData(transactions);
      } catch (error) {
        console.error("Transaction fetch error:", error.message);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTransaction();
  }, [userData?.id]);

  return (
    <div className="user-transactions-page">
      <UserTransactionsTable transactions={transactionData} />
    </div>
  )
}

export default UserTransactions