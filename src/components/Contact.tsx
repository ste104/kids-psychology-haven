import { Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Contact = () => {
  return (
    <section id="contato" className="py-16 bg-accent/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Entre em Contato
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Estamos aqui para ajudar. Entre em contato conosco para agendar uma consulta ou tirar suas dúvidas.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <Phone className="h-6 w-6 text-primary-foreground" />
              <div>
                <h4 className="font-bold mb-1">Telefone</h4>
                <p className="text-gray-600">(11) 99999-9999</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Mail className="h-6 w-6 text-primary-foreground" />
              <div>
                <h4 className="font-bold mb-1">E-mail</h4>
                <p className="text-gray-600">contato@psikids.com.br</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <MapPin className="h-6 w-6 text-primary-foreground" />
              <div>
                <h4 className="font-bold mb-1">Endereço</h4>
                <p className="text-gray-600">Rua Exemplo, 123 - São Paulo, SP</p>
              </div>
            </div>
          </div>

          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">Nome</label>
              <input
                type="text"
                className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">E-mail</label>
              <input
                type="email"
                className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Mensagem</label>
              <textarea
                rows={4}
                className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>
            <Button className="w-full bg-primary hover:bg-primary-hover text-primary-foreground">
              Enviar Mensagem
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};