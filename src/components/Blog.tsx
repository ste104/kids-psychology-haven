import { Button } from "@/components/ui/button";

const posts = [
  {
    title: "Desenvolvimento Infantil",
    excerpt: "Como identificar e estimular as fases do desenvolvimento da criança.",
    image: "/placeholder.svg",
    gradient: "from-[#FFDEE2] to-[#FEC6A1]"
  },
  {
    title: "Ansiedade Infantil",
    excerpt: "Estratégias para ajudar crianças a lidar com a ansiedade.",
    image: "/placeholder.svg",
    gradient: "from-[#FEF7CD] to-[#F2FCE2]"
  },
  {
    title: "Brincadeiras Terapêuticas",
    excerpt: "A importância do brincar no processo terapêutico.",
    image: "/placeholder.svg",
    gradient: "from-[#D3E4FD] to-[#E5DEFF]"
  }
];

export const Blog = () => {
  return (
    <section className="py-16 relative overflow-hidden">
      {/* Rainbow background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-20 w-64 h-64 rounded-full bg-gradient-to-r from-[#FFDEE2] to-[#FEC6A1] blur-3xl opacity-20 animate-float" />
        <div className="absolute bottom-40 left-20 w-72 h-72 rounded-full bg-gradient-to-r from-[#FEF7CD] to-[#F2FCE2] blur-3xl opacity-20 animate-float" style={{ animationDelay: "2s" }} />
      </div>

      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold rainbow-text text-center mb-12">
          Blog
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <div key={index} className="group relative">
              {/* Rainbow border */}
              <div className={`absolute -inset-1 bg-gradient-to-r ${post.gradient} rounded-xl opacity-75 blur group-hover:opacity-100 transition-opacity`} />
              
              <div className="relative bg-white p-6 rounded-lg space-y-4">
                <div className="aspect-video overflow-hidden rounded-lg">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-xl font-bold rainbow-text">{post.title}</h3>
                <p className="text-gray-600">{post.excerpt}</p>
                <Button className={`w-full bg-gradient-to-r ${post.gradient} text-white border-none hover:opacity-90`}>
                  Ler mais
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};