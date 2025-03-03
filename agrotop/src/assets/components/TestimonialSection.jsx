import React, { useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import quoteIcon from "../images/quote-icon.png";

const TestimonialSection = () => {
  // Testimonial data stored in a local object
  const testimonialData = [
    {
      name: "David Elson",
      title: "Real Estate Expert",
      text: "Agrotop is very unique at what they do and I recommend them.",
      image: "https://img.freepik.com/free-photo/casual-young-african-man-smiling-isolated-white_93675-128895.jpg?ga=GA1.1.1160893713.1740404612&semt=ais_hybrid"
    },
    {
      name: "Rachael Chol",
      title: "Real Estate Expert", 
      text: "Agrotop is very unique at what they do and I recommend them.", 
      image: "https://img.freepik.com/free-photo/smiley-african-woman-with-golden-earrings_23-2148747979.jpg?uid=R107376497&ga=GA1.1.1160893713.1740404612&semt=ais_hybrid", 
    }, 
    {
      name: "Allen Brone", 
      title: "Real Estate Expert", 
      text: "Agrotop is very unique at what they do and I recommend them.", 
      image: "https://img.freepik.com/free-photo/i-know-exactly-what-i-want-headshot-attractive-young-african-american-student-stylish-glasses-having-serious-calm-face-expression-feeling-confident-about-his-future-plans-career_273609-179.jpg?uid=R107376497&ga=GA1.1.1160893713.1740404612&semt=ais_hybrid",
    },
    {
      name: "Jane Doe",
      title: "Real Estate Expert",
      text: "The services provided by Agrotop are top-notch and highly reliable.",
      image: "https://img.freepik.com/free-photo/confident-african-businesswoman-mockup-psd-smiling-closeup-portr_53876-143279.jpg?uid=R107376497&ga=GA1.1.1160893713.1740404612&semt=ais_hybrid"
    },
    {
      name: "John Smith",
      title: "Property Owner",
      text: "Agrotop has transformed the way we manage our farm. Highly recommended!",
      image: "https://img.freepik.com/free-photo/puzzled-young-man-with-afro-hairstyle-raises-eyebrow-bewilderment-reacts-something-feels-doubt-dressed-elegant-shirt-isolated-white-wall_273609-17381.jpg?uid=R107376497&ga=GA1.1.1160893713.1740404612&semt=ais_hybrid"
    },
    {
      name: "Emily Johnson",
      title: "Agribusiness Specialist",
      text: "Their innovative solutions have greatly improved our productivity.",
      image: "https://img.freepik.com/free-photo/beautiful-smiling-african-american-female-with-crisp-hair-broad-smile-shows-white-teeth-wears-casual-t-shirt-spectacles-stands-wall-rejoices-having-day-off-woman-journalist-indoor_273609-15511.jpg?uid=R107376497&ga=GA1.1.1160893713.1740404612&semt=ais_hybrid"
    },
    {
      name: "Michael Brown",
      title: "Investor",
      text: "Agrotop's expertise in agriculture is unparalleled. They are the best in the field.",
      image: "https://img.freepik.com/free-photo/curly-man-with-broad-smile-shows-perfect-teeth-being-amused-by-interesting-talk-has-bushy-curly-dark-hair-stands-indoor-against-white-blank-wall_273609-17092.jpg?uid=R107376497&ga=GA1.1.1160893713.1740404612&semt=ais_hybrid"
    }
  ];

  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    // Load testimonials from the local object
    setTestimonials(testimonialData);
  }, []);

  return (
    <section className="explore-properties">
      <h3>What People Say About Us</h3>
      <p>What Our Clients Say About Us!</p>
      <div className="testimonial-carousel">
        {testimonials.length > 0 ? (
          <Splide
            options={{
              type: "loop",
              autoplay: true,
              interval: 4000, // Auto-scroll every 4 seconds
              perPage: 4,
              perMove: 1,
              gap: "40px", // Adjust spacing between slides
              pagination: false,
              arrows: true,
              breakpoints: {
                1024: { perPage: 3 }, // Medium screens: 3 per slide
                800: { perPage: 2 }, // Tablets: 2 per slide
                659: { perPage: 1 },
                480: { perPage: 1 },// Mobile: 1 per slide
              },
            }}
          >
            {testimonials.map((testimonial, index) => (
              <SplideSlide key={index}>
                <div className="testimonial">
                  <img src={testimonial.image} alt={testimonial.name} />
                  <h4>{testimonial.name}</h4>
                  <p>{testimonial.title}</p>
                  <h4>"{testimonial.text}"</h4>
                </div>
              </SplideSlide>
            ))}
          </Splide>
        ) : (
          <p>Loading testimonials...</p>
        )}
      </div>
    </section>
  );
};

export default TestimonialSection;
