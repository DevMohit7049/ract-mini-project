import { useState } from 'react';
import axios from 'axios'
import './App.css'

function App() {
  

const [quote,setQuote] = useState('Generate Quote');

 async function randomQuoteGenerator(){
   const response = await axios.get(`https://api.quotable.io/random`);
   setQuote(response.data.content)
  }

  return (
    <>
       <h1>{quote}</h1>
        <button onClick={randomQuoteGenerator}>Generate</button>
    </>
  )
}

export default App
