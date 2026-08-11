import { motion } from 'framer-motion'
import {
  ArrowUpRight,
  Scissors,
  Sparkles,
  Target,
  Zap,
} from 'lucide-react'

const highlights = [
  {
    number: '01',
    title: 'PRECISIÓN',
    text: 'Cada detalle cuenta. Cortes definidos y terminaciones cuidadas.',
    icon: Target,
  },
  {
    number: '02',
    title: 'ESTILO',
    text: 'Un look pensado para vos, respetando tu personalidad.',
    icon: Scissors,
  },
  {
    number: '03',
    title: 'DETALLE',
    text: 'Barba, líneas y terminaciones trabajadas con dedicación.',
    icon: Sparkles,
  },
  {
    number: '04',
    title: 'ACTITUD',
    text: 'No se trata solamente de un corte. Se trata de cómo te sentís.',
    icon: Zap,
  },
]

function Gallery() {
  return (
    <section
      id="galeria"
      className="w-full min-w-0 overflow-hidden bg-black px-5 py-24 sm:px-6 sm:py-32"
    >
      <div className="mx-auto w-full max-w-7xl min-w-0">

        {/* ENCABEZADO */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <div className="mb-6 flex items-center gap-4">
            <span className="h-px w-12 shrink-0 bg-amber-400" />

            <span className="text-xs uppercase tracking-[0.35em] text-amber-400">
              El estilo Faruh
            </span>
          </div>

          <h2 className="font-serif text-4xl font-bold uppercase leading-tight text-white sm:text-5xl lg:text-6xl">
            Más que un
            <br />
            <span className="text-amber-400">
              corte.
            </span>
          </h2>

          <p className="mt-6 max-w-xl text-white/50">
            Precisión, estilo y atención en cada detalle. Una experiencia
            pensada para quienes buscan algo más que una barbería.
          </p>
        </motion.div>

        {/* DIFERENCIALES */}
        <div className="grid w-full min-w-0 grid-cols-1 gap-px border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item, index) => {
            const Icon = item.icon

            return (
              <motion.article
                key={item.number}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                className="group relative min-w-0 bg-[#080808] p-7 transition-colors duration-300 hover:bg-[#101010] sm:p-8"
              >
                {/* NÚMERO */}
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs tracking-[0.2em] text-white/20">
                    {item.number}
                  </span>

                  <div className="flex h-10 w-10 items-center justify-center border border-white/10 text-white/40 transition-all duration-300 group-hover:border-amber-400 group-hover:bg-amber-400 group-hover:text-black">
                    <ArrowUpRight size={17} />
                  </div>
                </div>

                {/* ICONO */}
                <div className="mt-12">
                  <Icon
                    size={24}
                    strokeWidth={1.5}
                    className="text-amber-400 transition-transform duration-300 group-hover:scale-110"
                  />
                </div>

                {/* TEXTO */}
                <h3 className="mt-6 font-serif text-2xl font-semibold text-white">
                  {item.title}
                </h3>

                <p className="mt-4 text-sm leading-relaxed text-white/40">
                  {item.text}
                </p>

                {/* LÍNEA */}
                <div className="mt-8 h-px w-8 bg-amber-400 transition-all duration-500 group-hover:w-full" />
              </motion.article>
            )
          })}
        </div>

        {/* FRASE FINAL */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-16 border-l border-amber-400 pl-6 sm:pl-8"
        >
          <p className="max-w-3xl font-serif text-2xl leading-relaxed text-white sm:text-3xl lg:text-4xl">
            "Tu imagen habla antes que vos.
            <span className="text-amber-400">
              {' '}Que diga lo que querés.
            </span>"
          </p>
        </motion.div>

      </div>
    </section>
  )
}

export default Gallery