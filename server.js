import express from "express";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";
import blogRoutes from "./routes/blogRoutes.js";
dotenv.config();

//rest object
const app = express()

//mongo connection
connectDB();

//middlewares
app.use(cors())
app.use(express.json())
app.use(morgan('dev'))

//routes
app.use("/api/v1/user", userRoutes);
app.use("/api/v1/blog", blogRoutes);

app.get("/", (req, res) => {
    res.status(200).send({
        message: "Node server"
    })
})


const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
    console.log(`Server running on PORT ${PORT} in ${process.env.dev_mode} mode`)
});