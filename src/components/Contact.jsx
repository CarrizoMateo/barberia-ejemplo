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
      className="w-full min-w-0 overflow-hidden bg-black px-5 py-24 sm:px-6 sm:py-32"
    >
      <div className="mx-auto w-full max-w-7xl min-w-0">

        {/* ENCABEZADO */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-14 w-full max-w-3xl text-center"
        >
          <div className="mb-6 flex items-center justify-center gap-4">
            <span className="h-px w-12 shrink-0 bg-amber-400" />

            <span className="text-xs uppercase tracking-[0.35em] text-amber-400">
              Contacto
            </span>

            <span className="h-px w-12 shrink-0 bg-amber-400" />
          </div>

          <h2 className="break-words font-serif text-4xl font-bold uppercase leading-tight text-white sm:text-5xl lg:text-7xl">
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
        <div className="grid w-full min-w-0 grid-cols-1 gap-4 lg:grid-cols-2">

          {/* INFORMACIÓN */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="min-w-0 w-full border border-white/10 bg-[#080808] p-6 sm:p-10"
          >
            <p className="text-xs uppercase tracking-[0.25em] text-white/30">
              Hablemos
            </p>

            <h3 className="mt-4 font-serif text-3xl font-semibold text-white">
              Reservá tu turno
            </h3>

            <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/40">
              Consultá disponibilidad y escribinos directamente para reservar
              tu próximo turno.
            </p>

            {/* WHATSAPP */}
            <a
              href={`https://wa.me/message/7CGZDULDER4EP1}`}
              target="_blank"
              rel="noreferrer"
              className="group mt-10 flex min-w-0 w-full items-center gap-4 border border-white/10 p-4 transition-all duration-300 hover:border-amber-400/50 sm:p-5"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-amber-400 text-black">
                <MessageCircle size={21} />
              </div>

              <div className="min-w-0 flex-1">
                <p className="text-xs uppercase tracking-wider text-white/30">
                  WhatsApp
                </p>

                <p className="mt-1 truncate text-sm font-semibold text-white">
                  {business.phone}
                </p>
              </div>

              <ArrowUpRight
                size={18}
                className="shrink-0 text-white/30 transition-colors group-hover:text-amber-400"
              />
            </a>

            {/* TELÉFONO */}
            <a
              href={`tel:${business.phone}`}
              className="group mt-3 flex min-w-0 w-full items-center gap-4 border border-white/10 p-4 transition-all duration-300 hover:border-amber-400/50 sm:p-5"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-white/10 text-amber-400">
                <Phone size={20} />
              </div>

              <div className="min-w-0 flex-1">
                <p className="text-xs uppercase tracking-wider text-white/30">
                  Teléfono
                </p>

                <p className="mt-1 truncate text-sm font-semibold text-white">
                  {business.phone}
                </p>
              </div>

              <ArrowUpRight
                size={18}
                className="shrink-0 text-white/30 transition-colors group-hover:text-amber-400"
              />
            </a>

            {/* INSTAGRAM */}
            <a
              href="https://www.instagram.com/faruh_sanmiguel/"
              className="group mt-3 flex min-w-0 w-full items-center gap-4 border border-white/10 p-4 transition-all duration-300 hover:border-amber-400/50 sm:p-5"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-white/10 text-amber-400">
                <div className="text-lg font-bold">
                  IG
                </div>
              </div>

              <div className="min-w-0 flex-1">
                <p className="text-xs uppercase tracking-wider text-white/30">
                  Instagram
                </p>

                <p className="mt-1 truncate text-sm font-semibold text-white">
                  {business.instagram}
                </p>
              </div>

              <ArrowUpRight
                size={18}
                className="shrink-0 text-white/30 transition-colors group-hover:text-amber-400"
              />
            </a>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex min-w-0 w-full flex-col justify-center border border-white/10 bg-[#080808] p-6 sm:p-10 lg:p-14"
          >
            <p className="text-xs uppercase tracking-[0.25em] text-amber-400">
              Reservas
            </p>

            <h3 className="mt-5 break-words font-serif text-4xl font-semibold leading-tight text-white sm:text-5xl">
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
              href={`https://wa.me/${business.whatsapp}`}
              target="_blank"
              rel="noreferrer"
              className="group mt-10 inline-flex w-full max-w-full items-center justify-center gap-3 bg-amber-400 px-5 py-4 text-sm font-bold uppercase tracking-wide text-black transition-colors duration-300 hover:bg-amber-300 sm:w-fit sm:px-7"
            >
              Reservar por WhatsApp

              <ArrowUpRight
                size={18}
                className="shrink-0 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default Contact