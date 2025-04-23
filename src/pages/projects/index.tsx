import ZeldaRoomBanner from '../../components/zeldaRoomBanner'
import ProjectsList from '../../components/projectsList'
import ParticlesBackground from '../../components/particlesBackground'

export default function Projects() {
  return (
    <div className="flex flex-col w-full items-center gap-10">
      <ParticlesBackground />
      <ZeldaRoomBanner />
      <ProjectsList />
    </div>
  )
}
