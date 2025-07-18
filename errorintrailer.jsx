//not working with react-player

export const dummyTrailers = [
    {
        image: "https://img.youtube.com/vi/WpW36ldAqnM/maxresdefault.jpg",
        videoUrl: 'https://www.youtube.com/watch?v=WpW36ldAqnM'
    },
    {
        image: "https://img.youtube.com/vi/-sAOWhvheK8/maxresdefault.jpg",
        videoUrl: 'https://www.youtube.com/watch?v=-sAOWhvheK8'
    },
    {
        image: "https://img.youtube.com/vi/1pHDWnXmK7Y/maxresdefault.jpg",
        videoUrl: 'https://www.youtube.com/watch?v=1pHDWnXmK7Y'
    },
    {
        image: "https://img.youtube.com/vi/umiKiW4En9g/maxresdefault.jpg",
        videoUrl: 'https://www.youtube.com/watch?v=umiKiW4En9g'
    },
]

import React, { useState } from 'react'
import { dummyTrailers } from '../assets/assets'
import ReactPlayer from 'react-player'
import { PlayCircleIcon } from 'lucide-react'

const TrailersSection = () => {
  const [currentTrailer, setCurrentTrailer] = useState(dummyTrailers[0])

  return (
    <div className='px-6 md:px-16 lg:px-24 xl:px-44 py-20 overflow-hidden'>
      <p className='text-gray-300 font-medium text-lg max-w-[960px] mx-auto'>Trailers</p>
      <div className='relative mt-6'>
        <ReactPlayer
          url={currentTrailer.videoUrl}
          controls={false}
          className='mx-auto max-w-full'
          width='960px'
          height='540px'
        />
      </div>

      <div className='group grid grid-cols-4 gap-4 md:gap-8 mt-8 max-w-3xl mx-auto' >
        {dummyTrailers.map((trailer)=>(
          <div key={trailer. image} className=' relative group-hover:not-hover:opacity-50 hover:-translate-y-1 duration-300 transition max-md:h-60 md:max-h-60 cursor-pointer' 
          onClick={() => setCurrentTrailer(trailer)}>
            <img src={trailer.image} alt="trailer" className='rounded-lg w-full h-full object-cover brightness-75'/>
            <PlayCircleIcon strokeWidth={1.6} className='absolute top-1/2 left-1/2 w-5 md:w-8 h-8 md:h-12 transform -translate-x-1/2 -translate-y-1/2' />
          </div>
        ))}
      </div>
    </div>
  )
}

export default TrailersSection

//Working with iframe 

export const dummyTrailers = [
    {
        image: "https://img.youtube.com/vi/WpW36ldAqnM/maxresdefault.jpg",
        videoUrl: 'https://www.youtube.com/watch?v=WpW36ldAqnM',
        embedUrl: 'https://www.youtube.com/embed/WpW36ldAqnM'
    },
    {
        image: "https://img.youtube.com/vi/-sAOWhvheK8/maxresdefault.jpg",
        videoUrl: 'https://www.youtube.com/watch?v=-sAOWhvheK8',
        embedUrl: 'https://www.youtube.com/embed/-sAOWhvheK8'
    },
    {
        image: "https://img.youtube.com/vi/1pHDWnXmK7Y/maxresdefault.jpg",
        videoUrl: 'https://www.youtube.com/watch?v=1pHDWnXmK7Y',
        embedUrl: 'https://www.youtube.com/embed/1pHDWnXmK7Y'
    },
    {
        image: "https://img.youtube.com/vi/umiKiW4En9g/maxresdefault.jpg",
        videoUrl: 'https://www.youtube.com/watch?v=umiKiW4En9g',
        embedUrl: 'https://www.youtube.com/embed/umiKiW4En9g'
    },
]


import React, { useState } from 'react'
import { dummyTrailers } from '../assets/assets'
import { PlayCircleIcon } from 'lucide-react'

const TrailersSection = () => {
  const [currentTrailer, setCurrentTrailer] = useState(dummyTrailers[0])

  return (
    <div className='px-6 md:px-16 lg:px-24 xl:px-44 py-20 overflow-hidden'>
      <p className='text-gray-300 font-medium text-lg max-w-[960px] mx-auto'>Trailers</p>
      <div className='relative mt-6 flex justify-center'>
        <div className='w-full max-w-[960px] aspect-video'>
          <iframe
            src={currentTrailer.embedUrl}
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
            className='w-full h-full rounded-lg'
            title="Trailer"
          ></iframe>
        </div>
      </div>

      <div className='group grid grid-cols-4 gap-4 md:gap-8 mt-8 max-w-3xl mx-auto'>
        {dummyTrailers.map((trailer) => (
          <div
            key={trailer.image}
            className='relative group-hover:not-hover:opacity-50 hover:-translate-y-1 duration-300 transition max-md:h-60 md:max-h-60 cursor-pointer'
            onClick={() => setCurrentTrailer(trailer)}
          >
            <img
              src={trailer.image}
              alt="trailer"
              className='rounded-lg w-full h-full object-cover brightness-75'
            />
            <PlayCircleIcon
              strokeWidth={1.6}
              className='absolute top-1/2 left-1/2 w-5 md:w-8 h-8 md:h-12 transform -translate-x-1/2 -translate-y-1/2'
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default TrailersSection
