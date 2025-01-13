export const About = () => {
  return (
    <section id="sobre" className="py-16 relative overflow-hidden">
      {/* Rainbow background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-gradient-to-r from-[#FFDEE2] to-[#FEC6A1] blur-3xl opacity-20 animate-float" />
        <div className="absolute bottom-20 right-10 w-72 h-72 rounded-full bg-gradient-to-r from-[#FEF7CD] to-[#F2FCE2] blur-3xl opacity-20 animate-float" style={{ animationDelay: "2s" }} />
      </div>

      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute -top-4 -right-4 w-full h-full bg-gradient-to-r from-[#FFDEE2] via-[#FEF7CD] to-[#D3E4FD] rounded-2xl opacity-50" />
            <img
              src="/placeholder.svg"
              alt="Psicóloga"
              className="relative z-10 rounded-2xl w-full"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold rainbow-text">
              Sobre Nossa Clínica
            </h2>
            <p className="text-gray-600">
              Com mais de 10 anos de experiência em psicologia infantil, nossa clínica é especializada em proporcionar um ambiente acolhedor e seguro para o desenvolvimento emocional das crianças.
            </p>
            <p className="text-gray-600">
              Acreditamos que cada criança é única e merece uma abordagem personalizada que respeite seu próprio ritmo de desenvolvimento e suas necessidades específicas.
            </p>
            <div className="grid grid-cols-2 gap-6 pt-4">
              <div className="p-4 rounded-lg bg-gradient-to-r from-[#FFDEE2]/10 to-[#D3E4FD]/10">
                <h4 className="text-2xl font-bold rainbow-text">10+</h4>
                <p className="text-gray-600">Anos de Experiência</p>
              </div>
              <div className="p-4 rounded-lg bg-gradient-to-r from-[#FEF7CD]/10 to-[#F2FCE2]/10">
                <h4 className="text-2xl font-bold rainbow-text">500+</h4>
                <p className="text-gray-600">Famílias Atendidas</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};