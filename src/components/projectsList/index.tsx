import Spiderman from '/assets/spiderman.png'
import Dashboard from '/assets/dashboard.png'
import GitExplore from '/assets/git-explore.png'
import AnneAI from '/assets/anne-ai.png'
import Dot from '/assets/dot.png'
import Bbz from '/assets/bbz.png'

export default function ProjectsList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:flex-row gap-5 justify-center items-center w-[90%] pb-10">
      <div className="card glassmorphism border-1 border-gray-800 rounded-lg shadow-lg transition-all duration-300 hover:translate-y-[-5px] cursor-pointer">
        <div className="card-image rounded-t-lg">
          <img src={Spiderman} alt="Project 1" className="w-[100%] rounded-t-lg" />
        </div>
        <div className="card-content p-4 flex flex-col gap-5">
          <h2 className="text-xl text-white font-bold">Sony Playstation Portal</h2>
          <p className="card-description text-gray-400">
            Um projeto de portal para a Sony Playstation, com um design moderno e responsivo.
          </p>

          <button
            className="flex justify-center gap-3 items-center self-end max-w-[150px] text-gray-200 bg-[#0A0D2D] font-semibold px-4 py-2 border-2 rounded-full group cursor-pointer"
            type="submit"
          >
            Ver mais
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 19"
              className="w-8 h-8 justify-end bg-gray-50 group-hover:rotate-90 group-hover:bg-gray-50 text-gray-50 ease-linear duration-300 rounded-full border border-gray-700 group-hover:border-none p-2 rotate-45"
            >
              <path
                className="fill-gray-800 group-hover:fill-gray-800"
                d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      <div className="card glassmorphism border-1 border-gray-800 rounded-lg shadow-lg transition-all duration-300 hover:translate-y-[-5px] cursor-pointer">
        <div className="card-image rounded-t-lg">
          <img src={GitExplore} alt="Project 1" className="w-[100%] rounded-t-lg" />
        </div>
        <div className="card-content p-4 flex flex-col gap-5">
          <h2 className="text-xl text-white font-bold">Git Explore</h2>
          <p className="card-description text-gray-400">
            Projeto de aplicação web desenvolvido para explorar a API do GitHub.
          </p>

          <button
            className="flex justify-center gap-3 items-center self-end max-w-[150px] text-gray-200 bg-[#0A0D2D] font-semibold px-4 py-2 border-2 rounded-full group cursor-pointer"
            type="submit"
          >
            Ver mais
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 19"
              className="w-8 h-8 justify-end bg-gray-50 group-hover:rotate-90 group-hover:bg-gray-50 text-gray-50 ease-linear duration-300 rounded-full border border-gray-700 group-hover:border-none p-2 rotate-45"
            >
              <path
                className="fill-gray-800 group-hover:fill-gray-800"
                d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      <div className="card glassmorphism border-1 border-gray-800 rounded-lg shadow-lg transition-all duration-300 hover:translate-y-[-5px] cursor-pointer">
        <div className="card-image rounded-t-lg">
          <img src={Dashboard} alt="Project 1" className="w-[100%] rounded-t-lg" />
        </div>
        <div className="card-content p-4 flex flex-col gap-5">
          <h2 className="text-xl text-white font-bold">Dashboard FindMe</h2>
          <p className="card-description text-gray-400">
            Dashboard para análise de dados desenvolvido para gerenciar e monitorar operações de segurança e facilities das empresas aderentes ao sistema FindMe.
          </p>

          <button
            className="flex justify-center gap-3 items-center self-end max-w-[150px] text-gray-200 bg-[#0A0D2D] font-semibold px-4 py-2 border-2 rounded-full group cursor-pointer"
            type="submit"
          >
            Ver mais
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 19"
              className="w-8 h-8 justify-end bg-gray-50 group-hover:rotate-90 group-hover:bg-gray-50 text-gray-50 ease-linear duration-300 rounded-full border border-gray-700 group-hover:border-none p-2 rotate-45"
            >
              <path
                className="fill-gray-800 group-hover:fill-gray-800"
                d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      <div className="card glassmorphism border-1 border-gray-800 rounded-lg shadow-lg transition-all duration-300 hover:translate-y-[-5px] cursor-pointer">
        <div className="card-image rounded-t-lg">
          <img src={AnneAI} alt="Project 1" className="w-[100%] rounded-t-lg" />
        </div>
        <div className="card-content p-4 flex flex-col gap-5">
          <h2 className="text-xl text-white font-bold">Anne AI</h2>
          <p className="card-description text-gray-400">
            Projeto de aplicação web desenvolvido para explorar as funcionalidades da integração com a API do OpenAI, através de diversos modelos de machine learning.
          </p>

          <button
            className="flex justify-center gap-3 items-center self-end max-w-[150px] text-gray-200 bg-[#0A0D2D] font-semibold px-4 py-2 border-2 rounded-full group cursor-pointer"
            type="submit"
          >
            Ver mais
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 19"
              className="w-8 h-8 justify-end bg-gray-50 group-hover:rotate-90 group-hover:bg-gray-50 text-gray-50 ease-linear duration-300 rounded-full border border-gray-700 group-hover:border-none p-2 rotate-45"
            >
              <path
                className="fill-gray-800 group-hover:fill-gray-800"
                d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      <div className="card glassmorphism border-1 border-gray-800 rounded-lg shadow-lg transition-all duration-300 hover:translate-y-[-5px] cursor-pointer">
        <div className="card-image rounded-t-lg">
          <img src={Bbz} alt="Project 1" className="w-[100%] rounded-t-lg" />
        </div>
        <div className="card-content p-4 flex flex-col gap-5">
          <h2 className="text-xl text-white font-bold">Bomberzilla</h2>
          <p className="card-description text-gray-400">
            Portal web desenvolvido para o jogo Bomberzilla, um jogo NFT comercializado na plataforma de jogos P2E (Play to Earn).
          </p>

          <button
            className="flex justify-center gap-3 items-center self-end max-w-[150px] text-gray-200 bg-[#0A0D2D] font-semibold px-4 py-2 border-2 rounded-full group cursor-pointer"
            type="submit"
          >
            Ver mais
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 19"
              className="w-8 h-8 justify-end bg-gray-50 group-hover:rotate-90 group-hover:bg-gray-50 text-gray-50 ease-linear duration-300 rounded-full border border-gray-700 group-hover:border-none p-2 rotate-45"
            >
              <path
                className="fill-gray-800 group-hover:fill-gray-800"
                d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      <div className="card glassmorphism border-1 border-gray-800 rounded-lg shadow-lg transition-all duration-300 hover:translate-y-[-5px] cursor-pointer">
        <div className="card-image rounded-t-lg">
          <img src={Dot} alt="Project 1" className="w-[100%] rounded-t-lg" />
        </div>
        <div className="card-content p-4 flex flex-col gap-5">
          <h2 className="text-xl text-white font-bold">Dot</h2>
          <p className="card-description text-gray-400">
            Portal web responsivo desenvolvido para a empresa Dot.
          </p>

          <button
            className="flex justify-center gap-3 items-center self-end max-w-[150px] text-gray-200 bg-[#0A0D2D] font-semibold px-4 py-2 border-2 rounded-full group cursor-pointer"
            type="submit"
          >
            Ver mais
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 19"
              className="w-8 h-8 justify-end bg-gray-50 group-hover:rotate-90 group-hover:bg-gray-50 text-gray-50 ease-linear duration-300 rounded-full border border-gray-700 group-hover:border-none p-2 rotate-45"
            >
              <path
                className="fill-gray-800 group-hover:fill-gray-800"
                d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}
