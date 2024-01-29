import { GraduationCap } from 'lucide-react'
import React from 'react'

const Profile = () => {
  return (
    <div className='flex justify-center flex-col'>
      <div className='flex justify-center'>
        <h1 className='py-10 text-center font-bold text-4xl bg-gradient-to-r from-yellow-500 via-pink-400 to-pink-500 inline-block text-transparent bg-clip-text'>My Profile</h1>
      </div>
        
        <div className='grid grid-cols-2 my-5'>
          <div className='flex justify-center items-center'>
            <div className="w-60 h-60 rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-1 overflow-hidden"> 
              <div className="flex h-full w-full rounded-full items-center justify-center bg-white overflow-hidden">
                {/* <Image 
                  src="/sana.jpg"
                  alt="profile"
                  width={300}
                  height={300}
                /> */}
              </div>
            </div>
          </div>
          <div>
            <h3 className='text-xl font-bold text-slate-600 flex items-center gap-2'>
              <GraduationCap className='w-8 h-8 text-purple-500' /> 
              About Me</h3>
            <p className='py-3'>Innovative, creative, adaptable quickly and organized well. Specialized
            in JavaScript and have some experiences in python, java, C# and flutter
            projects. Responsible for designing, developing and implementing user
            interface for websites and software applications. My goal is to become
            a professional full-stack developer.</p>
            <hr className='h-px my-4 bg-gray-400 border-0 dark:bg-gray-700'/>
            <h3 className='text-xl my-3 font-bold text-slate-600 flex items-center gap-2'>
              <GraduationCap className='w-8 h-8 text-purple-500' /> 
              Education</h3>
            <p className='text-slate-600 font-semibold'>B.E.(HONS) IN COMPUTER SCIENCE AND ENGINEERING</p>
            <p>Myanmar Institute of Information Technology</p>
          </div>
        </div>
    </div>
  )
}

export default Profile