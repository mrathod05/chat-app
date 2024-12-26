"use client";

import { JSX, useState } from "react";
import {
  FaPaperPlane,
  FaSearch,
  FaSun,
  FaRobot,
  FaEllipsisV,
  FaPhoneAlt,
  FaVideo,
} from "react-icons/fa";

const Chat = (): JSX.Element => {
  const [messages, setMessages] = useState<
    { sender: "user" | "bot"; text: string }[]
  >([]);
  const [input, setInput] = useState("");
  const [showMenu, setShowMenu] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [theme, setTheme] = useState("dark");

  const handleSendMessage = (): void => {
    if (!input.trim()) return;

    // Add user message to chat
    setMessages((prev) => [...prev, { sender: "user", text: input }]);

    // Clear input field
    setInput("");

    // Simulate bot response with typing indicator
    setIsTyping(true);
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "Hello! How can I assist you?" },
      ]);
      setIsTyping(false);
    }, 1000);
  };

  const toggleTheme = (): void => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <div
      className={`flex h-screen bg-${theme === "dark" ? "gray-900" : "white"} text-${theme === "dark" ? "white" : "black"}`}
    >
      <div className="w-16 bg-gray-900 flex flex-col justify-between items-center py-4">
        <div className="space-y-4">
          <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center relative">
            <span className="absolute text-xs bg-green-500 text-white rounded-full px-2 top-0 right-0">
              141
            </span>
          </div>
          <div className="w-10 h-10 bg-gray-700 rounded-full"></div>
          <div className="w-10 h-10 bg-gray-700 rounded-full"></div>
          <div className="w-10 h-10 bg-gray-700 rounded-full"></div>
          <div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"></div>
        </div>

        <div className="space-y-4">
          <div className="w-10 h-10 bg-gray-700 rounded-full"></div>
          <div
            onClick={() => {}}
            className="w-10 h-10 bg-gray-700 rounded-full"
          ></div>
        </div>
      </div>
      {/* Sidebar */}
      <div className="w-1/4 bg-gray-800 flex flex-col">
        {/* Header */}
        <div className="py-4 px-6 flex items-center justify-between bg-gray-700">
          <h2 className="text-xl font-bold">Chat App</h2>
          <div className="flex gap-2">
            <FaSun className="cursor-pointer" onClick={toggleTheme} />
            <FaRobot className="cursor-pointer" />
          </div>
        </div>

        {/* Search */}
        <div className="p-4">
          <div className="flex items-center bg-gray-700 rounded-lg px-4 py-2">
            <FaSearch className="text-gray-400" />
            <input
              type="text"
              placeholder="Search"
              className="bg-transparent flex-1 ml-2 text-white focus:outline-none"
            />
          </div>
        </div>

        {/* Chats */}
        <div className="flex-1 overflow-y-auto">
          <h3 className="px-4 py-2 text-gray-400">Chats</h3>
          <ul className="space-y-2">
            <li className="px-4 py-2 bg-gray-700 rounded-lg flex items-center justify-between cursor-pointer">
              <div className="flex items-center gap-2">
                <img
                  src="https://via.placeholder.com/40"
                  alt="User avatar"
                  className="w-10 h-10 rounded-full"
                />
                <span>Robin Sparkles</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full">
                  2
                </span>
                <FaEllipsisV className="cursor-pointer" />
              </div>
            </li>
          </ul>

          <h3 className="px-4 py-2 text-gray-400">Other Users</h3>
          <ul className="space-y-2">
            {[
              "Cook Pu",
              "Princess Consuela",
              "Burrito Supreme",
              "The Commodore",
              "Lorenzo von Matterhorn",
            ].map((user, index) => (
              <li
                key={index}
                className="px-4 py-2 hover:bg-gray-700 rounded-lg flex items-center gap-2 cursor-pointer"
              >
                <img
                  src={`https://via.placeholder.com/40?text=${user.charAt(0)}`}
                  alt="User avatar"
                  className="w-10 h-10 rounded-full"
                />
                <span>{user}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Chat Section */}
      <div className="flex-1 flex flex-col">
        {/* Chat Header */}
        <div className="py-4 px-6 bg-gray-700 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img
              src="https://via.placeholder.com/40"
              alt="User avatar"
              className="w-10 h-10 rounded-full"
            />
            <div>
              <h2 className="text-xl font-bold">Robin Sparkles</h2>
              <p className="text-sm text-gray-400">Online</p>
            </div>
          </div>
          <div className="flex items-center gap-2 relative">
            <FaPhoneAlt className="cursor-pointer" />
            <FaVideo className="cursor-pointer" />
            <div className="relative">
              <FaEllipsisV
                className="cursor-pointer"
                onClick={() => setShowMenu(!showMenu)}
              />
              {showMenu && (
                <div className="absolute right-0 bg-gray-700 text-white rounded-lg shadow-lg w-40 z-10 menu-animation">
                  <ul className="py-2">
                    <li className="px-4 py-2 hover:bg-gray-600 cursor-pointer">
                      Mute Notifications
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-600 cursor-pointer">
                      Clear Chat
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-600 cursor-pointer">
                      Block User
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Chat Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${
                message.sender === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`$ {
                  message.sender === "user" ? "bg-blue-500" : "bg-gray-700"
                } p-3 rounded-lg max-w-xs text-sm shadow-md`}
              >
                {message.text}
              </div>
            </div>
          ))}

          {isTyping && (
            <div className="text-gray-400 text-center text-sm mb-2">
              Robin Sparkles is typing...
            </div>
          )}
        </div>

        {/* Chat Input */}
        <div className="bg-gray-800 p-4">
          <div className="flex items-center gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Write a message..."
              className="flex-1 px-4 py-2 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              onClick={handleSendMessage}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition"
            >
              Send <FaPaperPlane />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
