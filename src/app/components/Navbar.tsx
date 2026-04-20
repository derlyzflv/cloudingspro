import { Cloud, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['nosotros', 'planes', 'clientes', 'resenas'];
      const scrollPosition = window.scrollY + 100;

      if (scrollPosition < 200) {
        setActiveSection('inicio');
        return;
      }

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            return;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    if (id === 'inicio') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsOpen(false);
  };

  const navLinkClass = (section: string) =>
    `font-medium transition ${activeSection === section ? 'text-[#64FFDA] border-b-2 border-[#64FFDA] pb-1' : 'text-gray-700 hover:text-[#64FFDA]'}`;

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollToSection('inicio')}>
            <Cloud className="text-[#64FFDA]" size={32} />
            <span className="text-xl font-bold text-[#0A192F]">CloudingsPro</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection('inicio')} className={navLinkClass('inicio')}>
              Inicio
            </button>
            <button onClick={() => scrollToSection('nosotros')} className={navLinkClass('nosotros')}>
              Nosotros
            </button>
            <button onClick={() => scrollToSection('planes')} className={navLinkClass('planes')}>
              Planes
            </button>
            <button onClick={() => scrollToSection('clientes')} className={navLinkClass('clientes')}>
              Clientes
            </button>
            <button onClick={() => scrollToSection('resenas')} className={navLinkClass('resenas')}>
              Reseñas
            </button>
            <button className="bg-[#64FFDA] text-[#0A192F] px-6 py-2 rounded-lg hover:bg-[#52edc8] transition font-medium">
              Contactar
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-[#0A192F]">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 animate-in fade-in slide-in-from-top">
            <div className="flex flex-col gap-4">
              <button onClick={() => scrollToSection('inicio')} className={`${navLinkClass('inicio')} text-left`}>
                Inicio
              </button>
              <button onClick={() => scrollToSection('nosotros')} className={`${navLinkClass('nosotros')} text-left`}>
                Nosotros
              </button>
              <button onClick={() => scrollToSection('planes')} className={`${navLinkClass('planes')} text-left`}>
                Planes
              </button>
              <button onClick={() => scrollToSection('clientes')} className={`${navLinkClass('clientes')} text-left`}>
                Clientes
              </button>
              <button onClick={() => scrollToSection('resenas')} className={`${navLinkClass('resenas')} text-left`}>
                Reseñas
              </button>
              <button className="bg-[#64FFDA] text-[#0A192F] px-6 py-2 rounded-lg hover:bg-[#52edc8] transition font-medium">
                Contactar
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
