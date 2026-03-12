import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function About() {
  return (
    <section id="about" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1742440710136-1976b1cad864?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcmNoaXRlY3R1cmFsJTIwZGVzaWduJTIwd29ya3NwYWNlJTIwc3R1ZGlvfGVufDF8fHx8MTc3MzI2ODk5NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Espacio de trabajo del estudio de arquitectura"
              className="w-full h-[400px] md:h-[600px] object-cover"
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl mb-6 tracking-tight">Sobre nuestro estudio</h2>
            <p className="text-gray-600 mb-6 text-lg">
              Somos un estudio de arquitectura contemporánea dedicado a crear espacios excepcionales que combinan forma y función. Nuestro enfoque une diseño innovador con prácticas sostenibles para ofrecer soluciones atemporales.
            </p>
            <p className="text-gray-600 mb-8 text-lg">
              Fundado en 2015, hemos completado más de 100 proyectos, desde viviendas privadas hasta desarrollos comerciales a gran escala. Nuestro equipo de arquitectos y diseñadores aporta experiencia y pasión a cada proyecto.
            </p>
            <div className="grid grid-cols-3 gap-8">
              <div>
                <div className="text-4xl mb-2">100+</div>
                <div className="text-sm text-gray-600">Proyectos</div>
              </div>
              <div>
                <div className="text-4xl mb-2">15</div>
                <div className="text-sm text-gray-600">Premios</div>
              </div>
              <div>
                <div className="text-4xl mb-2">8</div>
                <div className="text-sm text-gray-600">Años</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
