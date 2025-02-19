// import React, { useState, useEffect } from 'react';
// import '../Styles/TransactionsDonePage.css'; // Import CSS file for TransactionsDonePage styles
 
// function TransactionsDonePage() {
//   const [transactions, setTransactions] = useState([]);
//   const [loading, setLoading] = useState(true);
 
//   useEffect(() => {
//     fetchTransactions();
//   }, []);
 
//   const fetchTransactions = async () => {
//     try {
//       const response = await fetch('https://firestore.googleapis.com/v1/projects/bankingapp-41d2b/databases/(default)/documents/Transactions');
//       const data = await response.json();
//       const transactionData = data.documents.map(doc => doc.fields); // Assuming transactions are stored in documents as fields
//       setTransactions(transactionData);
//       setLoading(false);
//     } catch (error) {
//       console.error('Error fetching transactions:', error);
//       setLoading(false);
//     }
//   };
 
//   if (loading) {
//     return <div>Loading...</div>;
//   }
 
//   return (
//     <div>
//       <div className='background-container'>
//       <h1>Transactions Done</h1>
//       <div className="transactions-container">
//         {transactions.map((transaction, index) => (
//           <div key={index} className="transaction-item">
//             {transaction.type && <div><strong>Type:</strong> {transaction.type.stringValue}</div>}
//             {transaction.accountNumber && <div><strong>Account Number:</strong> {transaction.accountNumber.integerValue}</div>}
//             {transaction.receiverAccountNumber && <div><strong>Receiver Account Number:</strong> {transaction.receiverAccountNumber.integerValue}</div>}
//             {transaction.senderAccountNumber && <div><strong>Sender Account Number:</strong> {transaction.senderAccountNumber.integerValue}</div>}
//             {transaction.name && <div><strong>Name:</strong> {transaction.name.stringValue}</div>}
//             {transaction.amount && <div><strong>Amount:</strong> {transaction.amount.doubleValue}</div>}
//             {transaction.timestamp && <div><strong>Timestamp:</strong> {new Date(transaction.timestamp.timestampValue).toLocaleString()}</div>}
//           </div>
//         ))}
//       </div>
//     </div>
//     </div>
//   );
// }
 
// export default TransactionsDonePage;


import React, { useState, useEffect } from 'react';
import '../Styles/TransactionsDonePage.css'; // Import CSS file for TransactionsDonePage styles
 
function TransactionsDonePage() {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
 
  useEffect(() => {
    fetchTransactions();
  }, []);
 
  const fetchTransactions = async () => {
    try {
      const response = await fetch('https://firestore.googleapis.com/v1/projects/bankingapp-41d2b/databases/(default)/documents/Transactions');
      const data = await response.json();
      const transactionData = data.documents.map(doc => doc.fields); // Assuming transactions are stored in documents as fields
      setTransactions(transactionData);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching transactions:', error);
      setLoading(false);
    }
  };
 
  if (loading) {
    return <div>Loading...</div>;
  }
 
  return (
 
    <div className='container' >
      <h1>Transactions Done</h1>
      <div className="transactions-container">
        {transactions.map((transaction, index) => (
          <div key={index} className="transaction-item">
            {transaction.type && <div><strong>Type:</strong> {transaction.type.stringValue}</div>}
            {transaction.accountNumber && <div><strong>Account Number:</strong> {transaction.accountNumber.integerValue}</div>}
            {transaction.receiverAccountNumber && <div><strong>Receiver Account Number:</strong> {transaction.receiverAccountNumber.integerValue}</div>}
            {transaction.senderAccountNumber && <div><strong>Sender Account Number:</strong> {transaction.senderAccountNumber.integerValue}</div>}
            {transaction.name && <div><strong>Name:</strong> {transaction.name.stringValue}</div>}
            {transaction.amount && <div><strong>Amount:</strong> {transaction.amount.doubleValue}</div>}
            {transaction.timestamp && <div><strong>Timestamp:</strong> {new Date(transaction.timestamp.timestampValue).toLocaleString()}</div>}
          </div>
        ))}
      </div>
    </div>
   
  );
}
 
export default TransactionsDonePage;