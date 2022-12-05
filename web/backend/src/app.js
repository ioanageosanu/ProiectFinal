import express from "express";
import morgan from "morgan";
import usersRoutes from './routes/users.routes.js'
import foodRoutes from './routes/aliment.routes.js'
const app=express()

//Middlewares
app.use(morgan("dev"));
app.use(express.json())

//Routes
app.use(usersRoutes)
app.use(foodRoutes)


export default app;


