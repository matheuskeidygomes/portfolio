interface MenuButtonProps { 
  isMenuOpen: boolean
  setIsMenuOpen: (isMenuOpen: boolean) => void
}

export default function MenuButton({ isMenuOpen, setIsMenuOpen }: MenuButtonProps) {
  return (
    <button 
    className="md:hidden flex flex-col justify-center items-center gap-1.5 z-10 cursor-pointer hover:scale-110 transition-all duration-300"
    onClick={() => setIsMenuOpen(!isMenuOpen)}
    aria-label="Toggle menu"
  >
    <span className={`block w-7 h-0.5 bg-white transition-all ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
    <span className={`block w-7 h-0.5 bg-white transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></span>
    <span className={`block w-7 h-0.5 bg-white transition-all ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
  </button>
  )
}
