import React from "react";
import "./ExperienceCard.css";

export default function ExperienceCard({ item }) {
  const isQualification = item.type === "qualification";

  return (
    <div className={`experience-card ${item.type}`}>
      <div className="experience-header">
        <div className="experience-info">
          <h3 className="experience-title">{item.title}</h3>
          <p className="experience-company">{item.company}</p>
          <p className="experience-duration">{item.duration}</p>
        </div>
        <div className={`experience-badge ${item.type}`}>
          {isQualification ? "📚" : "💼"}
        </div>
      </div>
      <p className="experience-description">{item.description}</p>
    </div>
  );
}
