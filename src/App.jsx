import React from 'react'
import Header from './components/Header/Header'
import flag from "./assets/flag.jpg"
import { Button } from '@mui/material'

function Card({name, designation}){
  return (
                <div className='flex flex-col gap-4 p-2 rounded-md items-center bg-white shadow-md max-w-48'>
              <div className='rounded-full w-16 h-16 border-black border-4 bg-blue-500'></div>
              <p className='font-bold'>{name}</p>
              {
                designation.map(n =>  
                <p className='text-center text-gray-500 text-xs'>{n}</p>
                )
              }
              <div className='flex'>
                <Button>Profile</Button>
                <Button>Message</Button>
              </div>
            </div>
  )
}

export default function App() {
  return (
    <div>
      <Header />
      <div className='relative'>
        <img className='absolute inset-0 w-full h-full object-cover' src={flag} />
        <div className='absolute inset-0 bg-blue-950/60'></div>
        <div className='relative flex flex-col items-center gap-8 px-4 py-32 text-center z-50 text-white'>
        <h1 className='text-2xl font-bold md:text-6xl'>Mahatma Jyotiba Phule Rohilkhand University</h1>
        <p className='text-xs md:text-lg'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore rerum corrupti dolores velit maxime quo quis, voluptates corporis beatae fugit nobis ipsa illo porro adipisci dolorum eius? Provident, modi impedit!</p>
        <div className='flex gap-2 flex-col md:flex-row'>
          <Button sx={{bgcolor:"#0f172b"}} className='w-32' variant='contained'>Events</Button>
          <Button sx={{bgcolor:"#0f172b"}} className='w-32' variant='contained'>Sports</Button>
        </div>
        </div>
      </div>
      <section className='bg-white flex flex-col md:flex-row py-16 px-4 gap-8'>
          <div className='flex flex-col gap-4 flex-1'>
            <p className='font-bold text-2xl md:text-4xl'>Sports Council</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id, magnam recusandae? Odit corporis molestiae omnis veritatis illum exercitationem qui quasi repudiandae adipisci. Rerum dolor pariatur explicabo possimus quia necessitatibus est!</p>
          </div>
          <div className='flex flex-1 flex-col justify-center items-center md:flex-row gap-4'>
            <Card 
            name={"Smt. Anandiben Patel"}
            designation={["Hon'ble Governer of Uttar Pradesh",
              "Chancellor"
            ]}
             />
            <Card 
            name={"Prof. K. P. Singh"}
            designation={["Vice Chancellor",
              "Mahatma Jyotiba Phule Rohilkhand University"
            ]}
             />
          </div>
      </section>
    </div>
  )
}
