import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  Routes,
  Route,
  Link
} from "react-router-dom";
import Support from './pages/support';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});
function App() {
  return (
    <ThemeProvider theme={darkTheme}>

    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="support" element={<Support />} />

      </Routes>
    </div>
    </ThemeProvider>

  );
}

function Home(){
  return (
    <div className="Home">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         Coming Soon...
        </p>
     
        <Link to="/about">About</Link>
        <Link to="/support">Support</Link>


      </header>
     
    </div>
  );
}
function About(){
  return (<div>
    About page
  </div>)
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
