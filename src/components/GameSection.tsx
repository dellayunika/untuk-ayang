import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Gamepad2, Heart } from "lucide-react";

const gameOptions = ["Gak 😜", "Coba lagi 😅", "Aku malu 🙈", "I Love You ❤️", "Bukan ini 😆"];

const GameSection = () => {
  const [gameState, setGameState] = useState<'playing' | 'won' | 'retry'>('playing');
  const [shuffledOptions, setShuffledOptions] = useState(() => 
    [...gameOptions].sort(() => Math.random() - 0.5)
  );

  const handleButtonClick = (option: string) => {
    if (option === "I Love You ❤️") {
      setGameState('won');
    } else {
      setGameState('retry');
      // Shuffle buttons again
      setShuffledOptions([...gameOptions].sort(() => Math.random() - 0.5));
      setTimeout(() => setGameState('playing'), 1500);
    }
  };

  const resetGame = () => {
    setGameState('playing');
    setShuffledOptions([...gameOptions].sort(() => Math.random() - 0.5));
  };

  return (
    <section className="py-16 px-6 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <Gamepad2 className="mx-auto mb-4 text-5xl text-primary animate-bounce-soft" />
          <h2 className="text-4xl font-comic font-bold text-foreground mb-4">
            Main yuk! 😆
          </h2>
          <p className="text-xl font-poppins text-muted-foreground">
            Cari tombol 'I Love You' di antara tombol-tombol jebakan! 😝
          </p>
        </div>
        
        <Card className="p-8 bg-card shadow-soft border-2 border-blue-soft">
          {gameState === 'playing' && (
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {shuffledOptions.map((option, index) => (
                <Button
                  key={`${option}-${index}`}
                  onClick={() => handleButtonClick(option)}
                  className="py-4 px-6 text-lg font-poppins rounded-2xl bg-gradient-heart hover:shadow-romantic transform transition-all duration-300 hover:scale-105"
                >
                  {option}
                </Button>
              ))}
            </div>
          )}
          
          {gameState === 'retry' && (
            <div className="text-center animate-wiggle">
              <div className="text-4xl mb-4">😅</div>
              <p className="text-2xl font-comic font-bold text-primary">
                Oops! Coba lagi yaa 😝
              </p>
            </div>
          )}
          
          {gameState === 'won' && (
            <div className="text-center animate-pulse-heart">
              <Heart className="mx-auto mb-4 text-6xl text-heart animate-pulse-heart" />
              <div className="text-4xl mb-4">🥰💕✨</div>
              <p className="text-3xl font-comic font-bold text-primary mb-6">
                Yeay! I Love You Too! 💖
              </p>
              <p className="text-lg font-poppins text-muted-foreground mb-6">
                Kamu berhasil nemuin tombol yang tepat! Sama seperti kamu yang berhasil nemuin hati aku 💕
              </p>
              <Button 
                onClick={resetGame}
                variant="outline"
                className="border-primary hover:bg-primary hover:text-primary-foreground"
              >
                Main Lagi? 🎮
              </Button>
            </div>
          )}
        </Card>
      </div>
    </section>
  );
};

export default GameSection;