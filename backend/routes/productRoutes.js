import express from "express"
const router = express.Router()
import {
  getProducts,
  getProductById,
  deleteProduct,
} from "../controllers/productController.js"

import { protect, admin } from "../middleware/authMiddleware.js"

// Retorna todos los productos || GET api/products || acceso publico
router.route("/").get(getProducts)

// Retorna un producto en especifico || GET api/proudcts/:id || acceso publico

router.route("/:id").get(getProductById).delete(protect, admin, deleteProduct)

export default router
