import React, { useState } from "react";
import TypingEffect from "./TypingEffect";
import "./ControllerAnimation.css";

export default function ControllerAnimation({
  onStart,
  typingText = "Welcome to Hasan Siddique's Portfolio",
}) {
  const [isZooming, setIsZooming] = useState(false);

  const handleStartClick = () => {
    setIsZooming(true);
    setTimeout(() => {
      onStart();
    }, 800);
  };

  return (
    <div className={`controller-container ${isZooming ? "zoom-in" : ""}`}>
      <TypingEffect text={typingText} speed={60} />
      <svg
        viewBox="0 0 300 200"
        className="controller"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Controller Body */}
        <rect
          x="30"
          y="30"
          width="240"
          height="140"
          rx="20"
          fill="#1A1A1A"
          stroke="#FFFFFF"
          strokeWidth="2"
        />

        {/* Left D-Pad */}
        <g className="dpad">
          <rect
            x="60"
            y="70"
            width="40"
            height="60"
            fill="#333333"
            stroke="#FFFFFF"
            strokeWidth="1"
            rx="3"
          />
          <rect
            x="70"
            y="75"
            width="20"
            height="50"
            fill="#444444"
            stroke="#FFFFFF"
            strokeWidth="1"
          />
          <rect
            x="60"
            y="80"
            width="40"
            height="20"
            fill="#444444"
            stroke="#FFFFFF"
            strokeWidth="1"
          />
        </g>

        {/* Right Buttons (A, B, X, Y in retro positions) */}
        <g className="buttons">
          <circle
            cx="240"
            cy="80"
            r="12"
            fill="#FF0000"
            stroke="#FFFFFF"
            strokeWidth="1"
            className="button-a"
          />
          <circle
            cx="215"
            cy="95"
            r="12"
            fill="#FFFF00"
            stroke="#FFFFFF"
            strokeWidth="1"
            className="button-b"
          />
          <circle
            cx="215"
            cy="65"
            r="12"
            fill="#0066FF"
            stroke="#FFFFFF"
            strokeWidth="1"
            className="button-x"
          />
          <circle
            cx="240"
            cy="110"
            r="12"
            fill="#00CC00"
            stroke="#FFFFFF"
            strokeWidth="1"
            className="button-y"
          />
        </g>

        {/* Center Menu Buttons */}
        <g className="menu-buttons">
          <rect
            x="120"
            y="50"
            width="30"
            height="15"
            fill="#555555"
            stroke="#FFFFFF"
            strokeWidth="1"
            rx="2"
          />
          <rect
            x="150"
            y="50"
            width="30"
            height="15"
            fill="#555555"
            stroke="#FFFFFF"
            strokeWidth="1"
            rx="2"
          />
        </g>

        {/* Top Screen area (decorative) */}
        <rect
          x="80"
          y="10"
          width="140"
          height="20"
          fill="#2D5016"
          stroke="#FFFFFF"
          strokeWidth="1"
          rx="2"
        />
      </svg>

      {/* Start Button */}
      <button
        className="start-button"
        onClick={handleStartClick}
        disabled={isZooming}
      >
        START
      </button>

      {/* Decorative text */}
      <p className="game-text">PRESS START TO PLAY</p>
    </div>
  );
}
