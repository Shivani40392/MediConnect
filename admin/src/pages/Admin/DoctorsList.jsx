import React, { useContext, useEffect } from 'react'
import { AdminContext } from '../../context/AdminContext'

const DoctorsList = () => {
  const { doctors, aToken, getAllDoctors,changeAvailability } = useContext(AdminContext)

  useEffect(() => {
    getAllDoctors()
  }, [aToken])
  return (
    <div className='mx-5 max-h-[90vh] overflow-y-scroll'>
      <h1 className='text-lg font-medium'>All Doctors</h1>
      <div className='w-full flex flex-wrap gap-4 pt-5 gap-y-6'>
        {Array.isArray(doctors) && doctors.map((item) => (
          <div className='border border-indigo-200 rounded-xl max-w-56 overflow-hidden cursor-pointer group' key={item._id}>
            <img className='border-indigo-50 group-hover:bg-primary transition-all duration-500' src={item.image || '/default-doctor.png'} alt="doctor" />
            <div className='p-4'>
              <p className='text-neutral-800 text-lg font-medium'>{item.name}</p>
              <p className='text-zinc-600 text-sm'>{item.speciality}</p>
              <div className='mt-2 flex items-center gap-1 text-sm'>
                <input onChange={()=>changeAvailability(item._id)}  type='checkbox' checked={item.available}/>
              </div>
            </div>
          </div>
        ))}

      </div>
    </div>
  )
}

export default DoctorsList