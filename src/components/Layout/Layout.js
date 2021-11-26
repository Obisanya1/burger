import React from "react";
import Auxi from "../../hoc/Auxi";
import Great from "./Layout.module.css";

const layout = (props) => (
  <Auxi>
    <div>Toolbar, Sidedrawer, Backdrop</div>
    <main className={Great.content}>{props.children}</main>
  </Auxi>
);

export default layout;
