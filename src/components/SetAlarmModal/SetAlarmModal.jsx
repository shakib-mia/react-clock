import React from 'react';
import InputField from '../InputField/InputField';

const SetAlarmModal = ({SetAlarmModal}) => {
    return (
        <div className='h-screen w-screen absolute top-0 bg-[#ffffffc6] flex justify-center items-center' style={{ zIndex:1035 }}>
            <div className="mx-auto my-auto bg-white relative px-5 py-3">
                <button onClick={() => SetAlarmModal(false)} className="absolute top-0 right-0">&times;</button>
                <div className="flex gap-4">
                    <InputField label="Label" type="time" id="one" placeholder="Text" onChange={e => console.log(e.target.value)} />
                </div>
            </div>

        </div>
    );
};

export default SetAlarmModal;