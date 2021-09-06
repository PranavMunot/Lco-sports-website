import React, { useState } from "react";

function FaqQuestion(props) {
  const [isOpen, setIsOpen] = useState(false);

  const openCloseHandler = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="faq-card">
      <div className="faq-card-question">
        <p className="para">Q. {props.question}?</p>
        <span
          onClick={openCloseHandler}
          className={`faq-card-question-icon-${isOpen ? "up" : "down"}`}
        >
          &darr;
        </span>
      </div>
      <div className="faq-card-answer">
        {isOpen ? <p className="para">A. {props.answer}</p> : null}
      </div>
    </div>
  );
}

export default FaqQuestion;
