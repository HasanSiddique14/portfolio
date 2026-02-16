import React, { useEffect, useRef } from "react";
import aboutData from "../../data/about.json";
import "./About.css";

export default function About() {
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

  return (
    <section className="about" id="about" ref={sectionRef}>
      <div className="about-container">
        <h2 className="section-title">{aboutData.title}</h2>

        <div className="about-content">
          <div className="about-text">
            <p className="introduction">{aboutData.introduction}</p>
            <p className="bio">{aboutData.bio}</p>
          </div>

          <div className="skills-container">
            <h3 className="skills-title">SKILLS</h3>
            <div className="skills-grid">
              {aboutData.skills.map((skill, index) => (
                <div key={index} className="skill-badge">
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
