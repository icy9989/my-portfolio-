"use client";

import Image from "next/image"
import { Button } from "./ui/button"
import { Expand, ExpandIcon, Globe } from 'lucide-react';
import { useState } from "react";
import ProjectModal from "./project-modal";

const Project = () => {

   const [ openProjectModal, setOpenProjectModal ] = useState<boolean>(false);

  return (
    <>
    <ProjectModal isOpen={openProjectModal} onClose={() => setOpenProjectModal(false)} />
    <div className='flex justify-center flex-col py-10'>
        <div className='flex justify-center'>
          <h1 className='py-10 text-center font-bold text-4xl bg-gradient-to-r from-yellow-500 via-pink-400 to-pink-500 inline-block text-transparent bg-clip-text'>My Projects</h1>
        </div>
        <p className="text-center text-slate-600 mb-10">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s </p>
        <div className="grid grid-cols-12 gap-8">
            <div className="col-span-4 bg-[#fffcfc] rounded-md shadow-sm mx-4">
                <div className="w-full h-36 relative p-4">
                    <Image
                        src="/online-quiz.jpg"
                        alt="Online-quiz"
                        fill
                        className="absolute object-fill rounded-md"
                     />
                </div>
                <div className="px-6">
                    <div className="my-8">
                        <h3 className="font-semibold text-lg">Online Quiz System</h3>
                        <p className="text-sm">This is the online quiz system for students to take exam.</p>
                    </div>
                    <div className="flex justify-start items-center gap-4">
                        <Button onClick={() => setOpenProjectModal(true)} variant="transparent" className="p-0 m-0">
                            <ExpandIcon className="w-3 h-3 mr-1" />
                            View
                        </Button>
                        <Button variant="transparent" className="p-0 m-0">
                            <Globe className="w-3.5 h-3.5 mr-1" />
                            Web
                        </Button>
                    </div>
                </div>
            </div>
            <div className="col-span-4 p-6 bg-[#fffcfc] rounded-md shadow-md mx-4">
                <div className="w-full h-36 relative p-4">
                    <Image
                        src="/online-quiz.jpg"
                        alt="Online-quiz"
                        fill
                        className="absolute object-fill"
                     />
                </div>
                <div className="my-8">
                    <h3 className="font-semibold text-lg">Online Quiz System</h3>
                    <p className="text-sm">This is the online quiz system for students to take exam.</p>
                </div>
                <div className="flex justify-start items-center gap-8">
                    <Button onClick={() => setOpenProjectModal(true)} variant="transparent" className="p-0 m-0">
                        <ExpandIcon className="w-3 h-3 mr-1" />
                        View
                    </Button>
                    <Button variant="transparent" className="p-0 m-0">
                        <Globe className="w-3.5 h-3.5 mr-1" />
                        Web
                    </Button>
                </div>
            </div>
            <div className="col-span-4 p-6 bg-slate-50 rounded-md shadow-sm mx-4">
                <div className="w-full h-36 relative p-4">
                    <Image
                        src="/online-quiz.jpg"
                        alt="Online-quiz"
                        fill
                        className="absolute object-fill"
                     />
                </div>
                <div className="my-8">
                    <h3 className="font-semibold text-lg">Online Quiz System</h3>
                    <p className="text-sm">This is the online quiz system for students to take exam.</p>
                </div>
                <div className="flex justify-start items-center gap-4">
                    <Button onClick={() => setOpenProjectModal(true)} variant="transparent" className="p-0 m-0">
                        <ExpandIcon className="w-3 h-3 mr-1"/>
                            View
                        </Button>
                    <Button variant="transparent" className="p-0 m-0">
                        <Globe className="w-3.5 h-3.5 mr-1" />
                        Web
                    </Button>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Project