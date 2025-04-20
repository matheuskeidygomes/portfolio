import { useState } from 'react'
import LanguageButton from '../../languageButton'
import MenuNav from '../../menuNav'
import MenuButton from '../../menuButton'
import Logo from '../../logo'
import MenuAside from '../../menuAside'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <header className="flex justify-center items-center glassmorphism z-3">
      <div className="flex gap-5 p-5 w-[90%] justify-between items-center">
        <Logo />
        <div className="flex items-center justify-between md:gap-15">
          <MenuButton isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
          <MenuNav />
          <LanguageButton />
        </div>
      </div>
      <MenuAside isMenuOpen={isMenuOpen} />
    </header>
  )
}
