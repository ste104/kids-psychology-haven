import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export const ClinicCarousel = () => {
  const images = [
    "/placeholder.svg",
    "/placeholder.svg",
    "/placeholder.svg",
    "/placeholder.svg",
  ];

  return (
    <section className="py-16 relative overflow-hidden">
      {/* Rainbow background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-20 w-64 h-64 rounded-full bg-gradient-to-r from-[#FFDEE2] to-[#FEC6A1] blur-3xl opacity-20 animate-float" />
        <div className="absolute bottom-40 left-20 w-72 h-72 rounded-full bg-gradient-to-r from-[#FEF7CD] to-[#F2FCE2] blur-3xl opacity-20 animate-float" style={{ animationDelay: "2s" }} />
      </div>

      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold rainbow-text text-center mb-12">
          Nossa Clínica
        </h2>
        
        <div className="relative">
          {/* Rainbow border */}
          <div className="absolute -inset-1 bg-gradient-to-r from-[#FFDEE2] via-[#FEF7CD] to-[#D3E4FD] rounded-xl opacity-75 blur" />
          
          <Carousel className="relative bg-white p-1 rounded-lg">
            <CarouselContent>
              {images.map((image, index) => (
                <CarouselItem key={index}>
                  <div className="relative p-2">
                    <div className="aspect-video overflow-hidden rounded-lg">
                      <img
                        src={image}
                        alt={`Clínica ${index + 1}`}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="bg-gradient-to-r from-[#FFDEE2] to-[#FEC6A1] border-none text-white" />
            <CarouselNext className="bg-gradient-to-r from-[#D3E4FD] to-[#E5DEFF] border-none text-white" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};