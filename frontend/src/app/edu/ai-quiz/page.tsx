'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Award, HelpCircle, RefreshCw, CheckCircle, XCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Question {
  id: number;
  text: string;
  options: string[];
  answerIndex: number;
  explanation: string;
}

// Sample MCQ bank for A/L and O/L
const quizBank: Record<string, Question[]> = {
  'combined-maths': [
    {
      id: 1,
      text: 'If $x^2 - 5x + 6 = 0$, what are the values of $x$?',
      options: ['x = 1, 6', 'x = 2, 3', 'x = -2, -3', 'x = 5, 6'],
      answerIndex: 1,
      explanation: 'Factorizing the equation: $x^2 - 5x + 6 = (x-2)(x-3) = 0$. Therefore, the roots are $x=2$ and $x=3$.',
    },
    {
      id: 2,
      text: 'Find the derivative of $y = x^3 + 3x$ with respect to $x$.',
      options: ['dy/dx = 3x^2 + 3', 'dy/dx = 3x^2', 'dy/dx = x^2 + 3', 'dy/dx = 3x^2 + 1'],
      answerIndex: 0,
      explanation: 'Using power rule: d/dx(x^n) = nx^(n-1). d/dx(x^3) = 3x^2 and d/dx(3x) = 3. So, dy/dx = 3x^2 + 3.',
    },
  ],
  'physics': [
    {
      id: 1,
      text: 'What is the net force acting on a mass of 5 kg accelerating at $2 ms^{-2}$?',
      options: ['2.5 N', '10 N', '7 N', '25 N'],
      answerIndex: 1,
      explanation: 'Using Newton\'s second law: $F = ma = 5 \\text{ kg} \\times 2 \\text{ ms}^{-2} = 10 \\text{ N}$.',
    },
    {
      id: 2,
      text: 'Which Newton\'s law of motion explains why passengers are thrown forward when a bus stops suddenly?',
      options: ['First Law (Inertia)', 'Second Law', 'Third Law', 'Law of Gravitation'],
      answerIndex: 0,
      explanation: 'Newton\'s First Law (Law of Inertia) states that objects in motion continue in motion unless acted on by an external force. Passengers keep moving forward when the bus stops.',
    },
  ],
};

