// import React, { useState, useEffect } from 'react';
// import firebase from 'firebase/compat/app';
// import 'firebase/compat/storage';
// import 'firebase/compat/firestore';
// import '../Styles/createaccount.css';

// // Initialize Firebase app
// const firebaseConfig = {
//   apiKey: "AIzaSyAgw7RNCLUPzusy6PpTbbmVwsXQBB9V4hs",
//   authDomain: "bankingapp-41d2b.firebaseapp.com",
//   projectId: "bankingapp-41d2b",
//   storageBucket: "bankingapp-41d2b.appspot.com",
//   messagingSenderId: "308264456359",
//   appId: "1:308264456359:web:60ff463c34a1afdc96cb82",
//   measurementId: "G-7P9HT6L0MZ"
// };

// firebase.initializeApp(firebaseConfig);

// const storage = firebase.storage();

// function CreateAccountPage() {
//   const [name, setName] = useState('');
//   const [age, setAge] = useState('');
//   const [occupation, setOccupation] = useState('');
//   const [aadharCard, setAadharCard] = useState(null);
//   const [panCard, setPanCard] = useState(null);
//   const [voterId, setVoterId] = useState(null);
//   const [email, setEmail] = useState('');
//   const [phoneNumber, setPhoneNumber] = useState('');
//   const [isSubmitted, setIsSubmitted] = useState(false);
//   const [errorMessage, setErrorMessage] = useState('');
//   const [requestId, setRequestId] = useState(null);
//   const [status, setStatus] = useState(null);
//   const [accountNumber, setAccountNumber] = useState(null);
//   const [customerId, setCustomerId] = useState(null);

//   useEffect(() => {
//     const checkStatus = async () => {
//       try {
//         const docRef = await firebase.firestore().collection('customerAccounts').doc(requestId);
//         docRef.onSnapshot((doc) => {
//           if (doc.exists) {
//             const data = doc.data();
//             setStatus(data.status);
//             setAccountNumber(data.accountNumber);
//             setCustomerId(data.customerId);
//           }
//         });
//       } catch (error) {
//         console.error('Error checking status:', error);
//       }
//     };

//     if (requestId) {
//       checkStatus();
//     }
//   }, [requestId]);

//   const handleNameChange = (e) => {
//     setName(e.target.value);
//   };

//   const handleAgeChange = (e) => {
//     setAge(e.target.value);
//   };

//   const handleOccupationChange = (e) => {
//     setOccupation(e.target.value);
//   };

//   const handleAadharCardChange = (e) => {
//     setAadharCard(e.target.files[0]);
//   };

//   const handlePanCardChange = (e) => {
//     setPanCard(e.target.files[0]);
//   };

//   const handleVoterIdChange = (e) => {
//     setVoterId(e.target.files[0]);
//   };

//   const handleEmailChange = (e) => {
//     setEmail(e.target.value);
//   };

//   const handlePhoneNumberChange = (e) => {
//     setPhoneNumber(e.target.value);
//   };

//   const uploadFile = async (file) => {
//     if (!file) return null;
//     const storageRef = storage.ref();
//     const fileRef = storageRef.child(file.name);
//     await fileRef.put(file);
//     return fileRef.getDownloadURL();
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     // Check if all fields are filled
//     if (!name || !age || !occupation || !aadharCard || !panCard || !voterId || !email || !phoneNumber) {
//       setErrorMessage('Please fill in all fields.');
//       return;
//     }
//     try {
//       const aadharCardUrl = await uploadFile(aadharCard);
//       const panCardUrl = await uploadFile(panCard);
//       const voterIdUrl = await uploadFile(voterId);

//       const docRef = await firebase.firestore().collection('customerAccounts').add({
//         name,
//         age: parseInt(age),
//         occupation,
//         aadharCardUrl,
//         panCardUrl,
//         voterIdUrl,
//         email,
//         phoneNumber,
//         status: 'pending' // Initial status
//       });

//       // Get the generated document ID
//       const requestId = docRef.id;

//       // Generate account number
//       const accountNumber = generateAccountNumber();

//       // Update the customer account document with the account number and customer ID
//       await firebase.firestore().collection('customerAccounts').doc(requestId).update({
//         accountNumber,
//         customerId: requestId // Use the document ID as the customer ID
//       });

