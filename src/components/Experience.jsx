import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: 'Junior Software Developer & Tester',
      company: 'BoostAI',
      companyUrl: 'https://www.boostailab.com',
      period: 'Sep 2025 - Present',
      description: [
        'Developed and improved platform features using React, Node.js, TypeScript, Figma, and modern web tooling',
        'Built a Sopranos AI dashboard to surface key statistics and user data for internal reporting and decision-making',
        'Designed and maintained a structured regression test suite, reducing repeated defects and increasing test coverage',
        'Performed automated API testing in Postman, creating collections, environments, and scripted validations',
        'Investigated and reproduced issues reported by users or internal testers, contributing to faster resolution times',
        'Participated in daily stand-ups, sprint planning, and review sessions as part of an agile workflow',
        'Supported machine-learning projects through data labelling, dataset organisation, and refinement of training inputs',
      ],
    },
    {
      id: 2,
      title: 'BSc Computer Science',
      company: 'Liverpool John Moores University',
      companyUrl: 'https://www.ljmu.ac.uk',
      period: '2021 - 2024',
      description: [
        'Achieved First Class Honours, with First Classification in all three academic years',
        'Developed a 3D Maze Generator & Solver for dissertation with multiple algorithms and visualisation tools',
        'Built various projects including AI recommendation systems, finance assistants, and web applications',
        'Gained experience with data analysis, machine learning, and collaborative group projects',
      ],
    },
    {
      id: 3,
      title: 'Assistant in Technology Department',
      company: 'University of Liverpool',
      companyUrl: 'https://www.liverpool.ac.uk',
      period: 'Aug 2018',
      description: [
        'Worked with machinery and metal fabrication tools to create components for a superbike project',
        'Developed small personal projects using laser cutters and 3D printers',
        'Gained early practical engineering experience',
      ],
    },
  ];

  return (
    <section id="experience" className="experience">
      <div className="experience-container">
        <h2 className="section-title">
          <span className="section-number">04.</span>
          Experience
        </h2>

        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={exp.id} className="timeline-item">
              <div className="timeline-marker">
                <div className="marker-dot"></div>
                {index < experiences.length - 1 && <div className="marker-line"></div>}
              </div>
              
              <div className="timeline-content">
                <div className="exp-header">
                  <h3 className="exp-title">
                    {exp.title}
                    <span className="exp-at"> @ </span>
                    {exp.companyUrl ? (
                      <a 
                        href={exp.companyUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="exp-company"
                      >
                        {exp.company}
                      </a>
                    ) : (
                      <span className="exp-company">{exp.company}</span>
                    )}
                  </h3>
                  <p className="exp-period">{exp.period}</p>
                </div>
                
                <ul className="exp-description">
                  {exp.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
