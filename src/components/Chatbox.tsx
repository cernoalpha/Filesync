// src/components/ChatBox.tsx

import React from 'react';

// TypeScript Interface for Message
interface MessageProps {
  id: number;
  text: string;
  sender: 'user' | 'bot';
}

// Sample messages for UI demonstration
const messages: MessageProps[] = [
  { id: 1, text: "Hi there!", sender: 'bot' },
  { id: 2, text: "Hello! How can I help you today?", sender: 'user' },
  { id: 3, text: "I have a question about your services.", sender: 'bot' }
];

const ChatBox: React.FC = () => {
  return (
    <div className="flex flex-col w-full h-full max-w-lg mx-auto p-4 bg-white rounded-lg shadow-md border border-gray-200">
      {/* Chat Header */}
      <div className="flex items-center justify-between p-3 bg-gray-100 rounded-t-lg border-b border-gray-200">
        <h2 className="text-xl font-semibold">Chat</h2>
        <button className="text-gray-500 hover:text-gray-700">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`p-3 rounded-lg max-w-xs ${
                message.sender === 'user'
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-200 text-gray-800'
              }`}
            >
              {message.text}
            </div>
          </div>
        ))}
      </div>
      {/* Chat Input */}
      <div className="flex items-center border-t border-gray-200 p-2">
        <input
          type="text"
          className="flex-1 p-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring focus:border-blue-500"
          placeholder="Type your message..."
        />
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-r-lg hover:bg-blue-600 focus:outline-none focus:ring"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatBox;
