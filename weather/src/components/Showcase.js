import React from "react";
import Header from "./Header";
import ocean from "../ocean.mp4";

const Showcase = () => {
  return (
    <div className="showcase">
      <Header />
      <video class="video" src={ocean} muted loop autoplay></video>

      <div class="overlay"></div>

      <div class="text">
        <h2>What's the weather like today?</h2>
        <div class="button-div">
          <a href="#">Learn More</a>
        </div>
      </div>
    </div>
  );
};

export default Showcase;
