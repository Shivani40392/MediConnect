import React from 'react'
import { assets } from '../assets/assets'
const Footer = () => {
  return (
    <div className='md:mx-10'>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
            {/* left side */}
            <div >
               <div className='flex  items-center '>
               <img className='mb-5 w-20' src={assets.logo_find} alt="icon"/>
               <p className='font-medium text-blue-800 text-3xl justify-center -ml-2  '>MediConnect</p></div>
               <p className='w-full md:w-2/3 text-gray-600 leading-6'>MediConnect is your trusted partner in healthcare, helping you find qualified doctors and book appointments with ease. Whether you're looking for a general physician, specialist, or clinic nearby, Precripto ensures a seamless and secure experience. Prioritize your health with confidence—schedule, consult, and follow up, all in one place</p>
            </div>
            {/* center side */}
            <div>
               <p className='text-xl font-medium mb-5'>Company</p>
               <ul className='flex  flex-col gap-2 text-gray-600'>
                  <li>Home</li>
                  <li>About us</li>
                  <li>Contact us</li>
                  <li>Privacy Policy </li>
               </ul>
            </div>
            {/* right side */}
            <div>
               <p className='text-xl font-medium mb-5'>GET IN TOUCH </p>
               <ul className='flex  flex-col gap-2 text-gray-600'>
                <li>+1-212-456-7890</li>
                <li>mediconnecto@gmail.com</li>
                
                </ul>
            </div>
            {/*copyright text  */}
            
        </div>
        <div>
              <hr/>
              <p className='py-5 text-sm text-center'>Copyright © 2024 MediConnect - All Right Reserved.</p>
           </div>
    </div>
  )
}

export default Footer