import bcrypt from "bcryptjs"

const users = [
  {
    name: "Admin User",
    email: "admin@admin.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "Maurizio",
    email: "maurizio@gmail.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Daniella",
    email: "daniella@gmail.com",
    password: bcrypt.hashSync("123456", 10),
  },
]

export default users
