import Link from "next/link"

const experiences = [
    {
        id: 1,
        gap: "2023 - Present",
        title: "Freelance Developer",
        company: "Icy9989 Freelance Dev",
        src: "https://icy9989-portfolio.vercel.app" 
    },
    {
        id: 2,
        gap: "2022 - 2023",
        title: "Full-stack Developer",
        company: "Trailblazers Co.Ltd",
        src: "#" 
    },
    {
        id: 3,
        gap: "2019 - 2020",
        title: "Odoo Developer",
        company: "Metateam Myanmar Co.Ltd",
        src: "https://metateammyanmar.com" 
    },
]

const Experiene = () => {
  return (
    <div id="experience" className='flex justify-center flex-col py-10'>
        <div className='flex justify-center'>
          <h1 className='py-10 text-center font-bold text-4xl bg-gradient-to-r from-yellow-500 via-pink-400 to-pink-500 inline-block text-transparent bg-clip-text'>Work Experiences</h1>
        </div>
        <div className="flex justify-center flex-col">
            {experiences.map(({ id, gap, title, company, src }) => (
                <div key={id} className={`flex justify-center items-center ${id !== experiences.length && "mb-5"}`}>
                    <div className="grid grid-cols-7">
                        <div className="flex col-span-3 justify-end items-center">
                            {gap}
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
                                <h3 className="text-lg md:text-xl font-semibold text-slate-900">{title}</h3>
                                <a href={src} className="text-blue-700 underline text-sm">{company}</a>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Experiene