export default function AIQuizPage() {
  const [selectedSubject, setSelectedSubject] = useState<string>('combined-maths');
  const [quizStarted, setQuizStarted] = useState(false);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const activeQuestions = quizBank[selectedSubject] || [];

  const handleStart = () => {
    setQuizStarted(true);
    setCurrentIdx(0);
    setScore(0);
    setSelectedAnswer(null);
    setIsSubmitted(false);
  };

  const handleOptionClick = (idx: number) => {
    if (isSubmitted) return;
    setSelectedAnswer(idx);
  };

  const handleSubmitAnswer = () => {
    if (selectedAnswer === null || isSubmitted) return;
    setIsSubmitted(true);
    if (selectedAnswer === activeQuestions[currentIdx].answerIndex) {
      setScore(prev => prev + 1);
    }
  };

  const handleNext = () => {
    setSelectedAnswer(null);
    setIsSubmitted(false);
    setCurrentIdx(prev => prev + 1);
  };

  const handleRetry = () => {
    setQuizStarted(false);
  };

  const isLastQuestion = currentIdx === activeQuestions.length - 1;
  const isFinished = currentIdx === activeQuestions.length;

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-[#222222] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-xl mx-auto space-y-6">
        {/* Back Link */}
        <div className="flex items-center gap-2">
          <Link href="/edu" className="inline-flex items-center gap-1.5 text-xs text-[#6B7280] hover:text-[#222222] font-semibold">
            <ArrowLeft size={14} />
            Back to Dashboard
          </Link>
        </div>

        {/* Header Title */}
        <div className="bg-white border border-[#E5E7EB] p-8 rounded-2xl shadow-sm space-y-2 text-center">
          <div className="h-10 w-10 bg-green-500/10 text-green-500 rounded-xl flex items-center justify-center mx-auto">
            <Award size={20} />
          </div>
          <h1 className="text-xl font-bold tracking-tight">AI MCQ Quiz Game</h1>
          <p className="text-xs text-[#6B7280]">Test your knowledge on O/L and A/L Sri Lankan syllabuses.</p>
        </div>

        {/* Setup card */}
        {!quizStarted ? (
          <div className="bg-white border border-[#E5E7EB] p-8 rounded-2xl shadow-sm space-y-6">
            <div className="space-y-1">
              <label className="block text-xs font-semibold text-[#6B7280]">Choose Quiz Subject:</label>
              <select
                value={selectedSubject}
                onChange={(e) => setSelectedSubject(e.target.value)}
                className="w-full h-11 px-3 bg-white border border-[#E5E7EB] rounded-xl text-sm font-semibold focus:outline-none focus:border-[#E25704]"
              >
                <option value="combined-maths">A/L Combined Mathematics</option>
                <option value="physics">A/L Physics</option>
              </select>
            </div>
            <Button
              onClick={handleStart}
              className="w-full h-11 bg-[#E25704] hover:bg-[#C94D03] text-white font-semibold rounded-xl flex items-center justify-center gap-1.5"
            >
              Start Practice Quiz
            </Button>
          </div>
        ) : (
          /* Active Question Frame */
          !isFinished ? (
            <div className="bg-white border border-[#E5E7EB] p-8 rounded-2xl shadow-sm space-y-6">
              <div className="flex justify-between items-center text-xs text-[#6B7280] font-semibold pb-3 border-b border-[#E5E7EB]">
                <span>Question {currentIdx + 1} of {activeQuestions.length}</span>
                <span>Score: {score}</span>
              </div>

              {/* Question Text */}
              <div className="font-semibold text-sm sm:text-base leading-relaxed text-[#222222]">
                {activeQuestions[currentIdx].text}
              </div>

              {/* Options */}
              <div className="space-y-3">
                {activeQuestions[currentIdx].options.map((opt, oIdx) => {
                  let optStyle = 'border-[#E5E7EB] hover:bg-[#FAFAFA]';
                  
                  if (selectedAnswer === oIdx) {
                    optStyle = 'border-[#E25704] bg-[#E25704]/5 text-[#E25704]';
                  }

                  if (isSubmitted) {
                    if (oIdx === activeQuestions[currentIdx].answerIndex) {
                      optStyle = 'border-green-500 bg-green-50 text-green-700';
                    } else if (selectedAnswer === oIdx) {
                      optStyle = 'border-red-500 bg-red-50 text-red-700';
                    } else {
                      optStyle = 'border-[#E5E7EB] opacity-60';
                    }
                  }

                  return (
                    <button
                      key={oIdx}
                      disabled={isSubmitted}
                      onClick={() => handleOptionClick(oIdx)}
                      className={`w-full p-4 border rounded-xl text-left text-xs sm:text-sm font-medium transition-all flex items-center justify-between ${optStyle}`}
                    >
                      <span>{opt}</span>
                      {isSubmitted && oIdx === activeQuestions[currentIdx].answerIndex && <CheckCircle size={16} className="text-green-600 flex-shrink-0" />}
                      {isSubmitted && selectedAnswer === oIdx && oIdx !== activeQuestions[currentIdx].answerIndex && <XCircle size={16} className="text-red-600 flex-shrink-0" />}
                    </button>
                  );
                })}
              </div>

              {/* Feedback details */}
              {isSubmitted && (
                <div className="p-4 bg-slate-50 border border-slate-100 rounded-xl space-y-2 text-xs">
                  <div className="font-bold flex items-center gap-1.5 text-slate-800">
                    <HelpCircle size={14} />
                    Answer Explanation:
                  </div>
                  <p className="text-slate-600 leading-relaxed">{activeQuestions[currentIdx].explanation}</p>
                </div>
              )}

              {/* Action buttons */}
              <div className="pt-4 border-t border-[#E5E7EB]">
                {!isSubmitted ? (
                  <Button
                    onClick={handleSubmitAnswer}
                    disabled={selectedAnswer === null}
                    className="w-full h-11 bg-[#E25704] hover:bg-[#C94D03] text-white font-semibold rounded-xl"
                  >
                    Submit Answer
                  </Button>
                ) : (
                  <Button
                    onClick={handleNext}
                    className="w-full h-11 bg-[#E25704] hover:bg-[#C94D03] text-white font-semibold rounded-xl flex items-center justify-center gap-1.5"
                  >
                    {isLastQuestion ? 'Show Results' : 'Next Question'}
                  </Button>
                )}
              </div>
            </div>
          ) : (
            /* Quiz Completed summary card */
            <div className="bg-white border border-[#E5E7EB] p-8 rounded-2xl shadow-sm space-y-6 text-center">
              <div className="h-16 w-16 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle size={32} />
              </div>
              <div className="space-y-1">
                <h3 className="text-xl font-bold">Quiz Completed!</h3>
                <p className="text-xs text-[#6B7280]">Congratulations on finishing the practice session.</p>
              </div>
              
              {/* Score breakdown */}
              <div className="p-6 bg-slate-50 border border-slate-100 rounded-2xl inline-block">
                <p className="text-[10px] text-[#6B7280] uppercase tracking-wider font-semibold">Your Final Score</p>
                <h2 className="text-3xl font-black text-[#E25704] mt-1">{score} / {activeQuestions.length}</h2>
              </div>

              {/* Retry controls */}
              <div className="flex gap-2 pt-4">
                <Button
                  onClick={handleRetry}
                  variant="outline"
                  className="flex-1 h-11 border-[#E5E7EB] rounded-xl text-xs font-semibold flex items-center justify-center gap-1"
                >
                  <RefreshCw size={14} />
                  Choose Subject
                </Button>
                <Button
                  onClick={handleStart}
                  className="flex-1 h-11 bg-[#E25704] hover:bg-[#C94D03] text-white font-semibold rounded-xl"
                >
                  Retry Quiz
                </Button>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
}
