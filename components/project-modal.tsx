import {
    Dialog,
    DialogContent,
  } from "@/components/ui/dialog"

  import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"

import { Card, CardContent } from "@/components/ui/card"

import Image from "next/image"
import { Button } from "./ui/button"
import { Github, Globe } from 'lucide-react';

interface ProjectModalProps {
    isOpen: boolean
    onClose: () => void
    data: any
}

const ProjectModal:React.FC<ProjectModalProps> = ({ isOpen, onClose, data }) => {

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="max-w-md sm:max-w-2xl lg:max-w-3xl">
           <div className="px-6 py-5">
                <div className="flex justify-center">
                    {data.photos && (
                        <Carousel className="w-full max-w-xl h-52 sm:h-80">
                        <CarouselContent>
                            {data.photos.map((photo: any) => (
                            <CarouselItem key={photo}>
                                <div>
                                <Card className="w-md overflow-hidden">
                                    <CardContent className="h-44 sm:h-72 flex justify-center items-center p-0 overflow-hidden">
                                            {data.mobile ? (
                                                 <div className="w-40 sm:w-44 h-full relative">
                                                    <Image
                                                        src={photo}
                                                        alt="oqs"
                                                        fill
                                                        className="object-fill"
                                                    />
                                                </div>
                                            ) : (
                                            <div className="w-full h-full relative">
                                                <Image
                                                    src={photo}
                                                    alt="oqs"
                                                    fill
                                                    className="w-full h-full object-fit"
                                                />
                                                </div>
                                            )}
                                    </CardContent>
                                </Card>
                                </div>
                            </CarouselItem>
                            ))}
                        </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                    </Carousel>
                    )}
                    {data.video && (
                        <div className="w-full h-full rounded-md border-1 border-slate-200 md:mx-2 lg:mx-12 mb-10">
                            <video width="100%" height="100%" className="rounded-md" controls>
                                <source src={data.video} type="video/mp4" />
                            </video>
                        </div>
                    )}
                </div>
                <div className="sm:mx-1 lg:mx-12">
                    <h1 className="text-xl font-bold mb-3">{data.title}</h1>
                    <p className="text-sm text-muted-foreground text-justify">{data.description}</p>
                    <div className="flex items-center gap-2 my-3">
                        {data.techs.map((tech: any) => (
                            <div key={tech.id} className="bg-slate-100 rounded-full p-2">
                                <Image
                                    src={tech.src}
                                    alt={tech.alt}
                                    width={tech.width}
                                    height={tech.height}
                                />
                            </div>
                        ))}
                    </div>
                    <div className="flex items-center gap-4 pt-3">
                        {data.github && (
                            <Button variant="outline">
                                <a href={data.github} className="flex items-center">
                                    <Github className="w-4 h-4 mr-1" />
                                    GitHub
                                </a>
                            </Button>
                        )}
                        {data.web && (
                            <Button variant="outline">
                                <a href={data.web} className="flex items-center">
                                    <Globe className="w-4 h-4 mr-1" />
                                    Web
                                </a>
                            </Button>
                        )}
                    </div>
                </div>
           </div>
        </DialogContent>
    </Dialog>
  )
}

export default ProjectModal