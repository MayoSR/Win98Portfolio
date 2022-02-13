import React, { useState } from 'react';
import "98.css";
import StartButton from './StartButton';
import TaskbarActivityButton from './TaskbarActivityButton';
import Clock from './Clock';
import { useDispatch, useSelector } from 'react-redux';

export default function TaskbarOverlay() {

    const active = useSelector(state => state.currentViewApp)
    const appQueue = useSelector(state => state.appOpenQueue)
    const appStatusList = useSelector(state => state.appStatusState)
    const dispatch = useDispatch()



    return <div className='fixed  gap-1 z-100 left-0 right-0 bottom-0 w-full h-[40px] py-1 flex items-center'>
        <StartButton />
        {appQueue.map((id, ind) => {
            return <TaskbarActivityButton active={active === id ? true : false} id={id} active={active} />

        })}
        <Clock />
    </div>;
}
