
import React from 'react'
import SignIn from './SignIn'
import SignUp from './SignUp';

// import SignUp from './SignUp'


function AuthModel() {
    
   
   

  return (
      <>
    
    <div className='absolute top-0 left-0 w-full h-full flex items-center justify-center bg-blue-800 bg-opacity-60'></div>
    <div className='w-full sm:w-[450px]  absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]  flex justify-center items-center'>
        <div className='relative w-full h-full mx-auto flex items-center justify-center'>
            <div className='bg-white rounded-lg shadow relative w-full bg-gradient-to-b from-brand-orange to-slate-900 mx-6'>
            {
              <SignIn/>
            }
            </div>
        </div>
    </div>


   
    </>
  )
}

export default AuthModel



