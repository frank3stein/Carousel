import React, { useState } from "react";
import Image from "./image";

export default function ImageCarousel({ images }) {
  const [index, setIndex] = useState(0);
  function handleLeft(e) {
    e.preventDefault();
    if (index === 0) {
      setIndex(images.length - 1);
      return;
    }
    setIndex(index - 1);
  }
  function handleRight(e) {
    e.preventDefault();
    if (index === images.length - 1) {
      setIndex(0);
      return;
    }
    setIndex(index + 1);
  }
  return (
    <>
      <button onClick={handleLeft}>Left</button>
      <Image src={images[index]} key={index} index={index} />

      <button onClick={handleRight}>Right</button>
    </>
  );
}
