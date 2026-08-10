import { motion } from 'framer-motion'
import { ArrowDown, ArrowRight } from 'lucide-react'
import business from '../data/business'

function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen w-full overflow-hidden bg-black"
    >
      {/* Fondo */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute right-0 top-0 h-full w-1/2 bg-gradient-to-l from-amber-500/5 to-transparent" />
      </div>

      {/* Contenido */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pt-28 sm:px-6 sm:pt-32 lg:px-8">
        <div className="w-full max-w-4xl">

          {/* Etiqueta */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-8 flex min-w-0 items-center gap-4"
          >
            <span className="h-px w-12 shrink-0 bg-amber-400" />

            <span className="truncate text-xs font-medium uppercase tracking-[0.25em] text-amber-400 sm:tracking-[0.35em]">
              {business.name}
            </span>
          </motion.div>

          {/* Título */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="max-w-full break-words font-serif text-4xl font-bold uppercase leading-[0.95] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl"
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
            className="mt-10 flex w-full flex-col gap-4 sm:flex-row"
          >
            <a
              href="#contacto"
              className="group inline-flex w-full items-center justify-center gap-3 bg-amber-400 px-7 py-4 text-sm font-bold uppercase tracking-wide text-black transition-all duration-300 hover:bg-amber-300 sm:w-auto"
            >
              Reservar turno

              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>

            <a
              href="#servicios"
              className="inline-flex w-full items-center justify-center border border-white/20 px-7 py-4 text-sm font-bold uppercase tracking-wide text-white transition-all duration-300 hover:border-amber-400 hover:text-amber-400 sm:w-auto"
            >
              Ver servicios
            </a>
          </motion.div>

          {/* Información */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="mt-16 grid grid-cols-2 gap-y-8 border-t border-white/10 pt-6 sm:flex sm:flex-wrap sm:gap-8"
          >
            <div className="min-w-0">
              <p className="text-2xl font-bold text-white">
                4.9
              </p>

              <p className="mt-1 text-[10px] uppercase tracking-wider text-white/40 sm:text-xs">
                Valoración
              </p>
            </div>

            <div className="hidden h-10 w-px bg-white/10 sm:block" />

            <div className="min-w-0">
              <p className="text-2xl font-bold text-white">
                +500
              </p>

              <p className="mt-1 text-[10px] uppercase tracking-wider text-white/40 sm:text-xs">
                Clientes
              </p>
            </div>

            <div className="hidden h-10 w-px bg-white/10 sm:block" />

            <div className="min-w-0">
              <p className="text-2xl font-bold text-white">
                +10
              </p>

              <p className="mt-1 text-[10px] uppercase tracking-wider text-white/40 sm:text-xs">
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