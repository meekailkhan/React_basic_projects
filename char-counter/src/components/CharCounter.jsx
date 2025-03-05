import React, { useState,useEffect } from 'react'

function CharCounter() {
    const [input, setInput] = useState('')
    const [word,setWord] = useState('')

    useEffect(()=>{
        let wordLen = input.split(' ')
        setWord(wordLen)
    },[input])

    function handleInput(e){
        setInput(e.target.value)
    }
    function handleDelete(){
        setInput('')
    }

    return (
        <div className='main-container'>
            <div className="char-container">
                <section className="left-section">
                    <textarea name="" id="" value={input} onChange={handleInput} placeholder='Type or past text here'></textarea>
                    <button className='del-btn' onClick={handleDelete}>Delete</button>

                </section>
                <section className="right-section">
                    <div className="characters">
                        <h3>Characters</h3>
                        <p>{input && input.length}</p>
                    </div>
                    <div className='words'>
                        <h3>Words</h3>
                        <p>{word.length > 1 && word.length -1}</p>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default CharCounter
