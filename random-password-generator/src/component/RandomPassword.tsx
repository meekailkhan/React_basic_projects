import { useState,useEffect } from "react";
import './RandomPasswordGen.css'

function RandomPassword() {
    const [password,setPassword] = useState('');
    
    useEffect(()=>{
        passwordGenerator()
    },[])

    function passwordGenerator(){
        let newPassword = ''
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        for(let i = 0 ; i < 3 ; i++){
            const randomChar = chars[Math.floor(Math.random() * chars.length)]
            newPassword += randomChar
            newPassword += Math.floor(Math.random() * 10)
        }
        setPassword(newPassword)
    }
    function handleCopy(){
      navigator.clipboard.writeText(password)
    }
  return (
    <div className="main-container">
      <div className="password-container">
        <div className="password-display">{password}</div>
        <div className="btn-container">
            <button className="pass-btn" onClick={passwordGenerator}>Generate</button>
            <button className="pass-btn" onClick={handleCopy}>Copy</button>
        </div>
      </div>
    </div>
  )
}

export default RandomPassword
