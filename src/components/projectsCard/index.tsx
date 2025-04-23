import { translations } from "../../utils/translations";
import { useLanguage } from "../../hooks/useLanguage";

export default function ProjectsCard({
  image,
  title,
  description,
  setModalOpen,
}: {
  image: string,
  title: string,
  description: string,
  setModalOpen?: () => void,
}) {
  const { language } = useLanguage();

  return (
    <div className="card glassmorphism border-1 border-gray-800 rounded-lg shadow-lg transition-all duration-300 hover:translate-y-[-5px] cursor-pointer">
      <div className="card-image rounded-t-lg">
        <img src={image} alt="Project 1" className="w-[100%] rounded-t-lg" />
      </div>
      <div className="card-content p-4 flex flex-col gap-5">
        <h2 className="text-xl text-white font-bold">{title}</h2>
        <p className="card-description text-gray-400">
          {description}
        </p>

        <button
          className="flex justify-center gap-3 items-center self-end max-w-[150px] text-gray-200 bg-[#0A0D2D] font-semibold px-4 py-2 border-2 rounded-full group cursor-pointer"
          type="submit"
          onClick={setModalOpen}
        > 
          {translations[language].projects.card.buttonText}
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
  )
}
