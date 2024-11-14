import FindUs from "../FindUs";
import Qzone from "../Qzone";
import SocalLogin from "../SocalLogin";


const RightNavbar = () => {
  return (
    <div className="space-y-5">
      <SocalLogin></SocalLogin>
      <FindUs></FindUs>
      <Qzone></Qzone>
    </div>
  );
};

export default RightNavbar;