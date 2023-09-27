import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

function Explore() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
      setIndex(selectedIndex);
    };

  return (
    <body>
      <img src="https://cdn.wallpapersafari.com/93/97/Uv8wKu.jpg" className="explore-background" alt="pink background"/>
    <div id="explore-main">
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img src="https://i.pinimg.com/originals/45/cd/30/45cd30de9f9bcc7ed78cbb83fe3d0e01.jpg" text="First slide" className="carousel-image" alt="potential match's profile pic"/>
        <Carousel.Caption>
          <h2>First slide label</h2>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          <h2>Hello</h2>
          <h3>Im yes</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src="https://i.pinimg.com/originals/45/cd/30/45cd30de9f9bcc7ed78cbb83fe3d0e01.jpg" text="Second slide" className="carousel-image" alt="potential match's profile pic" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src="https://i.pinimg.com/originals/45/cd/30/45cd30de9f9bcc7ed78cbb83fe3d0e01.jpg" text="Third slide" className="carousel-image" alt="potential match's profile pic"/>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
    </body>
          
    )
}

export default Explore