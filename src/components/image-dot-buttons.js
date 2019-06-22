import React from "react";
import { css } from "@emotion/core";

function ImageDotButtons({ cb, selectedImage, buttonId }) {
  return (
    <button
      css={css`
        cursor: pointer;
        height: 2rem;
        width: 2rem;
        margin: 0 0.4rem;
        background-color: hsla(160, 40%, 50%, 0.7);
        border-radius: 50%;
        display: inline-block;

        transition: background-color 0.6s ease;

        &:hover {
          background-color: #717171;
        }
        &.active {
          background-color: #717171;
        }
      `}
      onClick={e => {
        e.preventDefault();
        cb(e);
      }}
      className={selectedImage === buttonId ? "active" : ""}
    ></button>
  );
}
export default ImageDotButtons;
