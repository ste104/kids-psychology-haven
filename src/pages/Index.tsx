import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Contact } from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Contact />
      </main>
      <footer className="bg-primary-foreground text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 PsiKids. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;