import { Brain, Heart, Users, Star } from "lucide-react";

const services = [
  {
    icon: Brain,
    title: "Avaliação Psicológica",
    description: "Avaliação completa do desenvolvimento cognitivo e emocional.",
    gradient: "from-[#FFDEE2] to-[#FEC6A1]"
  },
  {
    icon: Heart,
    title: "Terapia Infantil",
    description: "Acompanhamento terapêutico especializado para crianças.",
    gradient: "from-[#FEF7CD] to-[#F2FCE2]"
  },
  {
    icon: Users,
    title: "Orientação Familiar",
    description: "Suporte e orientação para pais e familiares.",
    gradient: "from-[#D3E4FD] to-[#E5DEFF]"
  },
  {
    icon: Star,
    title: "Desenvolvimento",
    description: "Estímulo ao desenvolvimento de habilidades sociais.",
    gradient: "from-[#FDE1D3] to-[#FFDEE2]"
  },
];

export const Services = () => {
  return (
    <section id="servicos" className="py-16 relative overflow-hidden">
      {/* Rainbow background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-20 w-64 h-64 rounded-full bg-gradient-to-r from-[#FFDEE2] to-[#FEC6A1] blur-3xl opacity-20 animate-float" />
        <div className="absolute bottom-40 left-20 w-72 h-72 rounded-full bg-gradient-to-r from-[#FEF7CD] to-[#F2FCE2] blur-3xl opacity-20 animate-float" style={{ animationDelay: "2s" }} />
      </div>

      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold rainbow-text mb-4">
            Nossos Serviços
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Oferecemos uma variedade de serviços especializados para apoiar o desenvolvimento saudável do seu filho.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div 
              key={service.title} 
              className="relative group"
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-300`} />
              <div className="service-card relative z-10">
                <div className={`h-12 w-12 mb-4 bg-gradient-to-r ${service.gradient} rounded-lg p-2`}>
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2 rainbow-text">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};