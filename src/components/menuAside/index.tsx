import { useLanguage } from '../../hooks/useLanguage'
import { menuOptions } from '../menuNav/menuOptions'
import { Link } from 'react-router-dom' 

interface MenuAsideProps {
  isMenuOpen: boolean
}

export default function MenuAside({ isMenuOpen }: MenuAsideProps) {
  const { translation } = useLanguage()

  return (
    <aside className={`${isMenuOpen ? 'block' : 'hidden'} bg-black absolute top-0 right-0 z-10 w-50 min-h-screen flex flex-col menu-slide-in`}>
      {menuOptions.map((option: { id: string; path: string }) => (
        <Link to={option.path}>{translation.navbar[option.id as keyof typeof translation.navbar]}</Link>
      ))}
    </aside>
  )
}
