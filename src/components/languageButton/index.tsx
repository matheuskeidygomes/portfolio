import { useLanguage } from '../../hooks/useLanguage';

export default function LanguageButton() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <div className="flex items-center justify-center">
      <button
        onClick={toggleLanguage}
        className="relative flex items-center w-16 h-8 rounded-full bg-gray-800/60 border border-[#2fe7fe] p-1 transition-all duration-300 focus:outline-none cursor-pointer"
        aria-label={`Change language to ${language === 'en' ? 'Portuguese' : 'English'}`}
      >
        <span className={`absolute text-xs font-medium left-2 z-10 transition-all duration-300 ${language === 'pt' ? 'text-black font-bold opacity-50' : 'text-[#2fe7fe] font-bold'}`}>
          PT
        </span>
        <span className={`absolute text-xs font-medium right-2 z-10 transition-all duration-300 ${language === 'en' ? 'text-black  font-bold opacity-50' : 'text-[#2fe7fe] font-bold'}`}>
          EN
        </span>

        <span
          className={`absolute w-6 h-6 rounded-full bg-[#2fe7fe] transform transition-all duration-300 ease-in-out shadow-[0_0_8px_#2fe7fe] ${language === 'pt' ? 'translate-x-0' : 'translate-x-7.5'
            }`}
        />
      </button>
    </div>
  );
} 