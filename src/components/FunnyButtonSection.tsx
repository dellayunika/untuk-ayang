import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Smile } from "lucide-react";

const FunnyButtonSection = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [buttonPosition, setButtonPosition] = useState({ x: 0, y: 0 });

  const handleButtonClick = () => {
    setIsClicked(true);
    // Add subtle wiggle animation by changing position slightly
    setButtonPosition({
      x: Math.random() * 6 - 3,
      y: Math.random() * 6 - 3
    });
    
    setTimeout(() => {
      setButtonPosition({ x: 0, y: 0 });
    }, 500);
  };

  return (
    <section className="py-16 px-6 bg-background">
      <div className="max-w-4xl mx-auto text-center">
        <Card className="p-8 bg-card shadow-soft border-2 border-peach-soft">
          <div className="mb-8">
            <Button
              onClick={handleButtonClick}
              className={`bg-gradient-heart hover:shadow-romantic text-xl py-6 px-12 rounded-full font-poppins font-semibold transform transition-all duration-300 ${
                isClicked ? 'animate-wiggle' : 'hover:scale-105'
              }`}
              style={{
                transform: `translate(${buttonPosition.x}px, ${buttonPosition.y}px) ${isClicked ? 'rotate(5deg)' : ''}`
              }}
            >
              Merasa Ganteng?
            </Button>

          </div>
          
          {isClicked && (
            <div className="animate-fade-in">
              <div className="text-4xl mb-4 animate-pulse-heart">🥰</div>
              <p className="text-2xl font-comic font-bold text-primary">
                Ya jelas ganteng dong, milik aku! 💖
              </p>
              <div className="mt-4 flex justify-center space-x-2">
                <span className="text-2xl animate-bounce">😍</span>
                <span className="text-2xl animate-bounce" style={{ animationDelay: '0.1s' }}>💕</span>
                <span className="text-2xl animate-bounce" style={{ animationDelay: '0.2s' }}>✨</span>
              </div>
            </div>
          )}
        </Card>
      </div>
    </section>
  );
};

export default FunnyButtonSection;