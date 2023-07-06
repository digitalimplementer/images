import classNames from "classnames";

import { ButtonProps } from "./Button.types";

import "./Button.css";

export const ButtonComponent: React.FC<ButtonProps> = ({
  text,
  onClick,
  classname,
}) => {
  return (
    <button
      onClick={onClick}
      type={"button"}
      className={classNames("button", classname)}
    >
      {text && <span>{text}</span>}
    </button>
  );
};
