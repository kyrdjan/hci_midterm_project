import { useState } from "react";

function MessageDialog({ isOpen, onClose }) {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  if (!isOpen) return null;

  const handleSend = () => {
    if (input.trim() === "") return;

    // Add outgoing message
    setMessages([...messages, { text: input.trim(), type: "out" }]);
    setInput("");

    // Optional: simulate an incoming message after 1s
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          text: "Thanks for your message! We'll get back to you.",
          type: "in",
        },
      ]);
    }, 1000);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") handleSend();
  };

  return (
    <div className="fixed bottom-5 right-5 w-80 h-96 bg-white border border-gray-200 rounded-lg shadow-lg flex flex-col z-[99999]">
      {/* Header */}
      <div className="flex justify-between items-center p-3 bg-white text-gray-700 rounded-t-lg font-semibold border-t border-gray-200">
        Messages
        <button onClick={onClose} className="text-gray-700 hover:text-gray-200">
          ✖
        </button>
      </div>

      {/* Body */}
      <div className="flex-1 p-3 overflow-y-auto flex flex-col gap-2 bg-white scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 border-t border-gray-200">
        {messages.length === 0 && (
          <p className="text-sm text-gray-500">
            No messages yet. Start the conversation!
          </p>
        )}
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`max-w-[70%] p-2 rounded-xl shadow ${
              msg.type === "out"
                ? "bg-[#FF8315] text-white self-end rounded-br-none"
                : "bg-[#E5E5E5] text-gray-700 self-start rounded-bl-none"
            }`}
          >
            {msg.text}
          </div>
        ))}
      </div>

      {/* Input */}
      <div className="p-2 bg-white flex gap-2 border-t border-gray-200">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyPress}
          placeholder="Type a message..."
          className="flex-1 p-2 text-sm focus:outline-none bg-white border border-[#FF8315] text-gray-800 rounded-xl"
        />
        <button
          onClick={handleSend}
          className="bg-[#FF8315] text-white px-4 py-2 rounded-xl hover:bg-[#FFAE67] hover:border transition-colors"
        >
          Send
        </button>
      </div>
    </div>
  );
}

export default MessageDialog;
