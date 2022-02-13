import React, { useEffect, useMemo, useRef, useState } from 'react';
import Draggable from 'react-draggable';
import { useDispatch, useSelector } from 'react-redux';
import useWindowDimensions from '../hooks/useWindowDimensions';

export default function ActivityWindow(props) {

    const contentRef = useRef(null)
    const { appData, offset } = props
    const leftOffset = offset[0]
    const topOffset = offset[1]
    const [coords, setCoords] = useState([leftOffset, topOffset])
    const dispatch = useDispatch()

    const [windowWidth, setWindowWidth] = useState(1000)
    const [windowHeight, setWindowHeight] = useState(550)
    const [top, setTop] = useState(coords[0])
    const [left, setLeft] = useState(coords[1])
    const [resize, setResize] = useState('both')
    const [overflowX, setOverflowX] = useState('scroll')
    const { width, height } = useWindowDimensions()
    const minimized = useSelector(state => state.appStatusState[appData.id])
    const appInFocus = useSelector(state => state.currentViewApp)
    const windowZ = useSelector(state => state.lastMaxAppIndex && appData.id === state.currentViewApp ? state.lastMaxAppIndex : 1000)


    useEffect(() => {

        const observer = new ResizeObserver(entries => {
            if (entries[0].contentRect.width > windowWidth - 22) {
                setWindowWidth(entries[0].contentRect.width + 22)
            }
        })

        observer.observe(contentRef.current)
        return () => contentRef.current && observer.unobserve(contentRef.current)
    }, []);

    const activeWindow = "title-bar cursor-move"
    const inactiveWindow = "title-bar inactive cursor-move"

    const [maxWindowState, setMaxWindowState] = useState(null)


    return <Draggable handle=".title-bar" position={maxWindowState} >
        <div className={`window absolute `} style={{ zIndex: windowZ, top: `${top}px`, left: `${left}px`, width: `${windowWidth}px`, display: minimized === -1 ? 'none' : 'block', }}>

            <div className={appInFocus === appData.id ? activeWindow : inactiveWindow} onClick={() => dispatch({ type: 'OPEN_APP', openID: appData.id })}>
                <div className='flex items-center pointer-events-none'>
                    <img src={`/icons/dir-sm.png`} style={{ height: '20px' }} />
                    <div className="title-bar-text ml-1">{appData.name}</div>
                </div>
                <div className="title-bar-controls">
                    <button aria-label="Minimize" onClick={(e) => {
                        dispatch({ type: 'MINIMIZE_APP', minimizeID: appData.id })
                        e.stopPropagation()
                    }}></button>
                    <button aria-label="Maximize" onClick={(e) => {
                        setWindowWidth(width)
                        setWindowHeight(height - 72)
                        setTop(0)
                        setLeft(0)
                        setResize('none')
                        setOverflowX('visible')
                        setMaxWindowState({ x: 0, y: 0 })
                        e.stopPropagation()
                    }}></button>
                    <button aria-label="Close" onClick={(e) => {
                        dispatch({ type: 'CLOSE_APP', closeID: appData.id })
                        e.stopPropagation()
                    }}></button>
                </div>
            </div>
            <div ref={contentRef} className="window-body overflow-scroll" style={{ overflow: 'scroll', overflowX: overflowX, margin: 0, minWidth: "300px", height: `${windowHeight}px`, resize: resize }}>
                {appData.exe}
            </div>
        </div>
    </Draggable>;
}
