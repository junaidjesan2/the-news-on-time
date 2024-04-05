import { Outlet } from "react-router-dom";
import Marquee from "react-fast-marquee";

import Header from "../components/shared/Header";
import logo from "../assets/logo.png";

export default function HomeLayout() {
  return (
    <div>
      <div>
        <img src={logo} alt="" className="mx-auto mt-12" />
        <p className="text-slate-400 mx-auto w-fit mt-3">
          Journalism Without Fear or Favour
        </p>
        <div className="w-5/6 mx-auto bg-[#F3F3F3] py-5 rounded-md text-black">
          <Marquee>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem, sed?
            </p>
          </Marquee>
        </div>
      </div>
      <div>
        <Header></Header>
      </div>
      <div>
        <Outlet></Outlet>
      </div>
    </div>
  );
}
