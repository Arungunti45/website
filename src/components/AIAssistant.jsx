import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Bot, User, Loader2 } from 'lucide-react';
import '../styles/ai-assistant.css';

export function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, type: 'bot', text: 'Hello! I am the AIOIN AI Assistant. How can I help you discover our solutions today?' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const toggleAssistant = () => setIsOpen(!isOpen);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen, isTyping]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userMessage = { id: Date.now(), type: 'user', text: inputValue };
    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const aiResponse = { 
        id: Date.now() + 1, 
        type: 'bot', 
        text: 'Thank you for your message. I am currently a demo assistant, but AIOIN can build intelligent agents just like me for your business.' 
      };
      setMessages((prev) => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="ai-assistant-window"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
          >
            {/* Header */}
            <div className="ai-header">
              <div className="ai-header-info">
                <div className="ai-avatar-wrapper">
                  <Bot size={24} className="ai-avatar-icon" />
                  <span className="ai-status-indicator"></span>
                </div>
                <div>
                  <h3 className="ai-title">AIOIN Assistant</h3>
                  <p className="ai-subtitle">Always here to help</p>
                </div>
              </div>
              <button onClick={toggleAssistant} className="ai-close-btn" aria-label="Close Assistant">
                <X size={20} />
              </button>
            </div>

            {/* Chat Area */}
            <div className="ai-messages">
              {messages.map((msg) => (
                <motion.div 
                  key={msg.id} 
                  className={`ai-message-row ${msg.type === 'user' ? 'ai-row-user' : 'ai-row-bot'}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {msg.type === 'bot' && (
                    <div className="ai-msg-avatar bot">
                      <Bot size={16} />
                    </div>
                  )}
                  <div className={`ai-bubble ${msg.type === 'user' ? 'ai-bubble-user' : 'ai-bubble-bot'}`}>
                    {msg.text}
                  </div>
                  {msg.type === 'user' && (
                    <div className="ai-msg-avatar user">
                      <User size={16} />
                    </div>
                  )}
                </motion.div>
              ))}
              
              {isTyping && (
                <motion.div 
                  className="ai-message-row ai-row-bot"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <div className="ai-msg-avatar bot">
                    <Bot size={16} />
                  </div>
                  <div className="ai-bubble ai-bubble-bot ai-typing">
                    <Loader2 size={16} className="ai-spinner" />
                    <span>AI is typing...</span>
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <form onSubmit={handleSendMessage} className="ai-input-area">
              <input
                type="text"
                placeholder="Ask about our services..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                className="ai-input"
              />
              <button 
                type="submit" 
                className={`ai-send-btn ${inputValue.trim() ? 'active' : ''}`}
                disabled={!inputValue.trim()}
                aria-label="Send Message"
              >
                <Send size={18} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        className="ai-fab-button"
        onClick={toggleAssistant}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Open AI Assistant"
      >
        {isOpen ? <X size={28} /> : <MessageSquare size={28} />}
        {!isOpen && <span className="ai-fab-ping"></span>}
      </motion.button>
    </>
  );
}
