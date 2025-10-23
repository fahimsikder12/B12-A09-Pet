import { sendPasswordResetEmail } from 'firebase/auth';
import React from 'react'
import { auth } from '../Firebase/Firebase.init';

function ForgetPass() {

  const handleSubmit = async(e)=>{
    e.preventDefault()
    const emailval = e.target.email.value;
    sendPasswordResetEmail(auth,emailval)
    .then(result=>{
        alert("check your email", result)
    })
    .catch(error=>{
        alert(error.code)
    })
  }
  
    return (
    <div className='   '>
        <div  className='  mx-auto w-fit text-center h-screen '>
        <h1  className='font-bold text-center my-4 bg-amber-50 p-5 shadow-2xl text-2xl rounded-xl' >Forget Password</h1>
        <form  onSubmit={(e)=>handleSubmit(e)}>
        
        <input  name='email'  type="email" placeholder='Email....' className="input input-secondary" /><br /><br />

        <button className='btn btn-secondary'>Reset</button>
        </form>
        </div>
    </div>
  )
}

export default ForgetPass