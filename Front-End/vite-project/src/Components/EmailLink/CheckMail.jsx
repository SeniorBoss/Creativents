import React from 'react'
import './EmailVerification.css'
import axios from 'axios'
import { useSelector } from 'react-redux';
import './EmailMedia.css'

function CheckMail() {
  const userDatas = useSelector(state=>state.events.user)

  const ResendVerification = () => {
    axios
    .put("https://creativents-on-boarding.onrender.com/api/re-verify", {
      email:userDatas.email})
    .then(res=>{
      console.log(res)

    })
    .catch(err=>{
      console.log(err);
    })
}


  return (
<div className="holder">
    <h1>Please  check your email for verification</h1>
    <p>Didn’t recieve any link?</p>
    <button className='ContinueBtn' onClick={ResendVerification}>Resend link</button>
 </div>
  )
}

export default CheckMail