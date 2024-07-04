import SearchBar, { SearchForm } from "@/components/SearchBar";
import landingpage from "../assets/landingpage.png";
import playStore from "../assets/playStore.png";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  const handleSearchSubmit = (searchFormValue: SearchForm) => {
    navigate({
      pathname: `/search/${searchFormValue.searchQuery}`,
    });
  };

  return (
    <div className="flex flex-col gap-12">
      <div className=" md:px-32 bg-white rounded-lg shadow-md py-8 flex flex-col gap-5 text-center -mt-16">
        <h1 className="text-5xl font-bold tracking-tight text-orange-600">
          {" "}
          Delicious Deliveries at Your DoorStep!
        </h1>
        <span className="text-xl">Hungry ? Same... Order Now 😋 </span>
        <span className="text-2xl"> Search Delhi for Getting Results...</span>
        <SearchBar
          placeHolder="Search by city delhi..."
          onSubmit={handleSearchSubmit}
          searchQuery={""}
        />
      </div>
      <div className="grid md:grid-cols-2 gap-5">
        <img src={landingpage} />
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <span className="font-bold text-3xl tracking-tighter">
            Order Takeaway even faster!
          </span>
          <span>Download the FoodiFy! and Start Ordering...</span>
          <img src={playStore} />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
