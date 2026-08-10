import { motion } from 'framer-motion'
import { ArrowDown, ArrowRight } from 'lucide-react'
import images from '../assets/images'
import business from '../data/business'

function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-screen items-center overflow-hidden bg-black"
    >
      {/* Fondo */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_40%,rgba(245,158,11,0.12),transparent_35%)]" />

        <div className="absolute right-0 top-0 h-full w-1/2 bg-gradient-to-l from-amber-500/5 to-transparent" />
      </div>

      {/* Contenido */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pt-20 lg:px-8">
        <div className="max-w-4xl">

          {/* Etiqueta */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-8 flex items-center gap-4"
          >
            <span className="h-px w-12 bg-amber-400" />

            <span className="text-xs font-medium uppercase tracking-[0.35em] text-amber-400">
              {business.name}
            </span>
          </motion.div>

          {/* Título */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-serif text-6xl font-bold uppercase leading-[0.95] tracking-tight text-white sm:text-7xl lg:text-8xl"
          >
            {business.tagline.first}
            <br />

          <span className="text-amber-400">
            {business.tagline.second}
          </span>
          </motion.h1>

          {/* Descripción */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-8 max-w-xl text-base leading-relaxed text-white/60 sm:text-lg"
          >
            Cortes de precisión, barba y estilo personalizado.
            Una experiencia diseñada para quienes cuidan cada detalle.
          </motion.p>

          {/* Botones */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <a
              href="#contacto"
              className="group inline-flex items-center justify-center gap-3 bg-amber-400 px-7 py-4 text-sm font-bold uppercase tracking-wide text-black transition-all duration-300 hover:bg-amber-300"
            >
              Reservar turno

              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>

            <a
              href="#servicios"
              className="inline-flex items-center justify-center border border-white/20 px-7 py-4 text-sm font-bold uppercase tracking-wide text-white transition-all duration-300 hover:border-amber-400 hover:text-amber-400"
            >
              Ver servicios
            </a>
          </motion.div>

          {/* Información */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="mt-16 flex flex-wrap gap-8 border-t border-white/10 pt-6"
          >
            <div>
              <p className="text-2xl font-bold text-white">
                4.9
              </p>

              <p className="mt-1 text-xs uppercase tracking-wider text-white/40">
                Valoración
              </p>
            </div>

            <div className="h-10 w-px bg-white/10" />

            <div>
              <p className="text-2xl font-bold text-white">
                +500
              </p>

              <p className="mt-1 text-xs uppercase tracking-wider text-white/40">
                Clientes
              </p>
            </div>

            <div className="h-10 w-px bg-white/10" />

            <div>
              <p className="text-2xl font-bold text-white">
                +10
              </p>

              <p className="mt-1 text-xs uppercase tracking-wider text-white/40">
                Años de experiencia
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Indicador de scroll */}
      <motion.a
        href="#servicios"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 text-white/40 transition-colors hover:text-amber-400 sm:flex"
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">
          Scroll
        </span>

        <ArrowDown
          size={16}
          className="animate-bounce"
        />
      </motion.a>
    </section>
  )
}

export default Hero