import { useFetch } from "../hooks/useFetch";
import RetseptList from "../components/RetseptList";
import { NavLink } from "react-router-dom";
function Retsept() {
  const query = new URLSearchParams(location.search);
  const id = query.get("id");
  console.log(id);
  const { data, isPending, error } = useFetch(
    `http://localhost:3000/recipes/${id}`
  );
  console.log(data);
  return (
    <>
      {data && (
        <div className="justify-between border-black border-2 text-center flex flex-grow flex-wrap flex-col text-green-700 min-h-full">
          <h1 className="text-5xl py-4">{data.title}</h1>
          <div className="flex justify-around text-left w-4/5 mx-auto max-h-75">
            {" "}
            <div className="border-r-4 border-orange-600 w-2/5  py-3 px-3  bg-orange-300 justify-between text-3xl">
              {" "}
              <p className="text-red-600 text-left">
                Ingredtients:{data.ingredients.join(", ")}
              </p>
              <p className="">{data.method}</p>
              <p>Cooking time: {data.cookingTime}</p>
            </div>
            <img
              className=" w-2/5 max-h-80 pl-4 rounded-md"
              src={data.img}
              alt=""
              srcset=""
            />
          </div>
          <div className="block text-center text-orange-800  text-2xl mb-4 font-bold">
            <NavLink to="/?">Home</NavLink>
          </div>
        </div>
      )}
    </>
  );
}

export default Retsept;
