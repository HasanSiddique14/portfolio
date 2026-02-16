import React from "react";
import "./Footer.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">Hasan Siddique</h3>
            <p className="footer-text">A passionate full stack developer.</p>
          </div>

          <div className="footer-section">
            <h3 className="footer-title">CONTACT</h3>
            <ul className="footer-links">
              <li>
                <a href="mailto:hasansiddique27@gmail.com">📧 Email</a>
              </li>
              <li>
                <a
                  href="https://github.com/HasanSiddique14"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  🐙 GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/hasan-siddique-09197621a/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  💼 LinkedIn
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h3 className="footer-title">LOCATION</h3>
            <p className="footer-text">🌍 London</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copy">
            © {currentYear} Let's complete the game!
          </p>
        </div>
      </div>
    </footer>
  );
}
