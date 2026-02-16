import React, { useState, useEffect } from "react";
import "./TypingEffect.css";

export default function TypingEffect({ text = { text }, speed = 60 }) {
  const [displayedText, setDisplayedText] = useState("");
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (displayedText.length < text.length) {
      const timer = setTimeout(() => {
        setDisplayedText(text.slice(0, displayedText.length + 1));
      }, speed);
      return () => clearTimeout(timer);
    } else if (displayedText.length === text.length) {
      setIsComplete(true);
    }
  }, [displayedText, text, speed]);

  return (
    <div className="typing-effect">
      <h1 className="typing-text">
        {displayedText}
        <span className={`cursor ${isComplete ? "blink" : ""}`}></span>
      </h1>
    </div>
  );
}
