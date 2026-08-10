import { motion } from 'framer-motion'
import { Quote, Star } from 'lucide-react'

import business from '../data/business'

function Reviews() {
  return (
    <section
      id="reseñas"
      className="relative overflow-hidden bg-black px-6 py-24 sm:py-32"
    >
      {/* DECORACIÓN */}
      <div className="absolute right-0 top-1/3 h-80 w-80 rounded-full bg-amber-400/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">

        {/* ENCABEZADO */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-14 flex flex-col justify-between gap-8 md:flex-row md:items-end"
        >
          <div>
            <div className="mb-6 flex items-center gap-4">
              <span className="h-px w-12 bg-amber-400" />

              <span className="text-xs uppercase tracking-[0.35em] text-amber-400">
                Lo que dicen nuestros clientes
              </span>
            </div>

            <h2 className="font-serif text-4xl font-bold uppercase leading-tight text-white sm:text-5xl lg:text-6xl">
              La experiencia
              <br />
              <span className="text-amber-400">
                habla por nosotros.
              </span>
            </h2>
          </div>

          {/* VALORACIÓN */}
          <div className="flex items-center gap-5 border border-white/10 px-6 py-5">
            <div>
              <p className="font-serif text-4xl font-bold text-white">
                4.9
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

            <div className="h-10 w-px bg-white/10" />

            <p className="max-w-[100px] text-xs leading-relaxed text-white/40">
              Valoración promedio de nuestros clientes
            </p>
          </div>
        </motion.div>

        {/* RESEÑAS */}
        <div className="grid gap-4 lg:grid-cols-3">
          {business.reviews.map((review, index) => (
            <motion.article
              key={review.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              className="group relative border border-white/10 bg-[#080808] p-8 transition-all duration-500 hover:border-amber-400/40 hover:bg-[#0d0d0d] sm:p-10"
            >
              {/* COMILLAS */}
              <Quote
                size={38}
                strokeWidth={1}
                className="absolute right-8 top-8 text-amber-400/20 transition-colors duration-500 group-hover:text-amber-400/40"
              />

              {/* ESTRELLAS */}
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    size={15}
                    fill="currentColor"
                    className="text-amber-400"
                  />
                ))}
              </div>

              {/* TEXTO */}
              <p className="mt-8 min-h-[120px] text-base leading-relaxed text-white/60">
                "{review.text}"
              </p>

              {/* AUTOR */}
              <div className="mt-8 flex items-center gap-4 border-t border-white/10 pt-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-amber-400/10 text-sm font-bold text-amber-400">
                  {review.name.charAt(0)}
                </div>

                <div>
                  <p className="text-sm font-semibold text-white">
                    {review.name}
                  </p>

                  <p className="mt-1 text-xs text-white/30">
                    {review.date}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-8 flex flex-col items-start justify-between gap-5 border border-white/10 p-6 sm:flex-row sm:items-center sm:p-8"
        >
          <div>
            <p className="text-sm font-semibold text-white">
              ¿Ya nos visitaste?
            </p>

            <p className="mt-1 text-sm text-white/40">
              Tu opinión nos ayuda a seguir creciendo.
            </p>
          </div>

          <a
            href="#"
            className="border border-amber-400 px-5 py-3 text-xs font-bold uppercase tracking-wider text-amber-400 transition-all duration-300 hover:bg-amber-400 hover:text-black"
          >
            Dejar una reseña
          </a>
        </motion.div>

      </div>
    </section>
  )
}

export default Reviews