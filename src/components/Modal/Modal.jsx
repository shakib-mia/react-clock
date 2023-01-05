import React from 'react';

const Modal = ({ body, SetAlarmModal, onSubmit, title }) => {
    return (
    <div className='h-screen w-screen absolute top-0 bg-[#ffffffc6] flex justify-center items-center' style={{ zIndex:1035 }}>
        <div className={`mx-auto my-auto bg-white relative p-8 w-1/2 rounded-lg`}>
            <h1 className='text-center mb-7 text-[27px]'>{title}</h1>
            <button onClick={() => SetAlarmModal(false)} className="absolute top-2 right-4 text-4xl">&times;</button>
            {body}
            <button onClick={onSubmit} className="bg-green-800 text-white px-5 py-2 rounded-md mt-5">Set</button>
        </div>

    </div>
    );
};

export default Modal;