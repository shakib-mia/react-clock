import React from 'react';

const InputField = ({ placeholder, id, label, onChange, type }) => {
    return <section className='flex flex-col'>
        <label className='ml-[5px] mb-2' htmlFor={id}>{label}</label>
        <input id={id} type={type} className='border-2 border-[#ddd] focus:border-[#ddd] outline-none px-2 py-1 rounded-[5px]' placeholder={placeholder} onChange={onChange} />
    </section>;
};

export default InputField;