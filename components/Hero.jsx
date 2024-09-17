"use client";
import { useState, useEffect } from "react";
import PropertySearchForm from "./PropertySearchForm";

const Hero = () => {
  const [backgroundPosition, setBackgroundPosition] = useState("center");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleMouseMove = (e) => {
    if (!isMobile) {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      setBackgroundPosition(`${x}% ${y}%`);
    }
  };

  return (
    <section
      className={`py-20 mb-4 relative ${
        isMobile ? "animate-pulseBackground" : ""
      }`}
      onMouseMove={handleMouseMove}
      style={{
        background: isMobile
          ? `radial-gradient(circle, #60a5fa, #3b82f6, #1d4ed8)`
          : `radial-gradient(circle at ${backgroundPosition}, #60a5fa, #3b82f6, #1d4ed8)`,
        transition: "background-position 0.1s ease-out",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
            Find The Perfect Rental
          </h1>
          <p className="my-4 text-xl text-blue-200">
            Discover the perfect property that suits your needs.
          </p>
        </div>
        <PropertySearchForm />
      </div>
    </section>
  );
};

export default Hero;
