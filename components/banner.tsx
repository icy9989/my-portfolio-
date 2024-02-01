import Image from "next/image"

const Banner = () => {
  return (
    <div className="grid grid-cols-12 gap-4 items-center h-5/6 mb-10">
        <div className="col-span-12 md:col-span-6 xl:col-span-7 py-20">
            <h1 className="text-4xl md:text-3xl xl:text-4xl font-bold text-slate-700">HI, 👋 </h1>
            <h2 className="text-4xl md:text-3xl xl:text-4xl font-bold bg-gradient-to-r from-yellow-500 via-pink-400 to-pink-500 to-4/5 inline-block text-transparent bg-clip-text">My name is</h2>
            <br />
            <h2 className="text-4xl md:text-3xl xl:text-4xl font-bold bg-gradient-to-r from-yellow-500 via-pink-400 to-pink-500 inline-block text-transparent bg-clip-text">Khaing Min Htwe</h2>
            <p className="text-lg mt-6 text-slate-700">I am a web developer who focuses on writing clean, elegant and efficient codes and responsive designs. I&apos;m also experience in taking fullstack applications from scratch to production.</p>
            <button className="mt-8 bg-purple-400 px-5 py-2 rounded-3xl font-bold text-slate-50">Download Resume</button>
        </div>
        <div className="md:col-span-6 xl:col-span-5 md:flex justify-center hidden">
          <div className="flex justify-center items-center">
            <Image
              src="/software-development.jpg"
              alt="Software-development"
              width={500}
              height={500} 
              style={{objectFit: "cover"}}
            />
          </div>
           {/* <div className="w-60 h-60 rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-1 overflow-hidden"> 
            <div className="flex h-full w-full rounded-full items-center justify-center bg-white overflow-hidden">
              <Image 
                src="/sana.jpg"
                alt="profile"
                width={300}
                height={300}
              />
            </div>
           </div> */}
        </div>
    </div>
  )
}

export default Banner