import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, ArrowRight, ArrowLeft } from "lucide-react";

const pantuns = [
  "Makan nasi sambil duduk,\nNgeliat kamu bikin hati ngaduk 💘",
  "Pergi ke pasar naik sepeda,\nSayang kamu tuh nggak ada jeda 🥺",
  "Main gitar sambil nyanyi,\nCintaku ke kamu abadi, ngerti? 😆"
];

const PantunSection = () => {
  const [currentPantun, setCurrentPantun] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextPantun = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentPantun((prev) => (prev + 1) % pantuns.length);
      setIsAnimating(false);
    }, 150);
  };

  const prevPantun = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentPantun((prev) => (prev - 1 + pantuns.length) % pantuns.length);
      setIsAnimating(false);
    }, 150);
  };

  useEffect(() => {
    const timer = setInterval(nextPantun, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-16 px-6 bg-gradient-romantic">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <BookOpen className="mx-auto mb-4 text-5xl text-primary animate-bounce-soft" />
          <h2 className="text-4xl font-comic font-bold text-foreground mb-4">
            Pantun Receh Buat Kamu 🤭
          </h2>
        </div>
        
        <Card className="p-8 md:p-12 bg-card shadow-soft border-2 border-pink-soft relative">
          <div className="text-center">
            <div className={`transition-all duration-300 ${isAnimating ? 'opacity-0 transform scale-95' : 'opacity-100 transform scale-100'}`}>
              <p className="text-xl md:text-2xl font-poppins text-foreground leading-relaxed whitespace-pre-line">
                {pantuns[currentPantun]}
              </p>
            </div>
            
            <div className="flex justify-center items-center mt-8 space-x-4">
              <Button
                onClick={prevPantun}
                variant="outline"
                size="sm"
                className="rounded-full border-primary hover:bg-primary hover:text-primary-foreground"
              >
                <ArrowLeft className="w-4 h-4" />
              </Button>
              
              <div className="flex space-x-2">
                {pantuns.map((_, index) => (
                  <div
                    key={index}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentPantun ? 'bg-primary scale-125' : 'bg-muted'
                    }`}
                  />
                ))}
              </div>
              
              <Button
                onClick={nextPantun}
                variant="outline"
                size="sm"
                className="rounded-full border-primary hover:bg-primary hover:text-primary-foreground"
              >
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute top-4 left-4 text-2xl animate-pulse">📝</div>
          <div className="absolute bottom-4 right-4 text-2xl animate-pulse" style={{ animationDelay: '1s' }}>💭</div>
        </Card>
      </div>
    </section>
  );
};

export default PantunSection;