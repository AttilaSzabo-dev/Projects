import { useState } from "react";
import { MdDelete, MdEdit } from "react-icons/md";
import { motion } from "framer-motion";
import CheckButton from "../UI/CheckButton";
import classes from "./TodoItem.module.css";

const child = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

interface TodoItemProps {
  isChecked: boolean;
  date: number;
  time: string;
  title: string;
}

function TodoItem(props: TodoItemProps) {
  const { isChecked, date, time, title } = props;
  const [checked, setChecked] = useState(isChecked);
  const fullDateTime = `${date}, ${time}`;

  const handleCheck = () => {
    setChecked(!checked);
  };

  return (
    <motion.div className={classes["todo-item"]} variants={child}>
      <div className={classes["todo-details"]}>
        <CheckButton checked={checked} handleCheck={handleCheck} />
        <div className={classes.texts}>
          <p
            className={`${classes["todo-text"]}} ${
              checked ? classes.completed : ""
            }`}
          >
            {title}
          </p>
          <p className={classes["todo-time"]}>{fullDateTime}</p>
        </div>
      </div>
      <div className={classes["todo-actions"]}>
        <div className={classes["todo-action-icon"]}>
          <MdDelete />
        </div>
        <div className={classes["todo-action-icon"]}>
          <MdEdit />
        </div>
      </div>
    </motion.div>
  );
}

export default TodoItem;
