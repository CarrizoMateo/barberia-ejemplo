import { motion } from 'framer-motion'
import { ArrowUpRight, Quote, Star } from 'lucide-react'

function Reviews() {
  return (
    <section
      id="reseñas"
      className="relative w-full min-w-0 overflow-hidden bg-black px-5 py-24 sm:px-6 sm:py-32"
    >
      {/* DECORACIÓN */}
      <div className="pointer-events-none absolute right-0 top-1/3 h-80 w-80 rounded-full bg-amber-400/5 blur-3xl" />

      <div className="relative mx-auto w-full max-w-7xl min-w-0">

        {/* ENCABEZADO */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-14 flex min-w-0 flex-col justify-between gap-8 md:flex-row md:items-end"
        >
          <div className="min-w-0">
            <div className="mb-6 flex items-center gap-4">
              <span className="h-px w-12 shrink-0 bg-amber-400" />

              <span className="text-xs uppercase tracking-[0.35em] text-amber-400">
                La experiencia
              </span>
            </div>

            <h2 className="break-words font-serif text-4xl font-bold uppercase leading-tight text-white sm:text-5xl lg:text-6xl">
              Lo dicen
              <br />
              <span className="text-amber-400">
                nuestros clientes.
              </span>
            </h2>
          </div>

          {/* VALORACIÓN */}
          <div className="flex w-full max-w-sm items-center gap-5 border border-white/10 px-5 py-5 sm:px-6">
            <div className="shrink-0">
              <p className="font-serif text-4xl font-bold text-white">
                4.7
              </p>

              <div className="mt-1 flex gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    size={14}
                    fill="currentColor"
                    className="text-amber-400"
                  />
                ))}
              </div>
            </div>

            <div className="h-10 w-px shrink-0 bg-white/10" />

            <p className="text-xs leading-relaxed text-white/40">
              Valoración promedio
              <br />
              basada en 54 reseñas.
            </p>
          </div>
        </motion.div>

        {/* DESTACADO */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative w-full min-w-0 border border-white/10 bg-[#080808] p-7 sm:p-10 lg:p-14"
        >
          {/* COMILLAS */}
          <Quote
            size={60}
            strokeWidth={1}
            className="absolute right-6 top-6 text-amber-400/10 sm:right-10 sm:top-10"
          />

          <div className="relative z-10 max-w-3xl">
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  size={16}
                  fill="currentColor"
                  className="text-amber-400"
                />
              ))}
            </div>

            <p className="mt-8 font-serif text-2xl leading-relaxed text-white sm:text-3xl lg:text-4xl">
              Una experiencia respaldada por la confianza de quienes ya
              eligieron{' '}
              <span className="text-amber-400">
                Barbería Faruh.
              </span>
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <span className="text-xs uppercase tracking-[0.25em] text-white/30">
                4.7 / 5
              </span>

              <span className="h-px w-8 bg-white/10" />

              <span className="text-xs uppercase tracking-[0.25em] text-white/30">
                54 reseñas
              </span>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-4 flex min-w-0 flex-col items-start justify-between gap-5 border border-white/10 p-6 sm:flex-row sm:items-center sm:p-8"
        >
          <div className="min-w-0">
            <p className="text-sm font-semibold text-white">
              ¿Ya nos visitaste?
            </p>

            <p className="mt-1 text-sm text-white/40">
              Tu opinión ayuda a seguir creciendo.
            </p>
          </div>

          <a
            href="https://maps.app.goo.gl/qHiCuNTcoDyJ97iE8"
            className="inline-flex w-full shrink-0 items-center justify-center gap-2 border border-amber-400 px-5 py-3 text-xs font-bold uppercase tracking-wider text-amber-400 transition-all duration-300 hover:bg-amber-400 hover:text-black sm:w-auto"
          >
            Dejar una reseña

            <ArrowUpRight size={15} />
          </a>
        </motion.div>

      </div>
    </section>
  )
}

export default Reviews