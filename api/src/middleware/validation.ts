import { NextFunction, Request, Response } from "express";
import { body, validationResult } from "express-validator";

const handleValidationErrors = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

export const validateMyUserRequest = [
  body("name").isString().notEmpty().withMessage("Name must be a String"),
  body("addressLine1")
    .isString()
    .notEmpty()
    .withMessage("Address must be a String"),
  body("city").isString().notEmpty().withMessage("City must be a String"),
  body("country").isString().notEmpty().withMessage("Country must be a String"),
  handleValidationErrors,
];

export const validateMyRestaurantRequest = [
  body("restaurantName")
    .notEmpty()
    .withMessage("Restaurant Name must be required"),
  body("city").notEmpty().withMessage("city is required"),
  body("country").notEmpty().withMessage("country is required"),
  body("deliveryPrice")
    .isFloat({ min: 0 })
    .withMessage("Delivery Price must be positive number"),
  body("estimatedDeliveryTime")
    .isInt({ min: 0 })
    .withMessage("Estimated Delivery Time must be a positive number"),
  body("cuisines")
    .isArray()
    .withMessage("cuisines must be an array")
    .not()
    .isEmpty()
    .withMessage("cuisines array cannot be empty"),
  body("menuItems").isArray().withMessage("menuItems must be an array"),
  body("menuItems.*.name").notEmpty().withMessage("menu item name is required"),
  body("menuItems.*.price")
    .isFloat({ min: 0 })
    .withMessage("menu item price is required and must be a poditive number"),
];