//       setIsSubmitted(true);
//       setErrorMessage('');
//       setRequestId(requestId);
//     } catch (error) {
//       console.error('Error submitting form:', error);
//       setErrorMessage('Failed to submit. Please try again later.');
//     }
//   };

//   const generateAccountNumber = () => {
//     return Math.floor(100000 + Math.random() * 900000);
//   };

//   return (
//     <div className='background-container'>
//     <div className='create'>
//       <h1>Create an Account</h1>
//       <form onSubmit={handleSubmit}>
  
//         <div>
//           <label htmlFor="name">Name:</label>
//           <input type="text" id="name" value={name} onChange={handleNameChange} />
//         </div>
//         <div>
//           <label htmlFor="age">Age:</label>
//           <input type="text" id="age" value={age} onChange={handleAgeChange} />
//         </div>
//         <div>
//           <label htmlFor="occupation">Occupation:</label>
//           <input type="text" id="occupation" value={occupation} onChange={handleOccupationChange} />
//         </div>
//         <div>
//           <label htmlFor="aadharCard">Aadhar Card:</label>
//           <input type="file" id="aadharCard" accept="image/*" onChange={handleAadharCardChange} />
//         </div>
//         <div>
//           <label htmlFor="panCard">PAN Card:</label>
//           <input type="file" id="panCard" accept="image/*" onChange={handlePanCardChange} />
//         </div>
//         <div>
//           <label htmlFor="voterId">Voter ID:</label>
//           <input type="file" id="voterId" accept="image/*" onChange={handleVoterIdChange} />
//         </div>
//         <div>
//           <label htmlFor="email">Email:</label>
//           <input type="email" id="email" value={email} onChange={handleEmailChange} />
//         </div>
//         <div>
//           <label htmlFor="phoneNumber">Phone Number:</label>
//           <input type="text" id="phoneNumber" value={phoneNumber} onChange={handlePhoneNumberChange} />
//         </div>
//         <button type="submit">Submit</button>
//       </form>
//       {status === 'approved' && (
//         <p>Your request is approved. Your account number is: {accountNumber} and Customer ID is: {customerId}</p>
//       )}
//       {status === 'rejected' && <p>Your request is rejected.</p>}
//       {(status === 'pending' && isSubmitted) && <p>Your request is pending approval.</p>}
//       {errorMessage && <p>{errorMessage}</p>}
//     </div>
//     </div>
//   );
// }

// export default CreateAccountPage;



import React, { useState, useEffect } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';
import '../Styles/createaccount.css';
 
// Initialize Firebase app
const firebaseConfig = {
    apiKey: "AIzaSyAgw7RNCLUPzusy6PpTbbmVwsXQBB9V4hs",
    authDomain: "bankingapp-41d2b.firebaseapp.com",
    projectId: "bankingapp-41d2b",
    storageBucket: "bankingapp-41d2b.appspot.com",
    messagingSenderId: "308264456359",
    appId: "1:308264456359:web:60ff463c34a1afdc96cb82",
    measurementId: "G-7P9HT6L0MZ"
};
firebase.initializeApp(firebaseConfig);
 
const storage = firebase.storage();
 
