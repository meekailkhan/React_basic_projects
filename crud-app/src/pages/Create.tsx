import { useState } from "react"
import { useAppDispatch } from "../redux/app/hooks";
import { add } from "../redux/feature/user";

const Create = () => {
  const [name,setName] = useState<string>('');
  const [email,setEmail] = useState<string>('')
  const dispatch = useAppDispatch()

  function submitHandler(e:React.FormEvent<HTMLFormElement>){
    e.preventDefault();
    let user = {
      name,
      email
    }
    dispatch(add(user))
    console.log('form submitted successfully')

  }

  return (
    <form action="" onSubmit={submitHandler}>
      <div>
        <label htmlFor="">Name</label>
        <input type="text" placeholder="Name" value={name} onChange={(e)=> setName(e.target.value)}/>
      </div>
      <div>
        <label htmlFor="">Email</label>
        <input type="text" placeholder="Email" value={email} onChange={(e)=> setEmail(e.target.value)}/>
      </div>
      <button type="submit">Create</button>
    </form>
  )
}

export default Create