import { Router } from "express";
import { getUser,createUser, updateUser, deleteUser, getuser, getAlimenteUser } from "../controllers/users.controller.js";
const router=Router()

//am folosit thunder client pentru testari
router.get("/users",getUser)
router.post('/users',createUser)
router.put('/users/:id',updateUser)
router.delete('/users/:id',deleteUser)
router.get('/users/:id',getuser)
router.get('/users/:id/alimente',getAlimenteUser)

export default router;