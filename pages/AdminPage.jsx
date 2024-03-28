import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/admin.css'; // Import CSS file for admin page styles

function AdminPage() {
  return (
    <div className='background-container'>
    <div className="admin-container" >
      <h1 style={{ color: '#4CAF50' }}>Welcome Admin!</h1>
      <div className="button-container">
        <Link to="/approve-accounts">
          <button className="admin-button">Approval of Accounts</button>
        </Link>
        <Link to="/transactions">
          <button className="admin-button">Transactions Done</button>
        </Link>
        <Link to="/customer-details">
          <button className="admin-button">Customer Details</button>
        </Link>
        <Link to="/Loan-details">
          <button className="admin-button">Loan Details</button>
        </Link>
        <Link to="/Bank-registration">
          <button className="admin-button">Bank Registration Main</button>
        </Link>
      </div>
      <div className="quote-container">
        <p className="quote">
          "Banking may well be a career from which no man really recovers."
        </p>
      
      </div>
    </div>
    </div>
  );
}

export default AdminPage;