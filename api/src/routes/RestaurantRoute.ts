import express from "express";
import multer from "multer";
import RestaurantController from "../controllers/RestaurantController";
import { jwtCheck, jwtParse } from "../middleware/auth";

const router = express.Router();

const storage = multer.memoryStorage();
const upload = multer({
  storage: storage,
  limits: {
    fileSize: 5 * 1024 * 1024,
  },
});

router.post(
  "/",
  jwtCheck,
  jwtParse,
  upload.single("imageFile"),
  RestaurantController.createMyRestaurant
);

export default router;
