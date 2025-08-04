import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { MessageCircle } from "lucide-react";

const messages = [
  { sender: "Aku", text: "🥺" },
  { sender: "Kamu", text: "Abang mau manja manja sama istri, boleh?" },
  { sender: "Aku", text: "Istri orang" },
  { sender: "Kamu", text: "Istri abang. Kenapa tuh senyum senyum" },
  { sender: "Aku", text: "Gak kenapa napa. Aku cuman lagi mikir kita berdua" }
];

const FakeChatSection = () => {
  const [visibleMessages, setVisibleMessages] = useState<number>(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setVisibleMessages(prev => {
        if (prev < messages.length) {
          return prev + 1;
        }
        return prev;
      });
    }, 1500);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-16 px-6 bg-gradient-romantic">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <MessageCircle className="mx-auto mb-4 text-5xl text-primary animate-wiggle" />
          <h2 className="text-4xl font-comic font-bold text-foreground mb-4">
            Percakapan Imut Kita ❤️🥰
          </h2>
        </div>
        
        <Card className="p-6 bg-card shadow-soft border-2 border-blue-soft max-w-md mx-auto">
          <div className="space-y-4">
            {messages.slice(0, visibleMessages).map((message, index) => (
              <div
                key={index}
                className={`flex ${message.sender === "Aku" ? "justify-end" : "justify-start"} animate-fade-in`}
              >
                <div
                  className={`max-w-xs px-4 py-2 rounded-2xl font-poppins ${
                    message.sender === "Aku"
                      ? "bg-primary text-primary-foreground rounded-br-none"
                      : "bg-secondary text-secondary-foreground rounded-bl-none"
                  }`}
                >
                  <div className="text-xs opacity-75 mb-1">{message.sender}</div>
                  <div>{message.text}</div>
                </div>
              </div>
            ))}
            
            {visibleMessages < messages.length && (
              <div className="flex justify-start">
                <div className="bg-muted rounded-2xl px-4 py-2 rounded-bl-none">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </Card>
      </div>
    </section>
  );
};

export default FakeChatSection;