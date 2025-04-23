import { useState, useEffect } from 'react';
import { useLanguage } from '../../hooks/useLanguage';
import { translations } from '../../utils/translations';

export default function NotFound() {
  const { language } = useLanguage();
  const [displayedText, setDisplayedText] = useState('')

  useEffect(() => {
    let i = 0;
    
    const typingInterval = setInterval(() => {
      if (i < translations[language].notFound.title.length) {
        setDisplayedText(translations[language].notFound.title.substring(0, i + 1));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, 20);

    return () => {
      clearInterval(typingInterval);
    };
  }, [language]);


  return (
    <div className="flex items-center justify-center w-full background-souls">
      <div className="bg-white rounded-xl p-2 min-w-[200px] max-w-[260px] border-1 border-black relative mt-20 lg:-mt-25">
        <p className={`text-xs lg:text-sm`}>
          {displayedText}
        </p>
        <div className="absolute w-3 h-3 bg-white border-r-2 border-b-2 border-gray-800 transform rotate-45 -bottom-2 left-[7%]"></div>
      </div>
    </div>
  )
}
