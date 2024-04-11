import React from "react";

function Article({ title, text }) {
  return (
    <div>
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  );
}

export default Article;
