import classNames from "classnames";

import { CardProps } from "./Card.types";

import "./Card.css";

export const CardComponent: React.FC<CardProps> = ({
  id,
  description,
  imgSrc,
  removeImage,
  onClick,
  classname,
}) => {
  return (
    <div className={classNames("card", classname)}>
      <button
        title="Remove image card"
        className="remove"
        onClick={() => {
          removeImage(id);
        }}
      >
        X
      </button>
      <div className="cardImage" onClick={onClick}>
        <img src={imgSrc} alt={imgSrc} />
        <div className="text">{description && <p>{description}</p>}</div>
      </div>
    </div>
  );
};
