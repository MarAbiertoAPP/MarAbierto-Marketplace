import React, { useState } from 'react'
import ChatBot from 'react-simple-chatbot'
import '../Chatbox/chatbox.css'
import chatLogo from '../../assests/chat.png'
function ChatbotMar (handleclick) {
  const [chatbot, setchatbot] = useState(false)
  const openChat = () => {
    setchatbot(!chatbot)
  }
  const steps = [
    {
      id: '1',
      message: "Hello world. I am a chatbot. What's your name?",
      trigger: '2'
    },
    {
      id: '2',
      user: true,
      validator: (value) => {
        if (/^[A-Z]{1}[a-z]{2,15}$/.test(value)) {
          return true
        } else {
          return 'Please enter a valid name.'
        }
      },
      trigger: '3'
    },
    {
      id: '3',
      message: 'Hi {previousValue}, nice to meet you and Welcome to Mar Abierto!',
      trigger: '4'
    },
    {
      id: '4',
      message: 'Do you need anything from me?',
      trigger: '5'
    },
    {
      id: '5',
      options: [
        { value: 'y', label: 'Yes', trigger: '6A' },
        { value: 'n', label: 'No', trigger: '6B' }
      ]
    },
    {
      id: '6A',
      message: 'what would you like to know?',
      trigger: '6C'
    },
    {
      id: '6C',
      options: [
        { label: 'How to Buy', trigger: '7A' },
        { label: 'How to Pay', trigger: '7A' },
        { label: 'Nothing', trigger: '6B' }
      ]

    },
    {
      id: '6B',
      message: 'Bye bye!!',
      end: true
    },

    {
      id: '7A',
      message: 'The great about Mar Abierto is that you can pay your NFTs with Credit Card or Marcoins?',
      trigger: '6B'

    }

  ]
  return (
  <div className='my-50  '>

  {chatbot
    ? <div >
    <button onClick={openChat} className ='text-white bg-violet-500 w-5 rounded-lg '>X</button>
    <ChatBot steps={steps} handleclick={handleclick} className={''} /></div>
    : <div className='h-12 w-12 ' > <button className=' animate-bounce' onClick={openChat}><img src={chatLogo}></img></button></div>}
  </div>
  )
}

export default ChatbotMar
