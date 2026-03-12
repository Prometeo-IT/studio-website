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
              alt="Architecture studio workspace"
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
            <h2 className="text-3xl md:text-5xl mb-6 tracking-tight">About Our Studio</h2>
            <p className="text-gray-600 mb-6 text-lg">
              We are a contemporary architecture studio dedicated to creating exceptional spaces that blend form and function. Our approach combines innovative design with sustainable practices to deliver timeless solutions.
            </p>
            <p className="text-gray-600 mb-8 text-lg">
              Founded in 2015, we have completed over 100 projects ranging from private residences to large-scale commercial developments. Our team of talented architects and designers brings expertise and passion to every project.
            </p>
            <div className="grid grid-cols-3 gap-8">
              <div>
                <div className="text-4xl mb-2">100+</div>
                <div className="text-sm text-gray-600">Projects</div>
              </div>
              <div>
                <div className="text-4xl mb-2">15</div>
                <div className="text-sm text-gray-600">Awards</div>
              </div>
              <div>
                <div className="text-4xl mb-2">8</div>
                <div className="text-sm text-gray-600">Years</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
