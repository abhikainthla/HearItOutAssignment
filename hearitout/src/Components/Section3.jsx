import { useState } from "react";
import ReactSimplyCarousel from "react-simply-carousel";

const Section3 = () => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const slides = [0, 1, 2, 3];

  return (
    <div className="section3-container">
      <ReactSimplyCarousel
        activeSlideIndex={activeSlideIndex}
        onRequestChange={setActiveSlideIndex}
        itemsToShow={1}
        itemsToScroll={1}
        autoplay={true}
        delay={3000}
        forwardBtnProps={{
          style: {
            alignSelf: 'center',
            background: 'black',
            border: 'none',
            borderRadius: '50%',
            color: 'white',
            cursor: 'pointer',
            fontSize: '20px',
            height: 50,
            lineHeight: 1,
            textAlign: 'center',
            width: 30,
          },
          children: <span>{`>`}</span>,
        }}
        backwardBtnProps={{
          style: {
            alignSelf: 'center',
            background: 'black',
            border: 'none',
            borderRadius: '50%',
            color: 'white',
            cursor: 'pointer',
            fontSize: '20px',
            height: 50,
            lineHeight: 1,
            textAlign: 'center',
            width: 30,
          },
          children: <span>{`<`}</span>,
        }}
        responsiveProps={[
          {
            itemsToShow: 1,
            itemsToScroll: 1,
            minWidth: 768,
          },
        ]}
        speed={400}
        easing="linear"
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="carousel-slide"
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-5px)";
              e.currentTarget.style.boxShadow = "0px 6px 15px rgba(0, 0, 0, 0.2)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0px 4px 10px rgba(0, 0, 0, 0.1)";
            }}
          >
            <img src="/Frame 1239.png" alt="slide-image" style={{ marginBottom: '170px' }} />
            <p
              style={{
                fontSize: "16px",
                lineHeight: "1.5",
                color: "#333333",
                textAlign: "justify",
                overflowY: "auto",
              }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, illo
              doloremque. Eaque odio perspiciatis, ab eius ex molestias quibusdam?
              Similique aliquam pariatur nesciunt velit expedita eos laborum vero
              corrupti dolorum tenetur non eveniet sed aperiam recusandae amet minima
              nobis odit, error eius laboriosam. Mollitia rerum aliquid, eligendi esse
              animi dicta.
            </p>
            <img src="/Group.png" alt="group-image" style={{ marginTop: "130px" }} />
          </div>
        ))}
      </ReactSimplyCarousel>

      <button className="slider-button">Slider Button</button>
    </div>
  );
};

export default Section3;
