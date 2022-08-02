import React, { useState } from 'react'
import ChatBot from 'react-simple-chatbot'

function ChatbotMar (handleclick) {
  const [chatbot, setchatbot] = useState(false)
  const openChat = () => {
    setchatbot(!chatbot)
    console.log(chatbot)
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

      options: [
        { label: 'How to Buy', trigger: '7A' },
        { label: 'How to Pay', trigger: '7A' },
        { label: 'No', trigger: '6B' }
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
  <div className='my-50'>

  {chatbot
    ? <div>
    <button onClick={openChat} className ='text-white'>X</button>
    <ChatBot steps={steps} handleclick={handleclick} className={''} /></div>
    : <div className='h-15 w-15   '> <button className='contain' onClick={openChat}><img src='https://o.remove.bg/downloads/df05e330-e32d-4c01-bb59-9c0834ebae0e/kisspng-chatbot-internet-bot-facebook-messenger-online-cha-chatbots-5b205826153731.7484316415288463740869-removebg-preview.png'></img></button></div>}
  </div>
  )
}

export default ChatbotMar
