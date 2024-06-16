import { useCreateMyRestaurant } from "@/api/RestaurantManageApi";
import RestaurantManageForm from "@/forms/restaurant-manage-form/RestaurantManageForm";

const RestaurantManagePage = () => {
  const { createRestaurant, isLoading } = useCreateMyRestaurant();
  return (
    <RestaurantManageForm onSave={createRestaurant} isLoading={isLoading} />
  );
};

export default RestaurantManagePage;
