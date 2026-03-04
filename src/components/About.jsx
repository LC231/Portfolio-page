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
              Hello! I'm a passionate software developer who enjoys creating things 
              that live on the internet. My interest in web development started back 
              when I decided to try customizing my own projects — turns out that 
              taught me a lot about HTML, CSS, and how things work under the hood!
            </p>
            <p>
              Fast-forward to today, and I've had the privilege of working on a 
              variety of projects spanning different technologies and domains. My 
              main focus these days is building accessible, inclusive products and 
              digital experiences.
            </p>
            <p>
              When I'm not coding, you can find me exploring new technologies, 
              contributing to open source, or working on personal projects that 
              challenge me to learn something new.
            </p>
          </div>
          
          <div className="about-image">
            <div className="image-wrapper">
              <div className="image-placeholder">
                <span>Your Photo</span>
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
