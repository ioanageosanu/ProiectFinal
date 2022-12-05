import { Router } from "express";
import { createAliment, deleteAliment, getaliment, getAliment, updateAliment } from "../controllers/food.controller.js";
const router=Router()

//am folosit thunder client pentru testari
router.get("/food",getAliment)
router.post('/food',createAliment)
router.put('/food/:id',updateAliment)
router.delete('/food/:id',deleteAliment)
router.get('/food/:id',getaliment)

export default router;