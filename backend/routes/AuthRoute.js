import { Signup } from "../controllers/AuthContoller.js";
import { Router } from "express";
import { userVerification } from "../middlewares/AuthMiddleware.js";
import { Login } from "../controllers/AuthContoller.js";
const router = Router();
router.post("/signup", Signup);
router.post("/login", Login);
router.post("/",userVerification)

export default router;