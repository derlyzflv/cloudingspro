import { Cloud, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#0A192F] text-gray-300 py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Cloud className="text-[#64FFDA]" size={32} />
              <span className="text-xl font-bold text-white">CloudingsPro</span>
            </div>
            <p className="text-sm mb-4">
              Soluciones de hosting en la nube confiables y escalables para tu negocio.
            </p>
            <div className="flex gap-3">
              <Facebook size={20} className="hover:text-[#64FFDA] cursor-pointer transition" />
              <Twitter size={20} className="hover:text-[#64FFDA] cursor-pointer transition" />
              <Linkedin size={20} className="hover:text-[#64FFDA] cursor-pointer transition" />
              <Instagram size={20} className="hover:text-[#64FFDA] cursor-pointer transition" />
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Servicios</h4>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-[#64FFDA] cursor-pointer transition">Hosting Web</li>
              <li className="hover:text-[#64FFDA] cursor-pointer transition">Cloud VPS</li>
              <li className="hover:text-[#64FFDA] cursor-pointer transition">Servidores Dedicados</li>
              <li className="hover:text-[#64FFDA] cursor-pointer transition">Dominios</li>
              <li className="hover:text-[#64FFDA] cursor-pointer transition">SSL Certificados</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Empresa</h4>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-[#64FFDA] cursor-pointer transition">Sobre Nosotros</li>
              <li className="hover:text-[#64FFDA] cursor-pointer transition">Blog</li>
              <li className="hover:text-[#64FFDA] cursor-pointer transition">Casos de Éxito</li>
              <li className="hover:text-[#64FFDA] cursor-pointer transition">Trabajar con Nosotros</li>
              <li className="hover:text-[#64FFDA] cursor-pointer transition">Términos y Condiciones</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Contacto</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-[#64FFDA]" />
                <span>info@cloudingspro.com</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-[#64FFDA]" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="text-[#64FFDA] mt-1" />
                <span>Av. Principal 123<br />Ciudad, País 12345</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#0F172A] pt-8 text-center text-sm">
          <p>&copy; 2026 CloudingsPro. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
