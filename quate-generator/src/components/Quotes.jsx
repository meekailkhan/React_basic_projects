import React, { useState, useEffect } from 'react'
import './Quotes.css'

function Quotes() {
    const [quote, setQuote] = useState('')

    useEffect(() => {
        quoteGenerator()
    }, [])

    const quoteGenerator = async () => {
        const apiUrl = "https://api.adviceslip.com/advice"
        try {
            const res = await fetch(apiUrl)
            if (!res.ok) {
                console.log(res)
                throw new Error(`error while getting quotes ${res.statusText}`)
            }
            const { slip: { advice } } = await res.json()
            setQuote(advice)
        } catch (err) {
            console.log(err.message)
        }
    }

    return (
        <div className='container'>
            <div className='quote-container'>
                <div className='quotes-text'>{quote ? quote : 'click on button to get Quotes'}</div>
                <button className='quote-btn' onClick={quoteGenerator}>Get Quotes</button>
            </div>
        </div>
    )
}

export default Quotes
