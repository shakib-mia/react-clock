import React from 'react';
import "./Message.css"

const Message = ({ message, setShowMessage }) => {
    return (
        <div className='h-screen absolute flex justify-center items-center bg-[#ffffffc7] w-screen z-[9999]' id="message-container">
            <div className="relative h-full w-full">
                <div className="flex items-center justify-center h-full">
                    <h1 className='text-[50px] text-red-600'>{message}</h1>
                </div>
                <button className='absolute text-[40px] top-0 right-5' onClick={() => setShowMessage(false)}>&times;</button>
            </div>
        </div>
    );
};

export default Message;