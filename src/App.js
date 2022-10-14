import KeyboardEvents from "./components/KeyboardEvents";

import Mousevents from "./components/Mousevents";

function App() {
  return (
    <div className="d-flex p-4">
      <KeyboardEvents />
      <Mousevents />
    </div>
  );
}

export default App;
