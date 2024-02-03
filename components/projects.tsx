import ProjectCard from "./project-card"

const projects = [
    {
        id: 1,
        preview: "/may-myanmar.png",
        alt: "may-myanmar-preview",
        title: "May Myanmar",
        logo: "/mm.jpg",
        width: 40,
        height: 30,
        introduction: "This a project for May Myanmar local food Industry which handles various processes.",
        description: "This a project for May Myanmar local food Industry and it includes dashboard for tracking daily, monthly and yearly incomes,  expenses and profits, customer management, product management, order management, income and expense. This project is implemented using HTML, CSS, Tailwind, Shadcn, TypeScript, Next.js and MongdoDB.",
        photos: [
            "https://utfs.io/f/63cd9feb-198f-4923-966a-80b2c4c5b929-1zvic.png",
            "https://utfs.io/f/0215d299-725b-4a1b-b183-ba6a64c8d648-1zvid.png",
            "https://utfs.io/f/9dd5528a-6e83-46df-a2ac-6b6a94b424f3-1zvie.png",
            "https://utfs.io/f/3fdd6688-a13a-4afc-a1c4-8b4cf9a2ea02-1zvif.png",
            "https://utfs.io/f/a8364c7b-ebc9-4ca2-8d31-66a7e7eb928d-1zvig.png",
            "https://utfs.io/f/f091226b-fc54-43b4-9a22-68a9542b7932-1zvih.png",
            "https://utfs.io/f/0e0be79e-6b72-4bb9-9221-0c0b3f1ee29d-1zvii.png",
            "https://utfs.io/f/90e6f367-7fac-4e12-bcbf-12225ebacf98-1zvij.png",
            "https://utfs.io/f/6e2a27d2-a431-4629-8113-5fedee4bc036-1zvik.png",
            "https://utfs.io/f/d1a0d181-0b76-4219-8f0e-41e46806858e-1pw4to.png",
            "https://utfs.io/f/6d3865e7-bdb6-474c-ace0-35319cbea993-1pw4tp.png",
            "https://utfs.io/f/c8bcd76c-a3b5-4520-900c-1da707a2a1fd-1pw4tq.png",
            "https://utfs.io/f/190ad36a-2ef9-4dfb-a895-d1c417bdd48a-1pw4tr.png"
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
                src: "/tailwind.png",
                alt: "Tailwind",
                width: 25,
                height: 25
            },
            {
                id: 4,
                src: "/typescript.png",
                alt: "TypeScript",
                width: 20,
                height: 20
            },
            {
                id: 5,
                src: "/next.js.png",
                alt: "Next.js",
                width: 20,
                height: 20
            },
            {
                id: 6,
                src: "/mongoDb.png",
                alt: "mongoDb",
                width: 20,
                height: 20
            }
        ]
    },
    {
        id: 2,
        preview: "/dover.png",
        alt: "dover-preview",
        title: "Dover",
        logo: "/d.jpg",
        width: 60,
        height: 40,
        introduction: "This project is about water management system for local water factory.",
        description: "This project is about water management system for local water factory and it contains multiple functions including daily sales across agents and factory, managing water bottles, income, expense and tracking water bottle based on specific customer.",
        web: "https://host-dover.web.app",
        photos: [
            "https://utfs.io/f/b5089bb4-7216-4721-9140-d4975c912257-uj1vx8.png",
            "https://utfs.io/f/a75315cf-7672-4011-b93c-5c0bd4274edc-uj1vx9.png",
            "https://utfs.io/f/228cdfb1-7aa9-45be-9d07-94e1d23d3088-uj1vxa.png",
            "https://utfs.io/f/ad46fbe9-79b8-4c56-bd7a-7cf761bd12ac-uj1vxb.png",
            "https://utfs.io/f/10f0ea94-95ab-4f0a-8f02-4a41f0e38c2f-uj1vxc.png",
            "https://utfs.io/f/95eb4f71-4408-48fc-ba1f-988e28e50d44-uj1vxd.png",
            "https://utfs.io/f/ed2cf78e-d792-4dd5-8c46-357da0bb0b50-uj1vxe.png",
            "https://utfs.io/f/3a5efc5f-c10e-4de7-adea-b954268819f5-uj1vxf.png",
            "https://utfs.io/f/13ab2c1c-dee0-428e-bd07-f9106afc7e96-uj1vxg.png"
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
                src: "/tailwind.png",
                alt: "Tailwind",
                width: 25,
                height: 25
            },
            {
                id: 4,
                src: "/typescript.png",
                alt: "TypeScript",
                width: 20,
                height: 20
            },
            {
                id: 5,
                src: "/next.js.png",
                alt: "Next.js",
                width: 20,
                height: 20
            },
            {
                id: 6,
                src: "/mongoDb.png",
                alt: "mongoDb",
                width: 20,
                height: 20
            }
        ]
    },
    {
        id: 3,
        preview: "/deli-admin-panel.png",
        alt: "deli-admin-panel-preview",
        title: "Delivery Admin Panel",
        logo: "/trailblazers.png",
        width: 30,
        height: 30,
        introduction: "This is a delivery admin panel for processing orders,tracking delivery shippment and include various managements.",
        description: "This is a delivery admin panel for delivery services which includes employee management, customer management, order management, select products with both manaul select and scanner, bus route management, gate management, track shipping process, notify shipping messages to customer and give permissions to delivery services' employees. This project is implemented using HTML, CSS, Tailwind, Material UI, JavaScript, React, Node.js, Express.js, MySQL and SQLite.",
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
                src: "/tailwind.png",
                alt: "Tailwind",
                width: 25,
                height: 25
            },
            // {
            //     id: 4,
            //     src: "/materialUi.png",
            //     alt: "Tailwind",
            //     width: 25,
            //     height: 25
            // },
            {
                id: 5,
                src: "/javascript.png",
                alt: "JavaScript",
                width: 20,
                height: 20
            },
            {
                id: 6,
                src: "/typescript.png",
                alt: "TypeScript",
                width: 20,
                height: 20
            },
            {
                id: 7,
                src: "/react.png",
                alt: "React",
                width: 20,
                height: 20
            },
            {
                id: 8,
                src: "/node.js.png",
                alt: "Node.js",
                width: 20,
                height: 20
            },
            {
                id: 9,
                src: "/express.js.png",
                alt: "Express.js",
                width: 20,
                height: 20
            },
            // {
            //     id: 10,
            //     src: "mySql.png",
            //     alt: "mySql",
            //     width: 20,
            //     height: 20
            // },
            {
                id: 11,
                src: "/sqLite.png",
                alt: "SQLite",
                width: 20,
                height: 20
            },
        ]
    },
    {
        id: 4,
        preview: "/deli-super-admin.png",
        alt: "deli-super-admin-preview",
        title: "Delivery Superadmin Panel",
        logo: "/trailblazers.png",
        width: 30,
        height: 30,
        introduction: "This is a delivery superadmin panel for trailblazers to monitor various delivery services.",
        description: "This is a delivery superadmin panel for trailblazers which includes delivery services' organization management, managing admin users and give roles and permissions to admins and gate management. This project is implemented using HTML, CSS, Tailwind, Material UI, JavaScript, React, Node.js, Express.js, MySQL and SQLite.",
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
                src: "/tailwind.png",
                alt: "Tailwind",
                width: 25,
                height: 25
            },
            // {
            //     id: 4,
            //     src: "/materialUi.png",
            //     alt: "Tailwind",
            //     width: 25,
            //     height: 25
            // },
            {
                id: 5,
                src: "/javascript.png",
                alt: "JavaScript",
                width: 20,
                height: 20
            },
            {
                id: 6,
                src: "/typescript.png",
                alt: "TypeScript",
                width: 20,
                height: 20
            },
            {
                id: 7,
                src: "/react.png",
                alt: "React",
                width: 20,
                height: 20
            },
            {
                id: 8,
                src: "/node.js.png",
                alt: "Node.js",
                width: 20,
                height: 20
            },
            {
                id: 9,
                src: "/express.js.png",
                alt: "Express.js",
                width: 20,
                height: 20
            },
            // {
            //     id: 10,
            //     src: "mySql.png",
            //     alt: "mySql",
            //     width: 20,
            //     height: 20
            // },
            {
                id: 11,
                src: "/sqLite.png",
                alt: "SQLite",
                width: 20,
                height: 20
            },
        ]
    },
    {
        id: 5,
        preview: "/deli-employee.png",
        alt: "deli-employee",
        title: "Delivery Employee",
        logo: "/trailblazers.png",
        width: 30,
        height: 30,
        introduction: "This is a delivery app for employees to place an order and process delivery shippment.",
        description: "This is a delivery app for delivery services' employees which include order management, customer management, select products with both manaul select and scanner, bus route management and track shipping process and notify shipping messages to customer. This project is implemented using Flutter, Node.js, Express.js, MySQL and SQLite.",
        mobile: true,
        photos: [
            "https://utfs.io/f/cd34cd67-1ce2-4351-85d3-59221968f661-1ku7el.png",
            "https://utfs.io/f/6e3cda2e-27f9-4729-8454-93e385464e80-1ku7em.png",
            "https://utfs.io/f/282a23a2-e878-41fb-943d-aeb487591db8-1ku7en.png",
            "https://utfs.io/f/694166d2-f5c7-4867-9dc2-a398b10a6bc1-1ku7eo.png",
            "https://utfs.io/f/43fc4403-c67b-4fce-81e9-06b18f0b01cd-1ku7ep.png",
            "https://utfs.io/f/347a57af-1318-487c-9007-9f5adcfc2bd6-1ku7eq.png",
            "https://utfs.io/f/53b90d64-1df7-4793-88ab-b9e75294fb7e-1ku7er.png",
            "https://utfs.io/f/e2b1088c-01eb-43d6-9d72-773436870ce8-1ku7es.png",
            "https://utfs.io/f/1cc859e3-963e-4813-83f2-f91b2890cd40-1ku7et.png",
            "https://utfs.io/f/6d5ea0df-8fab-4a7b-afcb-20abc65cbcad-m33odp.png",
            "https://utfs.io/f/6f6bb546-06aa-430c-a52b-e064f533a09d-m33odo.png",
            "https://utfs.io/f/b4c1481f-41b1-4d71-b30a-d4b8a8ba9a39-m33odn.png",
            "https://utfs.io/f/6e12b10e-2acb-4113-877e-f5c723e3c610-m33odm.png",
            "https://utfs.io/f/af18e518-4512-4e5f-80ef-4a9327999749-m33odl.png",
            "https://utfs.io/f/71040950-6833-45d3-8592-3b7b3fca7a02-m33odk.png",
            "https://utfs.io/f/c4a7f574-4995-48b8-98d6-81229a1dbc3b-m33odj.png",
            "https://utfs.io/f/d18cecee-733c-4cb8-8760-1b95d91b4207-m33odi.png",
            "https://utfs.io/f/3807ad19-e5fa-4163-9094-67777888928f-m33odh.png",
            "https://utfs.io/f/46dda483-564c-4323-9c5e-9ae5918bd38a-m33odg.png",
            "https://utfs.io/f/7dc7c91c-a765-4749-ae42-9d8f6bbafc3e-m33ocu.png",
            "https://utfs.io/f/fc693f89-d224-46b5-a9a2-6d30f594c5ee-m33oct.png",
            "https://utfs.io/f/f31337fb-4352-4097-b032-cac2ec37afbd-m33ocs.png",
            "https://utfs.io/f/92227f20-eb7f-4db6-b99e-d620bc9ec94e-m33ocr.png",
            "https://utfs.io/f/777197fd-1940-4850-933d-fb8d34db1258-m33ocq.png",
            "https://utfs.io/f/cb7849af-b70e-4e8f-bb5e-ac18ad545b65-m33ocp.png",
            "https://utfs.io/f/6af70798-a47e-4e54-8977-857b5144fd68-m33oco.png",
            "https://utfs.io/f/62227d7d-889d-48c4-8c7c-54c41dfdd932-m33ocn.png",
            "https://utfs.io/f/ead03584-8a2d-470a-8d10-a20f33aa3910-m33ocm.png",
            "https://utfs.io/f/c8fc5f5b-e4df-4a05-9d4c-b5febcf4cfaa-m33ocl.png"
        ],
        techs: [
            {
                id: 1,
                src: "/flutter.png",
                alt: "Flutter",
                width: 20,
                height: 20
            },
            {
                id: 2,
                src: "/javascript.png",
                alt: "JavaScript",
                width: 20,
                height: 20
            },
            {
                id: 3,
                src: "/node.js.png",
                alt: "Node.js",
                width: 20,
                height: 20
            },
            {
                id: 4,
                src: "/express.js.png",
                alt: "Express.js",
                width: 20,
                height: 20
            },
            // {
            //     id: 10,
            //     src: "mySql.png",
            //     alt: "mySql",
            //     width: 20,
            //     height: 20
            // },
            {
                id: 6,
                src: "/sqLite.png",
                alt: "SQLite",
                width: 20,
                height: 20
            },
        ]
    },
    {
        id: 6,
        preview: "/deli-customer.png",
        alt: "deli-customer",
        title: "Delivery Customer",
        logo: "/trailblazers.png",
        width: 30,
        height: 30,
        introduction: "This is a delivery app for customers to check out their orders and get connected with various delivery services.",
        description: "This is a delivery app for delivery services' customers which includes tracking orders, connecting with various delivery services, updating and notifying messages for order shipping process. This project is implemented using Flutter,  Node.js, Express.js, MySQL and SQLite.",
        mobile: true,
        photos: [
            "https://utfs.io/f/338a67b7-a100-46cf-ac41-1482626d1ddc-m33obz.png",
            "https://utfs.io/f/5f071910-2232-4918-9b94-b66fbc19dd35-m33oby.png",
            "https://utfs.io/f/75203560-5213-4a9a-ab6f-da056c3f8ebe-m33obx.png",
            "https://utfs.io/f/bf58ca66-6ed3-42ca-9344-7859d1fb93c6-m33obw.png",
            "https://utfs.io/f/c07b7cbc-efeb-43c8-bf56-02a4a5dcc322-m33obv.jpg",
            "https://utfs.io/f/1558a69b-f455-4d60-b751-3a7dd15dd15b-m33obu.jpg",
            "https://utfs.io/f/940013bf-78f7-4f6d-a91c-8767a3495597-m33obt.jpg",
            "https://utfs.io/f/2076d614-5b58-4e58-9c78-59304fc7621b-m33obs.jpg",
            "https://utfs.io/f/7bf3a7da-1e86-40d1-bb41-65a410ff1af3-m33obr.jpg",
            "https://utfs.io/f/93821f6f-5e4a-4e0d-abfb-2337309cb1bf-m33obq.jpg"
        ],
        techs: [
            {
                id: 1,
                src: "/flutter.png",
                alt: "Flutter",
                width: 20,
                height: 20
            },
            {
                id: 2,
                src: "/javascript.png",
                alt: "JavaScript",
                width: 20,
                height: 20
            },
            {
                id: 3,
                src: "/node.js.png",
                alt: "Node.js",
                width: 20,
                height: 20
            },
            {
                id: 4,
                src: "/express.js.png",
                alt: "Express.js",
                width: 20,
                height: 20
            },
            // {
            //     id: 10,
            //     src: "mySql.png",
            //     alt: "mySql",
            //     width: 20,
            //     height: 20
            // },
            {
                id: 6,
                src: "/sqLite.png",
                alt: "SQLite",
                width: 20,
                height: 20
            },
        ]
    },
    {
        id: 7,
        preview: "/tbz-website.png",
        alt: "oqs-preview",
        title: "Trailblazers Website",
        logo: "/trailblazers.png",
        width: 30,
        height: 30,
        introduction: "This is a website template for trailblazers.",
        description: "This is a website template for trailblazers and it includes home, products, services, clients and contact session. This project is implemented using HTML, CSS, JavaScript, React and Firebase.",
        video: "https://utfs.io/f/a02065e8-34a0-45a1-910c-ba9ae1599ef7-ejt5f5.mp4",
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
                src: "/bootstrap.png",
                alt: "bootStrap",
                width: 25,
                height: 25
            },
            {
                id: 4,
                src: "/javascript.png",
                alt: "JavaScript",
                width: 20,
                height: 20
            },
            {
                id: 5,
                src: "/react.png",
                alt: "React",
                width: 20,
                height: 20
            }
        ]
    },
    {
        id: 8,
        preview: "/coco.png",
        alt: "coco",
        title: "Coco Ecommerce",
        logo: "/coco-logo.png",
        width: 30,
        height: 30,
        introduction: "This is coco e-commerce store for users to purchase products online,  place an orders and track shipping process.",
        description: "This is coco e-commerce store for users to purchase products online, place an orders and track shipping process. This project is implemented using HTML, CSS, Bootstrap, JavaScript, JQuery and Django framework.",
        web: "https://icy9989.pythonanywhere.com",
        github: "https://github.com/icy9989/django_e-commerce",
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
                src: "/bootstrap.png",
                alt: "bootStrap",
                width: 25,
                height: 25
            },
            {
                id: 4,
                src: "/javascript.png",
                alt: "JavaScript",
                width: 20,
                height: 20
            },
            {
                id: 6,
                src: "/python.png",
                alt: "Python",
                width: 20,
                height: 20
            }
        ]
    },
    {
        id: 9,
        preview: "/online-quiz.png",
        alt: "oqs-preview",
        title: "Online Quiz System",
        logo: "/quiz.png",
        width: 50,
        height: 50,
        introduction: "This is an online quiz system that allow students to take exam with timer and generate automatic scores.",
        description: "This is an online quiz system that allow students to take exam with timer and generate automatic scores. It includes three roles: administrator, teachers and students and each roles have their own permissions and accessibilities. This project is implemented using HTML, CSS, Bootstrap, JavaScript, JQuery and Java(J2ee).",
        github: "https://github.com/icy9989/j2ee_online-quiz",
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
                src: "/bootstrap.png",
                alt: "bootStrap",
                width: 25,
                height: 25
            },
            {
                id: 4,
                src: "/javascript.png",
                alt: "JavaScript",
                width: 20,
                height: 20
            },
            {
                id: 6,
                src: "/java.png",
                alt: "Java",
                width: 25,
                height: 25
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
        {/* <p className="text-center text-slate-600 mb-10">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s </p> */}
        <div className="grid grid-cols-12 gap-8 mb-10 pb-14">
            {projects.map((project) => (
                <ProjectCard data={project} key={project.id} />
            ))}
        </div>
        </>
    )
}

export default Projects