import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link, NavLink } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import { Carousel,  Container } from "react-bootstrap";
import Card from "react-bootstrap/Card"

export default function MainCarousel() {
  return (
    <>
      <Carousel controls={false}>
        <Carousel.Item>
          <div className="carousel-activebg"></div>
          <div className="overlay"></div>
          <Container>
            <Card className="carousel-card">
              <div className="carousel-head mb-3">
                <h1>Modern Dentistry in a Calm and Relaxed Environment </h1>
              </div>
              <div className="carousel-content mb-3">
                <p>
                  A small river named Duden flows by their place and supplies it
                  with the neccessary regelialia.
                </p>
              </div>
              <div className="carousel-button">
              <Button variant="primary" >
          <Link to="/" className="appointment-link">Make an appointment</Link>
          </Button> 
              </div>
            </Card>
          </Container>
        </Carousel.Item>
        <Carousel.Item>
          <div className="carousel-bg"></div>
          <div className="overlay"></div>
          <Container>
            <Card className="carousel-card">
              <div className="carousel-head mb-3">
                <h1>Modern Achieve Your Desired Perfect Smile </h1>
              </div>
              <div className="carousel-content mb-3">
                <p>
                  A small river named Duden flows by their place and supplies it
                  with the neccessary regelialia.
                </p>
              </div>
              <div className="carousel-button">
              <Button variant="primary" >
          <Link to="/" className="appointment-link">Make an appointment</Link>
          </Button> 
              </div>
            </Card>
          </Container>
        </Carousel.Item>
      </Carousel>
    </>
  );
}
