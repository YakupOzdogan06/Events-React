import { useState } from "react";

const Mousevents = () => {
  const [showHint, setShowHint] = useState(false);
  const [toggle, setToggle] = useState(false);

  const [coordX, setCoordX] = useState();
  const [coordY, setCoordY] = useState();

  const handleDoubleClick = (e) => {
    setToggle(!toggle);
    toggle
      ? (e.target.className = "bg-success text-light w-50 p-4 mt-4")
      : (e.target.className = "bg-danger text-light w-50 p-4 mt-4");
  };

  const handleMouseMove = (e) => {
    // setCoordX(e.pageX);
    // setCoordY(e.pageY);

    setCoordX(e.nativeEvent.offsetX);
    setCoordY(e.nativeEvent.offsetY);
  };

  return (
    <div className="container text-center d-flex flex-column align-items-center mt-5">
      <h2 className="text-danger">MOUSE EVENTS!</h2>
      <div
        id="todo-1"
        className="bg-success text-light w-50 p-2 m-5"
        onMouseEnter={() => setShowHint(true)}
        onMouseOut={() => setShowHint(false)}
      >
        ELEMENT 1
      </div>
      {showHint && <h1>Hello React</h1>}
      <div
        id="todo-2"
        className="bg-success text-light w-50 p-2 mt-4"
        onDoubleClick={handleDoubleClick}
      >
        ELEMENT 2
      </div>
      <div
        id="todo-3"
        className="bg-success text-light w-50 p-2 m-5"
        onMouseMove={handleMouseMove}
      >
        ELEMENT 3
      </div>

      <h5>
        {coordX} {coordY}
      </h5>
    </div>
  );
};

export default Mousevents;
