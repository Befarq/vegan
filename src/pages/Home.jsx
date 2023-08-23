import RetseptList from "../components/RetseptList";
import { useFetch } from "../hooks/useFetch";
function Home() {
  const { data: baza, isPending, error } = useFetch(" http://localhost:3000/recipes");
  return (
    <div className="py-4 px-4 justify-center">
      <RetseptList baza={baza} />
    </div>
  );
}

export default Home;
