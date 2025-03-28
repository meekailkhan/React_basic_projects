// @ts-ignore
// import { userList } from "../dummyData";
import { Link } from "react-router-dom";
import {user} from '../types/type'
import { useAppSelector,useAppDispatch } from "../redux/app/hooks";
import { del } from "../redux/feature/user";



const UserList = () => {

  const userList = useAppSelector((state)=> state.users)
  const dispatch = useAppDispatch()

  function handleDelete(id:number|undefined){
      dispatch(del(id))
  }

  return (
    <>
      {userList.map((item:user) => {
          return <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.email}</td>
            <td>
                <Link to={'/update'}>
                <button>Edit</button>
                </Link>
                <button onClick={()=> handleDelete(item.id)}>Delete</button>
            </td>
          </tr>
        })}
    </>
  );
};

export default UserList;
