import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Heart, Sparkles } from "lucide-react";

interface HeroSectionProps {
  onStart: () => void;
}

const HeroSection = ({ onStart }: HeroSectionProps) => {
  const [isRevealed, setIsRevealed] = useState(false);

  const handleStart = () => {
    setIsRevealed(true);
    setTimeout(() => {
      onStart();
    }, 1000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-romantic relative overflow-hidden">
      {/* Floating hearts animation */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <Heart
            key={i}
            className="absolute text-heart animate-float opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              fontSize: `${Math.random() * 20 + 10}px`,
            }}
          />
        ))}
      </div>

      <div className="text-center z-10 px-6 max-w-2xl">
        {!isRevealed ? (
          <div className="">
            <Heart className="mx-auto mb-8 text-6xl text-heart animate-pulse-heart" />
            <h1 className="text-5xl md:text-7xl font-comic font-bold text-foreground mb-4">
              Untuk Natal,
            </h1>
            <h2 className="text-4xl md:text-6xl font-comic font-bold text-primary mb-8">
              Gantengku 💖
            </h2>
            <p className="text-xl md:text-2xl font-poppins text-muted-foreground mb-12">
              Aku buat ini spesial buat ayang, karena aku sayang banget😚
            </p>
            <Button 
              onClick={handleStart}
              className="bg-gradient-heart hover:shadow-romantic text-xl py-6 px-12 rounded-full font-poppins font-semibold transform transition-all duration-300 hover:scale-105 animate-bounce-soft"
            >
              <Sparkles className="mr-3" />
              Klik di sini sayang
              <Heart className="ml-3 animate-pulse-heart" />
            </Button>
          </div>
        ) : (
          <div className="animate-fade-in">
            <div className="text-6xl animate-pulse-heart mb-4">💖</div>
            <h3 className="text-3xl font-comic font-bold text-primary mb-4">
              Siap-siap untuk senyum terus ya! 😊
            </h3>
            <div className="flex justify-center space-x-2">
              <div className="w-3 h-3 bg-heart rounded-full animate-bounce"></div>
              <div className="w-3 h-3 bg-heart rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
              <div className="w-3 h-3 bg-heart rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default HeroSection;