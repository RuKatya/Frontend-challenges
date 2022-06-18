import React from "react";
import { useState } from "react";

const Rating = ({ setSubmit, chooseNumber, setChooseNumber }) => {
  const [chooseElement, setChooseElement] = useState(null);
  const numbersRating = [1, 2, 3, 4, 5];

  function hendleChose(e) {
    const element = e.target;
    setChooseElement(element);

    if (chooseNumber === null) {
      setChooseNumber(e.target.value);
      element.classList.add("active");
    } else if (chooseNumber !== e.target.value) {
      element.classList.add("active");
      chooseElement.classList.remove("active");
      setChooseNumber(e.target.value);
    } else if (chooseNumber === e.target.value) {
      element.classList.add("active");
      setChooseElement(element);
      setChooseNumber(e.target.value);
    }
  }

  function hendleSubmit(e) {
    e.preventDefault();
    if (typeof chooseNumber == "string") {
      setSubmit(true);
    }
  }

  return (
    <form
      onSubmit={hendleSubmit}
      className="intective-rating__component--rating"
    >
      {numbersRating.map((num, index) => {
        return (
          <input type="button" value={num} key={index} onClick={hendleChose} />
        );
      })}
      <button type="submit">SUBMIT</button>
    </form>
  );
};

export default Rating;
