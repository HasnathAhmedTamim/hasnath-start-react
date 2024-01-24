import { useState } from "react";
import "./App.css";
// bG changer
function App() {
  const [color, setColor] = useState('black');

  return (
    <>
      <div
        className="w-full h-screen duration-200"
        style={{ background: color }}
      >
        <div className="fixed flex gap-2 flex-wrap justify-center top-4 inset-x-0 px-2">
          <div className="flex gap-2 justify-center flex-wrap bg-white shadow-lg rounded-lg p-4">
            <button
              onClick={() => setColor("red")}
              className="font-medium outline-none px-4 py-1 rounded-lg text-white shadow-lg"
              style={{ backgroundColor: "red" }}
            >
              Red
            </button>
            <button
              onClick={() => setColor("green")}
              className="font-medium outline-none px-4 py-1 rounded-lg text-white shadow-lg"
              style={{ backgroundColor: "green" }}
            >
              Green
            </button>
            <button
              onClick={() => setColor("blue")}
              className="font-medium outline-none px-4 py-1 rounded-lg text-white shadow-lg"
              style={{ backgroundColor: "blue" }}
            >
              Blue
            </button>
            <button
              onClick={() => setColor("violet")}
              className="font-medium outline-none px-4 py-1 rounded-lg text-white shadow-lg"
              style={{ backgroundColor: "violet" }}
            >
              Violet
            </button>
          </div>
          <div className="flex gap-2 justify-center flex-wrap bg-white shadow-lg rounded-lg p-4">
            <button
              onClick={() => setColor("yellow")}
              className="font-medium outline-none px-4 py-1 rounded-lg text-black shadow-lg"
              style={{ backgroundColor: "yellow" }}
            >
              Yellow
            </button>
            <button
              onClick={() => setColor("lavender")}
              className="font-medium outline-none px-4 py-1 rounded-lg text-black shadow-lg"
              style={{ backgroundColor: "lavender" }}
            >
              Lavender
            </button>
            <button
              onClick={() => setColor("purple")}
              className="font-medium outline-none px-4 py-1 rounded-lg text-white shadow-lg"
              style={{ backgroundColor: "purple" }}
            >
              Purple
            </button>
            <button
              onClick={() => setColor("olive")}
              className="font-medium outline-none px-4 py-1 rounded-lg text-white shadow-lg"
              style={{ backgroundColor: "olive" }}
            >
              Olive
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
