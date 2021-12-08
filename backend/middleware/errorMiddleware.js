const notFound = (req, res, next) => {
  const error = new Error(`Not Found - ${req.originalUrl}`) //error de ruta inexistente
  res.status(404)
  next(error)
}

const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode
  res.status(statusCode)
  res.json({
    message: err.message, //mensaje de error tomado desde productRoutes.js
    stack: process.env.NODE_ENV === "production" ? null : err.stack,
  })
}

export { errorHandler, notFound }
