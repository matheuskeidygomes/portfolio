import { useEffect, useState, useRef } from 'react'
import Swampert from '/assets/swampert.gif'
import Torterra from '/assets/torterra.gif'
import Charizard from '/assets/charizard.gif'
import Rayquaza from '/assets/rayquaza.gif'
import Metagross from '/assets/metagross.gif'
import Gengar from '/assets/gengar.gif'
import MeInBits from '/assets/me-in-bits.png'
import Mew from '/assets/mew.gif'
import Beedrill from '/assets/beedrill.gif'
import BeedrillBack from '/assets/beedrill-back.gif'
import ButterfreeBack from '/assets/butterfree-back.gif'
import Caterpie from '/assets/caterpie.gif'
import Pikachu from '/assets/pikachu.gif'
import MewCry from '/audios/mew.mp3'
import BeedrillCry from '/audios/beedrill.mp3'
import ButterfreeCry from '/audios/butterfree.mp3'
import CaterpieCry from '/audios/caterpie.mp3'
import PikachuCry from '/audios/pikachu.mp3'
import SwampertCry from '/audios/swampert.mp3'
import TorterraCry from '/audios/torterra.mp3'
import CharizardCry from '/audios/charizard.mp3'
import RayquazaCry from '/audios/rayquaza.mp3'
import MetagrossCry from '/audios/metagross.mp3'
import GengarCry from '/audios/gengar.mp3'
import LittleRootTown from '/audios/litte-root-town.mp3'
import { useLanguage } from '../../hooks/useLanguage'
import { translations } from '../../utils/translations'
import Toasty from '/assets/toasty.png'
import ToastyCry from '/audios/toasty.mp3'

