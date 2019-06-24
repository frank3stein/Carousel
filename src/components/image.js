import React from "react";
import { css } from "@emotion/core";
export default function Image({ src, index, alt = "" }) {
  if (alt === "") alt = `Rotterdam image ${index}`; // Just a generic alt since images are random
  return (
    <picture>
      <source media="(min-width:1920px)" srcSet={`${src[1]} 1920w`} />
      <source media="(min-width:1200px)" srcSet={`${src[2]} 1200w`} />
      <source media="(min-width:1000px)" srcSet={`${src[3]} 1000w`} />
      <source media="(min-width:800px)" srcSet={`${src[4]} 800w`} />
      <source media="(min-width:600px)" srcSet={`${src[5]} 600w`} />
      <source media="(max-width:599px)" srcSet={`${src[6]} 400w`} />
      <img
        css={css`
          max-height: 100vh;
          margin: 0;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        `}
        src={src[3]} // 1000w image as the fallback image
        alt={alt}
      />
    </picture>
  );
}
