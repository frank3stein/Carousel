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
          background-color: black;
          button {
            position: fixed;
            font-size: 3rem;
            height: 3rem;
            width: 3rem;
            top: calc(50vh - 24px);
            border-color: teal;
            background-color: black;
            color: white;
            border-radius: 50%;
            vertical-align: middle;
            z-index: 1;
            span {
              position: relative;
              top: -0.8rem;
            }
          }
        `}
      >
        <button
          css={css`
            /* left button */
            left: 0;
          `}
          onClick={e => handleLeft(e)}
        >
          <span>&#8592;</span>
        </button>
        <Image src={images[index]} key={index} index={index} />

        <button
          css={css`
            /* right button */
            right: 0;
          `}
          onClick={e => handleRight(e)}
        >
          <span>&#8594;</span>
        </button>
      </section>
      <section
        css={css`
          position: fixed;
          bottom: 75px;
          left: calc(50vw - 180px / 2);
          display: flex;
          justify-content: center;
          align-items: center;
          padding-top: 1.2rem;
          @media screen and (orientation: landscape) {
            display: none;
          }
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
