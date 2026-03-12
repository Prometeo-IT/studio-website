import { motion } from 'motion/react';
import { Building2, Home, Ruler, Users } from 'lucide-react';

export function Services() {
  const services = [
    {
      icon: Building2,
      title: 'Commercial',
      description: 'Office buildings, retail spaces, and mixed-use developments designed for modern business needs.',
    },
    {
      icon: Home,
      title: 'Residential',
      description: 'Custom homes and multi-family housing that prioritize comfort, aesthetics, and sustainability.',
    },
    {
      icon: Ruler,
      title: 'Interior Design',
      description: 'Complete interior solutions that complement architectural vision with thoughtful detail.',
    },
    {
      icon: Users,
      title: 'Consultation',
      description: 'Expert guidance on design, planning, and project management from concept to completion.',
    },
  ];

  return (
    <section id="services" className="py-20 md:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl mb-4 tracking-tight">Our Services</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Comprehensive architectural services tailored to bring your vision to life
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 hover:shadow-lg transition-shadow"
            >
              <service.icon className="w-10 h-10 mb-4" strokeWidth={1.5} />
              <h3 className="text-xl mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
