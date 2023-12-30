import React from "react";
import "./Button.css";
export default function Button() {
  return (
    <button class="btn" type="button">
      <strong>Contact me</strong>
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
