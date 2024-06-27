import express from "express";
import { param } from "express-validator";
import MyRestaurantController from "../controllers/MyRestaurantController";

const router = express.Router();

router.get(
  "/:restaurantId",
  param("restaurantId")
    .isString()
    .trim()
    .notEmpty()
    .withMessage("RestaurantID parameter must be a valid string"),
  MyRestaurantController.getRestaurant
);

router.get(
  "/search/:city",
  param("city")
    .isString()
    .trim()
    .notEmpty()
    .withMessage("City parameter mush be a valid string"),
  MyRestaurantController.searchRestaurants
);

export default router;
