import React, { useState } from 'react'

const SignUpForm = () => {
  const [isRegistered, setIsRegistered] = useState(false);

  const ToggleRegisteredUser = () =>{
    if(isRegistered === true)
    {
      setIsRegistered(false);
    }
    else
    setIsRegistered(true);
  }

  return (
    <div className='absolute w-1/3 rounded-lg bg-slate-900 bg-opacity-80 my-36 mx-auto right-0 left-0 text-white'>
        <form >
            <h1 className='text-3xl font-bold w-max py-4 mx-auto right-0 left-0'>{isRegistered === true ? "Sign In" : "Sign Up"}</h1>
            {isRegistered === false ? <input className='py-2 my-2 mx-20 right-0 left-0 w-2/3 rounded-sm text-center text-black bg-slate-700' name='emailId' type="text" placeholder='Full Name'/> : <></>}
            <input className='py-2 my-2 mx-20 right-0 left-0 w-2/3 rounded-sm text-center text-black bg-slate-700' name='emailId' type="text" placeholder='Email Address'/>
            <input className='py-2 mx-20 my-2 w-2/3 rounded-sm text-center bg-slate-700' name='password' type="password" placeholder="Password"/>
            <button className='py-2 mx-20 my-10 bg-red-700 rounded-lg font-medium w-2/3' type='submit' name='signIn'> Sign In</button>
        </form>
        <h4 className='py-4 mx-10'>If you are {isRegistered === false ? "" : "not"} a registered user please <button className=' underline text-red-700' onClick={()=>ToggleRegisteredUser()}>{isRegistered === false ? "Sign In" : "Sign Up"}</button> </h4>
    </div>
  )
}


export default SignUpForm;