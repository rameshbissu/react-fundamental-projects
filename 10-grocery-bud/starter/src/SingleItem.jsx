import React from "react";

const SingleItem = ({ id, name, completed, removeItem }) => {
  return (
    <article className="single-item">
      <input type="checkbox" onChange={(completed = !completed)} />
      <p style={{ textDecoration: completed ? "line-through" : "none" }}>
        {name}
      </p>
      <button type="button" className="btn" onClick={removeItem(id)}>
        delete
      </button>
    </article>
  );
};

export default SingleItem;
