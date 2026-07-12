'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { ArrowLeft, Send, Bot, User, Sparkles, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { eduService } from '@/services/edu';
import Loading from '@/components/Loading';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export default function AITutorPage() {
  const [subjects, setSubjects] = useState<any[]>([]);
  const [selectedSubjectId, setSelectedSubjectId] = useState<number | ''>('');
  const [chatId, setChatId] = useState<number | undefined>(undefined);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState('');
  const [loading, setLoading] = useState(true);
  const [sending, setSending] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    eduService.getSubjects()
      .then((res) => {
        if (res.success && res.data.length > 0) {
          setSubjects(res.data);
          setSelectedSubjectId(res.data[0].id); // Auto-select first subject
        }
      })
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    // Scroll to bottom on new messages
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputMessage.trim() || !selectedSubjectId || sending) return;

    const userText = inputMessage;
    setInputMessage('');
    setMessages(prev => [...prev, { role: 'user', content: userText }]);
    setSending(true);

    try {
      const res = await eduService.askAITutor(Number(selectedSubjectId), userText, chatId);
      if (res.success) {
        setChatId(res.data.chat_id);
        setMessages(prev => [...prev, { role: 'assistant', content: res.data.message }]);
      }
    } catch (err) {
      console.error(err);
      setMessages(prev => [...prev, { role: 'assistant', content: 'Sorry, I encountered an issue generating a response. Please try again.' }]);
    } finally {
      setSending(false);
    }
  };

  const handleSubjectChange = (subjectId: number) => {
    setSelectedSubjectId(subjectId);
    setChatId(undefined); // Reset chat session when switching subjects
    setMessages([]);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#FAFAFA]">
        <Loading />
      </div>
    );
  }

  const selectedSubject = subjects.find(s => s.id === Number(selectedSubjectId));

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-[#222222] py-12 px-4 sm:px-6 lg:px-8 flex flex-col">
      <div className="max-w-4xl mx-auto w-full flex-1 flex flex-col space-y-6">
        {/* Back Link */}
        <div className="flex items-center justify-between">
          <Link href="/edu" className="inline-flex items-center gap-1.5 text-xs text-[#6B7280] hover:text-[#222222] font-semibold">
            <ArrowLeft size={14} />
            Back to Dashboard
          </Link>
          
          {/* Subject Dropdown Selector */}
          <div className="flex items-center gap-2">
            <label className="text-xs font-semibold text-[#6B7280]">Select Subject:</label>
            <select
              value={selectedSubjectId}
              onChange={(e) => handleSubjectChange(Number(e.target.value))}
              className="h-9 px-3 bg-white border border-[#E5E7EB] rounded-xl text-xs font-semibold focus:outline-none focus:border-[#E25704]"
            >
              {subjects.map(s => (
                <option key={s.id} value={s.id}>{s.name} (Grade {s.grade})</option>
              ))}
            </select>
          </div>
        </div>

        {/* Chat Window Frame */}
        <div className="bg-white border border-[#E5E7EB] rounded-3xl shadow-sm flex-1 flex flex-col overflow-hidden min-h-[500px]">
          {/* Chat Header */}
          <div className="border-b border-[#E5E7EB] p-6 bg-white flex items-center gap-3">
            <div className="h-10 w-10 bg-[#E25704]/10 text-[#E25704] rounded-xl flex items-center justify-center">
              <Bot size={20} />
            </div>
            <div>
              <h2 className="font-bold text-sm">AI Tutor: {selectedSubject?.name || 'Syllabus Help'}</h2>
              <p className="text-[10px] text-[#6B7280]">Syllabus-focused study guide powered by Gemini AI</p>
            </div>
          </div>

          {/* Chat Messages Logs */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4 max-h-[450px]">
            {messages.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-4 text-[#6B7280] py-12">
                <div className="h-12 w-12 bg-[#E25704]/10 text-[#E25704] rounded-full flex items-center justify-center">
                  <Sparkles size={24} />
                </div>
                <div className="space-y-1">
                  <h3 className="font-bold text-sm text-[#222222]">Ask any study question!</h3>
                  <p className="text-[11px] leading-relaxed max-w-sm">
                    Ask me to solve combined maths equations, explain chemical formulas, write notes, or clarify past paper questions.
                  </p>
                </div>
              </div>
            ) : (
              messages.map((msg, index) => (
                <div
                  key={index}
                  className={`flex gap-3 max-w-[85%] ${msg.role === 'user' ? 'ml-auto flex-row-reverse' : ''}`}
                >
                  <div className={`h-8 w-8 rounded-lg flex items-center justify-center flex-shrink-0 ${
                    msg.role === 'user' ? 'bg-[#E25704] text-white' : 'bg-slate-100 text-[#E25704]'
                  }`}>
                    {msg.role === 'user' ? <User size={14} /> : <Bot size={14} />}
                  </div>
                  <div className={`p-4 rounded-2xl text-xs sm:text-sm leading-relaxed shadow-sm whitespace-pre-wrap ${
                    msg.role === 'user' ? 'bg-[#E25704]/10 text-[#222222]' : 'bg-slate-50 border border-slate-100 text-[#4B5563]'
                  }`}>
                    {msg.content}
                  </div>
                </div>
              ))
            )}

            {sending && (
              <div className="flex gap-3 max-w-[85%]">
                <div className="h-8 w-8 bg-slate-100 text-[#E25704] rounded-lg flex items-center justify-center flex-shrink-0">
                  <Bot size={14} />
                </div>
                <div className="bg-slate-50 border border-slate-100 p-4 rounded-2xl text-xs text-[#6B7280] flex items-center gap-1.5 shadow-sm">
                  <span className="h-1.5 w-1.5 bg-[#E25704] rounded-full animate-bounce"></span>
                  <span className="h-1.5 w-1.5 bg-[#E25704] rounded-full animate-bounce delay-75"></span>
                  <span className="h-1.5 w-1.5 bg-[#E25704] rounded-full animate-bounce delay-150"></span>
                  <span>AI Tutor is thinking...</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Chat Form Input */}
          <form onSubmit={handleSend} className="border-t border-[#E5E7EB] p-4 bg-white flex gap-2">
            <input
              type="text"
              placeholder="Ask a question about COMBINED MATHS or PHYSICS... (ප්‍රශ්නයක් අසන්න...)"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              className="flex-1 h-11 px-4 bg-[#FAFAFA] border border-[#E5E7EB] rounded-xl text-xs focus:outline-none focus:border-[#E25704] focus:bg-white"
            />
            <Button
              type="submit"
              disabled={sending || !inputMessage.trim()}
              className="h-11 w-11 bg-[#E25704] hover:bg-[#C94D03] text-white rounded-xl flex items-center justify-center transition-all flex-shrink-0"
            >
              <Send size={16} />
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
