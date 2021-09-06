import React from "react";
import FaqQuestion from "./FaqQuestion";

function Faq() {
  return (
    <section className="section-faq">
      <h1 className="heading">Faq</h1>
      <div className="row row-col">
        <FaqQuestion
          question={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"
          }
          answer={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Neque ornare aenean euismod elementum nisi quis eleifend quam adipiscing. Vitae justo eget magna fermentum iaculis eu. Odio ut enim blandit volutpat maecenas volutpat. Eget aliquet nibh praesent tristique magna sit amet purus gravida. Ac turpis egestas maecenas pharetra convallis posuere morbi."
          }
        />
        <FaqQuestion
          question={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"
          }
          answer={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Neque ornare aenean euismod elementum nisi quis eleifend quam adipiscing. Vitae justo eget magna fermentum iaculis eu. Odio ut enim blandit volutpat maecenas volutpat. Eget aliquet nibh praesent tristique magna sit amet purus gravida. Ac turpis egestas maecenas pharetra convallis posuere morbi."
          }
        />
        <FaqQuestion
          question={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"
          }
          answer={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Neque ornare aenean euismod elementum nisi quis eleifend quam adipiscing. Vitae justo eget magna fermentum iaculis eu. Odio ut enim blandit volutpat maecenas volutpat. Eget aliquet nibh praesent tristique magna sit amet purus gravida. Ac turpis egestas maecenas pharetra convallis posuere morbi."
          }
        />
        <FaqQuestion
          question={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"
          }
          answer={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Neque ornare aenean euismod elementum nisi quis eleifend quam adipiscing. Vitae justo eget magna fermentum iaculis eu. Odio ut enim blandit volutpat maecenas volutpat. Eget aliquet nibh praesent tristique magna sit amet purus gravida. Ac turpis egestas maecenas pharetra convallis posuere morbi."
          }
        />
      </div>
    </section>
  );
}

export default Faq;
