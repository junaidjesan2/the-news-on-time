import { Outlet } from "react-router-dom";
import Header from "../components/shared/Header";

export default function HomeLayout() {
  return (
    <div>
        <div>
            <Header></Header>
        </div>
        <div>
            <Outlet></Outlet>
        </div>
    </div>
  )
}
