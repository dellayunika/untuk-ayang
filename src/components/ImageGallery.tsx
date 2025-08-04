import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Camera, ChevronLeft, ChevronRight } from "lucide-react";
import romanticCoupleImage from "@/assets/romantic-couple-sunset.jpg";
import heartBalloonsImage from "@/assets/heart-balloons.jpg";
import romanticPicnicImage from "@/assets/romantic-picnic.jpg";
import coupleSelfieImage from "@/assets/couple-selfie.jpg";

const images = [
  { 
    src: romanticCoupleImage, 
    alt: "Kita waktu jalan bareng",
    caption: "Aku ga bisa berhenti senyum 🌅"
  },
  { 
    src: coupleSelfieImage, 
    alt: "Selfie kita yang paling lucu",
    caption: "Selfie termanis kita 😊"
  },
  { 
    src: romanticPicnicImage, 
    alt: "Momen kamu senyum bikin aku meleleh",
    caption: "Genggam genggam biar hangat 🌸"
  },
  { 
    src: heartBalloonsImage, 
    alt: "Waktu kita makan bareng",
    caption: "Pengen nempel terus 💕"
  }
];

const ImageGallery = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section className="py-16 px-6 bg-background">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <Camera className="mx-auto mb-4 text-5xl text-primary animate-bounce-soft" />
          <h2 className="text-4xl font-comic font-bold text-foreground mb-4">
            Galeri Kenangan Kita 📸
          </h2>
          <p className="text-lg font-poppins text-muted-foreground">
            Setiap foto adalah kenangan indah yang tersimpan di hati 💝
          </p>
        </div>
        
        <Card className="p-6 bg-card shadow-soft border-2 border-pink-soft">
          <div className="relative">
            <div className="aspect-video rounded-lg overflow-hidden mb-6 bg-gradient-romantic">
              <img
                src={images[currentImage].src}
                alt={images[currentImage].alt}
                className="w-full h-full object-cover transition-all duration-500"
              />
            </div>
            
            {/* Navigation buttons */}
            <Button
              onClick={prevImage}
              variant="outline"
              size="icon"
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>
            
            <Button
              onClick={nextImage}
              variant="outline"
              size="icon"
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
            
            {/* Caption */}
            <div className="text-center mb-6">
              <p className="text-xl font-poppins font-semibold text-foreground">
                {images[currentImage].caption}
              </p>
            </div>
            
            {/* Dots indicator */}
            <div className="flex justify-center space-x-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentImage 
                      ? 'bg-primary scale-125' 
                      : 'bg-muted hover:bg-muted-foreground'
                  }`}
                />
              ))}
            </div>
          </div>
        </Card>
        
        {/* Thumbnail gallery */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setCurrentImage(index)}
              className={`aspect-square rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                index === currentImage 
                  ? 'border-primary shadow-romantic scale-105' 
                  : 'border-border hover:border-primary'
              }`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImageGallery;