import { FaRegUser } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <div className="flex flex-row items-center justify-around py-8">
      <div></div>
      <div className="flex flex-row items-center gap-5">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/career">Career</NavLink>
      </div>
      <div className="flex flex-row items-center gap-2">
        <FaRegUser />{" "}
        <Link
          to="/authenticate/signin"
          className="py-1 px-7 bg-slate-500 font-bold hover:drop-shadow-xl hover:rounded-xl"
        >
          Log In
        </Link>
      </div>
    </div>
  );
}
