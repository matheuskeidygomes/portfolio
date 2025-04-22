import { Translation } from '../types/translation';

export const translations: Record<'en' | 'pt', Translation> = {
  en: {
    navbar: {
      home: 'Home',
      about: 'About Me',
      contact: 'Contact',
      resume: 'Resume',
      projects: 'Projects',
    },
    projects: {
      banner: {
        message: 'Here are some of my projects, I hope you enjoy them!',
      },
    },
    contactUs: {
      title: "Contact Me",
      description: "I'm here to help you. If you have any questions, fill out the form below explaining what you need and I will get back to you as soon as possible.",
      validationError: "Please fill out all required fields.",
      successMessage: "Message sent successfully!",
      defaultError: "Error sending message. Please try again.",
      nameRequired: "Name is required.",
      emailRequired: "Email is required.",
      messageRequired: "Message is required.",
      emailInvalid: "Email is invalid.",
      name: "Name",
      email: "Email",
      message: "Message",
      send: "Send",
    },
    greeting: {
      title: "Hello! I'm Matheus Keidy",
      description: "Welcome to my portfolio! I'm a full stack software engineer graduated in Systems Analysis and Development, with experience in web and mobile applications development. I'm passionate about technology and always looking for new challenges. Want to know more about me? Click on the button below!",
    },
    footer: {
      rights: `© ${new Date().getFullYear()} Matheus Keidy. All rights reserved.`,
    },
    trainer: {
      options: {
        about: 'About You',
        objective: 'Objective',
        experience: 'Experience',
        hobbies: 'Hobbies',
        technologies: 'Technologies',
        languages: 'Languages',
      }
    },
    banner: {
      messages: {
        welcome: {
          1: "Hi! I'm Matheus, a Software Engineer! Welcome to my portfolio!",
          2: "Do you want to know more about me?",
          3: "What would you like to know?",
        },
        about: {
          1: "I'm a full stack engineer with a passion for creating solutions through technology to make the world a better place.",
          2: "My goal is to create apps and websites that can help people connect, have fun, and solve their problems.",
          3: "I'm always looking for new challenges and ways to improve my skills, like a lifelong learner.",
          4: "I'm a big fan of technology since childhood, I've always been interested in how technology works and how to use it to solve problems.",
          5: "While I was playing video games, I was always wondering how the games were made, and how the developers created those amazing worlds.",
          6: "That's why I decided to study Systems Analysis and Development, to learn how to create software solutions to solve problems and make people's lives easier.",
        },
        technologies: {
          1: "I'm used to work with technologies like TypeScript, Node.js, React, Java, Spring boot, Docker, Kubernetes, among others.",
          2: "I also work with relational databases like MySQL and PostgreSQL, and non-relational databases like MongoDB.",
        },
        languages: {
          1: "I'm native in Portuguese but I also can speak English.",
        },
        objective: {
          1: "My goal is to create apps and websites that can help people connect, have fun, and solve their problems.",
        },
        experience: {
          1: "I've experience with web and mobile applications development, I've worked with creating and maintaining software solutions.",
          2: "Such as: landing pages, dashboards, e-commerce, management systems, APIs, microservices, etc.",
        },
        hobbies: {
          1: "I love to play video games, I'm a big fan of RPGs and Action-Adventure games.",
          2: "I also like to watch anime, series and read manga.",
        },
      }
    },
    resume: {
      title: {
        personal: 'Personal Information',
        education: 'Education',
        languages: 'Languages',
        skills: 'Skills',
        experience: 'Professional Experience',
        usefulLinks: 'Useful Links',
        cloud: 'Cloud',
        messaging: 'Messaging',
        devops: 'DevOps',
        frontend: 'Front-end',
        backend: 'Back-end',
        database: 'Database',
        attachments: 'Attachments',
        resume: 'Download Resume in PDF',
        resumeFile: 'Resume Matheus Keidy.pdf',
        age: 'Age',
        location: 'Location',
        email: 'Email',
        phone: 'Phone',
      },
      personal: {
        age: `${new Date().getFullYear() - 1996} years old`,
        location: 'Cabedelo, PB - Brazil',
        email: 'matheuskeidygomes@gmail.com',
        phone: '+55 (21) 9 9607-1564',
        role: 'Software Engineer',
      },
      education: {
        university: 'Cruzeiro do Sul University',
        course: 'Systems Analysis and Development',
        graduation: 'Completed in 2022',
      },
      languages: {
        portuguese: 'Portuguese - Native',
        english: 'English - Advanced',
      },
      skills: {
        frontend: 'HTML, CSS, JavaScript, TypeScript, React, React Native, NextJS.',
        backend: 'NodeJS, NestJS, Java, SpringBoot, Golang, Python.',
        database: 'MySQL, PostgreSQL, MongoDB.',
        cloud: 'AWS, Azure.',
        messaging: 'RabbitMQ, Kafka, Redis.',
        devops: 'Docker, Kubernetes, CI/CD.',
      },
      experience: {
        findme: {
          company: 'FindMe Technology for Security and Services',
          role: 'Mid level Full Stack Developer',
          period: '01/2023 - Present',
          location: 'São Paulo/SP - Brazil',
          description: 'Work as a software developer in a team focused on data analysis. Responsible for developing and supporting company-related systems. The company operates in the security and facilities niche, offering systems for activity management and operational checklists.',
        },
        rrmvcaetano: {
          company: 'RRMVCaetano Crypto',
          role: 'Junior Full Stack Developer',
          period: '08/2022 - 01/2023',
          location: 'São Paulo/SP - Brazil',
          description: 'Act as a software developer for an NFT game development startup. Responsible for developing and supporting the company\'s related systems.',
        },
        voxcity: {
          company: 'Voxcity Tecnologia',
          role: 'Frontend Developer',
          period: '04/2022 - 08/2022',
          location: 'Torres/RS - Brazil',
          description: 'Work as a software developer in a company that operates in the telecommunications niche. Responsible for developing and providing support for systems related to the company.',
        },
        eprosys: {
          company: 'E-prosys Soluções Tecnologicas',
          role: 'Trainee',
          role2: 'IT Support Analyst',
          period: '12/2020 - 03/2021',
          location: 'João Pessoa/PB - Brazil',
          period2: '03/2021 - 01/2022',
          description: 'Provide technical support to customers related to the ACS Síntese system for gas station automation, operate database (SQL), work with backup routines, perform system implementations and updates.',
        },
      },
    }
  },
  pt: {
    navbar: {
      home: 'Início',
      about: 'Sobre Mim',
      resume: 'Currículo',
      projects: 'Projetos',
      contact: 'Contato',
    },
    greeting: {
      title: "Olá! Me chamo Matheus Keidy",
      description: "Seja bem-vindo ao meu portfólio! Sou um engenheiro de software full stack formado em Análise e Desenvolvimento de Sistemas, com experiência em desenvolvimento de aplicações web e mobile. Sou apaixonado por tecnologia e sempre estou em busca de novos desafios. Gostaria de saber um pouco mais sobre mim? Clique no botão abaixo!",
    },
    projects: {
      banner: {
        message: 'Aqui estão alguns dos meus projetos, espero que você goste!',
      },
    },
    contactUs: {
      title: "Entre em contato",
      description: "Estou aqui para te ajudar. Se você tiver alguma dúvida, preencha este formulário abaixo explicando o que precisa e eu te retornarei o mais rápido possível.",
      validationError: "Por favor, preencha todos os campos obrigatórios.",
      successMessage: "Mensagem enviada com sucesso!",
      defaultError: "Erro ao enviar mensagem. Por favor, tente novamente.",
      name: "Nome",
      email: "Email",
      message: "Mensagem",
      send: "Enviar",
      nameRequired: "Nome é obrigatório.",
      emailRequired: "Email é obrigatório.",
      messageRequired: "Mensagem é obrigatória.",
      emailInvalid: "Email é inválido.",
    },
    footer: {
      rights: `© ${new Date().getFullYear()} Matheus Keidy. Todos os direitos reservados.`,
    },
    trainer: {
      options: {
        about: 'Sobre Você',
        objective: 'Objetivo',
        experience: 'Experiência',
        hobbies: 'Hobbies',
        technologies: 'Tecnologias',
        languages: 'Idiomas',
      }
    },
    resume: {
      title: {
        personal: 'Informações Pessoais',
        education: 'Formação',
        languages: 'Idiomas',
        skills: 'Habilidades',
        experience: 'Experiência Profissional',
        usefulLinks: 'Links Úteis',
        cloud: 'Nuvem',
        messaging: 'Mensageria',
        devops: 'DevOps',
        frontend: 'Front-end',
        backend: 'Back-end',
        database: 'Banco de Dados',
        attachments: 'Anexos',
        resume: 'Baixar Currículo em PDF',
        resumeFile: 'Currículo Matheus Keidy.pdf',
        age: 'Idade',
        location: 'Localização',
        email: 'Email',
        phone: 'Telefone',
      },
      personal: {
        age: `${new Date().getFullYear() - 1996} anos`,
        location: 'Cabedelo, PB - Brasil',
        email: 'matheuskeidygomes@gmail.com',
        phone: '(21) 9 9607-1564',
        role: 'Engenheiro de Software',
      },
      education: {
        university: 'Universidade Cruzeiro do Sul',
        course: 'Análise e Desenvolvimento de Sistemas',
        graduation: 'Concluído em 2022',
      },
      languages: {
        portuguese: 'Português - Nativo',
        english: 'Inglês - Avançado',
      },
      skills: {
        frontend: 'HTML, CSS, JavaScript, TypeScript, React, React Native, NextJS.',
        backend: 'NodeJS, NestJS, Java, SpringBoot, Golang, Python.',
        database: 'MySQL, PostgreSQL, MongoDB.',
        cloud: 'AWS, Azure.',
        messaging: 'RabbitMQ, Kafka, Redis.',
        devops: 'Docker, Kubernetes, CI/CD.',
      },
      experience: {
        findme: {
          company: 'FindMe Technology for Security and Services',
          role: 'Desenvolvedor Full Stack Pleno',
          period: '01/2023 - Presente',
          location: 'São Paulo - SP',
          description: 'Atuar como desenvolvedor de software em um time focado em análise de dados. Responsável por desenvolver e dar suporte aos sistemas relacionados a empresa. A empresa atua no nicho de segurança e facilities, oferecendo sistemas para gerenciamento de atividades e checklists operacionais.',
        },
        rrmvcaetano: {
          company: 'RRMVCaetano Crypto',
          role: 'Desenvolvedor Full Stack Júnior',
          period: '08/2022 - 01/2023',
          location: 'São Paulo - SP',
          description: 'Atuar como desenvolvedor de software para uma startup de desenvolvimento de jogos NFT. Responsável por desenvolver e dar suporte aos sistemas relacionados a empresa.',
        },
        voxcity: {
          company: 'Voxcity Tecnologia',
          role: 'Desenvolvedor Front-end Júnior',
          period: '04/2022 - 08/2022',
          location: 'Torres - RS',
          description: 'Trabalhar como desenvolvedor de software para uma empresa que atua no nicho de telecomunicações. Responsável por desenvolver e dar suporte aos sistemas relacionados a empresa.',
        },
        eprosys: {
          company: 'E-prosys Soluções Tecnologicas',
          role: 'Estagiário',
          role2: 'Analista de Suporte',
          period: '12/2020 - 03/2021',
          period2: '03/2021 - 01/2022',
          location: 'João Pessoa - PB',
          description: 'Prestar suporte técnico aos clientes relacionados ao sistema ACS Síntese para automação de postos de combustível, operar banco de dados (SQL), trabalhar com rotinas de backup, realizar implantações e atualizações do sistema.',
        },
      },
    },
    banner: {
      messages: {
        welcome: {
          1: "Olá! Me chamo Matheus Keidy, sou um Engenheiro de Software! Seja muito bem-vindo ao meu portfólio!",
          2: "Gostaria de saber um pouco mais sobre mim?",
          3: "O que você gostaria de saber?",
        },
        about: {
          1: "Eu sou um engenheiro de software full stack que ama criar soluções através da tecnologia para tornar o mundo um lugar melhor.",
          2: "Meu objetivo é criar aplicativos e sites que possam ajudar as pessoas a se conectar, se divertir e a resolver seus problemas.",
          3: "Estou sempre buscando aprender coisas novas e melhorar minhas habilidades, como um eterno aprendiz.",
          4: "Eu sempre gostei de tecnologia desde criança, sempre fui curioso sobre como a tecnologia funciona e como ela pode ser utilizada para resolver problemas.",
          5: "Enquanto eu jogava video games, eu sempre me perguntava como os jogos eram feitos, e como os desenvolvedores criavam esses incríveis mundos.",
          6: "É por isso que eu decidi estudar Análise e Desenvolvimento de Sistemas, para aprender como criar soluções de software para resolver problemas e tornar a vida das pessoas mais fácil.",
        },
        technologies: {
          1: "Eu costumo trabalhar com tecnologias como TypeScript, Node.js, React, Java, Spring boot, Docker, Kubernetes, entre outras.",
          2: "Eu também costumo trabalhar com bancos de dados relacionais como MySQL e PostgreSQL, e não relacionais como MongoDB.",
        },
        languages: {
          1: "Eu sou nativo em português, mas também consigo falar inglês.",
        },
        experience: {
          1: "Tenho experiência com desenvolvimento de aplicações web e mobile, criando e mantendo soluções de software.",
          2: "Tais como: landing pages, dashboards, e-commerce, sistemas de gerenciamento, APIs, microsserviços, etc.",
        },
        objective: {
          1: "Meu objetivo é criar aplicativos e sites que possam ajudar as pessoas a se conectar, se divertir e a resolver seus problemas.",
        },
        hobbies: {
          1: "Eu amo jogar video games, sou um grande fã de RPGs e Ação-Aventura.",
          2: "Eu também gosto de assistir anime, séries e ler mangá.",
        },
      },
    },
  },
}; 