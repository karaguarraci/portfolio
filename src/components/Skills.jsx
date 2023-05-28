const Skills = () => {
  const skills = [
    {
      name: "JavaScript",
      icon: "https://img.icons8.com/?size=512&id=39853&format=png",
    },
    {
      name: "HTML",
      icon: "https://img.icons8.com/?size=512&id=23027&format=png",
    },
    {
      name: "CSS",
      icon: "https://img.icons8.com/?size=512&id=38273&format=png",
    },
    {
      name: "React",
      icon: "https://img.icons8.com/?size=512&id=0Da6k7SMq0hs&format=png",
    },
    {
      name: "Node.js",
      icon: "https://img.icons8.com/?size=512&id=FQlr_bFSqEdG&format=png",
    },
    {
      name: "Express.js",
      icon: "https://img.icons8.com/?size=512&id=kg46nzoJrmTR&format=png",
    },
    {
      name: "Mongo.DB",
      icon: "https://img.icons8.com/?size=512&id=OdTjgPoHJeaK&format=png",
    },
    {
      name: "Python",
      icon: "https://img.icons8.com/?size=512&id=12584&format=png",
    },
    {
      name: "Django",
      icon: "https://img.icons8.com/?size=512&id=mUBILbYvUMq8&format=png",
    },
    {
      name: "PostgreSQL",
      icon: "https://img.icons8.com/?size=512&id=oJvfsaofIav6&format=png",
    },
    {
      name: "Sass",
      icon: "https://img.icons8.com/?size=512&id=DYjckUr8cF8H&format=png",
    },
    {
      name: "Bootstrap",
      icon: "https://img.icons8.com/?size=512&id=KKlkH0M92AHI&format=png",
    },
    {
      name: "Git",
      icon: "https://img.icons8.com/?size=512&id=38388&format=png",
    },
    {
      name: "GitHub",
      icon: "https://img.icons8.com/?size=512&id=12598&format=png",
    },
    {
      name: "VS Code",
      icon: "https://img.icons8.com/?size=512&id=ENnBBPpfkhH1&format=png",
    },
    {
      name: "Netlify",
      icon: "https://img.icons8.com/?size=512&id=m6GFODBlJETz&format=png",
    },
    {
      name: "Heroku",
      icon: "https://img.icons8.com/?size=512&id=32337&format=png",
    },
    {
      name: "Postman",
      icon: "https://img.icons8.com/?size=512&id=KIcFwp9MNQL5&format=png",
    },
  ];
  return (
    <div className="skills-page">
      <div className="skill-order">
        <h2>Skills</h2>
        <div className="skills-container">
          {skills.map((skill) => (
            <div className="skill" key={skill.name}>
              <img src={skill.icon} alt={skill.name} />
              <p className="skill-name">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Skills;
