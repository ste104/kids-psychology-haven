import { Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Contact = () => {
  return (
    <section id="contato" className="py-16 relative overflow-hidden">
      {/* Rainbow background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-20 w-64 h-64 rounded-full bg-gradient-to-r from-[#FFDEE2] to-[#FEC6A1] blur-3xl opacity-20 animate-float" />
        <div className="absolute bottom-40 right-20 w-72 h-72 rounded-full bg-gradient-to-r from-[#FEF7CD] to-[#F2FCE2] blur-3xl opacity-20 animate-float" style={{ animationDelay: "2s" }} />
      </div>

      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold rainbow-text mb-4">
            Entre em Contato
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Estamos aqui para ajudar. Entre em contato conosco para agendar uma consulta ou tirar suas dúvidas.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex items-start gap-4 p-6 rounded-xl bg-gradient-to-r from-[#FFDEE2]/10 to-[#FEC6A1]/10">
              <Phone className="h-6 w-6 text-[#FFDEE2]" />
              <div>
                <h4 className="font-bold mb-1 rainbow-text">Telefone</h4>
                <p className="text-gray-600">(11) 99999-9999</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-6 rounded-xl bg-gradient-to-r from-[#FEF7CD]/10 to-[#F2FCE2]/10">
              <Mail className="h-6 w-6 text-[#FEF7CD]" />
              <div>
                <h4 className="font-bold mb-1 rainbow-text">E-mail</h4>
                <p className="text-gray-600">contato@psikids.com.br</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-6 rounded-xl bg-gradient-to-r from-[#D3E4FD]/10 to-[#E5DEFF]/10">
              <MapPin className="h-6 w-6 text-[#D3E4FD]" />
              <div>
                <h4 className="font-bold mb-1 rainbow-text">Endereço</h4>
                <p className="text-gray-600">Rua Exemplo, 123 - São Paulo, SP</p>
              </div>
            </div>
          </div>

          <form className="space-y-6 p-8 rounded-xl bg-white shadow-xl relative">
            {/* Rainbow border */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#FFDEE2] via-[#FEF7CD] to-[#D3E4FD] rounded-xl -z-10 blur-sm" />
            
            <div>
              <label className="block text-sm font-medium mb-2 rainbow-text">Nome</label>
              <input
                type="text"
                className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#FFDEE2] focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2 rainbow-text">E-mail</label>
              <input
                type="email"
                className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#FEF7CD] focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2 rainbow-text">Mensagem</label>
              <textarea
                rows={4}
                className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#D3E4FD] focus:border-transparent"
              />
            </div>
            <Button className="w-full bg-gradient-to-r from-[#FFDEE2] via-[#FEF7CD] to-[#D3E4FD] hover:opacity-90 text-primary-foreground">
              Enviar Mensagem
            </Button>
          </form>
        </div>
      </div>

      {/* Rainbow wave decoration at bottom */}
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
              <stop offset="20%" stopColor="#FEC6A1" />
              <stop offset="40%" stopColor="#FEF7CD" />
              <stop offset="60%" stopColor="#F2FCE2" />
              <stop offset="80%" stopColor="#D3E4FD" />
              <stop offset="100%" stopColor="#E5DEFF" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
};