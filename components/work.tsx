import Image from 'next/image'

const Work = () => {
  return (
    <div className='flex justify-center flex-col py-10'>
        <div className='flex justify-center'>
          <h1 className='py-10 text-center font-bold text-4xl bg-gradient-to-r from-yellow-500 via-pink-400 to-pink-500 inline-block text-transparent bg-clip-text'>What I Do?</h1>
        </div>
        <div className='grid grid-cols-12 gap-12 justify-center items-center xl:px-10'>
            <div className='col-span-10 sm:col-span-12 md:col-span-6 p-5 bg-slate-50 gap-6 flex justify-center items-center cursor-pointer hover:bg-gradient-to-r from-yellow-100 via-pink-100 to-slate-50 transition-colors'>
                <div>
                    <Image
                        src="/frontend.png"
                        alt="Frontend"
                        width={80}
                        height={80}
                    />
                </div>
                <div>
                    <h3 className='mb-2 font-semibold text-lg'>Frontend Development</h3>  
                    <p className='text-slate-700'>I am a front-end developer with experience in building responsive and optimized sites.</p>                
                </div>
            </div>
            <div className='col-span-12 md:col-span-6 p-5 bg-slate-50 gap-6 flex justify-center items-center cursor-pointer hover:bg-gradient-to-r from-yellow-100 via-pink-100 to-slate-50 transition-colors'>
                <div>
                    <Image
                        src="/backend.png"
                        alt="Backend"
                        width={80}
                        height={80}
                    />
                </div>
                <div>
                    <h3 className='mb-2 font-semibold text-lg'>Backend Development</h3>  
                    <p className='text-slate-700'>I have experience developing fast and optimised back-end systems and APIs.</p>                
                </div>
            </div>
        </div>
    </div>
  )
}

export default Work