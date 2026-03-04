import './Skills.css';

const Skills = ({ languages = [] }) => {
  const defaultSkills = {
    'Languages': ['Java', 'Python', 'JavaScript', 'TypeScript', 'HTML', 'CSS', 'SQL', 'Node.js', 'PHP', 'R'],
    'Frameworks': ['React.js', 'React Native'],
    'Tools': ['VS Code', 'Eclipse', 'NetBeans', 'Postman', 'Trello', 'Auth0', 'Vercel', 'Resend', 'Figma', 'Tableau'],
    'Databases': ['MongoDB', 'MySQL', 'Berkeley DB'],
    'AI & Data': ['Machine Learning', 'Random Forest', 'LLM Systems', 'Agent Orchestration', 'Data Preparation'],
    'Testing': ['Automated API Testing', 'Regression Suite Design', 'QA Planning'],
  };

  const languagesFromGitHub = languages.length > 0 
    ? { 'From My Projects': languages }
    : {};

  const allSkills = { ...languagesFromGitHub, ...defaultSkills };

  return (
    <section id="skills" className="skills">
      <div className="skills-container">
        <h2 className="section-title">
          <span className="section-number">02.</span>
          Skills & Technologies
        </h2>

        <div className="skills-grid">
          {Object.entries(allSkills).map(([category, skillList]) => (
            <div key={category} className="skill-category">
              <h3 className="category-title">{category}</h3>
              <div className="skill-tags">
                {skillList.map((skill) => (
                  <span key={skill} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
