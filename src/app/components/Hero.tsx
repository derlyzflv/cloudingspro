import { Cloud, Server } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-[#0A192F] to-[#0F172A] text-white py-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center gap-3 mb-6">
            <Cloud size={48} className="text-[#64FFDA]" />
            <h1 className="text-5xl font-bold">CloudingsPro</h1>
          </div>
          <p className="text-xl mb-8 max-w-2xl text-gray-300">
            Impulsa tu negocio con una plataforma en la nube diseñada para crecer contigo, sin preocuparte por la infraestructura.
          </p>
          <div className="flex gap-4">
            <button className="bg-[#64FFDA] text-[#0A192F] px-8 py-3 rounded-lg font-semibold hover:bg-[#52edc8] transition">
              Ver Planes
            </button>
            <button className="border-2 border-[#64FFDA] text-[#64FFDA] px-8 py-3 rounded-lg font-semibold hover:bg-[#64FFDA]/10 transition">
              Contactar
            </button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}
