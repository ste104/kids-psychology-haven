import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { ClinicCarousel } from "@/components/ClinicCarousel";
import { Location } from "@/components/Location";
import { Blog } from "@/components/Blog";
import { Contact } from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <ClinicCarousel />
        <Location />
        <Blog />
        <Contact />
      </main>
      <footer className="bg-gradient-to-r from-[#FFDEE2] via-[#FEF7CD] to-[#D3E4FD] text-primary-foreground py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 PsiKids. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;