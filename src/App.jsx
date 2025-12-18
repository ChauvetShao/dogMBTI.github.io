import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { questions } from './data/questions';
import { results } from './data/results';
import { Dog, Bone, PawPrint, RefreshCw } from 'lucide-react';

function App() {
  const [currentStep, setCurrentStep] = useState('start'); // start, quiz, result
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [scores, setScores] = useState({ E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 });
  const [resultType, setResultType] = useState('');

  const handleStart = () => {
    setCurrentStep('quiz');
    setCurrentQuestionIndex(0);
    setScores({ E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 });
  };

  const handleAnswer = (value) => {
    // Update score
    const newScores = { ...scores, [value]: scores[value] + 1 };
    setScores(newScores);

    // Next question or finish
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      calculateResult(newScores);
    }
  };

  const calculateResult = (finalScores) => {
    const dim1 = finalScores.E >= finalScores.I ? 'E' : 'I';
    const dim2 = finalScores.S >= finalScores.N ? 'S' : 'N';
    const dim3 = finalScores.T >= finalScores.F ? 'T' : 'F';
    const dim4 = finalScores.J >= finalScores.P ? 'J' : 'P';
    
    setResultType(`${dim1}${dim2}${dim3}${dim4}`);
    setCurrentStep('result');
  };

  const handleRestart = () => {
    setCurrentStep('start');
  };

  return (
    <div className="min-h-screen bg-dog-bg flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-xl overflow-hidden border-4 border-dog-primary">
        <AnimatePresence mode="wait">
          {currentStep === 'start' && (
            <WelcomeScreen key="welcome" onStart={handleStart} />
          )}
          {currentStep === 'quiz' && (
            <QuizScreen 
              key="quiz"
              question={questions[currentQuestionIndex]} 
              currentIndex={currentQuestionIndex}
              total={questions.length}
              onAnswer={handleAnswer} 
            />
          )}
          {currentStep === 'result' && (
            <ResultScreen 
              key="result"
              resultType={resultType} 
              onRestart={handleRestart} 
            />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

const WelcomeScreen = ({ onStart }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    className="p-8 text-center flex flex-col items-center"
  >
    <div className="w-24 h-24 bg-dog-secondary rounded-full flex items-center justify-center mb-6 text-white text-4xl shadow-inner">
      🐶
    </div>
    <h1 className="text-3xl font-bold text-dog-text mb-4">小狗MBTI测试</h1>
    <p className="text-gray-600 mb-8 leading-relaxed">
      想知道你家毛孩子是哪种“狗格”吗？<br/>
      通过16道题，以此探索它的内心世界！
    </p>
    
    <div className="bg-yellow-50 p-4 rounded-xl text-sm text-left mb-8 w-full border border-yellow-200">
      <p className="font-bold mb-2 text-dog-primary">📝 使用说明：</p>
      <ul className="list-disc list-inside space-y-1 text-gray-600">
        <li>以过去2-4周的表现为准</li>
        <li>选“它确实怎样”而非“希望怎样”</li>
        <li>幼犬/刚到家不足2周不建议测</li>
      </ul>
    </div>

    <button 
      onClick={onStart}
      className="w-full bg-dog-primary hover:bg-orange-500 text-white font-bold py-4 px-8 rounded-full shadow-lg transform transition hover:scale-105 active:scale-95 flex items-center justify-center gap-2 text-lg"
    >
      <PawPrint size={24} />
      开始测试
    </button>
  </motion.div>
);

const QuizScreen = ({ question, currentIndex, total, onAnswer }) => (
  <motion.div 
    initial={{ opacity: 0, x: 50 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: -50 }}
    className="p-6 h-full flex flex-col"
  >
    <div className="mb-6">
      <div className="flex justify-between text-sm font-bold text-dog-text mb-2">
        <span>题目 {currentIndex + 1}</span>
        <span>{total}</span>
      </div>
      <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
        <motion.div 
          className="h-full bg-dog-primary"
          initial={{ width: `${((currentIndex) / total) * 100}%` }}
          animate={{ width: `${((currentIndex + 1) / total) * 100}%` }}
        />
      </div>
    </div>

    <div className="flex-grow flex flex-col justify-center mb-8">
      <h2 className="text-2xl font-bold text-dog-text mb-2 leading-snug">{question.question}</h2>
      <div className="text-sm text-gray-400 font-medium">请选择更符合的一项</div>
    </div>

    <div className="space-y-4">
      {question.options.map((option, idx) => (
        <button
          key={idx}
          onClick={() => onAnswer(option.value)}
          className="w-full text-left p-4 rounded-xl border-2 border-dog-bg hover:border-dog-primary hover:bg-yellow-50 transition-all duration-200 group relative overflow-hidden"
        >
          <div className="flex items-center gap-3 relative z-10">
            <div className="w-8 h-8 rounded-full bg-dog-bg text-dog-primary font-bold flex items-center justify-center group-hover:bg-dog-primary group-hover:text-white transition-colors">
              {idx === 0 ? 'A' : 'B'}
            </div>
            <span className="text-lg text-gray-700 font-medium">{option.text}</span>
          </div>
        </button>
      ))}
    </div>
  </motion.div>
);

const ResultScreen = ({ resultType, onRestart }) => {
  const result = results[resultType];
  
  if (!result) return <div>结果计算错误</div>;

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="p-0 bg-white h-full flex flex-col"
    >
      <div className="bg-dog-primary p-6 text-white text-center rounded-b-[2rem] shadow-lg mb-6 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <PawPrint size={120} className="absolute -top-4 -left-4 rotate-12" />
          <PawPrint size={120} className="absolute bottom-0 right-0 -rotate-12" />
        </div>
        
        <div className="relative z-10">
          <div className="text-sm font-bold opacity-90 mb-1">测试结果</div>
          <h2 className="text-5xl font-extrabold mb-2 tracking-wider">{resultType}</h2>
          <h3 className="text-2xl font-bold mb-1">{result.name}</h3>
          <p className="text-sm opacity-90">{result.desc}</p>
        </div>
      </div>

      <div className="px-6 pb-6 overflow-y-auto flex-grow space-y-4 custom-scrollbar">
        <Section title="🐶 性格特征">
          <p className="text-gray-700 leading-relaxed">
             你的狗狗是 <strong className="text-lg text-dog-primary">{result.name}</strong>
             <br/>
             <span className="text-gray-500 font-medium">{result.desc}</span>
          </p>
        </Section>

        <Section title="🤝 最佳狗友">
          <p className="text-gray-700">{result.details.friend}</p>
        </Section>

        <Section title="🏞️ 最佳场景">
          <p className="text-gray-700">{result.details.scene}</p>
        </Section>
        
        <Section title="⚠️ 小小提醒">
          <p className="text-gray-700">{result.details.reminder}</p>
        </Section>
      </div>

      <div className="p-6 pt-2 bg-white border-t border-gray-100">
        <button 
          onClick={onRestart}
          className="w-full bg-gray-100 hover:bg-gray-200 text-gray-600 font-bold py-3 px-6 rounded-xl flex items-center justify-center gap-2 transition-colors"
        >
          <RefreshCw size={20} />
          再测一次
        </button>
      </div>
    </motion.div>
  );
};

const Section = ({ title, children }) => (
  <div className="bg-yellow-50 rounded-xl p-4 border border-yellow-100">
    <h4 className="font-bold text-dog-text mb-2 flex items-center gap-2">
      {title}
    </h4>
    <div className="text-sm">
      {children}
    </div>
  </div>
);

export default App;
