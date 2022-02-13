import React from 'react';

export default function ColorStrip() {
    return <div style={{ background: '#000080',zIndex:5006 }} className='absolute bottom-[40px] left-[5px]  h-[505px] w-[30px]'>
        <p style={{ transform: 'rotate(-90deg)' }} className='absolute bottom-[80px] left-[-75px] font-black text-white text-3xl'> Windows<span className='font-normal'>98</span></p>
    </div>;
}
