import { useLanguage } from '../../hooks/useLanguage'
import DioramaImage from '/assets/diorama.png'

export default function DioramaBanner() {
  const { translation } = useLanguage()

  return (
    <main className="flex justify-center items-center relative bg-gradient-transparent z-2">
      <section className="flex flex-col items-center gap-10 p-5 lg:flex-row lg:justify-around lg:items-start lg:gap-15 lg:w-[90%]">
        <div className="flex flex-col gap-10 text-center lg:text-left lg:mt-25 lg:gap-5 lg:w-[40%]">
          <h1 className="text-white font-bold text-4xl md:text-5xl lg:text-6xl">
            <span>{translation.greeting.title}</span>
            <span className='hand-wave'>👋🏻</span>
          </h1>
          <p className="text-white">
            <span>{translation.greeting.description}</span>
          </p>
        </div>

        <img
          src={DioramaImage}
          alt="Diorama"
          className="w-150 levitate"
        />
      </section>
    </main>
  )
}
