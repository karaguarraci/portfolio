import { Carousel, Button } from "react-bootstrap";
import Project1 from "../assets/Screenshot 2023-05-28 at 13.54.32.png";
import Project2 from "../assets/Screenshot 2023-05-28 at 13.56.31.png";
import Project3 from "../assets/Screenshot 2023-05-28 at 13.58.25.png";
import Project4 from "../assets/Screenshot 2023-05-28 at 14.24.40.png";

const projectsData = [
  {
    image: Project1,
    alt: "First slide",
    description:
      "SEI Project 1 - Frogger: I created a grid based game using HTML, CSS and JavaScript. I decided to make a Lord of the Rings inspired Frogger game. This helped to further my knowledge and ability to use JavaScript and it was a good way to see how all these languages could come together. ",
    link: "https://karaguarraci.github.io/",
    readMe: "https://github.com/karaguarraci/karaguarraci.github.io",
  },
  {
    image: Project2,
    alt: "Second slide",
    description:
      "SEI Project 2 - Ultimate Trivia Quiz: I built a React app which used an external API. This gave me a good basis for working with APIs and how they function, leading into building my own in the following module. I used a Trivia API and created a quiz with a random quiz page, categories and an option to create your own quiz by selecting your favourite questions.",
    link: "https://ultimate-trivia-quiz.netlify.app/",
    readMe: "https://github.com/karaguarraci/Project-2",
  },
  {
    image: Project3,
    alt: "Third slide",
    description:
      "SEI Project 3 - Design My Trip: I contributed to the development of a MERN full stack travel app with CRUD functionality. My responsibilities included implementing authentication and working on the userController, specifically adding register and login endpoints on the backend. On the frontend, I developed the individual country page that provided users with the ability to view, add, and update activities within the page. Additionally, users were able to add activities to their itinerary.",
    link: "https://designmytrip.netlify.app/",
    readMe: "https://github.com/karaguarraci/Travel-API",
  },
  {
    image: Project4,
    alt: "Fourth slide",
    description:
      "SEI Project 4 - Pawsome Dining: I built a full stack web application, which allows users to search for dog-friendly restaurants in a particular city. The backend of the project was built using Python and Django, while the frontend was built using React, with additional styling implemented through React-Bootstrap and SASS. The application includes a search function on the homepage, as well as an 'All Restaurants' page and a 'My Favourites' page.",
    link: "https://pawsomedining.netlify.app/",
    readMe: "https://github.com/karaguarraci/Project_4_Backend",
  },
];

const Projects = () => {
  return (
    <div className="projects">
      <div className="projects-container">
        <h2>Projects</h2>
        <div className="projects-box">
          <Carousel>
            {projectsData.map((project, index) => (
              <Carousel.Item key={index}>
                <img
                  className="d-block w-100"
                  src={project.image}
                  alt={project.alt}
                />
                <div className="project-description">
                  <p>{project.description} </p>{" "}
                  <p>
                    Check out the deployed project{" "}
                    <a
                      target="_blank"
                      href={project.link}
                      className="project-link"
                    >
                      here
                    </a>{" "}
                    . See the{" "}
                    <a
                      target="_blank"
                      href={project.readMe}
                      className="project-link"
                    >
                      ReadMe{" "}
                    </a>
                    {""}
                    for more information.
                  </p>
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Projects;
