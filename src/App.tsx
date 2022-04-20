import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         Coming Soon...
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>

      </header>
    </div>
  );
}

// function LambdaDemo(){
// const[loading, setLoading]=useState(false)
// const[msg, setMsg]=useState('')


//  const handleClick = (api:string) => (e:any) => {
//     e.preventDefault()

//     setLoading(true)
//     fetch("http://localhost:9000/.netlify/functions/" + api)
//       .then(response => response.json())
//       .then(json => {
//         setLoading(false)
//         setMsg(json.msg)
//       })
//   }


//     return (
//       <p>
//         <button onClick={handleClick("hello")}>{loading ? "Loading..." : "Call Lambda"}</button>
//         <button onClick={handleClick("async-dadjoke")}>{loading ? "Loading..." : "Call Async Lambda"}</button>
//         <br />
//         <span>{msg}</span>
//       </p>
//     )
  
// }
export default App;
