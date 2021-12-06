import express from "express"
import routes from "./routes.js"
import mongoose from "mongoose"
import dotenv from "dotenv"
import cors from "cors"

const app = express()
dotenv.config()

mongoose.connect("mongodb://localhost:27017",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then( () => console.log("Database connection successful!"))
    .catch( e => console.log(e))

app.use(express.json())
app.use(cors())
app.use("/data", routes)

app.listen(4000, () => console.log("Server run successful!"))