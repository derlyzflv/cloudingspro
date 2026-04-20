import { Check, Zap, Rocket, Crown } from 'lucide-react';

const plans = [
  {
    name: 'Digital Start',
    subtitle: 'Para Emprendimientos y Lanzamientos',
    icon: Zap,
    price: 'S/30',
    period: '/mes',
    features: [
      'Alojamiento de la web en contenedores básicos',
      'Base de datos compartida (hasta 1GB)',
      'Certificado SSL gratuito',
      'Despliegue automático desde GitHub',
      'Suscripción fija mensual',
      'Costo predecible y bajo'
    ],
    color: 'from-[#0F172A] to-[#0A192F]'
  },
  {
    name: 'Business Growth',
    subtitle: 'Para PYMEs en Crecimiento',
    icon: Rocket,
    price: 'S/90-280',
    period: '/mes',
    features: [
      'Auto-scaling básico',
      'Base de datos dedicada',
      'CDN (Content Delivery Network)',
      'Backup diario automático',
      'Pago híbrido (Base + Uso)',
      'Ideal para ventas constantes',
      'Recursos automáticos en picos'
    ],
    color: 'from-[#64FFDA] to-[#52edc8]',
    popular: true
  },
  {
    name: 'High Season Pro',
    subtitle: 'Para PYMEs Consolidadas',
    icon: Crown,
    price: 'S/370+',
    period: '/mes variable',
    features: [
      'Auto-scaling avanzado',
      'Entorno de Staging',
      'Balanceador de carga',
      'Soporte técnico prioritario (<1h)',
      'Pago por consumo en tiempo real',
      'Capacidad para campañas masivas',
      'Miles de carritos simultáneos',
      'Costo ajustable según demanda'
    ],
    color: 'from-[#2B1400] to-[#3d1f00]'
  }
];

export function Plans() {
  return (
    <section id="planes" className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-4 text-[#0A192F]">Nuestros Planes</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Elige el plan perfecto para tu proyecto. Todos incluyen garantía de 30 días.
        </p>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative bg-white rounded-xl shadow-xl overflow-hidden transition-transform hover:scale-105 ${plan.popular ? 'ring-4 ring-[#64FFDA]' : ''
                }`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-[#64FFDA] text-[#0A192F] px-4 py-1 text-sm font-semibold z-10">
                  Más Popular
                </div>
              )}

              <div className={`bg-gradient-to-r ${plan.color} ${plan.popular ? 'text-[#0A192F]' : 'text-white'} p-6`}>
                <plan.icon size={40} className="mb-2" />
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-sm mb-3 opacity-90">{plan.subtitle}</p>
                <div className="flex items-baseline">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-lg ml-1">{plan.period}</span>
                </div>
              </div>

              <div className="p-6">
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <Check className="text-[#64FFDA] flex-shrink-0 mt-0.5" size={20} />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-3 rounded-lg font-semibold transition bg-gradient-to-r ${plan.color} ${plan.popular ? 'text-[#0A192F]' : 'text-white'} hover:opacity-90`}>
                  Contratar Ahora
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
