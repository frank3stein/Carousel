import React from "react";
import { render } from "react-dom";
import ImageCarousel from "./components/image-carousel";
import images from "./images/processed/imageExports";
import "./styles.css";
function App() {
  return (
    <>
      {/* <p>Hello</p> */}
      <ImageCarousel images={images} />
    </>
  );
}

render(<App />, document.getElementById("root"));
