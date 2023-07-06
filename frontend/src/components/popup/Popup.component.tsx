import classNames from "classnames";

import { PortalComponent as Portal } from "../portal/Portal.component";

import { PopupProps } from "./Popup.types";

import "./Popup.css";

export const PopupComponent: React.FC<PopupProps> = ({
  isOpen,
  onClose,
  children,
}) => {
  return (
    <Portal>
      <div className={classNames("popup", { ["active"]: isOpen })}>
        <div className="container">
          <button className="close" onClick={onClose}></button>
          {children}
        </div>
      </div>
    </Portal>
  );
};
