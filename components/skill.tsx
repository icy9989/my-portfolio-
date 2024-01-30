import Image from "next/image"
import { Lightbulb } from 'lucide-react'

const Skill = () => {
  return (
    <div className='flex justify-center flex-col py-10'>
        <div className='flex justify-center'>
          <h1 className='py-10 text-center font-bold text-4xl bg-gradient-to-r from-yellow-500 via-pink-400 to-pink-500 inline-block text-transparent bg-clip-text'>What skills I have?</h1>
        </div>
        <p className="text-center text-slate-600">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s </p>
        <div className="grid grid-cols-12 gap-4 my-14 justify-center">
          <div className="col-span-2 flex justify-center items-center flex-col">
            <Image 
              src="/html.png"
              alt="HTML"
              width={65}
              height={65}
            />
            <p className="text-center py-3 text-slate-500 font-semibold">HTML</p>
          </div>
          <div className="col-span-2 flex justify-center items-center flex-col">
            <Image 
              src="/css.png"
              alt="CSS"
              width={80}
              height={80}
            />
            <p className="text-center py-3 text-slate-500 font-semibold">CSS</p>
          </div>
          <div className="col-span-2 flex justify-center items-center flex-col">
            <Image 
              src="/javascript.png"
              alt="JavaScript"
              width={65}
              height={65}
            />
            <p className="text-center py-3 text-slate-500 font-semibold">JavaScript</p>
          </div>
          <div className="col-span-2 flex justify-center items-center flex-col">
            <Image 
              src="/typescript.png"
              alt="Typescript"
              width={70}
              height={70}
            />
            <p className="text-center py-3 text-slate-500 font-semibold">Typescript</p>
          </div>
          <div className="col-span-2 flex justify-center items-center flex-col">
            <Image 
              src="/express.js.png"
              alt="Express.js"
              width={75}
              height={75}
            />
            <p className="text-center py-3 text-slate-500 font-semibold">Express.js</p>
          </div>
          <div className="col-span-2 flex justify-center items-center flex-col">
            <Image 
              src="/react.png"
              alt="React"
              width={80}
              height={80}
            />
            <p className="text-center py-3 text-slate-500 font-semibold">React</p>
          </div>
          <div className="col-span-2 flex justify-center items-center flex-col">
          </div>
          <div className="col-span-2 flex justify-center items-center flex-col">
          </div>
          <div className="col-span-2 flex justify-center items-center flex-col">
            <Image 
              src="/next.js.png"
              alt="Next.js"
              width={70}
              height={70}
            />
            <p className="text-center py-3 text-slate-500 font-semibold">Next.js</p>
          </div>
          <div className="col-span-2 flex justify-center items-center flex-col">
            <Image 
              src="/node.js.png"
              alt="Node.js"
              width={70}
              height={70}
            />
          <p className="text-center py-3 text-slate-500 font-semibold">Node.js</p>
          </div>  
        </div>
        <div className="grid grid-cols-4 gap-2 my-5">
          <div className="flex justify-center">
            <div className="w-52 bg-[#FCFCDB] rounded-md border-1 p-6">
                <div className="w-16 h-16 rounded-full flex justify-center items-center bg-yellow-200/60">
                  <Lightbulb className="w-10 h-10" />
                </div>
                <h3 className="my-4 font-semibold text-lg text-slate-500">Communication</h3>
                <p className="text-slate-500">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="w-52 bg-[#E8FCDB] rounded-md border-1 p-6">
                <div className="w-16 h-16 rounded-full flex justify-center items-center bg-green-200/70">
                  <Lightbulb className="w-10 h-10" />
                </div>
                <h3 className="my-4 font-semibold text-lg">Communication</h3>
                <p className="text-slate-600">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="w-52 bg-[#FCECEF] rounded-md border-1 p-6">
                <div className="w-16 h-16 rounded-full flex justify-center items-center bg-red-200/70">
                  <Lightbulb className="w-10 h-10" />
                </div>
                <h3 className="my-4 font-semibold text-lg">Communication</h3>
                <p className="text-slate-600">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="w-52 bg-[#ECFCFA] rounded-md border-1 p-6">
                <div className="w-16 h-16 rounded-full flex justify-center items-center bg-cyan-200/50">
                  <Lightbulb className="w-10 h-10" />
                </div>
                <h3 className="my-4 font-semibold text-lg">Communication</h3>
                <p className="text-slate-600">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Skill