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
                    <Carousel className="w-full max-w-xl h-52 sm:h-80">
                        <CarouselContent>
                            {data.photos.map((photo: any) => (
                            <CarouselItem key={photo}>
                                <div>
                                <Card className="w-full overflow-hidden">
                                    <CardContent className="h-44 sm:h-72 flex justify-center items-center p-0 overflow-hidden">
                                        <div className="w-full h-full relative">
                                            <Image
                                                src={photo}
                                                alt="oqs"
                                                fill
                                                className="w-full h-full object-fill"
                                            />
                                        </div>
                                    </CardContent>
                                </Card>
                                </div>
                            </CarouselItem>
                            ))}
                        </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                    </Carousel>
                </div>
                <div className="sm:mx-1 lg:mx-12">
                    <h1 className="text-xl font-bold mb-3">{data.title}</h1>
                    <p className="text-sm text-muted-foreground text-justify">{data.description}</p>
                    <div className="flex items-center gap-2 my-3">
                        <div className="bg-slate-100 rounded-full p-2">
                            <Image
                                src="/html.png"
                                alt="Html"
                                width={20}
                                height={20}
                            />
                        </div>
                        <div className="bg-slate-100 rounded-full p-2">
                            <Image
                                src="/css.png"
                                alt="Css"
                                width={25}
                                height={25}
                            />
                        </div>
                        <div className="bg-slate-100 rounded-full p-2">
                            <Image
                                src="/javaScript.png"
                                alt="JavaScript"
                                width={20}
                                height={20}
                            />
                        </div>
                    </div>
                    <div className="flex items-center gap-4 pt-3">
                        <Button variant="secondary">
                            <Github className="w-5 h-5 mr-1" />
                            Github
                        </Button>
                        <Button variant="secondary">
                            <Globe className="w-5 h-5 mr-1" />
                            Web
                        </Button>
                    </div>
                </div>
           </div>
        </DialogContent>
    </Dialog>
  )
}

export default ProjectModal