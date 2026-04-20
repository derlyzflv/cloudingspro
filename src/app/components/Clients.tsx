import { Building2, Shield, Clock, Award } from 'lucide-react';

const clients = [
  { name: 'La Lechería', industry: 'Alimentos y lácteos' },
  { name: 'Ladrillos Maxx', industry: 'Construcción' },
  { name: 'Coolbox', industry: 'Venta de productos tecnológicos' },
  { name: 'Tai Loy', industry: 'Retail útiles y oficina' },
  { name: 'Chasqui Express', industry: 'Logística y última milla' }
];

const guarantees = [
  { icon: Shield, text: 'SLA del 99.9% garantizado por contrato' },
  { icon: Award, text: 'Cifrado de datos de grado bancario (AES-256)' },
  { icon: Clock, text: 'Soporte técnico 24/7/365 en español' },
  { icon: Building2, text: 'Infraestructura certificada ISO 27001' }
];

export function Clients() {
  return (
    <section id="clientes" className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-[#0A192F]">Nuestros Clientes</h2>

        <div className="max-w-4xl mx-auto mb-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {clients.map((client) => (
              <div key={client.name} className="bg-gradient-to-br from-gray-50 to-white border-2 border-[#64FFDA] rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-[#0A192F] mb-2">{client.name}</h3>
                <p className="text-sm text-gray-600">{client.industry}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Guarantees */}
        <div className="max-w-5xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-8 text-[#0A192F]">Sellos de Garantía y Seguridad</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {guarantees.map((guarantee, index) => (
              <div key={index} className="flex flex-col items-center text-center p-4 bg-gray-50 rounded-lg border border-gray-200">
                <guarantee.icon className="text-[#64FFDA] mb-3" size={32} />
                <p className="text-sm text-gray-700">{guarantee.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
