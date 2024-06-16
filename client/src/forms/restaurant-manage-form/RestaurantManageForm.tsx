import { Form } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import DetailsSection from "./DetailsSection";
import { Separator } from "@/components/ui/separator";
import MenuSection from "./MenuSection";
import AddMenuItems from "./AddMenuItems";

const formSchema = z.object({
  restaurantName: z.string({
    required_error: "Restaurant Name is required",
  }),

  city: z.string({
    required_error: "City Name is required",
  }),

  country: z.string({
    required_error: "Country Name is required",
  }),
  deliveryPrice: z.coerce.number({
    required_error: "Delivery Price is required",
    invalid_type_error: "must be a valid number",
  }),
  estimatedDeliveryTime: z.coerce.number({
    required_error: "Estimated Delivery Time  is required",
    invalid_type_error: "must be a valid number",
  }),
  cuisines: z.array(z.string()).nonempty({
    message: "Please select at least one item",
  }),
  menuItems: z.array(
    z.object({
      name: z.string().min(1, "name is required"),
      price: z.coerce.number().min(1, "price is required"),
    })
  ),
  imageFile: z.instanceof(File, { message: "image is required" }),
});

type restaurantFormData = z.infer<typeof formSchema>;

type Props = {
  onSave: (restaurantFormData: FormData) => void;
  isLoading: boolean;
};

function RestaurantManageForm({ onSave, isLoading }: Props) {
  const form = useForm<restaurantFormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      cuisines: [],
      menuItems: [{ name: "", price: 0 }],
    },
  });

  const onSubmit = (formDataJson: restaurantFormData) => {};

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 bg-gray-50 p-10 rounded-lg"
      >
        <DetailsSection />
        <Separator />
        <MenuSection />
        <Separator />
        <AddMenuItems />
      </form>
    </Form>
  );
}

export default RestaurantManageForm;
