import React from "react";
import "./MenuBar.css";
import { MenuBarProps } from "../../types/types";

export const MenuBar: React.FC<MenuBarProps> = ({
  title,
  onArrowButtonClick,
}) => {
  return (
    <div className="menu-bar">
      <button className="button-arrow" onClick={onArrowButtonClick}>
        <img src="/arrow.svg" alt="Return" className="arrow" />
      </button>
      <h2 className="title">{title}</h2>
      <img src="/bell.svg" alt="Notifications" className="notifications" />
    </div>
  );
};
