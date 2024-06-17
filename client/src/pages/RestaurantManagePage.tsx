import {
  useCreateMyRestaurant,
  useUpdateMyRestaurant,
} from "@/api/RestaurantManageApi";
import RestaurantManageForm from "@/forms/restaurant-manage-form/RestaurantManageForm";
import { useGetMyRestaurant } from "../api/RestaurantManageApi";

const RestaurantManagePage = () => {
  const { createRestaurant, isLoading: isCreatedLoading } =
    useCreateMyRestaurant();
  const { restaurant } = useGetMyRestaurant();
  const { updateRestaurant, isLoading: isUpdatedLoading } =
    useUpdateMyRestaurant();

  const isEditing = !!restaurant;

  return (
    <RestaurantManageForm
      restaurant={restaurant}
      onSave={isEditing ? updateRestaurant : createRestaurant}
      isLoading={isCreatedLoading || isUpdatedLoading}
    />
  );
};

export default RestaurantManagePage;
