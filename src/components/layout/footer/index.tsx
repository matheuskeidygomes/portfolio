import { useLanguage } from '../../../hooks/useLanguage'

export default function Footer() {
  const { translation } = useLanguage()

  return (
    <footer className="flex justify-center items-center glassmorphism">
      <div className="flex flex-col gap-5 md:flex-row md:justify-between items-center p-5 w-[90%] text-white">
        <p>{translation.footer.rights}</p>
      </div>
    </footer>
  )
}
