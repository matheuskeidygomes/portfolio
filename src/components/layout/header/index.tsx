import { useState } from 'react'
import MenuNav from '../../menuNav'
import MenuButton from '../../menuButton'
import Logo from '../../logo'
import { useScrollLock } from '../../../hooks/useScrollLock'
import { Link } from 'react-router-dom'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useScrollLock(isMenuOpen);
  
  return (
    <header className={`flex justify-center items-center glassmorphism ${isMenuOpen ? 'z-10' : 'z-8'}`}>
      <div className="flex gap-5 p-5 w-[90%] justify-between items-center">
        <Link to="/">
          <Logo />
        </Link>
        <div className="flex items-center justify-between md:gap-15">
          <MenuNav isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
          <MenuButton isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        </div>
      </div>
    </header>
  )
}
