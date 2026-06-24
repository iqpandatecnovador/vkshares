"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, Sparkles } from "lucide-react";

export default function AIConciergeWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: "assistant", content: "Bienvenido a Luxe Resort. Soy tu Concierge de IA. ¿En qué puedo ayudarte a planear tu próxima escapada?" }
  ]);
  const [inputValue, setInputValue] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  const handleSend = async () => {
    if (!inputValue.trim()) return;
    
    const userMessage = { role: "user", content: inputValue };
    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInputValue("");
    setIsLoading(true);
    
    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: newMessages }),
      });
      
      if (!response.ok) throw new Error("API Error");
      
      const data = await response.json();
      
      // Añadir un pequeño retraso para simular que la IA está "escribiendo"
      setTimeout(() => {
        setMessages(prev => [...prev, { role: "assistant", content: data.response }]);
        setIsLoading(false);
      }, 1000);
      
    } catch (error) {
      console.error("Chat Error:", error);
      setTimeout(() => {
        setMessages(prev => [...prev, { role: "assistant", content: "Lo siento, ha ocurrido un error de conexión. Por favor intenta de nuevo." }]);
        setIsLoading(false);
      }, 1000);
    }
  };

  return (
    <>
      {/* Floating Orb Button */}
      <div className="fixed bottom-8 right-8 z-50">
        <AnimatePresence>
          {!isOpen && (
            <motion.button
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(true)}
              className="relative w-16 h-16 rounded-full flex items-center justify-center group outline-none"
            >
              {/* Outer Glow */}
              <div className="absolute inset-0 rounded-full bg-[var(--color-brand)] opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-500 animate-pulse" />
              
              {/* Orb Base */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[var(--color-brand-light)] via-[var(--color-brand)] to-[#000000] opacity-80" />
              
              {/* Inner highlight (Glass effect) */}
              <div className="absolute inset-1 rounded-full border border-white/40 shadow-[inset_0_0_20px_rgba(255,255,255,0.5)] bg-white/10 backdrop-blur-sm flex items-center justify-center">
                <Sparkles size={24} className="text-white" />
              </div>
              
              {/* Rotating ring */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-2 border border-dashed border-[var(--color-brand)]/30 rounded-full"
              />
            </motion.button>
          )}
        </AnimatePresence>
      </div>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95, transition: { duration: 0.2 } }}
            className="fixed bottom-8 right-8 z-50 w-[380px] h-[600px] max-h-[80vh] max-w-[calc(100vw-40px)] bg-[#030b14]/95 backdrop-blur-xl rounded-2xl flex flex-col overflow-hidden shadow-2xl shadow-black border border-[var(--color-border)]"
          >
            {/* Header */}
            <div className="px-6 py-4 border-b border-white/10 flex items-center justify-between bg-black/40">
              <div className="flex items-center gap-3">
                <div className="relative w-8 h-8 rounded-full overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-brand-light)] to-[var(--color-brand)]" />
                  <div className="absolute inset-0 bg-white/20 backdrop-blur-md" />
                  <Sparkles size={14} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-medium text-sm">Luxe Concierge</h3>
                  <p className="text-[var(--color-brand)] text-xs flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-brand)] animate-pulse" />
                    En línea
                  </p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-white/50 hover:text-white transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-4 scrollbar-thin scrollbar-thumb-white/10">
              {messages.map((msg, idx) => (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  key={idx} 
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm font-light leading-relaxed ${
                    msg.role === 'user' 
                      ? 'bg-gradient-to-r from-[var(--color-brand-dark)] to-[var(--color-brand)] text-black rounded-tr-sm' 
                      : 'bg-white/5 border border-white/10 text-white rounded-tl-sm'
                  }`}>
                    {msg.content}
                  </div>
                </motion.div>
              ))}
              
              {isLoading && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-start"
                >
                  <div className="bg-white/5 border border-white/10 text-white rounded-2xl rounded-tl-sm px-4 py-3 flex gap-1 items-center h-10">
                    <span className="w-1.5 h-1.5 bg-white/50 rounded-full animate-bounce [animation-delay:-0.3s]" />
                    <span className="w-1.5 h-1.5 bg-white/50 rounded-full animate-bounce [animation-delay:-0.15s]" />
                    <span className="w-1.5 h-1.5 bg-white/50 rounded-full animate-bounce" />
                  </div>
                </motion.div>
              )}
            </div>

            {/* Input Area */}
            <div className="p-4 border-t border-white/10 bg-black/40">
              <div className="relative flex items-center">
                <input 
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Escribe tu mensaje..."
                  className="w-full bg-white/5 border border-white/10 rounded-full py-3 pl-4 pr-12 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[var(--color-brand)]/50 transition-colors"
                />
                <button 
                  onClick={handleSend}
                  className="absolute right-2 w-8 h-8 rounded-full bg-[var(--color-brand)]/20 hover:bg-[var(--color-brand)] text-[var(--color-brand)] hover:text-black flex items-center justify-center transition-all"
                >
                  <Send size={14} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
