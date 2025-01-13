import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Header = () => {
  return (
    <header className="fixed w-full bg-white/90 backdrop-blur-sm z-50">
      {/* Rainbow top border */}
      <div className="h-1 w-full bg-gradient-to-r from-[#FFDEE2] via-[#FEF7CD] to-[#D3E4FD]" />
      
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#FFDEE2] via-[#FEF7CD] to-[#D3E4FD] rounded-full animate-pulse" />
              <img src="/placeholder.svg" alt="Logo" className="h-10 w-10 relative z-10" />
            </div>
            <span className="font-display font-bold text-xl rainbow-text">PsiKids</span>
          </div>
          
          <nav className="hidden md:flex items-center gap-8">
            <a href="#inicio" className="font-medium hover:text-primary-foreground transition-colors relative group">
              Início
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#FFDEE2] via-[#FEF7CD] to-[#D3E4FD] transform scale-x-0 transition-transform group-hover:scale-x-100" />
            </a>
            <a href="#sobre" className="font-medium hover:text-primary-foreground transition-colors relative group">
              Sobre
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#FFDEE2] via-[#FEF7CD] to-[#D3E4FD] transform scale-x-0 transition-transform group-hover:scale-x-100" />
            </a>
            <a href="#servicos" className="font-medium hover:text-primary-foreground transition-colors relative group">
              Serviços
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#FFDEE2] via-[#FEF7CD] to-[#D3E4FD] transform scale-x-0 transition-transform group-hover:scale-x-100" />
            </a>
            <a href="#contato" className="font-medium hover:text-primary-foreground transition-colors relative group">
              Contato
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#FFDEE2] via-[#FEF7CD] to-[#D3E4FD] transform scale-x-0 transition-transform group-hover:scale-x-100" />
            </a>
          </nav>

          <Button className="md:hidden" variant="ghost" size="icon">
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </header>
  );
};