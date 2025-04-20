import { Translation } from '../types/translation';

export const translations: Record<'en' | 'pt', Translation> = {
  en: {
    navbar: {
      home: 'Home',
      about: 'About Me',
      contact: 'Contact',
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
    }
  },
  pt: {
    navbar: {
      home: 'Início',
      about: 'Sobre Mim',
      contact: 'Contato',
    },
    greeting: {
      title: "Olá! Me chamo Matheus Keidy",
      description: "Seja bem-vindo ao meu portfólio! Sou um engenheiro de software full stack formado em Análise e Desenvolvimento de Sistemas, com experiência em desenvolvimento de aplicações web e mobile. Sou apaixonado por tecnologia e sempre estou em busca de novos desafios. Gostaria de saber um pouco mais sobre mim? Clique no botão abaixo!",
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