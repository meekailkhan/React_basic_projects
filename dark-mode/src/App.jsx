import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import DarkMode from './components/DarkMode'


// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <DarkMode />
//       <div>

//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App


// import logo from './logo.svg';
// import './App.css';
// import DarkMode from './DarkMode/DarkMode'
 
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <DarkMode/>
        <a href="https://vite.dev" target="_blank">
           <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <img src={reactLogo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
 
export default App;