import ProjectCard from "./project-card"

const projects = [
    {
        id: 1,
        preview: "/online-quiz.png",
        alt: "oqs-preview",
        title: "Online Quiz System",
        logo: "/quiz.png",
        width: 50,
        height: 50,
        introduction: "This is the online quiz system for students to take exam.",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type",
        photos: [
            "https://utfs.io/f/e7bd9d7a-94dd-4816-b201-c869f7a6056d-1r3prp.jpg",
            "https://utfs.io/f/47128152-8c55-42d1-909c-2a749416425e-1r3prq.jpg",
            "https://utfs.io/f/169cf950-7001-4cb5-9662-3fd65565df9f-1r3prr.jpg",
            "https://utfs.io/f/2f992b10-f297-4e0a-a71b-688abbf9b35c-1r3prs.jpg",
            "https://utfs.io/f/207ad2c8-f866-4ce1-8d67-43a8ce263a0f-1r3prt.jpg"
        ]
    },
    {
        id: 2,
        preview: "/online-quiz.png",
        alt: "oqs-preview",
        title: "Online Quiz System",
        logo: "/quiz.png",
        width: 50,
        height: 50,
        introduction: "This is the online quiz system for students to take exam.",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type",
        web: "#",
        github: "#",
        photos: [
            "https://utfs.io/f/e7bd9d7a-94dd-4816-b201-c869f7a6056d-1r3prp.jpg",
            "https://utfs.io/f/47128152-8c55-42d1-909c-2a749416425e-1r3prq.jpg",
            "https://utfs.io/f/169cf950-7001-4cb5-9662-3fd65565df9f-1r3prr.jpg",
            "https://utfs.io/f/2f992b10-f297-4e0a-a71b-688abbf9b35c-1r3prs.jpg",
            "https://utfs.io/f/207ad2c8-f866-4ce1-8d67-43a8ce263a0f-1r3prt.jpg"
        ]
    },
    {
        id: 3,
        preview: "/online-quiz.png",
        alt: "oqs-preview",
        title: "Online Quiz System",
        logo: "/quiz.png",
        width: 50,
        height: 50,
        introduction: "This is the online quiz system for students to take exam.",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type",
        web: "#",
        github: "#",
        photos: [
            "https://utfs.io/f/e7bd9d7a-94dd-4816-b201-c869f7a6056d-1r3prp.jpg",
            "https://utfs.io/f/47128152-8c55-42d1-909c-2a749416425e-1r3prq.jpg",
            "https://utfs.io/f/169cf950-7001-4cb5-9662-3fd65565df9f-1r3prr.jpg",
            "https://utfs.io/f/2f992b10-f297-4e0a-a71b-688abbf9b35c-1r3prs.jpg",
            "https://utfs.io/f/207ad2c8-f866-4ce1-8d67-43a8ce263a0f-1r3prt.jpg",
            "https://utfs.io/f/1d601a38-4fbe-4247-8256-45e2e58f2af1-1r3pru.jpg",
            "https://utfs.io/f/aa821df3-18f7-46df-9d15-b6f25ae7fedc-1r3prv.jpg",
            "https://utfs.io/f/73211722-3101-4341-8bee-75882b814f5d-1r3prw.jpg",
            "https://utfs.io/f/f6abb066-b97e-430a-b7f2-4146f8f905fb-1r3prx.jpg",
            "https://utfs.io/f/0d65eccf-4cff-4caf-8813-cc6da3b33707-gowv39.jpg",
            "https://utfs.io/f/b688b436-c64a-44f3-9f87-4204a35983d0-gowv38.jpg",
            "https://utfs.io/f/1f1d62b6-57e4-42a5-9708-206d80c59934-gowv37.jpg",
            "https://utfs.io/f/dff571df-998b-4aad-a59e-2981112a8f59-gowv36.jpg",
            "https://utfs.io/f/8fd742be-c220-40d4-9715-a8faa45f6223-gowv35.jpg",
            "https://utfs.io/f/78401245-908d-47fe-8f25-ca8333b47d32-gowv34.jpg",
            "https://utfs.io/f/c97a0a2e-8731-47e5-a03c-c4ab41b4eaa1-gowv33.jpg",
            "https://utfs.io/f/6eca91a3-2ee2-47ab-beff-75a1970eb611-gowv32.jpg",
            "https://utfs.io/f/fc28777b-6282-4d4e-b7fb-a2e97040aaf5-gowv31.jpg",
            "https://utfs.io/f/c2dfe9fd-9cac-438b-a987-eef642d3a6a0-gowv30.gif",
            "https://utfs.io/f/b5b72c5e-b4a1-43bf-a9a4-0b38d6a62f06-gowv2e.jpg",
            "https://utfs.io/f/2b287137-d717-4f20-8ae4-24ff076167e9-gowv2d.jpg",
            "https://utfs.io/f/af5b0cc5-5f9d-4255-9735-454e0231d8e4-gowv2c.jpg"
        ]
    }
]

const Projects = () => {

  
  return (
        <>
        <div className='flex justify-center'>
          <h1 className='py-10 text-center font-bold text-4xl bg-gradient-to-r from-yellow-500 via-pink-400 to-pink-500 inline-block text-transparent bg-clip-text'>My Projects</h1>
        </div>
        <p className="text-center text-slate-600 mb-10">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s </p>
        <div className="grid grid-cols-12 gap-8">
            {projects.map((project) => (
                <ProjectCard data={project} key={project.id} />
            ))}
        </div>
        </>
    )
}

export default Projects