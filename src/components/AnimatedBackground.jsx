import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { useEffect } from 'react'

export default function AnimatedBackground() {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const smoothX = useSpring(mouseX, { stiffness: 100, damping: 20 })
  const smoothY = useSpring(mouseY, { stiffness: 100, damping: 20 })

  const rotateX = useTransform(smoothY, [0, 1], [8, -8])
  const rotateY = useTransform(smoothX, [0, 1], [-8, 8])

  useEffect(() => {
    const onMove = (e) => {
      const { innerWidth, innerHeight } = window
      mouseX.set(e.clientX / innerWidth)
      mouseY.set(e.clientY / innerHeight)
    }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [mouseX, mouseY])

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Gradient blobs */}
      <motion.div
        className="absolute -top-32 -left-32 h-96 w-96 rounded-full blur-3xl"
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(59,130,246,0.35), transparent 60%)',
          rotateX,
          rotateY,
        }}
      />
      <motion.div
        className="absolute -bottom-24 -right-24 h-[28rem] w-[28rem] rounded-full blur-3xl"
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(168,85,247,0.35), transparent 60%)',
          rotateX,
          rotateY,
        }}
      />

      {/* Subtle grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:32px_32px]" />

      {/* Light sweep */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.35, 0.15, 0.35, 0.1] }}
        transition={{ duration: 12, repeat: Infinity }}
        style={{
          background:
            'radial-gradient(1200px 1200px at var(--x, 20%) var(--y, 20%), rgba(255,255,255,0.085), transparent 60%)',
        }}
      />
    </div>
  )
}
