import asyncHandler from "express-async-handler"
import Product from "../models/productModel.js"

const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({})
  res.json(products)
})

const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id)
  if (product) {
    res.json(product)
  } else {
    res.status(404)
    throw new Error("Producto no encontrado") //arroja mensaje de error en caso de no encontrar el producto
  }
})

const deleteProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id)

  if (product) {
    await product.remove()
    res.json({ message: "Producto eliminado" })
  } else {
    res.status(404)
    throw new Error("Producto no encontrado")
  }
})

export { getProducts, getProductById, deleteProduct }
