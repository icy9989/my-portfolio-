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

interface ProjectModalProps {
    isOpen: boolean
    onClose: () => void
}

const ProjectModal:React.FC<ProjectModalProps> = ({ isOpen, onClose }) => {

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="sm:max-w-md md:max-w-2xl lg:max-w-4xl">
           <div className="grid grid-cols-12 p-5 gap-4">
                <div className="col-span-12 lg:col-span-6 ml-5">
                    <Carousel className="w-full max-w-xs">
                    <CarouselContent>
                        {Array.from({ length: 5 }).map((_, index) => (
                        <CarouselItem key={index}>
                            <div className="p-1">
                            <Card className="w-600">
                                <CardContent className="-mt-1 h-[200px] flex justify-center items-center">
                                    <div className="w-full h-full relative">
                                        <Image
                                            src="/online-quiz.jpg"
                                            alt="oqs"
                                            fill
                                            className="w-full h-full object-cover"
    
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
                <div className="col-span-12 lg:col-span-6">
                    <h1 className="text-xl font-bold mb-3 text-slate-700">Online Quiz System</h1>
                    <p className="text-sm text-muted-foreground">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type.</p>
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
                </div>
           </div>
        </DialogContent>
    </Dialog>
  )
}

export default ProjectModal