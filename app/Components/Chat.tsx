import React from 'react'

const Chat = ({ decodedlink }: { decodedlink: string }) => {
    return (
        <div className=' flex flex-col items-center p-4 relative h-screen'>
            <div className='mb-4'>

                <div className='badge badge-soft badge-success badge-lg'>
                    {decodedlink}
                </div>
            </div>
            <div></div>
            <form className='absolute bottom-4 left-4 right-4 md:left-auto md:right-auto md:w-full mad:max-w-4xl
        p-4 rounded-3xl border border-amber-300 flex items-center'>

                <div className='w-full'>
                    <textarea className='w-full outline'></textarea>
                </div>

            </form>
        </div>
    )
}

export default Chat