import Router from './routes'
import ContextsProvider from './contexts/index.tsx'

export default function App() {
  return (
    <ContextsProvider>
      <Router />
    </ContextsProvider>
  )
}