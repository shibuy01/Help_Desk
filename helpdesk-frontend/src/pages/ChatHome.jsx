import { Button } from '@base-ui/react'
import React from 'react'
import { useNavigate } from 'react-router'

function ChatHome() {

    const navigate = useNavigate();

    const handleChatStartClick = () => {
        navigate("/chat")
    }

  return (
    <div className='h-screen w-screen justify-center items-center flex flex-col gap-5'>
        <h1 className=' text-4xl font-bold '>Welcome to Help Desk System</h1>
        <Button onClick={handleChatStartClick} variant={"outline"} className="text-xl">Start Getting Help</Button>
    </div>
  )
}

export default ChatHome