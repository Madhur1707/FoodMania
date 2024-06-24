import { menuList } from "@/config/menu-options-config";
import { Label } from "./ui/label";
import { Check } from "lucide-react";
import { ChangeEvent } from "react";

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
  
  const handleCuisinesChange = (event: ChangeEvent<HTMLInputElement>) => {
    const clickedCuisine = event.target.value;
    const isChecked = event.target.checked;
    const newCuisineList = isChecked
      ? [...selectedCuisines, clickedCuisine]
      : selectedCuisines.filter((cuisine) => cuisine !== clickedCuisine);

    onChange(newCuisineList);
  };

  const handleCuisinesReset = () => onChange([]);

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
              <Label
                htmlFor={`cuisine_${cuisine}`}
                className={`flex flex-1 items-center cursor-pointer text-sm rounded-full px-4 py-2 font-semibold ${
                  isSelected
                    ? "border border-green-600 text-green-600 "
                    : "border border-slate-300"
                }`}
              >
                {isSelected && <Check size={20} strokeWidth={3} />}
                {cuisine}
              </Label>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default CuisineFilter;
