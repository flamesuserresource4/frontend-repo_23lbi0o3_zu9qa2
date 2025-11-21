import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Eye, EyeOff, Mail, Lock, LogIn } from 'lucide-react'

export default function LoginForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    setSuccess('')

    // For now, just fake a successful login with animation
    await new Promise((r) => setTimeout(r, 900))

    if (!email || !password) {
      setError('Please enter your email and password')
      setLoading(false)
      return
    }

    setSuccess('Welcome back!')
    setLoading(false)
  }

  return (
    <motion.div
      initial={{ y: 30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 120, damping: 18 }}
      className="relative z-10 w-full max-w-md"
    >
      <div className="backdrop-blur-xl bg-white/10 border border-white/15 rounded-2xl p-8 shadow-2xl">
        <div className="flex items-center gap-3 mb-6">
          <div className="h-10 w-10 rounded-xl bg-blue-500/20 border border-blue-400/30 flex items-center justify-center">
            <LogIn className="text-blue-300" size={20} />
          </div>
          <div>
            <h2 className="text-white text-2xl font-semibold leading-tight">Welcome back</h2>
            <p className="text-blue-200/70 text-sm">Sign in to continue</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <label className="block text-sm">
            <span className="text-blue-100/80">Email</span>
            <div className="mt-1 relative">
              <Mail size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-200/60" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full bg-white/10 text-white placeholder-blue-200/50 border border-white/15 rounded-xl py-3 pl-10 pr-3 focus:outline-none focus:ring-2 focus:ring-blue-400/60 focus:border-blue-300/40 transition"
              />
            </div>
          </label>

          <label className="block text-sm">
            <span className="text-blue-100/80">Password</span>
            <div className="mt-1 relative">
              <Lock size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-200/60" />
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full bg-white/10 text-white placeholder-blue-200/50 border border-white/15 rounded-xl py-3 pl-10 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-400/60 focus:border-blue-300/40 transition"
              />
              <button
                type="button"
                aria-label="Toggle password visibility"
                onClick={() => setShowPassword((s) => !s)}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-blue-200/70 hover:text-white/90"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </label>

          <div className="flex items-center justify-between pt-1">
            <label className="inline-flex items-center gap-2 text-blue-100/80 text-sm">
              <input type="checkbox" className="accent-blue-500/80" />
              Remember me
            </label>
            <button type="button" className="text-sm text-blue-300 hover:text-white/90">
              Forgot password?
            </button>
          </div>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full relative overflow-hidden rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500 text-white py-3 font-medium shadow-lg shadow-blue-500/25"
          >
            <AnimatePresence initial={false}>
              {loading ? (
                <motion.span
                  key="loading"
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 6 }}
                  className="inline-flex items-center gap-2"
                >
                  <span className="inline-block h-2 w-2 rounded-full bg-white/90 animate-bounce [animation-delay:0ms]"></span>
                  <span className="inline-block h-2 w-2 rounded-full bg-white/90 animate-bounce [animation-delay:120ms]"></span>
                  <span className="inline-block h-2 w-2 rounded-full bg-white/90 animate-bounce [animation-delay:240ms]"></span>
                  Signing in...
                </motion.span>
              ) : (
                <motion.span
                  key="label"
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 6 }}
                  className="inline-flex items-center gap-2"
                >
                  <LogIn size={18} />
                  Sign in
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>

          <AnimatePresence>
            {error && (
              <motion.p
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                className="text-red-300 text-sm"
              >
                {error}
              </motion.p>
            )}
          </AnimatePresence>
          <AnimatePresence>
            {success && (
              <motion.p
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                className="text-emerald-300 text-sm"
              >
                {success}
              </motion.p>
            )}
          </AnimatePresence>
        </form>

        <div className="pt-6 text-center text-sm text-blue-200/70">
          <span className="opacity-80">New here?</span>{' '}
          <button className="text-blue-300 hover:text-white/90">Create an account</button>
        </div>
      </div>

      {/* Glow ring */}
      <motion.div
        className="absolute -inset-0.5 rounded-3xl bg-gradient-to-r from-blue-500/30 to-indigo-500/30 blur-2xl -z-10"
        animate={{ opacity: [0.4, 0.7, 0.5, 0.8, 0.6] }}
        transition={{ duration: 6, repeat: Infinity }}
      />
    </motion.div>
  )
}
