export const About = () => {
  return (
    <section id="sobre" className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute -top-4 -right-4 w-full h-full bg-secondary rounded-2xl" />
            <img
              src="/placeholder.svg"
              alt="Psicóloga"
              className="relative z-10 rounded-2xl w-full"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground">
              Sobre Nossa Clínica
            </h2>
            <p className="text-gray-600">
              Com mais de 10 anos de experiência em psicologia infantil, nossa clínica é especializada em proporcionar um ambiente acolhedor e seguro para o desenvolvimento emocional das crianças.
            </p>
            <p className="text-gray-600">
              Acreditamos que cada criança é única e merece uma abordagem personalizada que respeite seu próprio ritmo de desenvolvimento e suas necessidades específicas.
            </p>
            <div className="grid grid-cols-2 gap-6 pt-4">
              <div>
                <h4 className="text-2xl font-bold text-primary-foreground">10+</h4>
                <p className="text-gray-600">Anos de Experiência</p>
              </div>
              <div>
                <h4 className="text-2xl font-bold text-primary-foreground">500+</h4>
                <p className="text-gray-600">Famílias Atendidas</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};