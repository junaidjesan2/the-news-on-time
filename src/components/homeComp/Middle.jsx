import { useContext } from "react";
import { FaEye, FaRegSave, FaStar } from "react-icons/fa";

import { DataProvider } from "../../context/DataContext";
import { FaRegShareFromSquare } from "react-icons/fa6";

function Middle() {
  const { news } = useContext(DataProvider);
  console.log(news);

  const stars = [
    { name: <FaStar /> },
    { name: <FaStar /> },
    { name: <FaStar /> },
    { name: <FaStar /> },
    { name: <FaStar /> },
  ];
  return (
    <div>
      <div>
        {news?.map((Snews) => (
          <div key={Snews._id} className="mx-5 shadow-md mb-4">
            <div className="flex flex-row justify-between items-center py-3 px-4 rounded-t-lg bg-zinc-300">
              <div className="flex flex-row items-center">
                <img
                  src={Snews.author.img}
                  className="h-10 w-10 rounded-full"
                  alt=""
                />
                <div>
                  <h1 className="font-semibold">{Snews.author.name}</h1>
                  <h1>{Snews.author.published_date}</h1>
                </div>
              </div>
              <div className="flex flex-row items-center gap-3">
                <FaRegSave className="h-5 w-5" />
                <FaRegShareFromSquare className="h-5 w-5" />
              </div>
            </div>
            <div className="px-4">
              <h1 className="w-10/12 text-2xl font-semibold py-4">
                {Snews.title}
              </h1>
              <img
                src={Snews.thumbnail_url}
                className="w-full bg-cover mb-4"
                alt=""
              />
              <p className="text-justify">{Snews.details} Read More...</p>
              <div className="flex flex-row items-center justify-between border-t-2 py-3 mt-3 rounded-b-lg">
                <div className="flex flex-row gap-2 items-center">
                  <h1 className="flex flex-row gap-2">
                    {stars.map((star) => (
                      <h1 className="text-orange-500">{star.name}</h1>
                    ))}
                  </h1>
                  <h1>{Snews.rating.number}</h1>
                </div>
                <div className="flex flex-row items-center gap-3">
                  <FaEye />
                  <h1>{Snews.total_view}</h1>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Middle;
