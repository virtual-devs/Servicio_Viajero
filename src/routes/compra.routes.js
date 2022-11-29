import { Router } from "express";
import {getHistorialR, getHistorialV, getHistorialRU, getHistorialVU, createHistorialR, createHistorialV} from '../controllers/compra.controller.js';
import { verifyToken } from "../middlewares/authJwt.js";

const router = Router();

router.get("/historialR", getHistorialR);
router.get("/historialV", getHistorialV);
router.get("/historialRE/:id", getHistorialRU);
router.get("/historialRV/:id", getHistorialVU);
router.post("/historialRAdd",verifyToken, createHistorialR);
router.post("/historialVAdd", verifyToken, createHistorialV);


export default router;