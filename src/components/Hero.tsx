import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section id="inicio" className="relative pt-24 overflow-hidden">
      {/* Rainbow circles background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-gradient-to-r from-[#FFDEE2] to-[#FEC6A1] blur-3xl opacity-20 animate-float" />
        <div className="absolute top-40 right-20 w-72 h-72 rounded-full bg-gradient-to-r from-[#FEF7CD] to-[#F2FCE2] blur-3xl opacity-20 animate-float" style={{ animationDelay: "2s" }} />
        <div className="absolute bottom-20 left-1/4 w-56 h-56 rounded-full bg-gradient-to-r from-[#D3E4FD] to-[#E5DEFF] blur-3xl opacity-20 animate-float" style={{ animationDelay: "3s" }} />
      </div>

      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block">
              <h2 className="text-sm md:text-base bg-gradient-to-r from-pink-400 to-purple-400 text-white px-4 py-1 rounded-full mb-4">
                Psicologia Infantil
              </h2>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight">
              Cuidando do desenvolvimento emocional do seu filho
            </h1>
            <p className="text-lg text-gray-600">
              Atendimento especializado em psicologia infantil com foco no desenvolvimento saudável e feliz das crianças.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-gradient-to-r from-[#FEC6A1] to-[#FFDEE2] hover:opacity-90 text-primary-foreground border-none">
                Agende uma Consulta
              </Button>
              <Button variant="outline" className="border-2 border-[#D3E4FD] text-primary-foreground hover:bg-[#D3E4FD]/10">
                Saiba Mais
              </Button>
            </div>
          </div>
          <div className="relative">
            {/* Decorative elements */}
            <div className="absolute -top-8 -left-8 w-24 h-24 bg-[#FFDEE2] rounded-full opacity-50 animate-float" />
            <div className="absolute top-1/2 -right-12 w-20 h-20 bg-[#FEF7CD] rounded-full opacity-50 animate-float" style={{ animationDelay: "1.5s" }} />
            <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-[#F2FCE2] rounded-full opacity-50 animate-float" style={{ animationDelay: "2s" }} />
            
            {/* Main image with rainbow border */}
            <div className="relative rounded-2xl overflow-hidden p-1 bg-gradient-to-r from-[#FFDEE2] via-[#FEF7CD] to-[#D3E4FD]">
              <img
                src="/placeholder.svg"
                alt="Criança feliz"
                className="relative z-10 rounded-xl w-full max-w-md mx-auto"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Rainbow wave decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-24 overflow-hidden">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="absolute bottom-0 w-full h-full">
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            fill="url(#rainbow-gradient)"
            opacity=".25"
          />
          <defs>
            <linearGradient id="rainbow-gradient" x1="0" x2="100%" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#FFDEE2" />
              <stop offset="25%" stopColor="#FEC6A1" />
              <stop offset="50%" stopColor="#FEF7CD" />
              <stop offset="75%" stopColor="#D3E4FD" />
              <stop offset="100%" stopColor="#E5DEFF" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
};