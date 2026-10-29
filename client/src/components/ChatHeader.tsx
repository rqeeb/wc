// import React from 'react'

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

const ChatHeader = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <div className="headerContainer">
      <div className="headerChild">
        <span className="greenDot"></span>
        Fention.chat
      </div>
      <div className="headerChild">
        <button
          className="themeToggle"
          onClick={() => setDarkMode((prev) => !prev)}
        >
          {" "}
          {darkMode ? (
            <Sun size={22} strokeWidth={2} />
          ) : (
            <Moon size={22} strokeWidth={2} />
          )}
        </button>
      </div>
    </div>
  );
};

export default ChatHeader;
