import React from 'react'

export default function CropAnalysis() {
    return (
        <div className='text-justify flex'>
            <div className='p-8 flex-[0.5]'>
                <p className='text-5xl font-bold mb-4'>Crop Analysis</p>
                <div>
                    <p className='text-3xl mb-4'>About</p>
                    <p className='text-lg'>
                        My first official paper that was written as part of my project in Data Science. We are asked to pick from a variety of domains, so my teammate and I decided to pick agriculture for analysis, due to the variety of parameters present in growth, sales and nurturing of crops. For this, we selected the state of Andhra Pradesh in South India where rice is grown in fairly abundant quantities, and performed analysis on it.
                    </p>
                </div>
            </div>
            <div className='h-[88vh] p-8 flex-[0.5]'>

                <embed
                    src={"/apps/ids/CropAnalysis.pdf#view=FitH"}
                    type="application/pdf"
                    height="100%"
                    width="100%"
                />
            </div>
        </div >
    )
}
