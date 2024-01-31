"use client";

import Image from "next/image"
import { Button } from "./ui/button"
import { Expand, ExpandIcon, Globe, Github } from 'lucide-react';
import { useState } from "react";
import ProjectModal from "./project-modal";

interface ProjectCardProps {
    data: any
}

const ProjectCard:React.FC<ProjectCardProps> = (data) => {

    const [ openProjectModal, setOpenProjectModal ] = useState<boolean>(false);

    return (
        <>
        <ProjectModal isOpen={openProjectModal} onClose={() => setOpenProjectModal(false)} data={} />    
        <div className='flex justify-center flex-col py-10'>
            <div className="col-span-12 sm:col-span-10 md:col-span-6 lg:col-span-4 mx-auto sm:mx-4 flex justify-center items-center">
                    <div className="border-2 bg-slate-50 border-slate-100/70 rounded-md shadow-sm">
                        <div className="p-4 bg-white rounded-md">
                            <div className="w-full h-40 relative">
                                <Image
                                    src={data.preview}
                                    alt={data.alt}
                                    fill
                                    className="absolute object-fill"
                                />
                            </div>
                        </div> 
                        <div className="p-4">   
                            <div className="mb-4">
                                <h3 className="font-semibold text-lg">
                                    <Image 
                                        src="/quiz.png"
                                        alt="Quiz-logo"
                                        width={data.width}
                                        height={data.height}
                                    />
                                    {data.title}
                                </h3>
                                <p className="text-sm">{data.description}</p>
                            </div>
                            <div className="flex justify-start items-center gap-4">
                                <Button onClick={() => setOpenProjectModal(true)} variant="transparent" className="p-0 m-0">
                                    <ExpandIcon className="w-3 h-3 mr-1" />
                                    View
                                </Button>
                                {project.web && (
                                    <Button variant="transparent" className="p-0 m-0">
                                        <a href={project.web} className="flex items-center">
                                            <Globe className="w-3.5 h-3.5 mr-1" />
                                            Web
                                        </a>
                                    </Button>
                                )} 
                                {project.github && (
                                    <Button variant="transparent" className="p-0 m-0">
                                        <a href={project.github} className="flex items-center">
                                            <Github className="w-3.5 h-3.5 mr-1" />
                                            GitHub
                                        </a>
                                    </Button>
                                )} 
                            </div>
                        </div>
                    </div>        
            </div>
        </div>
    </>
    
  )
}

export default ProjectCard