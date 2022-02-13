import React from 'react'
import './styles/StoryGenerator.css'

export default function StoryGenerator() {
    return (
        <div className='flex'>
            <div className='p-8 flex-[0.5] text-justify'>
                <p className='mb-2 text-4xl font-bold'>Story book generator using LSTM/GRU cells and a Bi-Directional RNN</p>
                <div>
                    <p className='text-2xl mb-2'>About</p>
                    <p className="text-xl">Given a story, this project attempts to create a new chapter from the data provided. For this, we used Harry Potter as a base example. The report goes into more technical detail and examples elucidating how it works and the results
                    </p>
                </div>
            </div>
            <div className='p-8 h-[90vh] flex-[0.5]'>

                <embed
                    src={"/apps/story/story.pdf#view=FitH"}
                    type="application/pdf"
                    height="100%"
                    width="100%"
                />
            </div>
        </div >
    )
}
