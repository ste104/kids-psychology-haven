import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section id="inicio" className="pt-24 hero-gradient">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight">
              Cuidando do desenvolvimento emocional do seu filho
            </h1>
            <p className="text-lg text-gray-600">
              Atendimento especializado em psicologia infantil com foco no desenvolvimento saudável e feliz das crianças.
            </p>
            <div className="flex gap-4">
              <Button className="bg-primary hover:bg-primary-hover text-primary-foreground">
                Agende uma Consulta
              </Button>
              <Button variant="outline" className="border-primary text-primary-foreground">
                Saiba Mais
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -top-8 -left-8 w-24 h-24 bg-secondary rounded-full opacity-50 animate-float" />
            <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-accent rounded-full opacity-50 animate-float" style={{ animationDelay: "2s" }} />
            <img
              src="/placeholder.svg"
              alt="Criança feliz"
              className="relative z-10 rounded-2xl shadow-xl w-full max-w-md mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};