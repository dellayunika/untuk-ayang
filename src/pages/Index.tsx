import { useState } from "react";
import HeroSection from "@/components/HeroSection";
import MessageSection from "@/components/MessageSection";
import FakeChatSection from "@/components/FakeChatSection";
import FunnyButtonSection from "@/components/FunnyButtonSection";
import PantunSection from "@/components/PantunSection";
import GameSection from "@/components/GameSection";
import QuizSection from "@/components/QuizSection";
import ImageGallery from "@/components/ImageGallery";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  const [showContent, setShowContent] = useState(false);

  const handleStartAdventure = () => {
    setShowContent(true);
  };

  return (
    <div className="min-h-screen bg-background font-poppins">
      {!showContent ? (
        <HeroSection onStart={handleStartAdventure} />
      ) : (
        <div className="animate-fade-in">
          <MessageSection />
          <FakeChatSection />
          <FunnyButtonSection />
          <PantunSection />
          <GameSection />
          <QuizSection />
          <ImageGallery />
          <FooterSection />
        </div>
      )}
    </div>
  );
};

export default Index;