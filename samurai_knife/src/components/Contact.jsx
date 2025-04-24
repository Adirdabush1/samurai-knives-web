import React from "react";
import "./Conect.css";
function Contact() {
  return (
    <div>
      <section id="contact">
        <h2> Contact Us</h2>

        <form action="https://formspree.io/f/xpwpwpwz" method="POST">
          <label>
            <span>Email:</span>
            <input
              type="email"
              name="email"
              placeholder="please enter email"
              required
            ></input>
          </label>

          <label>
            <span>Phone</span>
            <input type="tel" name="phone" required></input>
          </label>

          <label>
            <span>Massage</span>
            <textarea
              name="message"
              placeholder="please write a massage"
              required
            ></textarea>
          </label>

          <button type="submit">Sand</button>
        </form>
      </section>

      <footer></footer>
    </div>
  );
}

export default Contact;
