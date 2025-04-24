import React from "react";
import "./ThreeImageScroll.css";

export default function ThreeImageScroll() {
  const text = "Scroll • Scroll • ";

  return (
    <>
      <main>
        {[1, 2, 3].map((num) => (
          <section key={num}>
            <img src="/knife1.jpg" />
          </section>
        ))}
      </main>

      <div className="ring-wrapper">
        <div className="ring">
          {text.split("").map((char, index) => (
            <span
              className="char"
              key={index}
              style={{ "--char-index": index }}
            >
              {char}
            </span>
          ))}
          <span className="sr-only">{text}</span>
        </div>
      </div>
    </>
  );
}
