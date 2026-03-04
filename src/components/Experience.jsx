import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: 'Software Developer',
      company: 'Company Name',
      companyUrl: 'https://example.com',
      period: 'Jan 2024 - Present',
      description: [
        'Developed and maintained web applications using React and Node.js',
        'Collaborated with cross-functional teams to deliver high-quality software',
        'Implemented responsive designs and improved application performance',
        'Participated in code reviews and contributed to technical documentation',
      ],
    },
    {
      id: 2,
      title: 'Junior Developer',
      company: 'Previous Company',
      companyUrl: 'https://example.com',
      period: 'Jun 2022 - Dec 2023',
      description: [
        'Built and maintained features for customer-facing web applications',
        'Worked with REST APIs and database management systems',
        'Assisted in migrating legacy codebases to modern frameworks',
        'Gained experience with agile development methodologies',
      ],
    },
    {
      id: 3,
      title: 'Intern / Freelancer',
      company: 'Various Projects',
      companyUrl: null,
      period: '2021 - 2022',
      description: [
        'Completed various freelance web development projects',
        'Built personal projects to develop technical skills',
        'Contributed to open source projects on GitHub',
        'Learned fundamental programming concepts and best practices',
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
