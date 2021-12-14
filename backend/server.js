import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import connectDB from "./config/db.js"
import productRoutes from "./routes/productRoutes.js"
import userRoutes from "./routes/userRoutes.js"
import orderRoutes from "./routes/orderRoutes.js"
import { notFound, errorHandler } from "./middleware/errorMiddleware.js"
const port = 5000

dotenv.config()

connectDB()

const app = express()

app.use(express.json())

app.use(cors())

app.get("/", (req, res) => {
  res.send("success!")
})

app.use("/api/products", productRoutes)
app.use("/api/users", userRoutes)
app.use("/api/orders", orderRoutes)

app.use(notFound)

app.use(errorHandler)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`App listening at http://localhost:${PORT}`)
})
