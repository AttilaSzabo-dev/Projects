interface TodoItemProps {
  isChecked: boolean;
  date: number;
  time: string;
  title: string;
}

function TodoItem(props: TodoItemProps) {
  const { isChecked, date, time, title } = props;
  return (
    <div className="todo-item">
      <div className="todo-details">
        <div className="svg-box"></div>
        <div className="texts">
          <p className="todo-text">{title}</p>
          <p className="todo-time">
            {date}, {time}
          </p>
        </div>
      </div>
      <div className="todo-actions">
        <div className="todo-action-icon"></div>
        <div className="todo-action-icon"></div>
      </div>
    </div>
  );
}

export default TodoItem;
