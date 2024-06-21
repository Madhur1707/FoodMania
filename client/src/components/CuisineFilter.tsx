import { menuList } from "@/config/menu-options-config";

type Props = {
  onChange: (cuisines: string[]) => void;
  selectedCuisines: string[];
  isExpended: boolean;
  onExpendedClick: () => void;
};

const CuisineFilter = ({
  onChange,
  selectedCuisines,
  isExpended,
  onExpendedClick,
}: Props) => {
  const handleCuisinesReset = () => onChange([]);

  const handleCuisinesChange = () => onChange([]);

  return (
    <>
      <div className="flex justify-between items-center px-2">
        <div className="text-md font-semibold mb-2">Filter By Cuisine</div>
        <div
          onClick={handleCuisinesReset}
          className="text-sm font-semibold mb-2 underline cursor-pointer text-blue-500"
        >
          Reset
        </div>
      </div>
      <div className="space-y-2 flex flex-col">
        {menuList.map((cuisine) => {
          const isSelected = selectedCuisines.includes(cuisine);
          return (
            <div className="flex ">
              <input
                id={`cuisine_${cuisine}`}
                type="checkbox"
                className="hidden"
                value={cuisine}
                checked={isSelected}
                onChange={handleCuisinesChange}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default CuisineFilter;
