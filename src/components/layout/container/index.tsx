export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col w-full min-h-screen bg-gradient">
      {children}
    </div>
  )
}
