import React from 'react';
import StartMenu from './StartMenu';
import StartMenuOverlay from './StartMenuOverlay';
import ColorStrip from './ColorStrip';
import { useSelector } from 'react-redux';

export default function StartMenuCompiled() {

    const startMenuState = useSelector(state => state.startMenuState)

    return <div>
        {startMenuState ? <div>

            <StartMenu />
            <StartMenuOverlay />
            <ColorStrip />
        </div> : <></>}

    </div>;
}
