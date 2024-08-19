import Dropdown from '@/components/Dropdown'
import StudentCard from '@/components/student-card'
import React from 'react'

const page = () => {
  return (
    <div className=' ml-[219px] mt-20 flex flex-col items-center justify-center'>
      <div className='w-[1068px] h-[50px] bg-white flex p-3 items-center'>
        Student | All student
      </div>
      <Dropdown></Dropdown>
      <div className='mt-5'>
      <StudentCard></StudentCard>
      </div>
    </div>
  )
}

export default page
