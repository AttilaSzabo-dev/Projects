import { CSSProperties, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import TodoItem from "./components/TodoItem";
import ClipLoader from "react-spinners/ClipLoader";

import "./App.css";

const container = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

interface TodoItemsType {
  checked: boolean;
  date: number;
  time: string;
  title: string;
}

function App() {
  const [todoItems, setTodoItems] = useState<TodoItemsType[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const loaderColor = "#9195F6";
  const override: CSSProperties = {
    display: "block",
    margin: "0 auto",
  };

  useEffect(() => {
    setIsLoading(true);
    fetch("https://todo-project-c4a9c-default-rtdb.firebaseio.com/test.json")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (typeof data === "object" && data !== null) {
          const todoArray = Object.keys(data).map((key) => ({
            ...data[key],
            id: key,
          }));
          setTodoItems(todoArray);
          //addNewTodo();
          setIsLoading(false);
        } else {
          console.error("Data fetched is not an object:", data);
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  /* async function addNewTodo() {
    const response = await fetch("https://todo-project-c4a9c-default-rtdb.firebaseio.com/test.json", {
      method: "POST",
      body: JSON.stringify(),
      headers: {
        "Content-Type": "application/json"
      }
    });

    const data = await response.json();
    console.log(data);
  } */
  return (
    <div className="container">
      <p className="title">TODO LIST</p>
      <div className="app-wrapper">
        <div className="app-header">
          <button>Add Task</button>
          <select name="status" id="status">
            <option value="all">All</option>
            <option value="incomplete">Incomplete</option>
            <option value="complete">Complete</option>
          </select>
        </div>
        <motion.div
          className="app-content-wrapper"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          <ClipLoader
            color={loaderColor}
            loading={isLoading}
            cssOverride={override}
            size={50}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
          <AnimatePresence>
            {!isLoading &&
              todoItems &&
              todoItems.map((item, index) => (
                <TodoItem
                  key={index}
                  isChecked={item.checked}
                  date={item.date}
                  time={item.time}
                  title={item.title}
                />
              ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}

export default App;
