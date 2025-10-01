import { useState } from "react";

function MessageDialog({ isOpen, onClose}) {
    if (!isOpen) return null;

    return (
        <div className="fixed bottom-4 right-4 w-80 bg-white border border-gray-300 rounded-lg shadow-lg flex flex-col">
        {/* Header */}
        <div className="flex justify-between items-center p-3 bg-[#490101] text-white rounded-t-lg">
            <h3 className="font-semibold">Messages</h3>
            <button onClick={onClose} className="text-white hover:text-gray-300">✖</button>
        </div>

        {/* Body */}
        <div className="flex-1 p-3 overflow-y-auto h-60 text-gray-700">
            <p className="text-sm text-gray-500">No messages yet. Start the conversation!</p>
        </div>

        {/* Input */}
        <div className="p-2 border-t border-gray-300">
            <input
            type="text"
            placeholder="Type a message..."
            className="w-full p-2 text-sm border rounded focus:outline-none focus:ring-2 focus:ring-[#490101]"
            />
        </div>
        </div>
    );
}

export default MessageDialog;
