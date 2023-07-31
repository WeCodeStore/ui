import style from "./style.module.css";
import css from "classnames";
import React from "react";
import { useState } from "react";

export default function Alert({ children, type, message }) {
    const [isShow, setIsShow] = useState(true);
    console.log("style type is " + type)
    console.log(style.alert)

    const renderAlert = function () {
      return React.cloneElement(children);
    };

    const handleClose = (e) => {
        e.preventDefault();
        setIsShow(false);
      };
  
  return (
     <div className={css(style.alert, style[type], !isShow && style.hide)}>
      <span className={style.closebtn} onClick={handleClose}>
        &times;
      </span>
      {children ? renderAlert() : message}
    </div>
    );
  }