import { motion } from 'framer-motion'
import {
  Scissors,
  Sparkles,
  ShieldCheck,
  Heart,
} from 'lucide-react'
import business from '../data/business'

const features = [
  {
    title: 'Precisión',
    text: 'Cada detalle importa. Buscamos que cada corte tenga una terminación cuidada y definida.',
    icon: Scissors,
  },
  {
    title: 'Estilo',
    text: 'Trabajamos para encontrar un estilo que se adapte a tu personalidad y a lo que buscás.',
    icon: Sparkles,
  },
  {
    title: 'Calidad',
    text: 'Una experiencia cuidada desde el momento en que llegás hasta el resultado final.',
    icon: ShieldCheck,
  },
  {
    title: 'Pasión',
    text: 'Porque una barbería no es solamente un lugar para cortarse el pelo. Es parte de tu estilo.',
    icon: Heart,
  },
]

function About() {
  return (
    <section
      id="nosotros"
      className="w-full min-w-0 overflow-hidden bg-black px-5 py-24 sm:px-6 sm:py-32"
    >
      <div className="mx-auto w-full max-w-7xl min-w-0">

        {/* ENCABEZADO */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16 w-full max-w-3xl"
        >
          <div className="mb-6 flex items-center gap-4">
            <span className="h-px w-12 shrink-0 bg-amber-400" />

            <span className="text-xs uppercase tracking-[0.35em] text-amber-400">
              Sobre Faruh
            </span>
          </div>

          <h2 className="break-words font-serif text-4xl font-bold uppercase leading-tight text-white sm:text-5xl lg:text-6xl">
            Más que un
            <br />
            <span className="text-amber-400">
              corte.
            </span>
          </h2>
        </motion.div>

        {/* DESCRIPCIÓN + ESTADÍSTICAS */}
        <div className="grid w-full min-w-0 gap-12 lg:grid-cols-2 lg:gap-20">

          {/* DESCRIPCIÓN */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="min-w-0"
          >
            <p className="max-w-xl text-lg leading-relaxed text-white/50">
              {business.description}
            </p>

            <div className="mt-8 h-px w-full max-w-xl bg-white/10" />

            <p className="mt-8 max-w-xl text-sm leading-relaxed text-white/30">
              Tu imagen forma parte de quién sos. Por eso cada visita busca
              combinar estilo, precisión y una atención pensada para vos.
            </p>
          </motion.div>

          {/* ESTADÍSTICAS */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="grid min-w-0 grid-cols-2 gap-px border border-white/10 bg-white/10"
          >
            {business.stats.map((stat, index) => (
              <div
                key={stat.label}
                className="min-w-0 bg-[#080808] p-6 sm:p-10"
              >
                <p
                  className={`font-serif text-4xl font-bold sm:text-6xl ${
                    index === 0 || index === 3
                      ? 'text-amber-400'
                      : 'text-white'
                  }`}
                >
                  {stat.value}
                </p>

                <p className="mt-3 break-words text-[10px] uppercase tracking-[0.15em] text-white/40 sm:text-xs sm:tracking-[0.2em]">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* DIFERENCIALES */}
        <div className="mt-20 grid w-full min-w-0 grid-cols-1 gap-px border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => {
            const Icon = feature.icon

            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                className="group min-w-0 bg-[#080808] p-7 transition-colors duration-300 hover:bg-[#101010]"
              >
                <Icon
                  size={24}
                  strokeWidth={1.5}
                  className="text-amber-400 transition-transform duration-300 group-hover:scale-110"
                />

                <h3 className="mt-6 font-serif text-xl font-semibold text-white">
                  {feature.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-white/40">
                  {feature.text}
                </p>
              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  )
}

export default About