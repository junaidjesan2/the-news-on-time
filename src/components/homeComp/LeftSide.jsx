import { useContext } from "react";
import { DataProvider } from "../../context/DataContext";

function LeftSide() {
  const {categories} = useContext(DataProvider);

  return (
    <div>
      <div className="">
        {categories?.map((data) => (
          <div key={data.id}>
            <h1 className="text-xl font-semibold py-2 px-4 ml-8 text-zinc-500 hover:bg-zinc-400 rounded-lg hover:text-black ">{data.name}</h1>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LeftSide;
