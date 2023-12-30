import React from "react";
import "./Button.css";
export default function Button({ onClick = "none", title }) {
  return (
    <button class="btn" type="button" onClick={onClick}>
      <a>{title}</a>
      <div id="container-stars">
        <div id="stars"></div>
      </div>

      <div id="glow">
        <div class="circle"></div>
        <div class="circle"></div>
      </div>
    </button>
  );
}
