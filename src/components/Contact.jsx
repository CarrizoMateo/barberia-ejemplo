import { motion } from 'framer-motion'
import {
  ArrowUpRight,
  MessageCircle,
  Phone,
} from 'lucide-react'
import business from '../data/business'

function Contact() {
  return (
    <section
      id="contacto"
      className="bg-black px-6 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl">

        {/* ENCABEZADO */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <div className="mb-6 flex items-center justify-center gap-4">
            <span className="h-px w-12 bg-amber-400" />

            <span className="text-xs uppercase tracking-[0.35em] text-amber-400">
              Contacto
            </span>

            <span className="h-px w-12 bg-amber-400" />
          </div>

          <h2 className="font-serif text-4xl font-bold uppercase leading-tight text-white sm:text-5xl lg:text-7xl">
            Tu próximo
            <br />
            <span className="text-amber-400">
              look empieza acá.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-white/45">
            Reservá tu turno o escribinos para consultar disponibilidad.
          </p>
        </motion.div>

        {/* CONTENIDO */}
        <div className="grid gap-4 lg:grid-cols-2">

          {/* INFORMACIÓN */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="border border-white/10 bg-[#080808] p-8 sm:p-10"
          >
            <p className="text-xs uppercase tracking-[0.25em] text-white/30">
              Hablemos
            </p>

            <h3 className="mt-4 font-serif text-3xl font-semibold text-white">
              Reservá tu turno
            </h3>

            <p className="mt-4 text-sm leading-relaxed text-white/40">
              ¿Tenés alguna consulta? Escribinos por WhatsApp o encontranos
              en nuestras redes.
            </p>

            {/* WHATSAPP */}
            <a
              href={`https://wa.me/${business.whatsapp}`}
              target="_blank"
              rel="noreferrer"
              className="group mt-10 flex items-center gap-4 border border-white/10 p-5 transition-all duration-300 hover:border-amber-400/50"
            >
              <div className="flex h-12 w-12 items-center justify-center bg-amber-400 text-black">
                <MessageCircle size={21} />
              </div>

              <div className="flex-1">
                <p className="text-xs uppercase tracking-wider text-white/30">
                  WhatsApp
                </p>

                <p className="mt-1 text-sm font-semibold text-white">
                  +54 11 0000-0000
                </p>
              </div>

              <ArrowUpRight
                size={18}
                className="text-white/30 transition-colors group-hover:text-amber-400"
              />
            </a>

            {/* TELÉFONO */}
            <a
              href={`tel:${business.phone}`}
              className="group mt-3 flex items-center gap-4 border border-white/10 p-5 transition-all duration-300 hover:border-amber-400/50"
            >
              <div className="flex h-12 w-12 items-center justify-center border border-white/10 text-amber-400">
                <Phone size={20} />
              </div>

              <div className="flex-1">
                <p className="text-xs uppercase tracking-wider text-white/30">
                  Teléfono
                </p>

                <p className="mt-1 text-sm font-semibold text-white">
                  {business.phone}
                </p>
              </div>

              <ArrowUpRight
                size={18}
                className="text-white/30 transition-colors group-hover:text-amber-400"
              />
            </a>

            {/* INSTAGRAM */}
            <a
              href="#"
              className="group mt-3 flex items-center gap-4 border border-white/10 p-5 transition-all duration-300 hover:border-amber-400/50"
            >
              <div className="flex h-12 w-12 items-center justify-center border border-white/10 text-amber-400">
                <div className="text-lg font-bold">
                    IG
                </div>
              </div>

              <div className="flex-1">
                <p className="text-xs uppercase tracking-wider text-white/30">
                  Instagram
                </p>

                <p className="mt-1 text-sm font-semibold text-white">
                  {business.instagram}
                </p>
              </div>

              <ArrowUpRight
                size={18}
                className="text-white/30 transition-colors group-hover:text-amber-400"
              />
            </a>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col justify-center border border-white/10 bg-[#080808] p-8 sm:p-10 lg:p-14"
          >
            <p className="text-xs uppercase tracking-[0.25em] text-amber-400">
              Reservas
            </p>

            <h3 className="mt-5 font-serif text-4xl font-semibold leading-tight text-white sm:text-5xl">
              Tu próximo
              <br />
              corte está
              <br />
              <span className="text-amber-400">
                a un mensaje.
              </span>
            </h3>

            <p className="mt-6 max-w-md text-sm leading-relaxed text-white/40">
              Consultá disponibilidad y reservá tu turno directamente por
              WhatsApp.
            </p>

            <a
              href="https://wa.me/541100000000"
              target="_blank"
              rel="noreferrer"
              className="group mt-10 inline-flex w-fit items-center gap-3 bg-amber-400 px-7 py-4 text-sm font-bold uppercase tracking-wide text-black transition-colors duration-300 hover:bg-amber-300"
            >
              Reservar por WhatsApp

              <ArrowUpRight
                size={18}
                className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default Contact