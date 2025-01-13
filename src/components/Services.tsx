import { Brain, Heart, Users, Star } from "lucide-react";

const services = [
  {
    icon: Brain,
    title: "Avaliação Psicológica",
    description: "Avaliação completa do desenvolvimento cognitivo e emocional.",
  },
  {
    icon: Heart,
    title: "Terapia Infantil",
    description: "Acompanhamento terapêutico especializado para crianças.",
  },
  {
    icon: Users,
    title: "Orientação Familiar",
    description: "Suporte e orientação para pais e familiares.",
  },
  {
    icon: Star,
    title: "Desenvolvimento",
    description: "Estímulo ao desenvolvimento de habilidades sociais.",
  },
];

export const Services = () => {
  return (
    <section id="servicos" className="py-16 bg-primary/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Nossos Serviços
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Oferecemos uma variedade de serviços especializados para apoiar o desenvolvimento saudável do seu filho.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div key={service.title} className="service-card">
              <service.icon className="h-12 w-12 text-primary-foreground mb-4" />
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};