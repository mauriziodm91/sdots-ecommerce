//Componente para cargar el producto detallado en pantalla
import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { Row, Col, Image, ListGroup, Card, Button, Form } from "react-bootstrap"
import Rating from "../components/Rating"
import { listProductDetails } from "../actions/productActions"
import Loader from "../components/Loader"
import Message from "../components/Message"

const ProductScreen = ({ history, match }) => {
  const [qty, setQty] = useState(1)
  const dispatch = useDispatch()

  const productDetails = useSelector((state) => state.productDetails)
  const { loading, error, product } = productDetails

  useEffect(() => {
    dispatch(listProductDetails(match.params.id))
  }, [dispatch, match])
  const addToCartHandler = () => {
    history.push(`/cart/${match.params.id}?qty=${qty}`)
  }
  return (
    <>
      <Link className='btn btn-light my-3' to='/'>
        Volver
      </Link>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger' />
      ) : (
        <Row>
          <Col md={6}>
            <Image src={product.image} alt={product.name} fluid />
          </Col>
          <Col md={3}>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <h3>{product.name}</h3>
              </ListGroup.Item>
              <ListGroup.Item>
                <Rating
                  value={product.rating}
                  text={`${product.numReviews} reseñas`}
                />
              </ListGroup.Item>
              <ListGroup.Item>Precio: ${product.price}</ListGroup.Item>
              <ListGroup.Item>
                Descripcion: {product.description}
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md={3}>
            <Card>
              <ListGroup variant='flush'>
                {/*remover bordes externos */}
                <ListGroup.Item>
                  <Row>
                    <Col>Precio:</Col>
                    <Col>
                      <strong>${product.price}</strong>
                    </Col>
                  </Row>
                </ListGroup.Item>

                <ListGroup.Item>
                  <Row>
                    <Col>Disponibilidad:</Col>
                    <Col>
                      {product.countInStock > 0 ? "En stock" : "Sin stock"}
                    </Col>
                  </Row>
                </ListGroup.Item>

                {product.countInStock > 0 && (
                  <ListGroup.Item>
                    <Row>
                      <Col className='my-auto' md='auto'>
                        Cant
                      </Col>
                      <Col>
                        <Form.Select
                          className='px-2'
                          //size='sm'
                          value={qty}
                          onChange={(e) => setQty(e.target.value)}
                        >
                          {[...Array(product.countInStock).keys()].map((x) => (
                            <option key={x + 1} value={x + 1}>
                              {x + 1}
                            </option>
                          ))}
                        </Form.Select>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                )}

                <ListGroup.Item>
                  <div className='d-grid'>
                    <Button
                      onClick={addToCartHandler}
                      type='button'
                      disabled={product.countInStock === 0}
                    >
                      Agregar al carrito
                    </Button>
                  </div>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
        </Row>
      )}
    </>
  )
}

export default ProductScreen
