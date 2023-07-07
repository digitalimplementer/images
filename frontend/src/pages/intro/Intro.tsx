import { useNavigate } from "react-router-dom";

import { ButtonComponent } from "../../components/button/Button.component";

import "./Intro.css";

const Intro = () => {
  let navigate = useNavigate();
  return (
    <div className="intro">
      <div className="content">
        <h1>Images</h1>
        <p>
          Here you can create a gallery of your photos. First, you need to
          upload them, add a description if you wish, and you can also delete
          them. clicking on a photo, you will be able to view the photo in full
          size and switch between them using the prev and next buttons
        </p>
        <ButtonComponent
          text={"Next"}
          onClick={() => navigate("/images")}
          classname={"intro-button"}
        />
      </div>
    </div>
  );
};

export default Intro;