export default function PokemonTrainerBanner() {
  const { language } = useLanguage();
  const [isSoundOn, setIsSoundOn] = useState(false)
  const [messageId, setMessageId] = useState('welcome');
  const [messageIndex, setMessageIndex] = useState(1);
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const backgroundAudioRef = useRef<HTMLAudioElement | null>(null);
  const [toastyCount, setToastyCount] = useState(0);
  const fullMessageRef = useRef('');

  function playAudio(audio: string) {
    const media = new Audio(audio)
    media.play()
  }

  function changeMessageIndex(index: number) {
    const nextIsUndefined = nextIndexIsUndefined(index)
    if (nextIsUndefined) return;
    setMessageIndex(index)
  }

  function nextIndexIsUndefined(index: number) {
    const nextIndexIsUndefined = translations[language].banner.messages[messageId as keyof typeof translations[typeof language]['banner']['messages']][index] === undefined
    if (nextIndexIsUndefined) return true;
    return false;
  }

  useEffect(() => {
    if (!backgroundAudioRef.current) {
      backgroundAudioRef.current = new Audio(LittleRootTown)
      backgroundAudioRef.current.loop = true
    }

    if (isSoundOn) {
      backgroundAudioRef.current.play()
    } else {
      backgroundAudioRef.current.pause()
    }

    return () => {
      if (backgroundAudioRef.current) {
        backgroundAudioRef.current.pause()
      }
    }
  }, [isSoundOn])

  useEffect(() => {
    const currentMessage = translations[language].banner.messages[messageId as keyof typeof translations[typeof language]['banner']['messages']][messageIndex];
    if (!currentMessage) return;
    
    fullMessageRef.current = currentMessage;
    setDisplayedText('');
    setIsTyping(true);
    
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < fullMessageRef.current.length) {
        setDisplayedText(fullMessageRef.current.substring(0, i + 1));
        i++;
      } else {
        clearInterval(typingInterval);
        setIsTyping(false);
      }
    }, 20);

    return () => clearInterval(typingInterval);
  }, [messageIndex, messageId, language]);

  useEffect(() => {
    if (toastyCount === 10) {
      playAudio(ToastyCry);
    }
  }, [toastyCount]);

  return (
    <div className="flex items-center justify-center background-garden pt-25 relative overflow-hidden w-full">
      {/* Scenario */}
      <img
        src={Mew}
        alt="Mew"
        className=" absolute top-5 left-15 scale-x-[-1] w-20 z-1 lg:w-25 levitate-around cursor-pointer"
        onClick={() => playAudio(MewCry)}
      />
      <img
        src={BeedrillBack}
        alt="Beedrill"
        className="absolute top-10 right-1/3 w-20 z-2 lg:w-25 lg:top-5 levitate cursor-pointer"
        onClick={() => playAudio(BeedrillCry)}
      />
      <img
        src={Beedrill}
        alt="Beedrill"
        className="absolute top-10 right-1/3 w-20 z-1 -mr-10 lg:w-25 lg:top-5 lg:-mr-15 levitate cursor-pointer"
        onClick={() => playAudio(BeedrillCry)}
      />
      <img
        src={ButterfreeBack}
        alt="Butterfree"
        className="absolute top-5 right-5 w-15 lg:w-25 z-1 levitate cursor-pointer"
        onClick={() => playAudio(ButterfreeCry)}
      />
      <img
        src={Caterpie}
        alt="Caterpie"
        className="absolute bottom-[20%] left-[15%] scale-x-[-1] w-13 z-1 cursor-pointer"
        onClick={() => playAudio(CaterpieCry)}
      />
      <img
        src={Pikachu}
        alt="Pikachu"
        className="absolute top-[40%] right-[5%] w-10 z-1 cursor-pointer lg:w-15"
        onClick={() => playAudio(PikachuCry)}
      />

      {/* Pokemon Trainer with his team */}
      <img
        src={Swampert}
        alt="Swampert"
        className="scale-x-[-1] w-30 -ml-10 -mt-20 z-1 lg:w-50 cursor-pointer"
        onClick={() => playAudio(SwampertCry)}
      />
      <img
        src={Torterra}
        alt="Torterra"
        className="scale-x-[-1] w-30 -ml-10 -mt-15 z-2 lg:w-50 cursor-pointer"
        onClick={() => playAudio(TorterraCry)}
      />
      <img
        src={Charizard}
        alt="Charizard"
        className="scale-x-[-1] w-30 -ml-10 -mt-10 z-3 lg:w-50 cursor-pointer"
        onClick={() => playAudio(CharizardCry)}
      />

      <div className="w-40 -ml-15 -mr-15 z-4 lg:w-60 relative">
        {/* Message */}
        <div className="bg-white rounded-xl p-2 w-full border-1 border-black absolute bottom-full left-1/2 transform -translate-x-1/2">
          <p className={`text-sm text-center min-h-[3rem]`}>
            {displayedText}
            {isTyping && <span className="animate-pulse">|</span>}
          </p>

          <div className="flex justify-between w-full">
            {!nextIndexIsUndefined(messageIndex - 1) ? (
              <button 
                onClick={() => changeMessageIndex(messageIndex - 1)} 
                className="font-bold text-2xl cursor-pointer"
                disabled={isTyping}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 ${isTyping ? 'opacity-50' : ''}`} viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </button>
            ) : <div></div>
            }

            {!nextIndexIsUndefined(messageIndex + 1) ? (
              <button 
                onClick={() => changeMessageIndex(messageIndex + 1)} 
                className="font-bold text-2xl cursor-pointer"
                disabled={isTyping}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 ${isTyping ? 'opacity-50' : ''}`} viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </button>
            ) : <div></div>
            }
          </div>

          <div className="absolute w-3 h-3 bg-white border-r-2 border-b-2 border-gray-800 transform rotate-45 -bottom-2 left-[40%]"></div>
        </div>

        <img src={MeInBits} alt="Me in bits" className='w-full' onClick={() => setToastyCount((prev) => prev >= 10 ? prev : prev + 1)} />
      </div>

      <img
        src={Gengar}
        alt="Gengar"
        className="w-30 -mr-10 -mt-10 z-3 lg:w-50 cursor-pointer"
        onClick={() => playAudio(GengarCry)}
      />
      <img
        src={Metagross}
        alt="Metagross"
        className="w-30 -mr-10 -mt-15 z-2 lg:w-50 cursor-pointer"
        onClick={() => playAudio(MetagrossCry)}
      />
      <img src={Rayquaza}
        alt="Rayquaza"
        className="w-30 -mr-10 -mt-20 z-1 lg:w-50 cursor-pointer"
        onClick={() => playAudio(RayquazaCry)}
      />

      {/* Toggle Sound */}
      <button
        className="absolute left-3 bottom-3 p-2 bg-black opacity-80 rounded-full cursor-pointer hover:bg-opacity-50 transition-all z-10 text-white"
        onClick={() => setIsSoundOn(!isSoundOn)}
        aria-label={isSoundOn ? "Mute sound" : "Unmute sound"}
      >
        {isSoundOn ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15.536 8.464a5 5 0 010 7.072M12 6a9 9 0 010 12m-4.5-9.5l-1.5 1.5M7.5 14.5L9 13m0 0l-2-2m2 2l2-2m-2 2l-2 2" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 14l2-2m-2 2l-2-2m2 2l2 2m-2-2l-2 2" />
          </svg>
        )}
      </button>

      {/* Menu Screen */}
      <div className="absolute bottom-0 right-0 border-1 border-black rounded-md flex items-center justify-center w-full md:w-120 h-35 glassmorphism z-5">
        <div className="w-full h-full flex flex-wrap gap-2 p-1 text-white font-bold">
          <button
            onClick={() => { setMessageId('about'); setMessageIndex(1) }}
            className="flex-1 min-w-[calc(30%-0.5rem)] bg-red-800 rounded-xl p-2 text-sm border-8 border-red-700 cursor-pointer transition-all hover:bg-red-600 hover:scale-102 uppercase">
            {translations[language].trainer.options.about}
          </button>
          <button
            onClick={() => { setMessageId('objective'); setMessageIndex(1) }}
            className="flex-1 min-w-[calc(30%-0.5rem)] bg-yellow-800 rounded-xl p-2 text-sm border-8 border-yellow-700 cursor-pointer transition-all hover:bg-yellow-600 hover:scale-102 uppercase">
            {translations[language].trainer.options.objective}
          </button>
          <button
            onClick={() => { setMessageId('experience'); setMessageIndex(1) }}
            className="flex-1 min-w-[calc(30%-0.5rem)] bg-green-800 rounded-xl p-2 text-sm border-8 border-green-700 cursor-pointer transition-all hover:bg-green-600 hover:scale-102 uppercase">
            {translations[language].trainer.options.experience}
          </button>
          <button
            onClick={() => { setMessageId('hobbies'); setMessageIndex(1) }}
            className="flex-1 min-w-[calc(30%-0.5rem)] bg-blue-800 rounded-xl p-2 text-sm border-8 border-blue-700 cursor-pointer transition-all hover:bg-blue-600 hover:scale-102 uppercase">
            {translations[language].trainer.options.hobbies}
          </button>
          <button
            onClick={() => { setMessageId('technologies'); setMessageIndex(1) }}
            className="flex-1 min-w-[calc(30%-0.5rem)] bg-purple-800 rounded-xl p-2 text-sm border-8 border-purple-700 cursor-pointer transition-all hover:bg-purple-600 hover:scale-102 uppercase">
            {translations[language].trainer.options.technologies}
          </button>
          <button
            onClick={() => { setMessageId('languages'); setMessageIndex(1) }}
            className="flex-1 min-w-[calc(30%-0.5rem)] bg-orange-800 rounded-xl p-2 text-sm border-8 border-orange-700 cursor-pointer transition-all hover:bg-orange-600 hover:scale-102 uppercase">
            {translations[language].trainer.options.languages}
          </button>
        </div>
      </div>

      {/* Toasty Easter egg */}
      {toastyCount === 10 && (
        <img src={Toasty} alt="Toasty" className="w-30 absolute rotate-[-60deg] bottom-[200px] right-[-130px] z-6 toasty-animation" />
      )}
    </div>
  )
}
