import ZeldaRoomBanner from '../../components/zeldaRoomBanner'
import ProjectsList from '../../components/projectsList'

export default function Projects() {
  return (
    <div className="flex flex-col w-full items-center gap-10">
      <ZeldaRoomBanner />
      <ProjectsList />
    </div>
  )
}
