import React from 'react'
import './styles/Connect4.css'

export default function Connect4() {
    return (
        <div className='flex-col text-justify' >
            <div className='p-8'>
                <p className="text-5xl mb-4 font-black">Connect 4</p>
                <div>
                    <p className="text-3xl mb-4">About</p>
                    <p className='text-lg'>
                        A simple Connect 4 game made using SocketIO for multiplayer.

                    </p>
                </div>
            </div>
            <div className="h-[88vh] p-8" >
                <iframe
                    src="https://www.loom.com/embed/770a43c6447b46faa188feb0d0b03cca"
                    frameborder="0"
                    webkitallowfullscreen
                    mozallowfullscreen
                    allowfullscreen
                    style={{ width: "100%", height: "100%" }}
                    title="wireframe video"
                />
            </div>
        </div >
    )
}
