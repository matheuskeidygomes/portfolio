import { useLanguage } from '../../hooks/useLanguage'
import { menuOptions } from './menuOptions'
import { Link } from 'react-router-dom'
import LanguageButton from '../languageButton'
import { useEffect } from 'react' 
import { useResizeListener } from '../../hooks/useResizeListener'

export default function MenuNav({ isMenuOpen, setIsMenuOpen }: { isMenuOpen: boolean, setIsMenuOpen: (isMenuOpen: boolean) => void }) {
  const { translation } = useLanguage()
  const windowWidth = useResizeListener()

  useEffect(() => {
    if (windowWidth > 768 && isMenuOpen) {
      setIsMenuOpen(false)
    }
  }, [windowWidth])

  return (
    <nav 
      className={`
        gap-8
        ${isMenuOpen ? 'flex flex-col items-center justify-center menu-slide-in text-lg fixed top-0 left-0 w-full h-screen bg-[#071d39ed] z-1' : 'hidden'} 
        md:flex md:flex-row md:justify-between md:text-md
      `}
    >
      {menuOptions.map((option: { id: string; path: string }) => (
        <Link
          key={option.id}
          to={option.path}
          className="text-white relative cursor-pointer transition-colors duration-200 hover:text-[#2fe7fe] hover:text-shadow-neon text-decoration-none"
          onClick={() => setIsMenuOpen(false)}
        >
          {translation.navbar[option.id as keyof typeof translation.navbar]}
        </Link>
      ))}
      <LanguageButton />
    </nav>
  )
}

