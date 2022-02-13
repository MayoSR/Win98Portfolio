import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import DesktopIcon from './DesktopIcon';

export default function DesktopIconGrid() {

    const [active, setActiveIcon] = useState(null)
    const appList = useSelector(state => state.apps)

    return <div className='grid grid-flow-col auto-cols-min auto-rows-min gap-y-1' style={{gridTemplateRows:'repeat(9,1fr)'}} >
        {appList.map((app, ind) => {
            return <DesktopIcon active={app.id === active ? true : false} id={app.id} onClick={setActiveIcon} icon={app.icon} text={app.name} />
        })}
    </div>;
}
