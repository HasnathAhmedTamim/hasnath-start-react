import { useEffect, useState } from "react";
import "./App.css";
import { TodoProvider } from "./contexts";
import { ThemeProvider } from "./contexts/theme";
import ThemeBtn from "./components/ThemeBtn/ThemeBtn";
import { TodoForm, TodoItem } from "./components";

function App() {
  const [themeMode, setThemeMode] = useState("light");
  const [todos, setTodos] = useState([]);

  const lightTheme = () => {
    setThemeMode("light");
  };

  const darkTheme = () => {
    setThemeMode("dark");
  };

  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));

    if (todos && todos.length > 0) {
      setTodos(todos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (todo) => {
    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev]);
  };

  const updatedTodo = (id, todo) => {
    setTodos((prev) =>
      prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo))
    );
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const toggleComplete = (id) => {
    setTodos((prev) =>
      prev.map((prevTodo) =>
        prevTodo.id === id
          ? { ...prevTodo, selected: !prevTodo.selected }
          : prevTodo
      )
    );
  };
  return (
    <ThemeProvider value={{ themeMode, darkTheme, lightTheme }}>
      <TodoProvider
        value={{ todos, addTodo, updatedTodo, deleteTodo, toggleComplete }}
      >
        <div className="min-h-screen py-8 w-full  border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <div className="mt-14 w-full max-w-2xl mx-auto shadow-lg shadow-blue-200 rounded-lg px-4 py-3 text-white">
            <div className="flex gap-3 justify-between items-center ">
              <h1 className="text-2xl font-bold text-center mb-8 mt-2 tracking-tight text-gray-900 dark:text-white">
                Make Your Todos <br />
              </h1>
              <ThemeBtn></ThemeBtn>
            </div>
            <div className="mb-4 text-xl font-semibold tracking-tight  text-gray-900 dark:text-white">
              <TodoForm></TodoForm>
            </div>
            <div className="flex flex-wrap gap-y-3 text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
              {todos.map((todo) => (
                <div key={todo.id} className="w-full">
                  <TodoItem todo={todo}></TodoItem>
                </div>
              ))}
            </div>
          </div>
          <div>
            <footer className=" text-center text-xs mt-12 tracking-tight  text-gray-900 dark:text-white">
              <p>
                &copy;<span> 2024-Hasnath</span>
              </p>
            </footer>
          </div>
        </div>
      </TodoProvider>
    </ThemeProvider>
  );
}

export default App;
