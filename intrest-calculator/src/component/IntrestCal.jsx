import React,{useState} from 'react'
import { TextField } from '@mui/material'
import './IntrestCal.css'

function IntrestCal() {
    const [amount,setAmount] = useState(0)
    const [rate,setRate] = useState(0)
    const [time,setTime] = useState(0)
    const [intrest,setIntrest] = useState(0)

    function handleChange(fn){
        return (e)=>{
            fn(e.target.value)
        } 
    }

    function handleClick(){
        let add = parseInt(amount)* parseInt(rate) * parseInt(time) /100
        setIntrest(add)
    }
    


    return (
        <div className='main-container'>
            <div className="cal-container">
                <h1>Intrest Calculator</h1>
                <p>Calculate your Intreset In Easiset way</p>
                <div className="total-intrest">
                    <h2>₹ {intrest}</h2>
                </div>
                <div className="text-fields">
                    <TextField id="outlined-basic" value={amount || ''} onChange={handleChange(setAmount)} label="₹ Principle Amount" variant="outlined" />
                    <TextField id="outlined-basic" value={rate || ''} onChange={handleChange(setRate)} label="Rate Of Intrest " variant="outlined" />
                    <TextField id="outlined-basic" value={time || ''} onChange={handleChange(setTime)} label="Time Perioud (Yr)" variant="outlined" />
                </div>
                <div className="btn-container">
                    <button className='submi-btn' onClick={handleClick}>Submit</button>
                    <button className='reset-btn' onClick={()=> location.reload()}>Reset</button>
                </div>
            </div>
        </div>
    )
}

export default IntrestCal
