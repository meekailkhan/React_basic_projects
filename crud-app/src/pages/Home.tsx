import { Link } from "react-router-dom"
import UserList from "../components/UserList"

const Home = () => {
  return (
    <>
    <Link to='/create'><button>Create</button></Link>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <UserList />
        </tbody>
      </table>
    </>
  )
}

export default Home