import Image from 'next/image'
import { useState } from 'react'
import Login from './login'
import SignUp from './signup'

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true)

  return (
    <div className="def-contain mt-24 lg:mb-8 mx-auto  flex flex-col lg:flex-row items-center lg:items-start justify-center min-h-screen bg-white">
      <div className="w-full max-w-md md:max-w-none lg:p-16 bg-white rounded-lg shadow-md">
        <div className="flex justify-center mb-6 font-jakarta">
          {/* Toggle Buttons */}
          <div className="flex justify-center w-full space-x-2 bg-gray-100 rounded-lg p-2 ">
            <button
              className={`w-full py-2 px-4 rounded-lg focus:outline-none ${
                isLogin ? 'bg-white shadow' : 'text-gray-500'
              }`}
              onClick={() => setIsLogin(true)}
            >
              Sign Up
            </button>
            <button
              className={`w-full py-2 px-4 rounded-lg focus:outline-none ${
                !isLogin ? 'bg-white shadow' : 'text-gray-500'
              }`}
              onClick={() => setIsLogin(false)}
            >
              Log In
            </button>
          </div>
        </div>

        {/* Toggle Between Login and Sign Up */}
        {isLogin ? <SignUp /> : <Login />}
      </div>

      <Image
        src={isLogin ? '/images/auth/signup.png' : '/images/auth/login.png'} // Dynamic image based on isLogin state
        alt={isLogin ? 'sign up image' : 'login image'}
        width={350}
        height={350}
        className="hidden lg:block lg:w-full lg:h-full object-cover"
      />
    </div>
  )
}

export default Auth
