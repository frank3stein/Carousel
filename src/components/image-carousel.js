import React, { useState } from "react";
import Image from "./image";
import ImageDotButtons from "./image-dot-buttons";
import { css } from "@emotion/core";

export default function ImageCarousel({ images }) {
  const [index, setIndex] = useState(images.length - 1);
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
      <section
        css={css`
          display: flex;
          justify-content: center;

          margin: 1rem auto;
          padding: 0;

          /* position: relative;
          box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.5);

          &::after {
            content: "";
            position: absolute;
            z-index: -1;
            box-shadow: 0 15px 20px rgba(0, 0, 0, 0.3);
            width: 100%;
            left: 1%;
            height: 100vh;
            bottom: 0;
          } */

          button {
            font-size: 3rem;
            border-color: white;
            background-color: black;
            color: white;
          }
        `}
      >
        <button css={css``} onClick={e => handleLeft(e)}>
          &#8592;
        </button>
        <Image src={images[index]} key={index} index={index} />

        <button onClick={e => handleRight(e)}>&#8594;</button>
      </section>
      <section
        css={css`
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 1.2rem;
          /* background-color: black; */
        `}
      >
        {images.map((_, index) => (
          <ImageDotButtons
            cb={() => setIndex(index)}
            key={index}
          ></ImageDotButtons>
        ))}
      </section>
    </>
  );
}
