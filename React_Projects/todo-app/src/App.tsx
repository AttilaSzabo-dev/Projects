import { useEffect, useState } from "react";
import TodoItem from "./components/TodoItem";

import "./App.css";

interface TodoItemsType {
  checked: boolean;
  date: number;
  time: string;
  title: string;
}

function App() {
  const [todoItems, setTodoItems] = useState<TodoItemsType[]>([]);
  useEffect(() => {
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
        } else {
          console.error("Data fetched is not an object:", data);
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
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
        <div className="app-content-wrapper">
          {todoItems &&
            todoItems.map((item, index) => (
              <TodoItem
                key={index}
                isChecked={item.checked}
                date={item.date}
                time={item.time}
                title={item.title}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export default App;
