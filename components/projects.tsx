import ProjectCard from "./project-card"

const projects = [
    {
        id: 1,
        preview: "/deli-employee.png",
        alt: "deli-employee",
        title: "Delivery Employee",
        logo: "/trailblazers.png",
        width: 30,
        height: 30,
        introduction: "This is the online quiz system for students to take exam.",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type",
        mobile: true,
        photos: [
            "https://utfs.io/f/cd34cd67-1ce2-4351-85d3-59221968f661-1ku7el.png",
            "https://utfs.io/f/6e3cda2e-27f9-4729-8454-93e385464e80-1ku7em.png",
            "https://utfs.io/f/282a23a2-e878-41fb-943d-aeb487591db8-1ku7en.png",
            "https://utfs.io/f/694166d2-f5c7-4867-9dc2-a398b10a6bc1-1ku7eo.png",
            "https://utfs.io/f/43fc4403-c67b-4fce-81e9-06b18f0b01cd-1ku7ep.png"
        ],
        techs: [
            {
                id: 1,
                src: "/html.png",
                alt: "HTML",
                width: 20,
                height: 20
            },
            {
                id: 2,
                src: "/css.png",
                alt: "CSS",
                width: 25,
                height: 25
            },
            {
                id: 3,
                src: "/javaScript.png",
                alt: "JavaScript",
                width: 20,
                height: 20
            }
        ]
    },
    // {
    //     id: 5,
    //     preview: "/tbz-website.png",
    //     alt: "oqs-preview",
    //     title: "Trailblazers Website",
    //     logo: "/trailblazers.png",
    //     width: 30,
    //     height: 30,
    //     introduction: "This is the online quiz system for students to take exam.",
    //     description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type",
    //     video: "https://utfs.io/f/a02065e8-34a0-45a1-910c-ba9ae1599ef7-ejt5f5.mp4",
    //     techs: [
    //         {
    //             id: 1,
    //             src: "/html.png",
    //             alt: "HTML",
    //             width: 20,
    //             height: 20
    //         },
    //         {
    //             id: 2,
    //             src: "/css.png",
    //             alt: "CSS",
    //             width: 25,
    //             height: 25
    //         },
    //         {
    //             id: 3,
    //             src: "/javaScript.png",
    //             alt: "JavaScript",
    //             width: 20,
    //             height: 20
    //         }
    //     ]
    // },
    {
        id: 6,
        preview: "/coco.png",
        alt: "coco",
        title: "Coco Ecommerce",
        logo: "/coco-logo.png",
        width: 30,
        height: 30,
        introduction: "This is the online quiz system for students to take exam.",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type",
        web: "#",
        github: "#",
        photos: [
            "https://utfs.io/f/48419625-c69b-44ad-a24f-b4b91bd6d612-mesryc.png",
            "https://utfs.io/f/7d848e6e-9744-4b5d-86a8-02469add2131-mesryb.png",
            "https://utfs.io/f/75b9293e-7fd4-4868-84e1-c49e4795c495-mesrya.png",
            "https://utfs.io/f/62a022fb-7525-48aa-ba40-9db8a0231510-mesry9.png",
            "https://utfs.io/f/5194ae0d-9a77-4f42-8f3b-130aa54f1fe0-mesry8.png",
            "https://utfs.io/f/86526ba5-0316-4743-9a47-a58f2d9442a0-mesry7.png",
            "https://utfs.io/f/481ef4ad-512b-4a9f-a4cc-35367607ca7e-mesry6.png"
        ],
        techs: [
            {
                id: 1,
                src: "/html.png",
                alt: "HTML",
                width: 20,
                height: 20
            },
            {
                id: 2,
                src: "/css.png",
                alt: "CSS",
                width: 25,
                height: 25
            },
            {
                id: 3,
                src: "/javaScript.png",
                alt: "JavaScript",
                width: 20,
                height: 20
            }
        ]
    },
    {
        id: 7,
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
        ],
        techs: [
            {
                id: 1,
                src: "/html.png",
                alt: "HTML",
                width: 20,
                height: 20
            },
            {
                id: 2,
                src: "/css.png",
                alt: "CSS",
                width: 25,
                height: 25
            },
            {
                id: 3,
                src: "/javaScript.png",
                alt: "JavaScript",
                width: 20,
                height: 20
            }
        ]
    }
]

const Projects = () => {

  
  return (
        <>
        <div id="project" className='flex justify-center'>
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