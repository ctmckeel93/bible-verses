import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import RegistrationForm from './components/auth/RegistrationForm'
import axios from 'axios';

function App() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/messages")
      .then(response => console.log(setMessages(response.data)));
  })

  return (
    <>
      {messages.length > 0 && messages.map((message, i) => (
        <p key={i}>{message}</p>
      ))} 
      <RegistrationForm/>
    </>
  )
}

export default App
