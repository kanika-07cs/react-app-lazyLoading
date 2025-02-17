import React, { useState, useEffect } from "react";
import "../styles/icecream.css";
import { LazyLoadImage } from "react-lazy-load-image-component";

import blackCurrent from "../assets/Black-Currant-Flavour.jpg";
import chocolate from "../assets/chocolate-chip-ice-cream.jpg";
import mint from "../assets/Mint-Chocolate-Chip-Ice-Cream.jpg";
import redVelvet from "../assets/red-velvet-ice-cream.webp";
import oreo from "../assets/ice-cream-oreo-cookie.jpg";
import butterscotch from "../assets/Butterscotch-cookie-dough-ice-cream.jpg";

const images = [blackCurrent, chocolate, mint, redVelvet, oreo, butterscotch];

export default function Icecream() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  return (
    <div className="icecream">
        <LazyLoadImage
          src={images[currentIndex]}
          alt="Ice Cream"
          width="300px"
          height="300px"
          effect="blur" // Lazy loading with blur effect
        />
    </div>
  );
}
