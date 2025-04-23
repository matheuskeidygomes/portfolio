import { useEffect, useState } from 'react'
import { translations } from '../../utils/translations'
import { useLanguage } from '../../hooks/useLanguage'
import ZeldaRoom from '/assets/zelda-room.gif'

export default function ZeldaRoomBanner() {
  const { language } = useLanguage()
  const [displayedText, setDisplayedText] = useState('')

  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < translations[language].projects.banner.message.length) {
        setDisplayedText(translations[language].projects.banner.message.substring(0, i + 1));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, 20);

    return () => clearInterval(typingInterval);
  }, [language]);

  return (
    <div className="flex max-h-[400px] relative border-b-1 border-gray-800">
    <img src={ZeldaRoom} alt="Zelda Room" className="object-cover w-full h-[250px] md:h-auto" />

    <div className="bg-white rounded-xl p-2 min-w-[200px] max-w-[200px] border-1 border-black absolute bottom-2/3 left-[45%] sm:left-[50%] md:left-[55%]">
      <p className={`text-xs lg:text-sm`}>
        {displayedText}
      </p>
      <div className="absolute w-3 h-3 bg-white border-r-2 border-b-2 border-gray-800 transform rotate-45 -bottom-2 left-[40%]"></div>
    </div>
  </div>
  )
}
