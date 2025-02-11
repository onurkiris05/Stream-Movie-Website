import React from "react";
import "./main.css";
import Schedule from "./Schedule";
import ComingSoon from "./ComingSoon";
import Blog from "./Blog";

function Main() {
  return (
    <main>
      <Schedule />
      <ComingSoon />
      <Blog />
    </main>
  );
}

export default Main;
