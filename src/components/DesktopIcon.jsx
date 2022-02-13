import React from 'react';
import { useDispatch } from 'react-redux';

export default function DesktopIcon(props) {

    const inactiveIcon = 'absolute left-[-30px] right-0 w-[65px] mt-2 line-clamp-2 text-md text-white text-center'
    const activeIcon = 'absolute  z-[100] left-[-30px] right-0 w-[65px] mt-2 bg-[rgba(0,0,128,0.8)] text-white text-md  text-center inline-block'
    const dispatch = useDispatch()

    return <div onClick={() => props.onClick(props.id)} onDoubleClick={() => dispatch({ type: 'OPEN_APP', openID: props.id })} className={'relative cursor-pointer flex flex-col items-center w-[80px] h-[80px] mb-[10px]'}>
        <svg height="0px" width="0px" xmlns="http://www.w3.org/2000/svg">
            <filter id="color-matrix">
                <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0
              0 0 0 0 0
              0 1 0 0 0
              0 0 0 1 0">
                </feColorMatrix>
            </filter>
        </svg>
        <div className='w-65px flex justify-center'>
        {props.active ? <img src={`/icons/${props.icon}.png`} style={{ width: '40px',height:'40px', filter: 'url(#color-matrix)' }} /> : <img src={`/icons/${props.icon}.png`} style={{ width: '40px',height:'40px' }} />}
        </div>
        <div className='relative'>

            <p className={props.active ? activeIcon : inactiveIcon} style={{ fontFamily: '"Pixelated MS Sans Serif", Arial' }}>{props.text}</p>
        </div>
    </div>;
}
