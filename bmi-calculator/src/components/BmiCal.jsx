import React,{useState,useEffect} from 'react'
import './BmiCalcula.css'


const BmiCal = () => {
    const [weight,setWeight] = useState('');
    const [height,setHeight] = useState('');
    const [bmi,setBmi] = useState('');
    const [health,setHealth] = useState('enter your weight and height')

    function handleWeight(e){
        setWeight(e.target.value)
    }

    function handleHeight(e){
        setHeight(e.target.value)
    }

    function handleBmi(){
        setBmi(weight/(height*height)*703)
    }

    function handelSubmit(e){
        e.preventDefault()
    }

    function handleReaload(){
        window.location.reload()
    }

    useEffect(()=>{
        if(bmi<200){
            setHealth('you are underweight')
        }else if(bmi >= 200 && bmi < 1800){
            setHealth('you are healthy')
        }else{
            setHealth('you are overweighted')
        }
    },[bmi])



  return (
    <div className='main-container'>
        <div className="cal-container">
            <form action="" className='cal-form' onSubmit={handelSubmit}>
                <div className='weight-container'>
                    <label htmlFor="">Weight</label>
                    <input type="text" value={weight} onChange={handleWeight} placeholder='Enter Weight'/>
                </div>
                <div className='height-container'>
                    <label htmlFor="">Height</label>
                    <input type="text" value={height} onChange={handleHeight} placeholder='Enter Height'/>
                </div>
                <div className='btn-container'>
                    <button className='submit-btn' onClick={handleBmi}>Submit</button>
                    <button className='reload-btn' type='submit' onClick={handleReaload} >Reaload</button>
                </div>
            </form>
            <div className='info-container'>
                <p>your bmi is : {bmi}</p>
                <p>{health}</p>
            </div>

        </div>
    </div>
  )
}

export default BmiCal
