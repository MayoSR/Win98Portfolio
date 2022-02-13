import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

export default function StartMenuButton(props) {

    const dispatch = useDispatch()
    const startMenuState = useSelector(state => state.startMenuState)

    return <div className='cursor-pointer  flex items-center w-[250px] h-[40px] p-8 pl-10  hover:bg-[#000080] hover:text-white' onClick={() => { console.log(props.text) }}>
        <img src={`/icons/${props.icon}.png`} style={{ width: '40px' }} />
        <p className='ml-3 text-lg text-black-0' style={{ fontFamily: '"Pixelated MS Sans Serif", Arial' }}>{props.text}</p>
    </div>;
}
