import LeftSide from "../components/homeComp/LeftSide";
import Middle from "../components/homeComp/Middle";
import RightSide from "../components/homeComp/RightSide";

export default function Home() {
  return (
    <div className="flex flex-row justify-between mx-auto">
      <div className="w-1/4">
        <LeftSide></LeftSide>
      </div>
      <div className="w-2/4">
        <Middle></Middle>
      </div>
      <div className="w-1/4 bg-slate-400">
        <RightSide></RightSide>
      </div>
    </div>
  );
}
