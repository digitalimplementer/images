import { Route, Routes } from "react-router-dom";

import Images from "../pages/images/Images";
import Intro from "../pages/intro/Intro";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Intro />} />
      <Route path="images" element={<Images />} />
    </Routes>
  );
};

export default Routing;
