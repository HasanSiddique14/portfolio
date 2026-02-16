import React from "react";
import ControllerAnimation from "./ControllerAnimation";
import "./Landing.css";

export default function Landing({ onStartClick }) {
  return (
    <section className="landing" id="landing">
      <ControllerAnimation onStart={onStartClick} />
    </section>
  );
}
