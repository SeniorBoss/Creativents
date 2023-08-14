import './EmailVerification.css'
import CheckMail from './CheckMail';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './EmailMedia.css'

function EmailVerification() {
  const location = useLocation();
  const userDatas = useSelector(state=>state.events.user)
  const searchParams = new URLSearchParams(location.search);
  const token = searchParams.get("token")
  const nav = useNavigate()
  const [verificationStatus, setVerificationStatus] = useState('');


    useEffect(() => {

    if (token) {

      EmailVerified(token);
    }
  }, [token]);

   const EmailVerified = (token) =>{
    axios
      .put(`https://creativents-on-boarding.onrender.com/api/verify/${token}`)
    .then((res) => {
      console.log('verification successful', res);
      setVerificationStatus('Verification successful!');
      // Redirect the user to the homepage after successful verification
    })
    .catch((err) => {
      console.log('Error verifying:', err);
      setVerificationStatus('Error verifying, please try again later.');
    })
   }       


console.log(userDatas.email);

   

  return (
    <div className="container">
    {
      verificationStatus === 'Verification successful!'?
      <div className="holder">
    <h1>Email verification successful</h1>
    <p>Click the button below to go Login</p>
    <button className='ContinueBtn' onClick={()=>nav('/login')}>Continue</button>
   </div>
      : verificationStatus === 'Error verifying, please try again later.'?
      <div className="holder">
    <h1>Error verifying, please try again later</h1>
    <p> please try again later</p>
    <button className='ContinueBtn' >Back</button>
   </div>
    : 
    <CheckMail />
    }
   </div>
      )
}

export default EmailVerification

// import './EmailVerification.css'
// import CheckMail from './CheckMail';
// import { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useLocation, useNavigate } from 'react-router-dom';
// import { useSelector } from 'react-redux';

// function EmailVerification() {
//   const location = useLocation();
//   const userDatas = useSelector(state=>state.events.user)
//   const searchParams = new URLSearchParams(location.search);
//   const token = searchParams.get("token")
//   const nav = useNavigate()
//   const [verificationStatus, setVerificationStatus] = useState('');


//     useEffect(() => {

//     if (token) {

//       EmailVerified(token);
//     }
//   }, [token]);

//    const EmailVerified = (token) =>{
//     axios
//       .put(`https://creativents-on-boarding.onrender.com/api/verify/${token}`)
//     .then((res) => {
//       console.log('verification successful', res);
//       setVerificationStatus('Verification successful!');
//       // Redirect the user to the homepage after successful verification
//     })
//     .catch((err) => {
//       console.log('Error verifying:', err);
//       setVerificationStatus('Error verifying, please try again later.');
//     })
//    }       


// console.log(userDatas.email);

   

//   return (
//     <div className="container">
//     {
//       verificationStatus === 'Verification successful!'?
//       <div className="holder">
//     <h1>Email verification successful</h1>
//     <p>Click the button below to go Login</p>
//     <button className='ContinueBtn' onClick={()=>nav('/login')}>Continue</button>
//    </div>
//       : verificationStatus === 'Error verifying, please try again later.'?
//       <div className="holder">
//     <h1>Error verifying, please try again later</h1>
//     <p> please try again later</p>
//     <button className='ContinueBtn' >Back</button>
//    </div>
//     : 
//     <CheckMail />
//     }
//    </div>
//       )
// }

// export default EmailVerification