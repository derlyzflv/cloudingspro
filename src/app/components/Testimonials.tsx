import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Ing. Ricardo Huamán',
    company: 'Tai Loy',
    role: 'CTO de Tai Loy',
    image: '👨‍💼',
    rating: 5,
    text: 'Lo que más valoramos de esta PaaS es la latencia mínima dentro del Perú. Migrar nuestra pasarela de pagos fue sencillo y el cumplimiento con las normativas de seguridad fue automático. Es un aliado estratégico para nuestro cumplimiento ante la SBS.'
  },
  {
    name: 'Claudia Benavides',
    company: 'Coolbox',
    role: 'Gerente de E-commerce de Coolbox',
    image: '👩‍💼',
    rating: 5,
    text: 'Antes, los Cyber Days eran sinónimo de estrés y caídas de sistema. Desde que usamos el Autoscaling de esta plataforma, hemos soportado picos de 100,000 usuarios simultáneos sin un solo error 504. La confianza del cliente es nuestra mayor venta.'
  },
  {
    name: 'Sergio Torres',
    company: 'Chasqui Express',
    role: 'Lead Developer de Chasqui Express',
    image: '👨‍💻',
    rating: 5,
    text: 'Como desarrolladores, buscamos agilidad. Con esta PaaS, pasamos de desplegar actualizaciones cada mes a hacerlo varias veces al día con un solo clic. El entorno de Staging nos da la seguridad de que nada se romperá en producción.'
  }
];

export function Testimonials() {
  return (
    <section id="resenas" className="py-16 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-4 text-[#0A192F]">Lo Que Dicen Nuestros Clientes</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Miles de clientes satisfechos confían en nosotros para sus proyectos
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {testimonials.map((testimonial) => (
            <div key={testimonial.name} className="bg-white rounded-lg shadow-lg p-6 relative hover:shadow-xl transition border-t-4 border-[#64FFDA]">
              <Quote className="absolute top-4 right-4 text-[#64FFDA]/20" size={40} />

              <div className="flex items-center gap-4 mb-4">
                <div className="text-4xl">{testimonial.image}</div>
                <div>
                  <h4 className="font-semibold text-[#0A192F]">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                  <p className="text-sm text-[#64FFDA]">{testimonial.company}</p>
                </div>
              </div>

              <div className="flex gap-1 mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-[#64FFDA] text-[#64FFDA]" />
                ))}
              </div>

              <p className="text-gray-700 leading-relaxed italic">
                "{testimonial.text}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
