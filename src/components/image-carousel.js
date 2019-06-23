import React, { useState } from "react";
import Image from "./image";
import ImageDotButtons from "./image-dot-buttons";
import { css } from "@emotion/core";

export default function ImageCarousel({ images }) {
  const [index, setIndex] = useState(images.length - 1); // start from last image
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
          align-content: center;
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
          padding-top: 1.2rem;
        `}
      >
        {images.map((_, buttonId) => (
          <ImageDotButtons
            cb={() => {
              setIndex(buttonId);
            }}
            selectedImage={index}
            key={buttonId}
            buttonId={buttonId}
          ></ImageDotButtons>
        ))}
      </section>
    </>
  );
}
