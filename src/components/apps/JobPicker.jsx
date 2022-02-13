import React from 'react'
import './styles/JobPicker.css'

export default function JobPicker() {
    return (
        <div className='flex'>
            <div className='p-8 flex-[0.5]'>
                <p className='mb-2 text-5xl font-bold'>Job Tracker App</p>
                <div>
                    <p className='text-2xl mb-2'>About</p>
                    <p className="text-xl text-justify">The app is a simple job searching app. While these apps already
                    exist in some form or the other, they are usually fairly cluttered
                    or not isolated experiences. For example,LinkedIn supports job
                    postings, but because there's so many other things going on,
                    sometimes the job portion feels like an after thought. I preferred
                    the idea of an app exclusively for job postings only, where all
                    relevant job data and communication could be neatly collated in one
                    place.
                    </p>
                </div>
            </div>
            <div className='p-8 h-[90vh] flex-[0.5]'>

                <img src="/apps/job/banner.png" />
            </div>
        </div >
    
    )
}
