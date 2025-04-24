import React from "react";
import "./Images.css";

const images = [
  "https://static.wixstatic.com/media/81ceb2_2a9bca58d4044c87aaf8120ec637ad6f~mv2.jpg/v1/fill/w_433,h_350,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/81ceb2_2a9bca58d4044c87aaf8120ec637ad6f~mv2.jpg",
  "https://static.wixstatic.com/media/81ceb2_0c26c98e2a404998a687eb62a180f0ea~mv2.jpg/v1/fill/w_433,h_350,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/81ceb2_0c26c98e2a404998a687eb62a180f0ea~mv2.jpg",
  "https://static.wixstatic.com/media/81ceb2_e72bd8ce578e4384b8bec087f1b7c891~mv2.jpg/v1/fill/w_433,h_350,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/81ceb2_e72bd8ce578e4384b8bec087f1b7c891~mv2.jpg",
  "https://static.wixstatic.com/media/81ceb2_db5cb3f5bb41413fadae43ad1eb558d5~mv2.jpg/v1/fill/w_433,h_350,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/81ceb2_db5cb3f5bb41413fadae43ad1eb558d5~mv2.jpg",
  "https://static.wixstatic.com/media/81ceb2_d2d4eebd2a764eba8fa3f9360ee683c6~mv2.jpg/v1/fill/w_433,h_350,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/81ceb2_d2d4eebd2a764eba8fa3f9360ee683c6~mv2.jpg",
  "https://static.wixstatic.com/media/81ceb2_9330ca62f53e442abefc3142147d9bd8~mv2.jpg/v1/fill/w_433,h_350,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/81ceb2_9330ca62f53e442abefc3142147d9bd8~mv2.jpg",
];

export default function Images() {
  return (
    <div className="slider">
      {images.map((src, index) => (
        <img
          className="moving-img"
          key={index}
          src={src}
          alt=""
          style={{ "--pos": index + 1 }}
        />
      ))}
    </div>
  );
}
