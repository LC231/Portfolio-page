import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <h2 className="section-title">
          <span className="section-number">01.</span>
          About Me
        </h2>
        
        <div className="about-content">
          <div className="about-text">
            <p>
              Hello! I'm a Junior Software Developer and Computer Science graduate with 
              a First Class Honours degree from Liverpool John Moores University. I'm 
              currently working at BoostAI, where I contribute to feature development, 
              structured testing, QA automation, and data workflows.
            </p>
            <p>
              I'm skilled at building AI-driven systems, writing clear documentation, 
              and delivering reliable, high-quality solutions. My experience spans 
              React, Node.js, TypeScript, and modern web tooling, along with automated 
              API testing and machine learning projects.
            </p>
            <p>
              When I'm not coding, you can find me gaming, watching films, playing 
              football or golf, or working on personal AI projects like ScoutBot AI 
              and my Finance Agent assistant.
            </p>
          </div>
          
          <div className="about-image">
            <div className="image-wrapper">
              <div className="image-placeholder">
                <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
              <div className="image-border"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
