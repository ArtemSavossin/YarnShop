import bcrypt from "bcryptjs"

const Users = [
  {
    name: "Анастасия Савосина",
    email: "nv.tverd@gmail.com",
    phone: "87015359475",
    isAdmin: true,
    password: bcrypt.hashSync("226104", 10),
  },
  {
    name: "Артём Савосина",
    email: "savossinartem@gmail.com",
    phone: "87079120824",
    isAdmin: true,
    password: bcrypt.hashSync("226104", 10),
  },
  {
    name: "Наталья Савосина",
    email: "notya123@mail.ru",
    phone: "87019247045",
    password: bcrypt.hashSync("226104", 10),
  },
]
export default Users
