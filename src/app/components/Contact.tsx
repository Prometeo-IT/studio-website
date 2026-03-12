import { motion } from 'motion/react';
import { Mail, Phone, MapPin } from 'lucide-react';

export function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Correo',
      value: 'info@archstudio.com',
      href: 'mailto:info@archstudio.com',
    },
    {
      icon: Phone,
      label: 'Teléfono',
      value: '+1 (555) 123-4567',
      href: 'tel:+15551234567',
    },
    {
      icon: MapPin,
      label: 'Ubicación',
      value: '123 Design Street, NY 10001',
      href: '#',
    },
  ];

  return (
    <section id="contact" className="py-20 md:py-32 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl mb-6 tracking-tight">Trabajemos juntos</h2>
            <p className="text-white/80 text-lg mb-12">
              ¿Tienes un proyecto en mente? Nos encantaría saber de ti. Ponte en contacto para hablar de cómo podemos dar vida a tu visión.
            </p>

            <div className="space-y-6">
              {contactInfo.map((item) => (
                <div key={item.label} className="flex items-start">
                  <item.icon className="w-6 h-6 mr-4 mt-1 flex-shrink-0" strokeWidth={1.5} />
                  <div>
                    <div className="text-sm text-white/60 mb-1">{item.label}</div>
                    <a
                      href={item.href}
                      className="text-lg hover:text-white/80 transition-colors"
                    >
                      {item.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <form className="space-y-6">
              <div>
                <input
                  type="text"
                  placeholder="Nombre"
                  className="w-full bg-white/10 border border-white/20 px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:border-white/40 transition-colors"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Correo electrónico"
                  className="w-full bg-white/10 border border-white/20 px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:border-white/40 transition-colors"
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Asunto"
                  className="w-full bg-white/10 border border-white/20 px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:border-white/40 transition-colors"
                />
              </div>
              <div>
                <textarea
                  rows={5}
                  placeholder="Mensaje"
                  className="w-full bg-white/10 border border-white/20 px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:border-white/40 transition-colors resize-none"
                ></textarea>
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-white text-black py-3 px-6 hover:bg-white/90 transition-colors"
              >
                Enviar mensaje
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
