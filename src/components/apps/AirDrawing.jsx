import React from 'react'
import './styles/AirDrawing.css'

export default function AirDrawing() {
    return (
        <div className='text-justify p-8'>
            <p className='text-5xl font-bold mb-12'> Converting Air Strokes into Writing</p>
            <p className='mb-4'>This project was made to improve accessibility for professors in lecture halls. These rooms were enormous and our professor usually liked to walk between rows to assist or observe students while working. Any change or clarification that they had to make would involve them walking all the way back to the board to make even minor corrections.</p>
            <p className='mb-4'>Our solution for this was a special pen with a sharp blue LED that would be picked up by our camera attached to our raspberry Pi and would convert the air strokes in the air to strokes on a board.</p>
            <p className='mb-4'>The main selling point was that it could be setup anywhere and any device that could run Python. It was cheap, effective and could be easily extend to lights of any color.</p>
            <p className='mb-4'>No video footage exists since this was assembled within the lab and for evaluation purposes only. However the code can be viewed from the folder or the link provided below</p>

            <a className="text-blue" href="https://github.com/MayoSR/InvisiblePen/blob/master/tracker.py">Click here to view the code </a>
        </div>
    )
}
