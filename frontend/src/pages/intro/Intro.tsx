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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident,
          eum est! Impedit quod, culpa, non vero asperiores, nesciunt dolor
          soluta quidem consequuntur quis quibusdam. Quas nam eaque velit nisi?
          Voluptates?
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
