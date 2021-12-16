import React, { useEffect } from "react"
import { LinkContainer } from "react-router-bootstrap"
import { Table, Button } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import Message from "../components/Message"
import Loader from "../components/Loader"
import { listUsers } from "../actions/userActions"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faTimes,
  faCheck,
  faTrash,
  faEdit,
} from "@fortawesome/free-solid-svg-icons"

const UserListScreen = ({ history }) => {
  const dispatch = useDispatch()

  const userList = useSelector((state) => state.userList)
  const { loading, error, users } = userList

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  useEffect(() => {
    if (userInfo && userInfo.isAdmin) {
      dispatch(listUsers())
    } else {
      history.push("/login")
    }
  }, [dispatch, history])

  const deleteHandler = (id) => {
    console.log("delete")
  }

  return (
    <>
      <h1>Usuarios</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <Table striped bordered hover responsive size='sm'>
          <thead>
            <tr>
              <th>ID</th>
              <th>NOMBRE</th>
              <th>EMAIL</th>
              <th>ADMIN</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id}>
                <td>{user._id}</td>
                <td>{user.name}</td>
                <td>
                  <a href={`mailto:${user.email}`}>{user.email}</a>
                </td>
                <td>
                  {user.isAdmin ? (
                    <FontAwesomeIcon
                      icon={faCheck}
                      style={{ color: "green" }}
                    />
                  ) : (
                    <FontAwesomeIcon icon={faTimes} style={{ color: "red" }} />
                  )}
                </td>
                <td>
                  <LinkContainer to={`/user/${user._id}/edit`}>
                    <Button variant='light' size='sm'>
                      <FontAwesomeIcon icon={faEdit} />
                    </Button>
                  </LinkContainer>
                  <Button
                    variant='danger'
                    size='sm'
                    onClick={() => deleteHandler(user._id)}
                  >
                    <FontAwesomeIcon icon={faTrash} />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </>
  )
}

export default UserListScreen
