import { motion } from 'framer-motion'
import {
  Scissors,
  UserRound,
  Sparkles,
  Crown,
  ArrowUpRight,
} from 'lucide-react'
import business from '../data/business'


function Services() {
  return (
    <section
      id="servicios"
      className="relative overflow-hidden bg-[#080808] py-24 sm:py-32"
    >
      {/* Decoración */}
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-amber-400/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

        {/* ENCABEZADO */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mb-16 max-w-2xl"
        >
          <div className="mb-6 flex items-center gap-4">
            <span className="h-px w-12 bg-amber-400" />

            <span className="text-xs font-medium uppercase tracking-[0.35em] text-amber-400">
              Nuestros servicios
            </span>
          </div>

          <h2 className="font-serif text-4xl font-bold uppercase leading-tight text-white sm:text-5xl lg:text-6xl">
            El detalle hace
            <br />
            <span className="text-amber-400">la diferencia.</span>
          </h2>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/50">
            Cada servicio está pensado para ofrecer un resultado impecable,
            desde el primer corte hasta el último detalle.
          </p>
        </motion.div>

        {/* SERVICIOS */}
        <div className="grid gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-2">
          {business.services.map((service, index) => {
            const icons = [Scissors, UserRound, Sparkles, Crown]
            const Icon = icons[index]

            return (
              <motion.article
                key={service.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                className="group relative bg-[#080808] p-8 transition-colors duration-500 hover:bg-[#101010] sm:p-10 lg:p-12"
              >
                {/* Número */}
                <span className="absolute right-8 top-8 font-serif text-5xl font-bold text-white/[0.04] transition-colors duration-500 group-hover:text-amber-400/10">
                  {service.number}
                </span>

                {/* Icono */}
                <div className="mb-10 flex h-12 w-12 items-center justify-center border border-white/10 text-amber-400 transition-all duration-500 group-hover:border-amber-400 group-hover:bg-amber-400 group-hover:text-black">
                  <Icon size={21} strokeWidth={1.5} />
                </div>

                {/* Contenido */}
                <h3 className="font-serif text-2xl font-semibold text-white sm:text-3xl">
                  {service.name}
                </h3>

                <p className="mt-4 max-w-md text-sm leading-relaxed text-white/45 sm:text-base">
                  {service.description}
                </p>

                {/* Precio + acción */}
                <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-6">
                  <span className="text-sm font-semibold text-amber-400">
                    {service.price}
                  </span>

                  <a
                    href="#contacto"
                    className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-white/50 transition-colors duration-300 hover:text-amber-400"
                  >
                    Reservar

                    <ArrowUpRight
                      size={15}
                      className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </a>
                </div>
              </motion.article>
            )
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8 flex flex-col items-start justify-between gap-5 border border-white/10 p-6 sm:flex-row sm:items-center sm:p-8"
        >
          <div>
            <p className="text-sm font-semibold text-white">
              ¿No sabés qué servicio elegir?
            </p>

            <p className="mt-1 text-sm text-white/40">
              Escribinos y te ayudamos a encontrar la opción ideal.
            </p>
          </div>

          <a
            href="#contacto"
            className="inline-flex items-center gap-2 border border-amber-400 px-5 py-3 text-xs font-bold uppercase tracking-wider text-amber-400 transition-all duration-300 hover:bg-amber-400 hover:text-black"
          >
            Consultanos
            <ArrowUpRight size={15} />
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Services