const projects = [
    {
        id: 1,
        preview: "/online-quiz.png",
        alt: "oqs-preview",
        title: "Online Quiz System",
        logo: "/quiz.png",
        width: 50,
        height: 50,
        description: "This is the online quiz system for students to take exam.",
    },
    {
        id: 2,
        preview: "/online-quiz.png",
        alt: "oqs-preview",
        title: "Online Quiz System",
        logo: "/quiz.png",
        width: 50,
        height: 50,
        description: "This is the online quiz system for students to take exam.",
        web: "#",
        github: "#"
    },
    {
        id: 3,
        preview: "/online-quiz.png",
        alt: "oqs-preview",
        title: "Online Quiz System",
        logo: "/quiz.png",
        width: 50,
        height: 50,
        description: "This is the online quiz system for students to take the exam and generate results.",
        web: "#",
        github: "#",
        photos: [
            "https://utfs.io/f/e7bd9d7a-94dd-4816-b201-c869f7a6056d-1r3prp.jpg",
            "https://utfs.io/f/47128152-8c55-42d1-909c-2a749416425e-1r3prq.jpg",
            "https://utfs.io/f/169cf950-7001-4cb5-9662-3fd65565df9f-1r3prr.jpg",
            "https://utfs.io/f/2f992b10-f297-4e0a-a71b-688abbf9b35c-1r3prs.jpg",
            "https://utfs.io/f/207ad2c8-f866-4ce1-8d67-43a8ce263a0f-1r3prt.jpg"
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