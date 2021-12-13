import express from "express"
const router = express.Router()
import {
  getProducts,
  getProductById,
} from "../controllers/productController.js"

// Retorna todos los productos || GET api/products || acceso publico
router.route("/").get(getProducts)

// Retorna un producto en especifico || GET api/proudcts/:id || acceso publico

router.route("/:id").get(getProductById)

export default router
