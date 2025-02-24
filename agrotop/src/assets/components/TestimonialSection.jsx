import React, { useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import quoteIcon from "../images/quote-icon.png";

const TestimonialSection = () => {
  // Testimonial data stored in a local object
  const testimonialData = [
    {
      name: "John Doe",
      title: "Real Estate Investor",
      text: "Agrotop made my property search so easy. I found my dream investment within days!",
    },
    {
      name: "Jane Smith",
      title: "Home Buyer",
      text: "I was able to buy my first home effortlessly thanks to Agrotop's amazing service!",
    },
    {
      name: "David Johnson",
      title: "Landowner",
      text: "Selling my property was stress-free and quick. Highly recommend this platform!",
    },
    {
      name: "Emily Williams",
      title: "Tenant",
      text: "The leasing process was transparent and smooth. I love my new home!",
    },
    {
      name: "Michael Brown",
      title: "Realtor",
      text: "Agrotop connects me with genuine buyers and sellers. A game-changer in real estate!",
    },
  ];

  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    // Load testimonials from the local object
    setTestimonials(testimonialData);
  }, []);

  return (
    <div className="testimonial-section">
        <h3>What People Say About Us</h3>
        <div className="testimonial-carousel">
            <img src={quoteIcon} alt="Quote Icon" className="quotation-mark" />
                {testimonials.length > 0 ? (
                <Splide
                    options={{
                    type: "loop",
                    autoplay: true,
                    interval: 5000,
                    pagination: true,
                    arrows: false,
                    perPage: 1,
                    }}
                >
                    {testimonials.map((testimonial, index) => (
                    <SplideSlide key={index}>
                        <div className="testimonial">
                        <p>{testimonial.text}</p>
                        <h4>{testimonial.name}</h4>
                        <h5>{testimonial.title}</h5>
                        </div>
                    </SplideSlide>
                ))}
            </Splide>
            ) : (
                <p>Loading testimonials...</p>
            )}
        </div>
    </div>
  );
};

export default TestimonialSection;
