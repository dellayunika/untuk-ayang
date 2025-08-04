import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Brain, Heart, Trophy } from "lucide-react";

const questions = [
  {
    question: "Hal paling sering aku ucapin ke ayang (selain 'aku sayang ayang')",
    options: [
      "Ayang udah makan belum?",
      "Mau VC",
      "Aku kangen",
      "Ayang dimana?"
    ],
    answer: "Aku kangen"
  },
  {
    question: "Kalau aku kangen tapi ayang lagi sibuk, biasanya aku...",
    options: [
      "Mikirin ayang terus",
      "Liat foto ayang diem-diem",
      "Scroll chat kita",
      "Semua di atas"
    ],
    answer: "Semua di atas"
  },
  {
    question: "Suatu hari, kalau ayang tiba-tiba berubah jadi kodok, aku bakal...",
    options: [
      "Nangis",
      "Cium biar balik jadi ganteng",
      "Pelihara ayang di akuarium",
      "Semua di atas"
    ],
    answer: "Cium biar balik jadi ganteng 🐸💋"
  },
  {
    question: "Kalo kita berantem, alasan aku bilang putus...",
    options: [
      "Emang pengen putus",
      "Biar ayang bisa bujuk aku",
      "Sudah gak sayang lagi",
      "Ga peduli"
    ],
    answer: "Biar ayang bisa bujuk aku 🥺😪"
  },
  {
    question: "Ayang mau gak, selalu maafin aku kalo aku buat salah...",
    options: [
      "Iya dimaafin sayang",
      "Dimaafin kok",
      "Jangan sering sering, tapi tetap dimaafin",
      "Semua benar"
    ],
    answer: "Semua benar"
  }
];

const QuizSection = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [showCorrectAnswer, setShowCorrectAnswer] = useState(false);

  const handleAnswerClick = (answer: string) => {
    setSelectedAnswer(answer);
    setShowCorrectAnswer(true);
    
    if (answer === questions[currentQuestion].answer) {
      setScore(score + 1);
    }
    
    setTimeout(() => {
      if (currentQuestion + 1 < questions.length) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer("");
        setShowCorrectAnswer(false);
      } else {
        setShowResult(true);
      }
    }, 4000);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
    setSelectedAnswer("");
    setShowCorrectAnswer(false);
  };

  const progress = ((currentQuestion + (showCorrectAnswer ? 1 : 0)) / questions.length) * 100;

  return (
    <section className="py-16 px-6 bg-gradient-romantic">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <Brain className="mx-auto mb-4 text-5xl text-primary animate-bounce-soft" />
          <h2 className="text-4xl font-comic font-bold text-foreground mb-4">
            Seberapa Kenal Ayang Sama Aku?
          </h2>
        </div>
        
        <Card className="p-8 bg-card shadow-soft border-2 border-peach-soft">
          {!showResult ? (
            <>
              <div className="mb-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-poppins text-muted-foreground">
                    Pertanyaan {currentQuestion + 1} dari {questions.length}
                  </span>
                  <span className="text-sm font-poppins text-muted-foreground">
                    Skor: {score}
                  </span>
                </div>
                <Progress value={progress} className="h-2" />
              </div>
              
              <div className="mb-8">
                <h3 className="text-xl md:text-2xl font-poppins font-semibold text-foreground mb-6">
                  {questions[currentQuestion].question}
                </h3>
                
                <div className="grid gap-4">
                  {questions[currentQuestion].options.map((option, index) => (
                    <Button
                      key={index}
                      onClick={() => handleAnswerClick(option)}
                      disabled={showCorrectAnswer}
                      variant="outline"
                      className={`p-4 text-left justify-start text-wrap h-auto font-poppins ${
                        showCorrectAnswer
                          ? option === questions[currentQuestion].answer
                            ? 'bg-green-100 border-green-500 text-green-700'
                            : option === selectedAnswer
                            ? 'bg-red-100 border-red-500 text-red-700'
                            : ''
                          : 'hover:bg-primary hover:text-primary-foreground'
                      }`}
                    >
                      {option}
                    </Button>
                  ))}
                </div>
                
                {showCorrectAnswer && (
                  <div className="mt-6 text-center animate-fade-in">
                    {selectedAnswer === questions[currentQuestion].answer ? (
                      <div>
                        <div className="text-4xl mb-2">🥰</div>
                        <p className="text-lg font-poppins text-green-600 font-semibold">
                          Betul sayang! Kamu kenal aku banget 💕
                        </p>
                      </div>
                    ) : (
                      <div>
                        <div className="text-4xl mb-2">😅</div>
                        <p className="text-lg font-poppins text-orange-600 font-semibold">
                          Jawaban yang benar: {questions[currentQuestion].answer}
                        </p>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </>
          ) : (
            <div className="text-center animate-pulse-heart">
              <Trophy className="mx-auto mb-4 text-6xl text-yellow-500 animate-bounce-soft" />
              <h3 className="text-3xl font-comic font-bold text-primary mb-6">
                Quiz Selesai! 🎉
              </h3>
              <div className="text-6xl mb-4">
                {score === questions.length ? '🥰' : score >= 3 ? '😊' : '😅'}
              </div>
              <p className="text-2xl font-poppins font-semibold text-foreground mb-4">
                Skor kamu: {score} dari {questions.length}
              </p>
              <p className="text-lg font-poppins text-muted-foreground mb-8">
                {score === questions.length 
                  ? "Perfect! Kamu kenal aku banget sayang! 💖"
                  : score >= 3 
                  ? "Lumayan nih! Tapi masih bisa lebih kenal lagi 😉"
                  : "Hehe, sepertinya kita harus lebih banyak ngobrol lagi ya 🤭"
                }
              </p>
              <div className="flex justify-center space-x-2 mb-6">
                <Heart className="text-heart text-2xl animate-pulse" />
                <Heart className="text-heart text-2xl animate-pulse" style={{ animationDelay: '0.5s' }} />
                <Heart className="text-heart text-2xl animate-pulse" style={{ animationDelay: '1s' }} />
              </div>
              <Button 
                onClick={resetQuiz}
                className="bg-gradient-heart hover:shadow-romantic"
              >
                Main Lagi? 🔄
              </Button>
            </div>
          )}
        </Card>
      </div>
    </section>
  );
};

export default QuizSection;