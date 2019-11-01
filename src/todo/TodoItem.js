import React from "react";
import propTypes from "prop-types";

function TodoItem({ todo, index }) {
  return (
    <li>
      <span>
        <input type="checkbox" />
        <strong>{index + 1}</strong>
        {todo.title}
      </span>
      <button>&times;</button>
    </li>
  );
}

TodoItem.propTypes = {
  todo: propTypes.object.isRequired,
  index: propTypes.number
};
export default TodoItem;
