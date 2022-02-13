import React, { useState } from 'react'

export default function AboutMe() {

    const [showText, setShowText] = useState(0)

    const copyClipboard = () => {
        navigator.clipboard.writeText("mayankrao16university@gmail.com")
        setShowText(1)
        setTimeout(() => { setShowText(0) }, 1000)
    }

    return (
        <div className='p-[20px]'>
            <div className='flex'>
                <div className='flex jusitfy-center flex-col h-full pr-[40px] border-r-2'>
                    <div>
                        <img src={"/me.jpg"} height="300px" width="300px" style={{ borderRadius: "50%" }} />
                    </div>
                    <div className='flex w-[300px] justify-evenly mt-[30px]' >
                        <a href="https://github.com/MayoSR">
                            <img
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                                alt="github"
                                height="50px"
                                width="50px"
                            />
                        </a>
                        <a href="https://www.linkedin.com/in/mayank-rao-87155a223/">
                            <img
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
                                alt="linkedin"
                                height="50px"
                                width="50px"
                            />
                        </a>
                        <a href="https://www.hackerrank.com/mayankrao16?hr_r=1" >
                            <img
                                src="/apps/me/hackerrank.png"
                                alt="hackerrank"
                                height="50px"
                                width="50px"
                            />
                        </a>
                        <div className='relative'>
                            {showText ? <p className='text-xs absolute black w-[200px]'>Copied to clipboard!</p> : <></>}
                        </div>

                    </div>
                </div>
                <div className='text-black ml-[20px]' >
                    <div className='mb-[20px]'>
                        <p className='text-4xl'>Hello! I am Mayank Sailesh Rao</p>
                    </div>
                    <div className='text-left'>
                        <p className='text-lg mb-[10px]'>I'm an Associate Software Developer L2 currently working at Publicis Sapient</p>
                        <p className='text-lg mb-[10px]'>My passions include making accessible technology and interface design. When I'm not working, I usually spend most of my free time either honing my UI skills further, or studying about new technologies in the FullStack sphere.</p>
                        <p className='text-lg mb-[10px]'>I normally relax by reading books or articles, watching YouTube videos or Twitch streams or playing Chess, Soccer, swimming, working out or gaming</p>
                        <p className='text-lg mb-[10px]'>Mainly my hobbies consist of making small games or developing apps. While I usually mix up my schedule to avoid burn out, I spend most of my time either considering what app to make next or improvements to my existing apps.</p>
                        <p className='text-lg mb-[10px]'>When I want to do something truly challenging and outside my usual comfort zone, I like to either solve competitive coding questions or learn new tech stacks. At present, I'm working on learning Rust.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
