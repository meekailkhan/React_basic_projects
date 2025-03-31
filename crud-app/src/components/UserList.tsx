// @ts-ignore
// import { userList } from "../dummyData";
import { Link } from "react-router-dom";
import {user} from '../types/type'
import { useAppSelector,useAppDispatch } from "../redux/app/hooks";
import { useNavigate,useParams } from "react-router-dom";
import { del } from "../redux/feature/user"; 



const UserList = () => {

  const {id} = useParams()
  const userList = useAppSelector((state)=> state.users)
  const dispatch = useAppDispatch()
  const existingUser = userList.find(item => item.id === Number(id))
  const navigate = useNavigate()
  
  function handleDelete(id:number|undefined){
    dispatch(del(id))
  }
  function handleClick(userId:number|undefined){
    console.log(userList)
    console.log(id)
    console.log(existingUser)
    navigate(`/update/${id}`)
  }

  return (
    <>
      {userList.map((item:user) => {
          return <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.email}</td>
            <td>
                {/* <Link to={'/update'}> */}
                <button onClick={()=> handleClick(item.id)}>Edit</button>
                {/* </Link> */}
                <button onClick={()=> handleDelete(item.id)}>Delete</button>
            </td>
          </tr>
        })}
    </>
  );
};

export default UserList;
