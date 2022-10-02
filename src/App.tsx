import { useState } from "react";

function App() {
  const [number, setNumber] = useState(0);

  const onCountUpClick = () => {
    setNumber((curentNumber) => {
      return (curentNumber += 1);
    });
  };

  return (
    <div className="App">
      <div className="nav border-b">
        <div className="container px-4 max-w-screen-md mx-auto flex justify-between items-center">
          <div className="logo my-4 w-12 text-lg font-semibold">logo</div>
          <div className="menu flex items-center space-x-2">
            <div className="item hover:bg-yellow-500">item 1</div>
            <div className="item">item 2</div>
            <div className="item">item 3</div>
            <div className="item">item 4</div>
          </div>
        </div>
      </div>
      {number}
      <br />
      <button
        onClick={onCountUpClick}
        className="p-4 border border-blue-500 rounded-full bg-blue-300 text-white ml-4 hover:bg-yellow-500"
      >
        Count up
      </button>
    </div>
  );
}

export default App;
