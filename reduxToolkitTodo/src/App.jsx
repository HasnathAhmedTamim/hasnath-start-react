import "./App.css";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";

function App() {
  return (
    <>
      <h1 className=" font-medium text-slate-700">ReduxToolkit + React</h1>
      <AddTodo></AddTodo>
      <Todos></Todos>
    </>
  );
}

export default App;
