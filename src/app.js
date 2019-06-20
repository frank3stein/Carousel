import React from "react";
import { render } from "react-dom";
import ImageCarousel from "./components/image-carousel";
// import image1 from "./images/original/jurriaan-snikkers-99062-unsplash.jpg";
// import image2 from "./images/original/kees-streefkerk-654164-unsplash.jpg";
// import image3 from "./images/original/rik-van-der-kroon-34753-unsplash.jpg";
// import image4 from "./images/original/serhat-beyazkaya-665209-unsplash.jpg";
import images from "./images/processed/imageExports";
// const images = [image1, image2, image3, image4];

function App() {
  return (
    <>
      <p>Hello</p>
      <ImageCarousel images={images} />
    </>
  );
}

render(<App />, document.getElementById("root"));
