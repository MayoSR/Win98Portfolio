import React from 'react'
import './styles/FoodOrdering.css'

export default function FoodOrdering() {
    return (
        <div>
            <div className='w-[50%] text-justify'>
                <p className='text-5xl mb-2 font-bold'>Food Ordering App</p>
                <p className='text-3xl mb-2'>Red Bull Basement Hackathon</p>
                <div>
                    <p className='text-3xl mb-2'>About</p>
                    <p className='text-lg mb-2'>This was a prototype app written for our pitch in the Red Bull Basement University Hackathon. College canteens are a mess in general, so the idea was to create a scheduling and pre-order system, where students could place orders from their classroom beforehand and pick it up during the breaks or whenever was convenient to them. The benefit would be to prevent the rushing and crowds that would form during breaks, which sometimes took so much time to clear that people would end up being late to class due to inability to get food quickly.

                    </p>
                    <p className='text-lg mb-2'>
                        While we did not qualify, we came around 5th in the India for the pitch and idea. This app is just a simple ordering app of what it might have looked like had it been implemented.

                    </p>

                </div>
            </div>

        </div >

    )
}
