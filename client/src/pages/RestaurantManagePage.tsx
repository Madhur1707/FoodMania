import { useCreateMyRestaurant } from "@/api/RestaurantManageApi";
import RestaurantManageForm from "@/forms/restaurant-manage-form/RestaurantManageForm";
import { useGetMyRestaurant } from "../api/RestaurantManageApi";

const RestaurantManagePage = () => {
  const { createRestaurant, isLoading } = useCreateMyRestaurant();

  const { restaurant } = useGetMyRestaurant();
  return (
    <RestaurantManageForm
      restaurant={restaurant}
      onSave={createRestaurant}
      isLoading={isLoading}
    />
  );
};

export default RestaurantManagePage;
