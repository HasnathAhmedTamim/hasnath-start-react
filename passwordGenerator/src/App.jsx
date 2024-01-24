import { useState, useCallback, useEffect, useRef } from "react";
import "./App.css";
import Swal from "sweetalert2";
function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  // optimize
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*-_+=[]{}~`";

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);

  // run-goal
  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);

  // useRef
  const passwordRef = useRef(null);

  // copyPasswordToClipBoard
  const copyPasswordToClipBoard = useCallback(() => {
    passwordRef.current?.select();

    Swal.fire(
      {
        position: "top-end",
        showConfirmButton: false,
        timer: 500,
        icon: "success",
        title: "Your password has been copied to the clipboard",
      },
      password
    );

    // Swal.fire({
    //   position: "top-end",
    //   icon: "success",
    //   title: "Your work has been saved",
    //   showConfirmButton: false,
    //   timer: 1500,
    // });
    // passwordRef.current?.setSelectionRange(0, 10);
    window.navigator.clipboard.writeText(password);
  }, [password]);
  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-600 bg-gray-600">
        <h1 className="text-white text-center my-3 ">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full px-3 py-1"
            placeholder="password"
            readOnly
            ref={passwordRef}
          />
          <button
            onClick={copyPasswordToClipBoard}
            className="outline-none hover:bg-orange-400 bg-blue-700 text-white font-semibold px-3 py-0.5 shrink-0"
          >
            Copy
          </button>
        </div>
        <div className="flex tex-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              className="cursor-pointer"
              min={6}
              max={100}
              value={length}
              type="range"
              name=""
              id=""
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />{" "}
            <label>Length: {length} </label>
          </div>
          <div>
            <input
              defaultChecked={numberAllowed}
              type="checkbox"
              name=""
              id="numberInput"
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
            />{" "}
            <labe htmlFor="numberInput">Numbers</labe>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              defaultChecked={charAllowed}
              type="checkbox"
              name=""
              id="characterInput"
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }}
            />{" "}
            <label htmlFor="characterInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
