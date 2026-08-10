import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'

function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/541100000000"
      target="_blank"
      rel="noreferrer"
      aria-label="Contactar por WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{
        delay: 1,
        duration: 0.5,
        type: 'spring',
      }}
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-amber-400 text-black shadow-2xl transition-transform duration-300 hover:scale-110 sm:bottom-8 sm:right-8"
    >
      <MessageCircle size={25} strokeWidth={2} />

      <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-amber-400/30" />
    </motion.a>
  )
}

export default WhatsAppButton