import React from 'react';
import "98.css";
export default function Clock() {
    return <button className='active flex items-center absolute right-1' style={{ padding: '5px 10px', boxShadow: 'inset -1px -1px #ffffff, inset 1px 1px #0a0a0a, inset -2px -2px #dfdfdf, inset 2px 2px #808080' }} >
        <img src={`/icons/time.png`} style={{ height: '20px' }} />
        <p className='font-black ml-1' style={{ fontSize: '14px' }}>3.14 &nbsp;PM </p>
    </button>;
}
