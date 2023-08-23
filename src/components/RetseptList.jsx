import { NavLink } from "react-router-dom";
function RetseptList({ baza }) {
  return (
    <div className="flex mx-10 mb-2 justify-between">
      {baza &&
        baza.map((recept) => {
          return (
            <div
              className="max-w-xs my-3 mx-1 rounded flex flex-grow flex-col shadow-lg"
              key={recept.id}
            >
              <img
                className="w-full h-1/2"
                src={recept.img}
                alt="Sunset in the mountains"
              />
              <div className="px-6 py-4 flex-grow">
                <div className="font-bold text-2xl text-center">
                  <h1>{recept.title}</h1>
                </div>
                <p className="text-2xl">
                  <p>Ingredients:</p>
                  {recept.ingredients.join(",")}
                </p>
                <p className="text-gray-700 truncate text-ellipsis text-2xl">
                  Tayyorlanishi: {recept.method}
                </p>
              </div>
              <div className="text-2xl mb-3 text-center text-orange-800 font-bold">
                <NavLink to={`/recept/?id=${recept.id}`}>Read More</NavLink>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default RetseptList;
