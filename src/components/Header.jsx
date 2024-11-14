import moment from "moment";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <div className="flex flex-col items-center py-3">
      <div className="log">
        <img src={logo} alt="" />
      </div>
      <h1 className="text-gray-400 ">Journalism without Fear and Favour</h1>
      <p>{moment().format("dddd, MMMM Do YYYY, h:mm:ss a")}</p>
    </div>
  );
};

export default Header;