// CustomerPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/customerpage.css'; // Import the CSS file

function CustomerPage() {
  return (
    <div className='background-container'>
    <div className='background-container'>
    <div className="container">
      <nav className="navbar">
        <div className="navbar-left">
          <span className="sb-logo">SB</span>
        </div>
        <div className="navbar-right">
          <span>You're secure with us!</span>
        </div>
      </nav>
      <div className="button-container">
        <Link to="/create-account">
          <button>Create an Account</button>
        </Link>
        <Link to="/login">
        <button>Already Have an Account</button>
        </Link>
      </div>
      <div className="bank-info">
        <h2>About</h2>
        <p>Welcome to SB, where we empower dreams and secure futures. Your trusted partner in financial prosperity</p>
      </div>
      <footer className="footer">
        <h3>Contact Details</h3>
        <p>For any queries and assistance, contact us:</p>
        <ul>
          <li>Email: subabank@bank.com</li>
          <li>Phone: 9812372810</li>
          <li>Address: Suba Bank , Chennai, Tamil Nadu</li>
        </ul>
      </footer>
    </div>
    </div>
    </div>
  );
}

export default CustomerPage;
