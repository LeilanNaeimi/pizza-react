const skills = [
  {
    skill: 'javaScript',
    level: 'beginner',
    color: 'yellow',
  },
  {
    skill: 'HTML + CSS',
    level: 'Advance',
    color: 'orangered',
  },
  {
    skill: 'Reactjs',
    level: 'Intermediate',
    color: 'blue',
  },
  {
    skill: 'GIT',
    level: 'Advance',
    color: 'orange',
  },
  {
    skill: 'PL/SQL',
    level: 'Advance',
    color: 'green',
  },
];

function SkillList() {
  const allSkills = skills;
  // console.log(allSkills);
  return (
    <div className="skillslist">
      {allSkills.map((skill, index) => (
        <Skills skillsObj={skill} key={index} />
      ))}
    </div>
  );
}

function Skills({ skillsObj }) {
  return (
    // <div className="skills">
    <div className="skills" style={{ backgroundColor: skillsObj.color }}>
      <span> {skillsObj.skill}</span>
      <span>
        {skillsObj.level === 'beginner' && '🐭'}
        {skillsObj.level === 'Advance' && '🧨'}
        {skillsObj.level === 'Intermediate' && '👍'}
      </span>
    </div>
    // </div>
  );
}

export default SkillList;
