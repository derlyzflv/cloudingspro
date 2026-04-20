import { Target, Eye, TrendingUp } from 'lucide-react';

export function About() {
  return (
    <section id="nosotros" className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-[#0A192F]">Quiénes Somos</h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
          <div className="bg-white rounded-lg shadow-lg p-8 border-t-4 border-[#64FFDA]">
            <div className="flex items-center gap-4 mb-4">
              <Target className="text-[#64FFDA]" size={32} />
              <h3 className="text-2xl font-semibold text-[#0A192F]">Misión</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Empoderar a desarrolladores y empresas locales con infraestructura de clase mundial,
              baja latencia y escalabilidad automática sin complicaciones técnicas.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 border-t-4 border-[#64FFDA]">
            <div className="flex items-center gap-4 mb-4">
              <Eye className="text-[#64FFDA]" size={32} />
              <h3 className="text-2xl font-semibold text-[#0A192F]">Visión</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Ser el estándar de infraestructura en la nube para el ecosistema tech de la región.
            </p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8 border-t-4 border-[#64FFDA]">
            <div className="flex items-center gap-4 mb-6">
              <TrendingUp className="text-[#64FFDA]" size={32} />
              <h3 className="text-2xl font-semibold text-[#0A192F]">Objetivos</h3>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-[#64FFDA] text-xl">✓</span>
                <p className="text-gray-600 leading-relaxed">
                  Reducir el tiempo de despliegue de las empresas locales en un 70%.
                </p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#64FFDA] text-xl">✓</span>
                <p className="text-gray-600 leading-relaxed">
                  Garantizar latencia menor a 30ms dentro del territorio nacional.
                </p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#64FFDA] text-xl">✓</span>
                <p className="text-gray-600 leading-relaxed">
                  Democratizar el acceso a herramientas de autogestión de servidores para PYMEs.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
