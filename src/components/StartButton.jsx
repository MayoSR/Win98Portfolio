import React from 'react';
import "98.css";
import { useDispatch } from 'react-redux';
import { startMenuToggle } from '../actions';

export default function StartButton() {

    const dispatch = useDispatch()

    return <button className='flex items-center' style={{ padding: '2px 5px',zIndex:5004 }} onClick={() => dispatch(startMenuToggle())} >
        <img src={`/icons/windows-0.png`} style={{ height: '30px' }} />
        <p className='font-black ml-1' style={{ fontSize: '14px' }}>Start</p>
    </button>;
}
