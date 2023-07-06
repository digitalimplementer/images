import { WrapperProps } from "./Wrapper.types";

import "./Wrapper.css";

export const WrapperComponent: React.FC<WrapperProps> = ({
  title,
  children,
}) => {
  return (
    <div className="wrapper">
      <fieldset className="fieldset">
        <legend>{title}</legend>

        {children && children}
      </fieldset>
    </div>
  );
};
