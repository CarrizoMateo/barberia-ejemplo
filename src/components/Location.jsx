import { motion } from 'framer-motion'
import {
  MapPin,
  Clock3,
  Phone,
  Navigation,
  ArrowUpRight,
} from 'lucide-react'
import business from '../data/business'


function Location() {
  return (
    <section
      id="ubicacion"
      className="relative overflow-hidden bg-[#080808] py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* ENCABEZADO */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-14"
        >
          <div className="mb-6 flex items-center gap-4">
            <span className="h-px w-12 bg-amber-400" />

            <span className="text-xs uppercase tracking-[0.35em] text-amber-400">
              Encontranos
            </span>
          </div>

          <h2 className="font-serif text-4xl font-bold uppercase leading-tight text-white sm:text-5xl lg:text-6xl">
            Vení a
            <br />
            <span className="text-amber-400">
              conocernos.
            </span>
          </h2>
        </motion.div>

        {/* CONTENIDO */}
        <div className="grid gap-4 lg:grid-cols-2">

          {/* MAPA */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative min-h-[450px] overflow-hidden border border-white/10 bg-[#101010]"
          >
            {/* MAPA DE DEMO */}
            <div className="absolute inset-0 flex items-center justify-center bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.08),transparent_45%)]">

              <div className="flex flex-col items-center text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full border border-amber-400/40 bg-amber-400/10 text-amber-400">
                  <MapPin size={28} />
                </div>

                <p className="mt-5 font-serif text-xl text-white">
                  Barber/Peluqueria Premium
                </p>

                <p className="mt-2 text-sm text-white/40">
                  {business.address}
                </p>

                <a
                  href="#"
                  className="mt-6 inline-flex items-center gap-2 border border-amber-400 px-5 py-3 text-xs font-bold uppercase tracking-wider text-amber-400 transition-all duration-300 hover:bg-amber-400 hover:text-black"
                >
                  <Navigation size={14} />
                  Cómo llegar
                </a>
              </div>
            </div>

            {/* DECORACIÓN */}
            <div className="pointer-events-none absolute inset-0 border border-white/5" />

            <div className="absolute left-6 top-6 border border-white/10 bg-black/70 px-4 py-2 backdrop-blur-md">
              <span className="text-[10px] uppercase tracking-[0.25em] text-white/50">
                Zona Norte · Buenos Aires
              </span>
            </div>
          </motion.div>

          {/* INFORMACIÓN */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="border border-white/10 bg-black p-8 sm:p-10 lg:p-12"
          >

            {/* DIRECCIÓN */}
            <div className="border-b border-white/10 pb-8">
              <div className="flex items-start gap-5">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-amber-400/30 text-amber-400">
                  <MapPin size={19} />
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-white/30">
                    Dirección
                  </p>

                  <p className="mt-2 text-lg font-semibold text-white">
                    {business.address}
                  </p>

                  <p className="mt-1 text-sm text-white/40">
                    {business.city}
                  </p>
                </div>
              </div>
            </div>

            {/* TELÉFONO */}
            <div className="border-b border-white/10 py-8">
              <div className="flex items-start gap-5">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-amber-400/30 text-amber-400">
                  <Phone size={19} />
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-white/30">
                    Teléfono
                  </p>

                  <a
                    href="tel:+541100000000"
                    className="mt-2 block text-lg font-semibold text-white transition-colors hover:text-amber-400"
                  >
                    {business.phone}
                  </a>
                </div>
              </div>
            </div>

            {/* HORARIOS */}
            <div className="pt-8">
              <div className="mb-6 flex items-center gap-5">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-amber-400/30 text-amber-400">
                  <Clock3 size={19} />
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-white/30">
                    Horarios
                  </p>

                  <p className="mt-2 text-lg font-semibold text-white">
                    Estamos para vos
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                {business.schedule.map((item) => (
                  <div
                    key={item.day}
                    className="flex items-center justify-between border-b border-white/5 pb-3 text-sm"
                  >
                    <span className="text-white/50">
                      {item.day}
                    </span>

                    <span
                      className={
                        item.hours === 'Cerrado'
                          ? 'text-white/20'
                          : 'text-white/80'
                      }
                    >
                      {item.hours}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* BOTÓN */}
            <a
              href="#contacto"
              className="mt-8 flex w-full items-center justify-center gap-2 bg-amber-400 px-6 py-4 text-sm font-bold uppercase tracking-wide text-black transition-colors duration-300 hover:bg-amber-300"
            >
              Reservar turno
              <ArrowUpRight size={17} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Location