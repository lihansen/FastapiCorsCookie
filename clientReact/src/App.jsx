import axios from 'axios'
import './App.css'

function App() {
  function setCookie() {
    axios.get('http://localhost:8000/setcookie', {
      withCredentials: true,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': 'http://localhost:8000'
      }
    })
      .then(response => {
        console.log('Success:', response.data);
      })
      .catch(error => {
        console.error('Error:', error);
      })
  }

  return (
    <>
      <h1>Cookie Test</h1>

      <button
        onClick={setCookie}
      >Set Cookie</button>
    </>
  )
}

export default App
