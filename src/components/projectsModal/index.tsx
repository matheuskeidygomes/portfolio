import { useLanguage } from "../../hooks/useLanguage";
import { translations } from "../../utils/translations";
import { FaUserLock } from 'react-icons/fa'

interface Project {
  id: number;
  title: string;
  description: string;
  images: string[];
  link: string;
  isPrivate: boolean;
}

const Modal = ({ onClose, project }: { onClose: () => void, project: Project }) => {
  const { language } = useLanguage()

  return (
    <div className="fixed top-0 left-0 bottom-0 right-0 w-full h-full bg-black/80 flex justify-center items-center z-1">
      <div className="flex flex-col w-full max-h-[90vh] min-h-[600px] h-[80vh] bg-gradient opacity-95 menu-slide-in px-5 pb-5 pt-12 relative border-y-1 border-gray-800 overflow-y-auto overflow-x-hidden">
        <button
          className="flex flex-col justify-center items-center gap-1.5 cursor-pointer hover:scale-110 transition-all duration-300 absolute top-0 right-0 p-5"
          onClick={onClose}
          aria-label="Toggle modal"
        >
          <span className={`block w-7 h-0.5 bg-white transition-all rotate-45 translate-y-2`}></span>
          <span className={`block w-7 h-0.5 bg-white transition-all opacity-0`}></span>
          <span className={`block w-7 h-0.5 bg-white transition-all -rotate-45 -translate-y-2`}></span>
        </button>

        <div className="flex flex-col gap-2 w-full lg:w-[90%] lg:flex-row h-full self-center">
          <div className="flex-1 lg:flex-3 p-3 flex flex-col gap-3">
            <img src={project.images[0]} alt={project.title} className="w-full rounded-lg border-1 shadow-lg border-gray-800" />
            <div className="flex flex-row max-w-full gap-3 ">
              {project.images.map((image) => (
                <img src={image} alt={project.title} className="w-[20%] rounded-lg border-1 shadow-lg border-gray-800" />
              ))}
            </div>
          </div>

          <div className="flex-1 lg:flex-2 p-3 flex flex-col gap-5">
            <h1 className="text-3xl font-bold text-white">{project.title}</h1>
            <p className="text-md text-gray-300">{project.description}</p>
            {project.isPrivate && (
              <div className="text-gray-200 flex flex-row gap-2 items-center">
                <FaUserLock className="w-6" /> 
                <p className="text-md">{translations[language].projects.modal.isPrivate}</p>
              </div>
            )}
            <div className="flex flex-row gap-2">
              <button 
                className="w-full m-2 p-2 border-2 border-white text-white font-semibold rounded-tl-lg rounded-br-lg transition hover:scale-103 hover:bg-white hover:text-black hover:border-black duration-300 cursor-pointer"
                onClick={() => {
                  window.open(project.link, '_blank');
                }}
              >
                {translations[language].projects.modal.buttonText}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