function CreateAccountPage() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [occupation, setOccupation] = useState('');
  const [aadharCard, setAadharCard] = useState(null);
  const [panCard, setPanCard] = useState(null);
  const [voterId, setVoterId] = useState(null);
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [requestId, setRequestId] = useState(null);
  const [status, setStatus] = useState(null);
  const [accountNumber, setAccountNumber] = useState(null);
  const [customerId, setCustomerId] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
 
  useEffect(() => {
    const loggedInEmailID = localStorage.getItem('email');
    setEmail(loggedInEmailID);
  }, []);
 
  useEffect(() => {
    const checkStatus = async () => {
      try {
        const docRef = await firebase.firestore().collection('customerAccounts').doc(requestId);
        docRef.onSnapshot((doc) => {
          if (doc.exists) {
            const data = doc.data();
            setStatus(data.status);
            setAccountNumber(data.accountNumber);
            setCustomerId(data.customerId);
          }
        });
      } catch (error) {
        console.error('Error checking status:', error);
      }
    };
 
    if (requestId) {
      checkStatus();
    }
  }, [requestId]);
 
  const handleNameChange = (e) => {
    setName(e.target.value);
  };
 
  const handleAgeChange = (e) => {
    setAge(e.target.value);
  };
 
  const handleOccupationChange = (e) => {
    setOccupation(e.target.value);
  };
 
  const handleAadharCardChange = (e) => {
    setAadharCard(e.target.files[0]);
  };
 
  const handlePanCardChange = (e) => {
    setPanCard(e.target.files[0]);
  };
 
  const handleVoterIdChange = (e) => {
    setVoterId(e.target.files[0]);
  };
 
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
 
  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };
 
  const uploadFile = async (file) => {
    if (!file) return null;
    const storageRef = storage.ref();
    const fileRef = storageRef.child(file.name);
    await fileRef.put(file);
    return fileRef.getDownloadURL();
  };
 
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !age || !occupation || !aadharCard || !panCard || !voterId || !email || !phoneNumber) {
      setErrorMessage('Please fill in all fields.');
      return;
    }
    setIsLoading(true);
    try {
      const aadharCardUrl = await uploadFile(aadharCard);
      const panCardUrl = await uploadFile(panCard);
      const voterIdUrl = await uploadFile(voterId);
 
      const docRef = await firebase.firestore().collection('customerAccounts').add({
        name,
        age: parseInt(age),
        occupation,
        aadharCardUrl,
        panCardUrl,
        voterIdUrl,
        email,
        phoneNumber,
        status: 'pending'
      });
 
      const requestId = docRef.id;
      const accountNumber = generateAccountNumber();
      await firebase.firestore().collection('customerAccounts').doc(requestId).update({
        accountNumber,
        customerId: requestId
      });
 
      setIsSubmitted(true);
      setErrorMessage('');
      setRequestId(requestId);
    } catch (error) {
      console.error('Error submitting form:', error);
      setErrorMessage('Failed to submit. Please try again later.');
    }
    finally {
      setIsLoading(false);
    }
  };
 
  const generateAccountNumber = () => {
    return Math.floor(100000 + Math.random() * 900000);
  };
 
  const resetForm = () => {
    setIsSubmitted(false);
    setName('');
    setAge('');
    setOccupation('');
    setAadharCard(null);
    setPanCard(null);
    setVoterId(null);
    setEmail('');
    setPhoneNumber('');
    setRequestId(null);
    setStatus(null);
    setAccountNumber(null);
    setCustomerId(null);
  };
 
  return (
    <div className='create'>
      <h1>Account Creation</h1>
      {!isSubmitted && (
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" value={name} onChange={handleNameChange} />
          </div>
          <div>
            <label htmlFor="age">Age:</label>
            <input type="text" id="age" value={age} onChange={handleAgeChange} />
          </div>
          <div>
            <label htmlFor="occupation">Occupation:</label>
            <input type="text" id="occupation" value={occupation} onChange={handleOccupationChange} />
          </div>
          <div>
            <label htmlFor="aadharCard">Aadhar Card:</label>
            <input type="file" id="aadharCard" accept="image/*" onChange={handleAadharCardChange} />
          </div>
          <div>
            <label htmlFor="panCard">PAN Card:</label>
            <input type="file" id="panCard" accept="image/*" onChange={handlePanCardChange} />
          </div>
          <div>
            <label htmlFor="voterId">Voter ID:</label>
            <input type="file" id="voterId" accept="image/*" onChange={handleVoterIdChange} />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" value={email} onChange={handleEmailChange} />
          </div>
          <div>
            <label htmlFor="phoneNumber">Phone Number:</label>
            <input type="text" id="phoneNumber" value={phoneNumber} onChange={handlePhoneNumberChange} />
          </div>
          <button type="submit" disabled={isLoading}>
            {isLoading ? 'Creating...' : 'Submit'}
          </button>
          {errorMessage && <p>{errorMessage}</p>}
        </form>
      )}
      {isSubmitted && status === 'pending' && (
        <div className="approval-container">
          <p>Your request is pending approval.</p>
        </div>
      )}
      {status === 'approved' && (
        <div className="success-message">
          <p>Your request is approved. Your Account Number : {accountNumber} </p>
          <p>Customer ID : {customerId}</p>
        </div>
      )}
      {status === 'rejected' && (
        <div className="rejected-message">
          <p>Your request is rejected.</p>
          <button onClick={resetForm}>Create Account</button>
        </div>
      )}
    </div>
  );
      }
 
export default CreateAccountPage;  