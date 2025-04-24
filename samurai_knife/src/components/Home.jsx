import React from "react";
import SplitText from "./SplitText";
import "./Home.css";
import Images from "./Images";
import MainText from "./Main-text";
import Product from "./Product";

const handleAnimationComplete = () => {};

const App = () => {
  return (
    <div>
      {/* <img className="main-img" src="/img-main.jpg" alt="" /> */}
      {}
      <SplitText
        text="Samurai Knives"
        className="text-2xl font-semibold text-center"
        delay={150}
        animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
        animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
        easing="easeOutCubic"
        threshold={0.2}
        rootMargin="-50px"
        onLetterAnimationComplete={handleAnimationComplete}
      />

      <div className="content">
        <h1 className="image-text">cooking precision creativity</h1>
      </div>
      <Images></Images>
      <MainText></MainText>
      <div className="textContainer">
        <h2 className="peregraf">
          We founded Samurai with the understanding that a knife is not just
          meant for the kitchen—it represents the freedom to create wherever you
          desire. At Samurai, we take pride in offering a selection of unique
          knives, just like the hands that hold them. Each blade is meticulously
          handcrafted using ancient techniques that have been passed down from
          generation to generation. Order now and experience the freedom and
          uniqueness you seek.
        </h2>
      </div>
      <div className="products-grid">
        <Product
          image="https://static.wixstatic.com/media/81ceb2_2a9bca58d4044c87aaf8120ec637ad6f~mv2.jpg/v1/fill/w_433,h_350,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/81ceb2_2a9bca58d4044c87aaf8120ec637ad6f~mv2.jpg"
          title="The Butcher"
          description="The Butcher Knife,
which has taken TikTok by storm, is a true handmade work of art that embodies the magic of traditional craftsmanship along with uncompromising power.
This knife features a blade 180mm in length and 112mm in width, allowing it to handle a wide variety of kitchen tasks with impressive ease.
It weighs 440 grams, giving it a sense of stability and strength in the hand—especially when cutting larger or tougher ingredients.
"
        />
        <Product
          image="https://static.wixstatic.com/media/81ceb2_0c26c98e2a404998a687eb62a180f0ea~mv2.jpg/v1/fill/w_407,h_332,al_c,q_85,usm_0.66_1.00_0.01/81ceb2_0c26c98e2a404998a687eb62a180f0ea~mv2.webp"
          title="The Chef's Master"
          description="The Nature model knife represents the pinnacle of traditional craftsmanship fused with modern design, giving it a striking appearance and unprecedented performance. Its blade measures 200 mm in length and 2.5 mm in thickness, enabling precise and powerful cutting. The knife has an overall length of 305 mm, with a 105 mm handle that provides a perfect, comfortable, and secure grip. nxabcka kc an sckaksckskc aljnalsclkamslcmla
        "
        />
        <Product
          image="https://static.wixstatic.com/media/81ceb2_d2d4eebd2a764eba8fa3f9360ee683c6~mv2.jpg/v1/fill/w_433,h_350,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/81ceb2_d2d4eebd2a764eba8fa3f9360ee683c6~mv2.jpg"
          title="Precision Cutter"
          description="The Wild model knife, which has become a phenomenon online, is a handmade work of art that combines the magic of traditional craftsmanship with uncompromising power. This knife features a 30 cm long and 9.8 cm wide blade, allowing it to handle a wide variety of kitchen tasks impressively—especially when dealing with large or hard-to-cut ingredients. Its weight provides a sense of stability and control, making the use of the knife precise and comfortable.

"
        />
      </div>
      <h2 className="peregraf1">
        A good knife in the wild is more than just a tool its your cooking
        partner, your precision on a tree stump, your quiet moment by the fire.
        We craft handmade knives from materials the earth understands real wood,
        sharp steel, and a soul of craftsmanship. For those who cook under open
        skies you’ve found your place.
      </h2>
      <video autoPlay muted loop playsInline className="video-home">
        <source src="/Video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <video autoPlay muted loop playsInline className="video-home">
        <source src="/Video2.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default App;
