import Image from "next/image"

const Banner = () => {
  return (
    <div className="grid grid-cols-12 gap-4 items-center h-5/6 mb-10">
        <div className="col-span-7 py-20">
            <h1 className="text-4xl font-bold text-orange-500">HI, 👋 </h1>
            <h2 className="text-4xl font-bold text-purple-500">My name is</h2>
            <h2 className="text-4xl font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 inline-block text-transparent bg-clip-text">Khaing Min Htwe</h2>
            <p className="text-xl font-bold text-slate-800">I am a web developer.</p>

            <button className="mt-8 bg-purple-400 px-5 py-2 rounded-3xl font-bold text-slate-50">Download Resume</button>
        </div>
        <div className="col-span-5">
           <div className="w-60 h-60 rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-2 overflow-hidden"> 
            <div className="flex h-full w-full rounded-full items-center justify-center bg-white back overflow-hidden">
              <Image 
                src="/sana.jpg"
                alt="profile"
                width={300}
                height={300}
              />
            </div>
           </div>
        </div>
    </div>
  )
}

export default Banner