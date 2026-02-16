import React, { useState, useEffect } from "react";
import "./CursorGame.css";

function CursorGame() {
  const [clicks, setClicks] = useState([]);

  useEffect(() => {
    const handleClick = (e) => {
      const id = Date.now();
      const newClick = {
        id,
        x: e.clientX,
        y: e.clientY,
      };

      setClicks((prev) => [...prev, newClick]);

      // Remove after animation completes
      setTimeout(() => {
        setClicks((prev) => prev.filter((click) => click.id !== id));
      }, 500);
    };

    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, []);

  return (
    <div className="cursor-game">
      {clicks.map((click) => (
        <div
          key={click.id}
          className="click-sparkle"
          style={{
            left: `${click.x}px`,
            top: `${click.y}px`,
          }}
        >
          <div className="sparkle"></div>
          <span className="plus-ten">+10</span>
        </div>
      ))}
    </div>
  );
}

export default CursorGame;
