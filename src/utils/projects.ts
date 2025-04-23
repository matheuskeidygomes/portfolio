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
      description: "A portal for the Sony Playstation, with a modern and responsive design.",
      link: links.sony,
      images: images.sony,
      isPrivate: false,
    },
    {
      id: 1,
      title: "Dashboard Findme",
      description: "A dashboard for the Findme, with a modern and responsive design.",
      link: links.findme,
      images: images.findme,
      isPrivate: true,
    },
    {
      id: 2,
      title: "Git Explore",
      description: "A explore for the Git, with a modern and responsive design.",
      link: links.gitExplore,
      images: images.gitExplore,
      isPrivate: false,
    },
    {
      id: 3,
      title: "Anne AI",
      description: "A AI for the Anne, with a modern and responsive design.",
      link: links.anneAI,
      images: images.anneAI,
      isPrivate: false,
    },
    {
      id: 4,
      title: "Dot Portal",
      description: "A portal for the Dot, with a modern and responsive design.",
      link: links.dot,
      images: images.dot,
      isPrivate: false,
    },
    {
      id: 5,
      title: "Bomberzilla Portal",
      description: "A portal for the Bomberzilla, with a modern and responsive design.",
      link: links.bbz,
      images: images.bbz,
      isPrivate: false,
    },
  ],  
  pt: [
    {
      id: 0,
      title: "Portal da Sony Playstation",
      description: "Um portal para a Sony Playstation, com um design moderno e responsivo.",
      link: links.sony,
      images: images.sony,
      isPrivate: false,
    },
    {
      id: 1,
      title: "Dashboard Findme",
      description: "Um dashboard para a Findme, com um design moderno e responsivo.",
      link: links.findme,
      images: images.findme,
      isPrivate: true,
    },
    {
      id: 2,
      title: "Git Explore",
      description: "Um explore para o Git, com um design moderno e responsivo.",
      link: links.gitExplore,
      images: images.gitExplore,
      isPrivate: false,
    },
    {
      id: 3,
      title: "Anne AI",
      description: "Um AI para a Anne, com um design moderno e responsivo.",
      link: links.anneAI,
      images: images.anneAI,
      isPrivate: false,
    },
    {
      id: 4,
      title: "Dot Portal",
      description: "Um portal para a Dot, com um design moderno e responsivo.",
      link: links.dot,
      images: images.dot,
      isPrivate: false,
    },
    {
      id: 5,
      title: "Bomberzilla Portal",
      description: "Um portal para a Bomberzilla, com um design moderno e responsivo.",
      link: links.bbz,
      images: images.bbz,
      isPrivate: false,
    },
  ],
}
