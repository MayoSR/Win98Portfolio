import React from 'react'

export default function HTMLWireframe() {
    return (
        <div className='text-justify'>
            <div className='flex'>
                <div className='flex-col p-8 flex-[0.5]'>
                    <div>

                        <p className='text-4xl mb-2 font-bold'>HTML Wireframe to Website Converter</p>
                        <div>
                            <p className='text-3xl mb-2'>About</p>
                            <p className='text-lg mb-2'>
                                This project aims to convert hand-drawn wireframe images into actual websites. The report goes in detail as to the content and implementation details. Only the first 20-30 pages contain relevant information. The rest consists of code screenshots and images with examples.


                            </p>
                            <p className='text-lg'>
                                Below is a video showing how it works

                            </p>
                        </div>
                    </div>
                    <div className='h-[70%]'>
                        <iframe
                            src="https://www.loom.com/embed/8c6ee684140d4613893b3b1f2bbe0fd2"
                            frameborder="0"
                            webkitallowfullscreen
                            mozallowfullscreen
                            allowfullscreen
                            style={{ width: "100%", height: "100%" }}
                            title="wireframe video"
                        />
                    </div>
                </div>

                <div className='flex-[0.5] h-screen'>
                    <embed
                        src={"/apps/wireframe/Report.pdf#view=FitH"}
                        type="application/pdf"
                        height="100%"
                        width="100%"
                    />
                </div>
            </div >

        </div>

    )
}
