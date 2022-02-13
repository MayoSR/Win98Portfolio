import React from 'react';
import "98.css";
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';

export default function TaskbarActivityButton(props) {

    const activeTask = 'flex items-center  bg-slate-100 font-bold'
    const inactiveTask = 'flex items-center'
    const dispatch = useDispatch()
    const toggle = useSelector(state => state.appStatusState[props.id])
    const currViewApp = useSelector(state => state.currentViewApp)
    const appData = useSelector(state => state.apps.filter(app => app.id === props.id))[0]

    const setActiveTask = () => {

        if((toggle < 0) || (currViewApp !== props.id)){

            dispatch({ type: 'OPEN_APP', openID: props.id })
        }
        else if(toggle){
            dispatch({ type: 'MINIMIZE_APP', minimizeID: props.id })
        }
    }

    return <button onClick={() => setActiveTask()} className={props.active === props.id ? activeTask : inactiveTask} style={{ padding: '2px 5px', width: '250px', height: '33px' }} >
        <img src={`/icons/${appData.icon}.png`} style={{ height: '25px' }} />
        <p className='ml-1 truncate' style={{ fontSize: '13px' }}>{appData.name}</p>
    </button>;
}
