import { MapPin, Phone, Mail } from "lucide-react";

export const Location = () => {
  return (
    <section className="py-16 relative overflow-hidden">
      {/* Rainbow background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-20 w-64 h-64 rounded-full bg-gradient-to-r from-[#FFDEE2] to-[#FEC6A1] blur-3xl opacity-20 animate-float" />
        <div className="absolute bottom-40 right-20 w-72 h-72 rounded-full bg-gradient-to-r from-[#FEF7CD] to-[#F2FCE2] blur-3xl opacity-20 animate-float" style={{ animationDelay: "2s" }} />
      </div>

      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold rainbow-text text-center mb-12">
          Localização
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="relative">
            {/* Rainbow border */}
            <div className="absolute -inset-1 bg-gradient-to-r from-[#FFDEE2] via-[#FEF7CD] to-[#D3E4FD] rounded-xl opacity-75 blur" />
            <div className="relative bg-white p-6 rounded-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.1975774778827!2d-46.6521891!3d-23.5645224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDMzJzUyLjMiUyA0NsKwMzknMDcuOSJX!5e0!3m2!1sen!2sbr!4v1635787245123!5m2!1sen!2sbr"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                className="rounded-lg"
              ></iframe>
            </div>
          </div>

          <div className="space-y-6">
            <div className="p-6 rounded-xl bg-gradient-to-r from-[#FFDEE2]/10 to-[#FEC6A1]/10 hover:from-[#FFDEE2]/20 hover:to-[#FEC6A1]/20 transition-colors">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-gradient-to-r from-[#FFDEE2] to-[#FEC6A1] flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold rainbow-text">Endereço</h3>
                  <p className="text-gray-600">Rua Exemplo, 123 - São Paulo, SP</p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-gradient-to-r from-[#FEF7CD]/10 to-[#F2FCE2]/10 hover:from-[#FEF7CD]/20 hover:to-[#F2FCE2]/20 transition-colors">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-gradient-to-r from-[#FEF7CD] to-[#F2FCE2] flex items-center justify-center">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold rainbow-text">Telefone</h3>
                  <p className="text-gray-600">(11) 99999-9999</p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-gradient-to-r from-[#D3E4FD]/10 to-[#E5DEFF]/10 hover:from-[#D3E4FD]/20 hover:to-[#E5DEFF]/20 transition-colors">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-gradient-to-r from-[#D3E4FD] to-[#E5DEFF] flex items-center justify-center">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold rainbow-text">Email</h3>
                  <p className="text-gray-600">contato@psikids.com.br</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};