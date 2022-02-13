import React from 'react'
import './styles/EmergencyApp.css'

export default function EmergencyApp() {
    return (
        <div className='flex text-justify '>
            <div className='flex-[0.5]'>
                <div className='p-8'>

                    <p className='text-5xl mb-2 font-bold'>Emergency App</p>
                    <p className='text-3xl mb-2'>Gan Eagla</p>
                </div>
                <div className='p-8 pt-0'>
                    <p className='text-3xl mb-2'>About</p>
                    <p className='text-lg mb-2'>This app was built as a request from my friend who is doing his Masters in management. For a particular demonstration, he wanted an app to show off some of the features and talking points that he had discussed in his presentation; but felt that having an actual app would be far more beneficial and insightful for the purposes of a demo.

                    </p>
                    <p className='text-lg mb-2'>
                        On the right, was the prototype design that he provided as a template. The rest was up to me.

                    </p>
                    <p className='text-lg mb-2'>
                        He contacted me about 1-2 days before his demonstration, so I built the app as quickly as I could, and this is the result of the app. If you would like to see the live demo, you can click the live demo option in the folder directory.
                    </p>
                </div>
            </div>
            <div className='flex-[0.5] h-[90vh] p-8'>

                <embed
                    src={"/apps/emergency/appdoc.pdf#view=FitH"}
                    type="application/pdf"
                    height="100%"
                    width="100%"
                />
            </div>
        </div >
    )
}
