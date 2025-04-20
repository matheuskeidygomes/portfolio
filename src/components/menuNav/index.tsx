import { useLanguage } from '../../hooks/useLanguage'
import { menuOptions } from './menuOptions'
import { Link } from 'react-router-dom'

export default function MenuNav() {
  const { translation } = useLanguage()
  
  return (
    <nav>
      <div className={`hidden md:flex md:items-center md:gap-5 md:flex-row md:justify-between md:gap-8`}>
        {menuOptions.map((option: { id: string; path: string }) => (
          <Link
            key={option.id}
            to={option.path}
            className="text-white relative cursor-pointer transition-colors duration-200 hover:text-[#2fe7fe] hover:text-shadow-neon text-decoration-none"
          >
            {translation.navbar[option.id as keyof typeof translation.navbar]}
          </Link>
        ))}
      </div>
    </nav>
  )
}

