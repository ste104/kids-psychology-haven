import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Header = () => {
  return (
    <header className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src="/placeholder.svg" alt="Logo" className="h-10 w-10" />
            <span className="font-display font-bold text-xl text-primary-foreground">PsiKids</span>
          </div>
          
          <nav className="hidden md:flex items-center gap-8">
            <a href="#inicio" className="font-medium hover:text-primary-foreground transition-colors">Início</a>
            <a href="#sobre" className="font-medium hover:text-primary-foreground transition-colors">Sobre</a>
            <a href="#servicos" className="font-medium hover:text-primary-foreground transition-colors">Serviços</a>
            <a href="#contato" className="font-medium hover:text-primary-foreground transition-colors">Contato</a>
          </nav>

          <Button className="md:hidden" variant="ghost" size="icon">
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </header>
  );
};