const Skills = () => {
  const skills = [
    {
      name: "JavaScript",
      icon: "https://icons8.com/icon/39854/javascript",
    },
    { name: "HTML", icon: "https://icons8.com/icon/39853/javascript" },
    { name: "CSS", icon: "https://icons8.com/icon/23028/html-5" },
    { name: "React", icon: "https://icons8.com/icon/35989/react-native" },
    { name: "Node.js", icon: "https://icons8.com/icon/t9oCxEN7McHZ/nodejs" },
    {
      name: "Express.js",
      icon: "https://icons8.com/icon/SDVmtZ6VBGXt/express-js",
    },
    { name: "Mongo.DB", icon: "https://icons8.com/icon/74402/mongodb" },
    { name: "Python", icon: "https://icons8.com/icon/10686/python" },
    { name: "Django", icon: "https://icons8.com/icon/mUBILbYvUMq8/django" },
    { name: "PostgreSQL", icon: "https://icons8.com/icon/25010/postgresql" },
    { name: "Sass", icon: "https://icons8.com/icon/AA0AjTIUxa2j/sass" },
    {
      name: "Bootstrap",
      icon: "https://icons8.com/icon/KKlkH0M92AHI/bootstrap",
    },
    { name: "Git", icon: "https://icons8.com/icon/32891/git" },
    { name: "GitHub", icon: "https://icons8.com/icon/12599/github" },
    {
      name: "VS Code",
      icon: "https://icons8.com/icon/oMWZpgnJupym/visual-studio-code-2019",
    },
    {
      name: "Netlify",
      icon: "https://seeklogo.com/images/N/netlify-logo-BD8F8A77E2-seeklogo.com.png",
    },
    { name: "Heroku", icon: "https://icons8.com/icon/32337/heroku" },
    {
      name: "Postman",
      icon: "https://img.uxwing.com/wp-content/themes/uxwing/download/brands-social-media/postman-icon.svg",
    },
    { name: "Mongoose", icon: "https://icons8.com/icon/gKfcEStXI1Hm/mongoose" },
    {
      name: "JWT",
      icon: "https://icons8.com/icon/rHpveptSuwDz/json-web-token",
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
