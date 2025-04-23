import Sony from '/assets/sony.png'
import SonyOne from '/assets/sony1.png'
import SonyTwo from '/assets/sony2.png'
import SonyThree from '/assets/sony3.png'
import SonyFour from '/assets/sony4.png'
import Findme from '/assets/findme.png'
import FindmeOne from '/assets/findme1.png'
import FindmeTwo from '/assets/findme2.png'
import FindmeThree from '/assets/findme3.png'
import FindmeFour from '/assets/findme4.png'
import FindmeFive from '/assets/findme5.png'
import FindmeSix from '/assets/findme6.png'
import FindmeSeven from '/assets/findme7.png'
import GitExplore from '/assets/git-explore.png'
import GitExploreOne from '/assets/git-explore1.png'
import AnneAI from '/assets/anne-ai.png'
import AnneAIOne from '/assets/anne-ai1.png'
import Dot from '/assets/dot.png'
import DotOne from '/assets/dot1.png'
import DotTwo from '/assets/dot2.png'
import Bbz from '/assets/bbz.png'
import BbzOne from '/assets/bbz1.png'
import BbzTwo from '/assets/bbz2.png'
import BbzThree from '/assets/bbz3.png'
import BbzFour from '/assets/bbz4.png'
import BbzFive from '/assets/bbz5.png'
import BbzSix from '/assets/bbz6.png'

const links = {
  findme: "https://production.app.findme.id",
  sony: "https://sony-playstation-omega.vercel.app",
  gitExplore: "https://git-explore.vercel.app",
  anneAI: "https://anne-ai.vercel.app",
  dot: "https://dot-delta-snowy.vercel.app",
  bbz: "https://bbz-eta.vercel.app",
};

const images = {
  findme: [
    Findme,
    FindmeOne,
    FindmeTwo,
    FindmeThree,
    FindmeFour,
    FindmeFive,
    FindmeSix,
    FindmeSeven,
  ],
  sony: [
    Sony,
    SonyOne,
    SonyTwo,
    SonyThree,
    SonyFour,
  ],
  gitExplore: [
    GitExplore,
    GitExploreOne,
  ],
  anneAI: [
    AnneAI,
    AnneAIOne,
  ],
  dot: [
    Dot,
    DotOne,
    DotTwo,
  ],
  bbz: [
    Bbz,
    BbzOne,
    BbzTwo,
    BbzThree,
    BbzFour,
    BbzFive,
    BbzSix,
  ],
}

export const projects = {
  en: [
    {
      id: 0,
      title: "Sony Playstation Portal",
      description: "Responsive Website for the video game console Playstation and his exclusive games from Sony. Developed for study and practice of web development.",
      link: links.sony,
      images: images.sony,
      isPrivate: false,
    },
    {
      id: 1,
      title: "Dashboard Findme",
      description: "Dashboard for data analysis, developed for manage and monitoring security and facilities of companies that use the FindMe system.",
      link: links.findme,
      images: images.findme,
      isPrivate: true,
    },
    {
      id: 2,
      title: "Git Explore",
      description: "Website developed to explore the Github API. Developed for study and practice of web development.",
      link: links.gitExplore,
      images: images.gitExplore,
      isPrivate: false,
    },
    {
      id: 3,
      title: "Anne AI",
      description: "A system made with AI to explore the capabilities of the OpenAI API and its machine learning models. In this project it is possible to chat with a AI called Anne, which simulates a real person to answer questions and perform tasks.",
      link: links.anneAI,
      images: images.anneAI,
      isPrivate: false,
    },
    {
      id: 4,
      title: "Dot Portal",
      description: "Responsive website for the company Dot, developed for study and practice of web development.",
      link: links.dot,
      images: images.dot,
      isPrivate: false,
    },
    {
      id: 5,
      title: "Bomberzilla Portal",
      description: "Portal developed for the mobile game Bomberzilla, a game created for the NFT market, in the P2E (Play to Earn) segment.",
      link: links.bbz,
      images: images.bbz,
      isPrivate: false,
    },
  ],  
  pt: [
    {
      id: 0,
      title: "Portal Sony Playstation",
      description: "Website responsivo para a console Playstation e seus jogos exclusivos da Sony. Desenvolvido para fins de estudo e prática de desenvolvimento web.",
      link: links.sony,
      images: images.sony,
      isPrivate: false,
    },
    {
      id: 1,
      title: "Dashboard Findme",
      description: "Dashboard para análise de dados, desenvolvido para gerenciar e monitorar operações de segurança e facilities das empresas aderentes ao uso do sistema FindMe.",
      link: links.findme,
      images: images.findme,
      isPrivate: true,
    },
    {
      id: 2,
      title: "Git Explore",
      description: "Website desenvolvido para explorar a API do Github. Desenvolvido para fins de estudo e prática de desenvolvimento web.",
      link: links.gitExplore,
      images: images.gitExplore,
      isPrivate: false,
    },
    {
      id: 3,
      title: "Anne AI",
      description: "Sistema de IA para explorar as capacidades da API da OpenAI e seus modelos de machine learning. Neste projeto é possível conversar com uma IA chamada Anne, que simula uma pessoa real para responder perguntas e realizar tarefas.",
      link: links.anneAI,
      images: images.anneAI,
      isPrivate: false,
    },
    {
      id: 4,
      title: "Portal Dot",
      description: "Website responsivo para a empresa Dot, desenvolvido para fins de estudo e prática de desenvolvimento web.",
      link: links.dot,
      images: images.dot,
      isPrivate: false,
    },
    {
      id: 5,
      title: "Portal Bomberzilla",
      description: "Portal desenvolvido para o game mobile Bomberzilla, um jogo criado para o mercado de NFTs, no segmento de P2E (Play to Earn).",
      link: links.bbz,
      images: images.bbz,
      isPrivate: false,
    },
  ],
}
