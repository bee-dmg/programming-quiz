import React, { useRef } from "react";

export const QuizLevel3 = ({
  // Here is the list of functions that you should use
  sendName,
  sendPhone,
  sendCookingDone,
  sendProgrammingDone,
  sendWashingDone,
  sendStylingDone
}) => {
  // Create other refs here
  const nameRef = useRef();
  const cookingRef = useRef();
  const phoneRef = useRef();
  const washRef = useRef();
  const styleRef = useRef();
  const programRef = useRef();
  // Add some code inside this function for sending data from the form to the document
  const applyFormData = (e) => {
    e.preventDefault();
    sendName(nameRef.current.value);
    sendCookingDone(cookingRef.current.checked);
    sendPhone(`+375${phoneRef.current.value}`);
    sendWashingDone(washRef.current.checked);
    sendStylingDone(styleRef.current.checked);
    sendProgrammingDone(programRef.current.checked);
  };

  return (
    <form className="document-input" onSubmit={(e) => applyFormData(e)}>
      <label htmlFor="name-input">Name:</label>
      {/* Hang refs on all other inputs like this */}
      <input id="name-input" placeholder="Teddy Brown" ref={nameRef} />

      <label htmlFor="phone-input">Phone:</label>
      <input id="phone-input" placeholder="44 123 45 67" ref={phoneRef} />

      <label htmlFor="activities-input">Done:</label>

      <div id="activities-input">
        <input type="checkbox" id="cooking" ref={cookingRef} />
        <label htmlFor="cooking">Cooked 3 burgers</label>
        <br />

        <input type="checkbox" id="washing" ref={washRef} />
        <label htmlFor="washing">Washed a car</label>
        <br />

        <input type="checkbox" id="styling" ref={styleRef} />
        <label htmlFor="styling">Styled a room</label>
        <br />

        <input type="checkbox" id="programming" ref={programRef} />
        <label htmlFor="programming">Programmed a form</label>
        <br />
      </div>

      <input type="submit" value="Apply" id="apply-button" />
    </form>
  );
};
