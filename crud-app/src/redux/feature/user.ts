import { createSlice, current, PayloadAction } from "@reduxjs/toolkit";
import { user } from "../../types/type";
import { userList } from '../../dummyData'


const userSlice = createSlice({
    name: "users",
    initialState: userList,
    reducers: {
        add: (state, action: PayloadAction<user>) => {
            console.log(current(state)); 
            return [...state, {
                id: state.length + 1,
                name: action.payload.name,
                email: action.payload.email
            }]

        },
        del : (state,action : PayloadAction<number|undefined>) => {
            return state.filter(item => item.id !== action.payload)
        },
        // update(state,action:PayloadAction<number|undefined>){
            
        // }
    },
});

export default userSlice.reducer
export const { add ,del} = userSlice.actions