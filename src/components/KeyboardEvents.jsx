import { useState } from "react";

const KeyboardEvents = () => {
  const [inputValue, setInputValue] = useState("");

  const handleKeyDown = (e) => {
    console.log(e.keyCode);
    if (e.keyCode >= 48 && e.keyCode <= 57) {
      alert("Please do not enter a number");
      e.preventDefault();
    }
    e.keyCode === 13 && setInputValue("");
  };

  const handlePasteArea = (e) => {
    e.target.style.border = "2px solid red";
    e.target.value += e.clipboardData.getData("text");
    e.preventDefault();
  };
  return (
    <div className="container text-center">
      <h1 className="mt-4 m-5 display-5">Keyboard Events</h1>
      <input
        type="text"
        className="form-control "
        onChange={(e) => {
          e.target.value = e.target.value.toLocaleUpperCase();
          setInputValue(e.target.value);
        }}
        value={inputValue}
        onKeyDown={handleKeyDown}
      />
      <p
        className=" mt-4"
        onCopy={(e) => {
          e.preventDefault();
          alert("you can not copy this doc");
        }}
      >
        {inputValue}
      </p>
      <textarea
        name="area"
        id="area"
        className="form-control "
        rows="10"
        onPaste={handlePasteArea}
      ></textarea>
    </div>
  );
};

export default KeyboardEvents;
