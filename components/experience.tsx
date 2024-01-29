import Link from "next/link"

const Experiene = () => {
  return (
    <div className='flex justify-center flex-col py-10'>
        <div className='flex justify-center'>
          <h1 className='py-10 text-center font-bold text-4xl bg-gradient-to-r from-yellow-500 via-pink-400 to-pink-500 inline-block text-transparent bg-clip-text'>Work Experiences</h1>
        </div>
        <div className="flex justify-center flex-col">
        <div className="flex justify-center items-center mb-5">
                <div className="grid grid-cols-7">
                    <div className="flex col-span-3 justify-end items-center">
                        2023 - Present
                    </div>
                    <div className="flex col-span-1 justify-center flex-col items-center gap-1">
                        <div className="w-5 h-5 bg-purple-500 rounded-full p-0.5">
                            <span className="w-full h-full rounded-full bg-white flex justify-center items-center">
                                <span className="w-3 h-3 rounded-full bg-purple-500 flex justify-center items-center"></span>
                            </span>
                        </div>
                        <span className="w-1 h-20 bg-purple-400 block"></span>
                    </div>
                    <div className="flex col-span-3 justify-start items-center">
                        <div>
                            <h3 className="text-xl font-semibold text-slate-900">Freelance Developer</h3>
                            <a href="https://icy9989-portfolio.vercel.app" target="_blank" className="text-blue-700 underline text-sm">Icy9989 Freelance Dev</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center items-center mb-5">
                <div className="grid grid-cols-7">
                    <div className="flex col-span-3 justify-end items-center">
                        2022 - 2023
                    </div>
                    <div className="flex col-span-1 justify-center flex-col items-center gap-1">
                        <div className="w-5 h-5 bg-purple-500 rounded-full p-0.5">
                            <span className="w-full h-full rounded-full bg-white flex justify-center items-center">
                                <span className="w-3 h-3 rounded-full bg-purple-500 flex justify-center items-center"></span>
                            </span>
                        </div>
                        <span className="w-1 h-20 bg-purple-400 block"></span>
                    </div>
                    <div className="flex col-span-3 justify-start items-center">
                        <div>
                            <h3 className="text-xl font-semibold text-slate-900">Full-stack Developer</h3>
                            <a href="#" className="text-blue-700 underline text-sm">Trailblazers Co.Ltd</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center items-center">
                <div className="grid grid-cols-7">
                    <div className="flex col-span-3 justify-end items-center">
                        2019 - 2020
                    </div>
                    <div className="flex col-span-1 justify-center flex-col items-center gap-1">
                        <div className="w-5 h-5 bg-purple-500 rounded-full p-0.5">
                            <span className="w-full h-full rounded-full bg-white flex justify-center items-center">
                                <span className="w-3 h-3 rounded-full bg-purple-500 flex justify-center items-center"></span>
                            </span>
                        </div>
                        <span className="w-1 h-20 bg-purple-400 block"></span>
                    </div>
                    <div className="flex col-span-3 justify-start items-center">
                        <div>
                            <h3 className="text-xl font-semibold text-slate-900">Odoo Developer</h3>
                            <a href="https://metateammyanmar.com/" target="_blank" className="text-blue-700 underline text-sm">Metateam Myanmar Co.Ltd</a>
                        </div>
                    </div>
                </div>
            </div>    
        </div>
    </div>
  )
}

export default Experiene