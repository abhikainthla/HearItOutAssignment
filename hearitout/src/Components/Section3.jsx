import { useState } from "react";
import ReactSimplyCarousel from "react-simply-carousel";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";

const Section3 = () => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  const slides = [0,1,2,3];

  return (
    <div style={{ padding: "20px", textAlign: "center" ,backgroundColor:"#EBF7FC" }}>
      <ReactSimplyCarousel
        activeSlideIndex={activeSlideIndex}
        onRequestChange={setActiveSlideIndex}
        itemsToShow={1}
        itemsToScroll={1}
        forwardBtnProps={{
          style: {
            alignSelf: "center",
            background: "#043953",
            border: "none",
            borderRadius: "50%",
            color: "white",
            cursor: "pointer",
            fontSize: "20px",
            height: 50,
            lineHeight: 1,
            textAlign: "center",
            width: 30,
          },
          children: <MdArrowForwardIos />,
        }}
        backwardBtnProps={{
          style: {
            alignSelf: "center",
            background: "#043953",
            border: "none",
            borderRadius: "50%",
            color: "white",
            cursor: "pointer",
            fontSize: "20px",
            height: 50,
            lineHeight: 1,
            textAlign: "center",
            width: 30,
          },
          children: <MdArrowBackIos/>,
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
         style={{
           width: "680px",
           height: "350px",
           display: "flex",
           justifyContent: "center",
           alignItems: "center",
           borderRadius: "10px",
           padding: "30px",
           background: "#ffffff",
           boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
           border: "1px solid #e0e0e0",
           transition: "transform 0.3s ease, box-shadow 0.3s ease",
           overflow: "hidden",
         }}
         onMouseEnter={(e) => {
           e.currentTarget.style.transform = "translateY(-5px)";
           e.currentTarget.style.boxShadow = "0px 6px 15px rgba(0, 0, 0, 0.2)";
         }}
         onMouseLeave={(e) => {
           e.currentTarget.style.transform = "translateY(0)";
           e.currentTarget.style.boxShadow = "0px 4px 10px rgba(0, 0, 0, 0.1)";
         }}
       >
        <img src="/Frame 1239.png"style={{marginBottom:'170px'}}/>
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
         <img src="/Group.png"style={{marginTop:"130px"}} />
       </div>
       
        ))}
      </ReactSimplyCarousel>

      <button style={{backgroundColor:"#043953", borderRadius:"4px", width:"165px", height:'54px', margin:'20px'}}>Slider Button</button>
    </div>
  );
};

export default Section3;
