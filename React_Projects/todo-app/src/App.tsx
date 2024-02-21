import "./App.css";

function App() {
  return (
    <div className="container">
      <p>TODO LIST</p>
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
          <div className="todo-item">
            <div className="todo-details">
              <div className="svg-box"></div>
              <div className="texts"></div>
            </div>
            <div className="todo-actions">
              <div className="todo-action-icon"></div>
              <div className="todo-action-icon"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
