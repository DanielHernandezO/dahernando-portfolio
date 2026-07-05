export const translations = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      blog: "Blog",
      projects: "Projects",
      services: "Services",
      work: "Work",
      cta: "Start a project",
    },
    hero: {
      subtitle: "BACKEND · PAYMENTS · CUSTOM SOFTWARE",
      headlineTop: "Backend systems that move money,",
      headlineBottom: "scale, and don't break.",
      description:
        "Payments infrastructure at Yuno. Distributed systems at scale at Mercado Libre. Now engineering products, architecture, and custom software for companies that need it to just work.",
      ctaPrimary: "Start a project",
      ctaSecondary: "See the work",
      trust: "Trusted background",
    },
    services: {
      label: "SERVICES",
      title: "What I can build for you",
      cta: "Discuss your project",
      product: {
        name: "Product Engineering",
        headline: "Ship real products, not prototypes.",
        description:
          "Production-grade backend, APIs, and the infrastructure underneath, engineered to scale from your first user to your millionth without a rewrite.",
        who: "Founders · startups",
      },
      consulting: {
        name: "Architecture & Consulting",
        headline: "Get the decision right once.",
        description:
          "System and architecture reviews from someone who has operated payments and distributed systems at scale. Design, stress-test, and de-risk before you build.",
        who: "CTOs · engineering teams",
      },
      systems: {
        name: "Custom Business Systems",
        headline: "Software built around your operation.",
        description:
          "Tailored platforms designed around how your business actually works: the system your company runs on. Built to be owned, not rented.",
        who: "SMEs · companies",
      },
    },
    work: {
      label: "CLIENT WORK",
      title: "Proof, not promises.",
      cta: "Let's build yours",
      readCase: "Talk about your system",
      backing:
        "The standard behind it comes from years shipping systems at scale.",
      backingLink: "See my experience →",
      reconstructora: {
        client: "Reconstructora Medellín",
        type: "DAHO. Systems · Engine reconstruction",
        summary:
          "An engine-reconstruction workshop run on spreadsheets, paper, and WhatsApp. We designed and built its information system from scratch: inventory, payroll, and day-to-day operations. One platform built around how the shop actually works, with accounting integration (Siigo) on the roadmap.",
        m1label: "Single source of truth",
        m2label: "Inventory · payroll · operations",
        m3label: "Manual work automated",
      },
      meli: {
        client: "Mercado Libre",
        type: "Payments · Distributed systems at scale",
        summary:
          "Backend systems at the largest technology company in Latin America: automatic claim resolution that cut returns and saved cost, encryption protecting 23K users, and observability that lifted decision data by 75%.",
      },
      yuno: {
        client: "Yuno",
        type: "Payments infrastructure",
        summary:
          "Payment integrations where a dropped transaction is lost revenue: Apple Pay, Google Pay, Direct Debit via Belvo, and Tamara, behind clean, resilient Go services.",
      },
    },
    experience: {
      label: "EXPERIENCE",
      title: "Where I've Worked",
      viewBackground: "View full background →",
      yuno: {
        bullet1:
          "Led the integration of Direct Debit through Belvo, enabling large-scale recurring bank payments across LATAM. Designed resilient Go-based backend flows for mandate creation, asynchronous confirmations, reconciliation, and idempotent processing, ensuring high reliability for subscription-based revenue.",
        bullet2:
          "Implemented Apple Pay and Google Pay for CIT and MIT flows via Braintree (PayPal), designing tokenization and vaulting strategies to support secure recurring payments while improving authorization rates and checkout conversion.",
        bullet3:
          "Integrated Tamara via Checkout.com, enabling Buy Now, Pay Later capabilities for merchants in the MENA region. Designed secure payment orchestration and webhook handling flows in Go to ensure real-time status synchronization, transactional consistency, and improved checkout conversion rates.",
      },
      meli: {
        se: {
          bullet1:
            "Developed a feature for allowing international buyers to solve post purchase claims in an automatic way, creating a better experience for buyers and sellers. It reduced automatic returns from 1.5% to 1.2%, leading to significant cost savings for Mercado Libre. During the project, I developed a strategy for allowing buyers to execute this operation a specific amount of times according to their loyalty for avoiding fraud.",
          bullet2:
            "Included observability around the projects, improving the data generated in the area of automatic refunds by 75%, allowing the product team to take better decisions based on the data produced about the functionality and its use.",
          bullet3:
            "Implemented synchronous encryption to secure user data (protecting 23K users).",
          bullet4:
            "Designed a technical architecture that allows sellers to set up their own rules to resolve claims. It was created to increase the adoption of claims solved automatically by reaching around 1k users. During this design, I used UML diagrams to design system architecture and create software documentation.",
        },
        sd: {
          bullet1:
            "Developed a feature for allowing international sellers to solve post purchase claims in a straightforward way, it saved Mercado Libre around 2M USD yearly and created a better experience for sellers. During the project, I developed a new flow that takes the backend data and parses it to components that the front-end could interpret.",
          bullet2:
            "Created dashboards to measure and segment Mercado Libre international users for taking better and faster decisions. During the process I was in charge of creating a job to collect and clean data from the database using Mercado Libre tools, Google BigQuery and post it every day in Tableau where the dashboards are. I saved approximately 30 minutes per query execution used to analyze data previously.",
          bullet3:
            "Developed cart purchases in international purchases that fit in the business rules to improve the users and buyers experience. During the project I developed a GraphQL API, that allows the team to get all the information related with the purchases, using Golang.",
        },
      },
      eafit: {
        bullet1:
          "Supported undergraduate courses in data structures and algorithms",
        bullet2:
          "Guided students through problem-solving exercises and evaluated assignments",
      },
    },
    education: {
      label: "EDUCATION",
      title: "Education & Achievements",
      achievementsTitle: "Achievements",
      degrees: {
        specialization: "Software Development Specialization",
        bachelors: "Bachelor's degree, Computer Science",
        associates: "Associate's degree, Computer Science",
      },
      achievements: {
        honorable: "Honorable Mention, South America North Finals",
        fourteenth: "14th place out of 41, South America North Finals",
      },
    },
    certifications: {
      label: "CERTIFICATIONS",
      title: "Certifications & Courses",
      viewCertificate: "View Certificate",
    },
    skills: {
      title: "Skills & Technologies",
      languages: "LANGUAGES",
      backend: "BACKEND",
      infrastructure: "INFRASTRUCTURE",
      practices: "PRACTICES",
    },
    projects: {
      label: "PROJECTS",
      title: "Featured Work",
      viewAll: "View all",
      code: "Code",
      live: "Live",
      pageTitle: "Projects",
      pageDescription:
        "Open source work and experiments in distributed systems, networking, and backend engineering.",
      featured: "Featured",
      empty: "No projects yet. Check back soon!",
      descriptions: {
        "dynamic-programming-coders-api":
          "A Spring Boot REST API for competitive programming practice, deployed on Google Cloud App Engine with MySQL, featuring CRUD for contests, problems, users, and submissions.",
        "p2p-file-sharing-network":
          "A decentralized peer-to-peer file sharing network built with Go and Python, featuring flood-based search, RabbitMQ messaging, and hexagonal architecture.",
      },
      backToProjects: "Back to projects",
      sourceCode: "Source Code",
      liveDemo: "Live Demo",
    },
    blogHome: {
      label: "BLOG",
      title: "Latest Posts",
      viewAll: "View all",
      viewAllMobile: "View all posts →",
    },
    contact: {
      label: "CONTACT",
      title: "Have a system worth building?",
      description:
        "Tell me the problem you're solving. Whether it's payments, architecture, or a custom system your business runs on, let's talk. Usually reply within 24 hours.",
      cta: "Get in touch",
    },
    blog: {
      title: "Blog",
      description:
        "Thoughts on distributed systems, backend engineering, and software architecture.",
      emptyTitle: "Articles Coming Soon",
      emptyDescription:
        "I'm working on articles about distributed systems, backend architecture, and lessons learned from building scalable software. Stay tuned!",
    },
    about: {
      title: "About Me",
      introText:
        "I'm Daniel, a Software Engineer based in Colombia, combining deep technical expertise with a strong business mindset. I thrive in cross-functional teams where clear communication and collaboration drive results. Whether it's leading technical initiatives, mentoring teammates, or translating complex requirements into scalable solutions, I believe the best software is built by people who understand both the technology and the problem it solves.",
      beyondCode: "Life Beyond Code",
      beyondCodeText:
        "When I'm not writing code, you'll find me spending time with my family, traveling and exploring new places, and enjoying moments with friends and teammates. I believe the best ideas come from diverse experiences and genuine connections.",
      photos: {
        traveling: "Exploring new places",
        family: "Family time",
        meliTeam1: "Team at Mercado Libre",
        meliTeam2: "Work team",
        friends2: "Good times",
        friends3: "Adventures",
        friends4: "Memories",
      },
    },
    footer: {
      rights: "All rights reserved.",
    },
  },
  es: {
    nav: {
      home: "Inicio",
      about: "Sobre mí",
      blog: "Blog",
      projects: "Proyectos",
      services: "Servicios",
      work: "Casos",
      cta: "Iniciar proyecto",
    },
    hero: {
      subtitle: "BACKEND · PAGOS · SOFTWARE A MEDIDA",
      headlineTop: "Sistemas backend que mueven dinero,",
      headlineBottom: "escalan y no se caen.",
      description:
        "Infraestructura de pagos en Yuno. Sistemas distribuidos a escala en Mercado Libre. Hoy construyo productos, arquitectura y software a medida para empresas que necesitan que simplemente funcione.",
      ctaPrimary: "Iniciar un proyecto",
      ctaSecondary: "Ver el trabajo",
      trust: "Trayectoria",
    },
    services: {
      label: "SERVICIOS",
      title: "Lo que puedo construir para ti",
      cta: "Hablemos de tu proyecto",
      product: {
        name: "Ingeniería de Producto",
        headline: "Productos reales, no prototipos.",
        description:
          "Backend, APIs e infraestructura de grado producción, diseñados para escalar desde tu primer usuario hasta el millón sin reescribir.",
        who: "Founders · startups",
      },
      consulting: {
        name: "Arquitectura y Consultoría",
        headline: "Acierta la decisión una sola vez.",
        description:
          "Revisión y diseño de arquitectura por quien ha operado pagos y sistemas distribuidos a escala. Diseña, prueba bajo carga y reduce el riesgo antes de construir.",
        who: "CTOs · equipos de ingeniería",
      },
      systems: {
        name: "Sistemas a Medida",
        headline: "Software construido alrededor de tu operación.",
        description:
          "Plataformas hechas a la medida de cómo funciona tu negocio de verdad: el sistema sobre el que corre tu empresa. Construido para poseer, no para alquilar.",
        who: "PYMEs · empresas",
      },
    },
    work: {
      label: "TRABAJO CON CLIENTES",
      title: "Pruebas, no promesas.",
      cta: "Construyamos el tuyo",
      readCase: "Hablemos de tu sistema",
      backing:
        "El estándar detrás viene de años construyendo sistemas a escala.",
      backingLink: "Mira mi experiencia →",
      reconstructora: {
        client: "Reconstructora Medellín",
        type: "DAHO. Systems · Reconstrucción de motores",
        summary:
          "Una rectificadora de motores operada en hojas de cálculo, papel y WhatsApp. Diseñamos y construimos su sistema de información desde cero: inventario, nómina y operación diaria. Una sola plataforma alrededor de cómo trabaja el taller de verdad, con integración contable (Siigo) en el roadmap.",
        m1label: "Única fuente de verdad",
        m2label: "Inventario · nómina · operación",
        m3label: "Trabajo manual automatizado",
      },
      meli: {
        client: "Mercado Libre",
        type: "Pagos · Sistemas distribuidos a escala",
        summary:
          "Sistemas backend en la mayor empresa de tecnología de Latinoamérica: resolución automática de reclamos que redujo devoluciones y costos, cifrado que protege 23K usuarios y observabilidad que mejoró los datos de decisión en 75%.",
      },
      yuno: {
        client: "Yuno",
        type: "Infraestructura de pagos",
        summary:
          "Integraciones de pago donde una transacción perdida es ingreso perdido: Apple Pay, Google Pay, Débito Directo vía Belvo y Tamara, tras servicios en Go limpios y resilientes.",
      },
    },
    experience: {
      label: "EXPERIENCIA",
      title: "Dónde He Trabajado",
      viewBackground: "Ver experiencia completa →",
      yuno: {
        bullet1:
          "Lideré la integración de Débito Directo a través de Belvo, habilitando pagos bancarios recurrentes a gran escala en LATAM. Diseñé flujos backend resilientes en Go para creación de mandatos, confirmaciones asíncronas, reconciliación y procesamiento idempotente, asegurando alta confiabilidad para ingresos basados en suscripciones.",
        bullet2:
          "Implementé Apple Pay y Google Pay para flujos CIT y MIT a través de Braintree (PayPal), diseñando estrategias de tokenización y almacenamiento seguro para soportar pagos recurrentes seguros, mejorando tasas de autorización y conversión en checkout.",
        bullet3:
          "Integré Tamara a través de Checkout.com, habilitando capacidades de Compra Ahora, Paga Después para comercios en la región MENA. Diseñé flujos seguros de orquestación de pagos y manejo de webhooks en Go para asegurar sincronización de estado en tiempo real, consistencia transaccional y mejores tasas de conversión en checkout.",
      },
      meli: {
        se: {
          bullet1:
            "Desarrollé una funcionalidad que permite a compradores internacionales resolver reclamos post-compra de forma automática, creando una mejor experiencia para compradores y vendedores. Redujo las devoluciones automáticas del 1.5% al 1.2%, generando ahorros significativos para Mercado Libre. Durante el proyecto, desarrollé una estrategia que permite a los compradores ejecutar esta operación un número específico de veces según su nivel de lealtad para evitar fraude.",
          bullet2:
            "Incluí observabilidad en los proyectos, mejorando los datos generados en el área de reembolsos automáticos en un 75%, permitiendo al equipo de producto tomar mejores decisiones basadas en los datos producidos sobre la funcionalidad y su uso.",
          bullet3:
            "Implementé cifrado sincrónico para proteger datos de usuarios (protegiendo 23K usuarios).",
          bullet4:
            "Diseñé una arquitectura técnica que permite a los vendedores configurar sus propias reglas para resolver reclamos. Fue creada para aumentar la adopción de reclamos resueltos automáticamente, alcanzando alrededor de 1K usuarios. Durante este diseño, utilicé diagramas UML para diseñar la arquitectura del sistema y crear documentación de software.",
        },
        sd: {
          bullet1:
            "Desarrollé una funcionalidad que permite a vendedores internacionales resolver reclamos post-compra de manera directa, ahorrando a Mercado Libre alrededor de 2M USD anuales y creando una mejor experiencia para vendedores. Durante el proyecto, desarrollé un nuevo flujo que toma los datos del backend y los transforma en componentes que el front-end puede interpretar.",
          bullet2:
            "Creé dashboards para medir y segmentar usuarios internacionales de Mercado Libre para tomar mejores y más rápidas decisiones. Durante el proceso, estuve a cargo de crear un job para recopilar y limpiar datos de la base de datos usando herramientas de Mercado Libre, Google BigQuery y publicarlos diariamente en Tableau donde se encuentran los dashboards. Ahorré aproximadamente 30 minutos por ejecución de consulta utilizada para analizar datos previamente.",
          bullet3:
            "Desarrollé compras de carrito en compras internacionales que se ajustan a las reglas de negocio para mejorar la experiencia de usuarios y compradores. Durante el proyecto, desarrollé una API GraphQL que permite al equipo obtener toda la información relacionada con las compras, usando Golang.",
        },
      },
      eafit: {
        bullet1:
          "Apoyé cursos de pregrado en estructuras de datos y algoritmos",
        bullet2:
          "Guié a estudiantes en ejercicios de resolución de problemas y evalué asignaciones",
      },
    },
    education: {
      label: "EDUCACIÓN",
      title: "Educación y Logros",
      achievementsTitle: "Logros",
      degrees: {
        specialization: "Especialización en Desarrollo de Software",
        bachelors: "Pregrado en Ingeniería de Sistemas",
        associates: "Tecnología en Desarrollo de Software",
      },
      achievements: {
        honorable: "Mención Honorífica, Finales Sudamérica Norte",
        fourteenth: "Puesto 14 de 41, Finales Sudamérica Norte",
      },
    },
    certifications: {
      label: "CERTIFICACIONES",
      title: "Certificaciones y Cursos",
      viewCertificate: "Ver Certificado",
    },
    skills: {
      title: "Habilidades y Tecnologías",
      languages: "LENGUAJES",
      backend: "BACKEND",
      infrastructure: "INFRAESTRUCTURA",
      practices: "PRÁCTICAS",
    },
    projects: {
      label: "PROYECTOS",
      title: "Trabajo Destacado",
      viewAll: "Ver todo",
      code: "Código",
      live: "Demo",
      pageTitle: "Proyectos",
      pageDescription:
        "Trabajo open source y experimentos en sistemas distribuidos, redes y backend.",
      featured: "Destacado",
      empty: "Aún no hay proyectos. ¡Vuelve pronto!",
      descriptions: {
        "dynamic-programming-coders-api":
          "Una API REST con Spring Boot para práctica de programación competitiva, desplegada en Google Cloud App Engine con MySQL, con CRUD para concursos, problemas, usuarios y envíos.",
        "p2p-file-sharing-network":
          "Una red descentralizada de intercambio de archivos peer-to-peer construida con Go y Python, con búsqueda por inundación, mensajería RabbitMQ y arquitectura hexagonal.",
      },
      backToProjects: "Volver a proyectos",
      sourceCode: "Código Fuente",
      liveDemo: "Demo en Vivo",
    },
    blogHome: {
      label: "BLOG",
      title: "Últimos Artículos",
      viewAll: "Ver todo",
      viewAllMobile: "Ver todos los artículos →",
    },
    contact: {
      label: "CONTACTO",
      title: "¿Tienes un sistema que vale la pena construir?",
      description:
        "Cuéntame el problema que quieres resolver. Ya sea pagos, arquitectura o un sistema a medida sobre el que corre tu negocio, hablemos. Suelo responder en menos de 24 horas.",
      cta: "Hablemos",
    },
    blog: {
      title: "Blog",
      description:
        "Reflexiones sobre sistemas distribuidos, ingeniería backend y arquitectura de software.",
      emptyTitle: "Artículos Próximamente",
      emptyDescription:
        "Estoy trabajando en artículos sobre sistemas distribuidos, arquitectura backend y lecciones aprendidas construyendo software escalable. ¡Pronto!",
    },
    about: {
      title: "Sobre Mí",
      introText:
        "Soy Daniel, un Ingeniero de Software en Colombia, combinando experiencia técnica profunda con una fuerte mentalidad de negocio. Destaco en equipos multifuncionales donde la comunicación clara y la colaboración impulsan resultados. Ya sea liderando iniciativas técnicas, mentoreando compañeros o traduciendo requerimientos complejos en soluciones escalables, creo que el mejor software lo construyen personas que entienden tanto la tecnología como el problema que resuelve.",
      beyondCode: "Vida Más Allá del Código",
      beyondCodeText:
        "Cuando no estoy escribiendo código, me encontrarás pasando tiempo con mi familia, viajando y explorando nuevos lugares, y disfrutando momentos con amigos y compañeros. Creo que las mejores ideas surgen de experiencias diversas y conexiones genuinas.",
      photos: {
        traveling: "Explorando nuevos lugares",
        family: "Tiempo en familia",
        meliTeam1: "Equipo en Mercado Libre",
        meliTeam2: "Equipo de trabajo",
        friends2: "Buenos momentos",
        friends3: "Aventuras",
        friends4: "Recuerdos",
      },
    },
    footer: {
      rights: "Todos los derechos reservados.",
    },
  },
} as const;

export type Locale = "en" | "es";

type DeepStringify<T> = {
  [K in keyof T]: T[K] extends string ? string : DeepStringify<T[K]>;
};

export type TranslationKeys = DeepStringify<typeof translations.en>;
