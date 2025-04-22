export default function Content({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-1 relative h-screen">
      {children}
    </div>
  )
}
