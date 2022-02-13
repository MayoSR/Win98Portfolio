import React from 'react'
import './styles/MoviePicker.css'

export default function MoviePicker() {
    return (
        <div className='flex'>
            <div className='p-8 flex-[0.5]'>
                <p className='mb-2 text-5xl font-bold'>Movie Picker App</p>
                <div>
                    <p className='text-2xl mb-2'>About</p>
                    <p className="text-lg">Have you ever tried to find a movie you wanted to watch with
                        friends? Did you end up spending at least an hour trying to find
                        what to watch? Well this app aims to solve that problem! The app
                        allows users to create friend groups where they can add movies they
                        like into a playlist. Users within the group can then mark movies as
                        watched if they have already seen it, and when the time comes to
                        pick a movie to watch as a group, the ones that no one has viewed
                        can be chosen. This also allows you to keep track of what movies
                        your friends are watching and watch them yourself if you would like.
                        Besides that, the app offers its own details about a movie as well,
                        allowing users to get a brief idea of the movie they might want to
                        watch.
                    </p>
                </div>
            </div>
            <div className='p-8 h-[90vh] flex-[0.5]'>
                <img src="/apps/movie/banner.png" />
            </div>
        </div >
    )
}
