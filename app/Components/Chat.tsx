
import { ArrowUp } from 'lucide-react'
import { Message, useChat } from 'ai/react'
import React from 'react'

const Chat = ({ decodedlink , sessionId , initialMessage }: { decodedlink: string , sessionId?: string , initialMessage: Message []}) => {
   
    const {messages , handleInputChange, handleSubmit, input} = useChat({
        api: "/api/chat-stream",
        body: {sessionId},
        initialMessage

    })
    
    return (
        <div className=' flex flex-col items-center p-4 relative h-screen'>
            <div className='mb-4'>

                <div className='badge badge-soft badge-success badge-lg'>
                    {decodedlink}
                </div>
            </div>
            <div></div>
            <form className='absolute bottom-4 left-4 right-4 md:left-auto md:right-auto md:w-2/3 mad:max-w-4xl
        p-4 rounded-3xl border border-amber-300 flex items-center'>

                <div className='w-full'>
                    <textarea className='w-full outline-0 resize-none h-full bg-transparent mp-4'></textarea>
                    <div className='flex justify-between items-center'>
                        <div className='badge badge-soft badge-success badge-lg'>
                            talk.IA
                        </div>
                         <button className='btn btn-circle btn-primary'><ArrowUp /></button>
                    </div>
                </div>

            </form>
        </div>
    )
}

export default Chat