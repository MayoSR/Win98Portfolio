import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import ActivityWindow from './ActivityWindow';
import DesktopIconGrid from './DesktopIconGrid';
import StartMenu from './StartMenu';
import StartMenuCompiled from './StartMenuCompiled';
import Taskbar from './Taskbar';
import TaskbarOverlay from './TaskbarOverlay';

export default function Desktop() {

    const appList = useSelector(state => state.apps)
    const appStatusList = useSelector(state => state.appStatusState)
    const windowPosList = appList.map(app => app.windowPos).filter(app => app !== undefined && app.length > 0)

    const dispatch = useDispatch()
    let coordsTemp = null

    function inWindowPosList(coords) {
        let flag = 0
        windowPosList.forEach(element => {
            if ((element[0] === coords[0]) && (element[1] === coords[1])) {

                flag = 1
            }
        });

        if (flag)
            return true
        return false
    }

    function setWindowPos(pos, id) {
        if (!inWindowPosList(pos)) {
            dispatch({ type: 'SET_WINDOW_POS', pos: pos, appId: id })
            console.log(id, pos)
            return true
        }
        return false
    }

    function getNewCoords(id, pos = [40, 100]) {

        let offset = 20
        let flag = false

        while (!flag) {
            flag = setWindowPos([pos[0] + offset, pos[1] + offset], id)
            console.log(pos, 'loop 1')
            offset += 20
        }

    }

    return <div className='bg-[#00807F] w-screen h-screen select-none' style={{ padding: '20px 2px' }}>
        <Taskbar />
        <TaskbarOverlay />
        <StartMenuCompiled />
        <DesktopIconGrid />
        {appList.sort((a, b) => a.id - b.id).filter(app => appStatusList[app.id] > 0).map((app, ind) => {
            coordsTemp = app.windowPos.length > 0 ? app.windowPos : getNewCoords(app.id)
            return <ActivityWindow key={app.id} appData={app} offset={coordsTemp} />
        })}

    </div>;
}
