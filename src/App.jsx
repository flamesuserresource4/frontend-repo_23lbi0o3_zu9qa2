import AnimatedBackground from './components/AnimatedBackground'
import LoginForm from './components/LoginForm'

function App() {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-slate-950 text-white overflow-hidden">
      {/* Ambient animated background */}
      <AnimatedBackground />

      {/* Header */}
      <div className="absolute top-6 left-1/2 -translate-x-1/2 text-center">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">Welcome to Your Space</h1>
        <p className="text-blue-200/70 mt-2 text-sm sm:text-base">Sign in to continue</p>
      </div>

      {/* Login card */}
      <LoginForm />

      {/* Decorative floating particles */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-24 left-[10%] h-2 w-2 rounded-full bg-blue-400/70 blur-[2px] animate-pulse" />
        <div className="absolute top-1/3 right-[12%] h-2 w-2 rounded-full bg-indigo-400/70 blur-[2px] animate-pulse [animation-delay:300ms]" />
        <div className="absolute bottom-24 left-[18%] h-2 w-2 rounded-full bg-sky-300/70 blur-[2px] animate-pulse [animation-delay:600ms]" />
      </div>
    </div>
  )
}

export default App
