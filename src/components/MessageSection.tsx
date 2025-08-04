import { Card } from "@/components/ui/card";
import { Heart, Mail } from "lucide-react";

const MessageSection = () => {
  return (
    <section className="py-16 px-6 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <Mail className="mx-auto mb-4 text-5xl text-primary animate-bounce-soft" />
          <h2 className="text-4xl font-comic font-bold text-foreground mb-4">
            Pesan Cinta 💌
          </h2>
        </div>
        
        <Card className="p-8 md:p-12 bg-card shadow-soft border-2 border-pink-soft relative overflow-hidden">
          {/* Decorative hearts */}
          <div className="absolute top-4 right-4">
            <Heart className="text-heart text-2xl animate-pulse-heart" />
          </div>
          <div className="absolute bottom-4 left-4">
            <Heart className="text-heart text-xl animate-pulse-heart" style={{ animationDelay: '0.5s' }} />
          </div>
          
          <div className="text-Left">
            <p className="text-lg md:text-xl font-poppins text-foreground leading-relaxed">
              Sayang,
            </p>
            <p className="text-lg md:text-xl font-poppins text-foreground leading-relaxed">
              Aku pengen bilang banyak hal, tapi ga semua bisa dibilang dengan huruf huruf biasa. Jadi aku coba buat merangkainya biar kamu tau aku memang sayang banget sama Natal.
              Aku jatuh cinta bukan karena siapa kamu, tapi karena siapa aku ketika bersamamu. Kamu membuatku merasa cukup, dan yang paling penting: merasa di cintai.
              Setiap hari bersamamu adalah hadiah. Bahkan di tengah kekacauan hidup, kehadiranmu menenangkan. Dalam candamu, aku merasa hidup kembali. Kamu adalah rumah yang tak pernah aku tahu sedang aku cari.
              Terima kasih karena telah menjadi dirimu — jujur, sabar, dan tak pernah lelah mencintaiku dengan caramu. Aku tahu hubungan tak selalu mudah, tapi bersamamu, aku ingin memperjuangkan segalanya. Bukan karena aku harus, tapi karena aku ingin.
              Jika suatu hari dunia menjadi terlalu berat untuk kita, pegang tanganku erat-erat, dan kita akan berjalan bersama. Karena selama kamu bersamaku, aku tahu semuanya akan baik-baik saja.
              Aku menyayangimu, sedalam samudra, setinggi langit, dan seluas dunia ini. Lebih dari sekadar kata, lebih dari sekadar janji — aku ingin tumbuh dan menua bersamamu, satu detik, satu harapan, satu cinta dalam waktu yang panjang.
            </p>
            <p className="text-lg md:text-xl font-poppins text-foreground leading-relaxed">
              Selamanya milikmu,
            </p>
            <p className="text-lg md:text-xl font-poppins text-foreground leading-relaxed">
              Della
            </p>
            <div className="text-center mt-8 text-2xl">
              <span className="animate-pulse">💕</span>
              <span className="animate-pulse" style={{ animationDelay: '0.5s' }}>✨</span>
              <span className="animate-pulse" style={{ animationDelay: '1s' }}>💖</span>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default MessageSection;