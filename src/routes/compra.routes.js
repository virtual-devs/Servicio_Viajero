import { Router } from "express";
import {getHistorialR, getHistorialV, getHistorialRU, getHistorialVU, createHistorialR, createHistorialV} from '../controllers/compra.controller.js';

const router = Router();

router.get("/historialR", getHistorialR);
router.get("/historialV", getHistorialV);
router.get("/historialRE/:id", getHistorialRU);
router.get("/historialRV/:id", getHistorialVU);
router.post("/historialRAdd", createHistorialR);
router.post("/historialVAdd", createHistorialV);


export default router;