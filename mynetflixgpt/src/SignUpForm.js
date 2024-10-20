import React, { useRef, useState } from 'react'
import ValidateSignUpForm from './utils/Validation'

const SignUpForm = () => {
  const [isRegistered, setIsRegistered] = useState(true);
  const email = useRef(null);
  const password  = useRef(null);
  const fullName = useRef(null);

  const ToggleRegisteredUser = () =>{
    if(isRegistered === true)
    {
      setIsRegistered(false);
    }
    else
    setIsRegistered(true);
  }

  const SubmitForm = ()=>{
    var validation = ValidateSignUpForm(email.current.value, password.current.value);
    console.log(validation);
  }


  return (
    <div className='absolute w-1/3 rounded-lg bg-slate-900 bg-opacity-80 my-36 mx-auto right-0 left-0 text-white'>
        <form 
          onSubmit={(e)=>{e.preventDefault()}}
        >
            <h1 className='text-3xl font-bold w-max py-4 mx-auto right-0 left-0'>{isRegistered === true ? "Sign In" : "Sign Up"}</h1>
            {
              isRegistered === false ? 
                <input 
                  id='fullName' 
                  ref={fullName}
                  className='py-2 my-2 mx-20 right-0 left-0 w-2/3 rounded-sm text-center text-black bg-slate-700' 
                  name='fullName' 
                  type="text" 
                  placeholder='Full Name'/> : <></>
              }
            <input 
              id = 'emailId' 
              ref={email}
              className='py-2 my-2 mx-20 right-0 left-0 w-2/3 rounded-sm text-center text-black bg-slate-700' 
              name='emailId' 
              type="text" 
              placeholder='Email Address'/>
            <input 
              id = 'password' 
              ref = {password}
              className='py-2 mx-20 my-2 w-2/3 rounded-sm text-center bg-slate-700' 
              name='password' 
              type="password" 
              placeholder="Password"/>
            <button 
              className='py-2 mx-20 my-10 bg-red-700 rounded-lg font-medium w-2/3' 
              onClick={()=>SubmitForm()} 
              type='submit' 
              name='signIn'> {isRegistered === true ?  "Sign In" : "Sign Up" }
            </button>
        </form>
        <h4 className='py-4 mx-10'>If you are {isRegistered === true ? "not" : ""} a registered user please <button className=' underline text-red-700' onClick={()=>ToggleRegisteredUser()}>{isRegistered === true ? "Sign Up" : "Sign In"}</button> </h4>
    </div>
  )
}


export default SignUpForm;