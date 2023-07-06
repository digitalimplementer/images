import { UploadInputProps } from "./UploadInput.types";

import "./UploadInput.css";

export const UploadInputComponent: React.FC<UploadInputProps> = ({
  type,
  handleChange,
}) => {
  return (
    <div className="uploadInput">
      <input
        type={type}
        accept="image/png, image/gif, image/jpeg"
        onChange={handleChange}
      />
    </div>
  );
};
