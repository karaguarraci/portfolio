import { Carousel, Button } from "react-bootstrap";
import Project1 from "../assets/Screenshot 2023-05-28 at 13.54.32.png";
import Project2 from "../assets/Screenshot 2023-05-28 at 13.56.31.png";
import Project3 from "../assets/Screenshot 2023-05-28 at 13.58.25.png";
import Project4 from "../assets/Screenshot 2023-05-28 at 14.24.40.png";
const Projects = () => {
  return (
    <div className="projects">
      <div className="projects-container">
        <h2>Projects</h2>
        <div className="projects-box">
          <Carousel>
            <Carousel.Item>
              <img className="d-block w-100" src={Project1} alt="First slide" />
              <Carousel.Caption>
                <Button>SEI Project 1</Button>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={Project2}
                alt="Second slide"
              />

              <Carousel.Caption>
                <Button>SEI Project 2</Button>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={Project3} alt="Third slide" />

              <Carousel.Caption>
                <Button>SEI Project 3</Button>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={Project4} alt="Forth slide" />

              <Carousel.Caption>
                <Button>SEI Project 4</Button>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </div>
  );
};
export default Projects;
