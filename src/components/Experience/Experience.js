import React, { useEffect, useRef } from "react";
import ExperienceCard from "./ExperienceCard";
import experienceData from "../../data/experience.json";
import "./Experience.css";

export default function Experience() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      },
      { threshold: 0.1 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Separate experience and qualifications
  const experiences = experienceData.filter(
    (item) => item.type === "experience",
  );
  const qualifications = experienceData.filter(
    (item) => item.type === "qualification",
  );

  return (
    <section className="experience" id="experience" ref={sectionRef}>
      <div className="experience-container">
        <h2 className="section-title">EXPERIENCE & QUALIFICATIONS</h2>

        <div className="experience-content">
          <div className="experience-column">
            <h3 className="subsection-title">💼 EXPERIENCE</h3>
            {experiences.map((item) => (
              <ExperienceCard key={item.id} item={item} />
            ))}
          </div>

          <div className="experience-column">
            <h3 className="subsection-title">📚 QUALIFICATIONS</h3>
            {qualifications.map((item) => (
              <ExperienceCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
