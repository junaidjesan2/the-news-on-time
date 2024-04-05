import Header from "../components/shared/Header";
import { Outlet } from "react-router-dom";

function AuthenticateLayout() {
  return (
    <div>
      <div>
        <Header></Header>
      </div>
      <div>
        <Outlet></Outlet>
      </div>
    </div>
  );
}

export default AuthenticateLayout;
