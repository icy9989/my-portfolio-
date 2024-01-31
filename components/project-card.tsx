"use client";

import Image from "next/image"
import { Button } from "./ui/button"
import { Expand, ExpandIcon, Globe, Github } from 'lucide-react';
import { useState } from "react";
import ProjectModal from "./project-modal";

interface ProjectCardProps {
    data: any
}

const ProjectCard:React.FC<ProjectCardProps> = ({ data }) => {

    const [ openProjectModal, setOpenProjectModal ] = useState<boolean>(false);

    return (
        <>
        <ProjectModal isOpen={openProjectModal} onClose={() => setOpenProjectModal(false)} data={data} /> 
        <div className="col-span-12 sm:col-span-10 md:col-span-6 xl:col-span-4 mx-auto sm:mx-4 flex justify-center items-center">
        <div className="border-2 bg-slate-50 border-slate-100/70 rounded-md shadow-sm">
            <div className="p-4 bg-white rounded-md flex justify-center items-center">
                <div className="w-72 h-40 relative">
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
                    <h3 className="font-semibold text-lg mb-1">
                        <Image 
                            src="/quiz.png"
                            alt="Quiz-logo"
                            width={data.width}
                            height={data.height}
                        />
                        {data.title}
                    </h3>
                    <div className="h-16">
                        <p className="text-sm">{data.introduction}</p>
                    </div>
                    </div>        
                    <div className="flex justify-start items-center gap-4">
                            <Button onClick={() => setOpenProjectModal(true)} variant="transparent" className="p-0 m-0">
                                <ExpandIcon className="w-3 h-3 mr-1" />
                                View
                            </Button>
                            {data.web && (
                                <Button variant="transparent" className="p-0 m-0">
                                    <a href={data.web} className="flex items-center">
                                        <Globe className="w-3.5 h-3.5 mr-1" />
                                        Web
                                    </a>
                                </Button>
                                )} 
                            {data.github && (
                                <Button variant="transparent" className="p-0 m-0">
                                    <a href={data.github} className="flex items-center">
                                        <Github className="w-3.5 h-3.5 mr-1" />
                                        GitHub
                                    </a>
                                    </Button>
                            )}     
                    </div>
             </div>
        </div>  
        </div>   
    </>
    
  )
}

export default ProjectCard