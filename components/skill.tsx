import Image from "next/image"
import {  Palette, Lightbulb, HeartHandshake, Users} from 'lucide-react'

const techs = [
  {
    id: 1,
    image: "/html.png",
    name: "HTML",
    width: 65,
    height: 65,
    paddingTop: `pt-3`,
  },
  {
    id: 2,
    image: "/css.png",
    name: "CSS",
    width: 80,
    height: 80,
    paddingTop: `pt-1`,
  },
  {
    id: 3,
    image: "/javascript.png",
    name: "JavaScript",
    width: 65,
    height: 65,
    paddingTop: `pt-3`,
  },
  {
    id: 4,
    image: "/typescript.png",
    name: "typeScript",
    width: 70,
    height: 70,
    paddingTop: `pt-3`,
  },
  {
    id: 5,
    image: "/bootstrap.png",
    name: "Bootstrap",
    width: 80,
    height: 80,
    paddingTop: "mt-5",
  },
  {
    id: 6,
    image: "/tailwind.png",
    name: "Tailwind",
    width: 80,
    height: 80,
    paddingTop: `pt-9`,
  },
  {
    id: 7,
    image: "/react.png",
    name: "React",
    width: 80,
    height: 80,
    paddingTop: `pt-1`,
  },
  {
    id: 8,
    image: "/next.js.png",
    name: "Next.js",
    width: 70,
    height: 70,
    paddingTop: `pt-3`,
  },
  {
    id: 9,
    image: "/node.js.png",
    name: "Node.js",
    width: 70,
    height: 70,
    paddingTop: `pt-3`,
  },
  {
    id: 10,
    image: "/express.js.png",
    name: "Express.js",
    width: 75,
    height: 75,
    paddingTop: `pt-2`,
  },
  {
    id: 11,
    image: "/mongoDb.png",
    name: "MongoDb",
    width: 90,
    height: 90,
    paddingTop: `pt-4`,
  },
  {
    id: 12,
    image: "/sqLite.png",
    name: "SQLite",
    width: 70,
    height: 70,
    paddingTop: `pt-3`,
  }
];

const skills = [
  {
    id: 1,
    icon: Palette,
    title: "Design Thinking",
    description: "I have an interest in UI/UX development and like to create innovative, user-friendly, and effective solutions for end-users.",
    background: "bg-[#FCFCDB]",
    iconBg: "bg-yellow-200/60"
  },
  {
    id: 2,
    icon: Lightbulb,
    title: "Problem Solving",
    description: "I like to take challenges,solve problems and deliver solutions that are efficient, scalable, and maintainable.",
    background: "bg-[#E8FCDB]",
    iconBg: "bg-green-200/70"
  },
  {
    id: 3,
    icon: HeartHandshake,
    title: "Communication",
    description: "I am always active for collaboration within developers, contribute to positive environments and wants to avoid misunderstanding.",
    background: "bg-[#FCECEF] ",
    iconBg: "bg-red-200/70"
  },
  {
    id: 4,
    icon: Users,
    title: "Teamwork",
    description: "I am flexible and always welcome for collaborations, advices and discussions from teammates.",
    background: "bg-[#ECFCFA]",
    iconBg: "bg-cyan-200/50"
  },
]

const Skill = () => {
  return (
    <div id="skill" className='flex justify-center flex-col py-10'>
        <div className='flex justify-center'>
          <h1 className='py-10 text-center font-bold text-4xl bg-gradient-to-r from-yellow-500 via-pink-400 to-pink-500 inline-block text-transparent bg-clip-text'>What skills I have?</h1>
        </div>
        <p className="text-center text-slate-600">Mainly worked on front-end development and have a profound knowledge on JavaScript and its frameworks and librarys. I also have an experience in working with various CSS frameworks.</p>
        <div className="grid grid-cols-12 gap-4 my-14 justify-center">
          {techs.map(({ id,image, name, width, height, paddingTop }) => (
            <div key={id} className="col-span-4 md:col-span-3 lg:col-span-2 flex justify-center items-center flex-col mb-5">
              <Image 
                src={image}
                alt={name}
                width={width}
                height={height}
              />
            <p className={`text-center text-slate-800 font-semibold ${paddingTop}`}>{name}</p>
          </div>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 my-5 justify-center">
          {skills.map(({ id, icon:Icon, title, description, background, iconBg }) => (
            <div key={id} className={`${id == 4 && "md:col-start-2 lg:col-start-4"} flex justify-center mb-5 lg:mb-0`}>
              <div className={`w-72 sm:w-60 lg:w-52 xl:w-60 ${background} rounded-md border-1 p-6`}>
                  <div className={`w-16 h-16 rounded-full flex justify-center items-center ${iconBg}`}>
                    <Icon className="w-10 h-10" />
                  </div>
                  <h3 className="my-4 font-semibold text-lg">{title}</h3>
                  <p className="text-slate-600">{description}</p>
              </div>
            </div>
          ))}
        </div>
    </div>
  )
}

export default Skill