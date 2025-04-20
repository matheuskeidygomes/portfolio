import MatrixCanvas from '../../components/matrixCanvas'
import DioramaBanner from '../../components/dioramaBanner'

export default function Home() {
  return (
    <div className="flex flex-1 relative h-screen">
      <DioramaBanner />
      <MatrixCanvas />
    </div>
  )
}
