import { Heart, Sparkles } from "lucide-react";

const FooterSection = () => {
  return (
    <footer className="py-12 px-6 bg-gradient-romantic">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-6">
          <div className="flex justify-center space-x-2 mb-4">
            <Heart className="text-heart text-2xl animate-pulse-heart" />
            <Sparkles className="text-primary text-2xl animate-bounce-soft" />
            <Heart className="text-heart text-2xl animate-pulse-heart" style={{ animationDelay: '0.5s' }} />
          </div>
          
          <p className="text-lg md:text-xl font-poppins text-foreground font-medium">
            Dibuat sepenuh hati oleh aku, untuk ayangku
          </p>
          <p className="text-2xl font-comic font-bold text-primary mt-2">
            Natal💞
          </p>
        </div>
        
        <div className="border-t border-pink-soft pt-6">
          <div className="flex justify-center space-x-4 text-3xl mb-4">
            <span className="animate-bounce">💖</span>
            <span className="animate-bounce" style={{ animationDelay: '0.2s' }}>✨</span>
            <span className="animate-bounce" style={{ animationDelay: '0.6s' }}>💕</span>
          </div>
          
          <p className="text-sm font-poppins text-muted-foreground">
            Semoga website ini bisa bikin kamu senyum seperti kamu selalu bikin aku senyum 😊
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;