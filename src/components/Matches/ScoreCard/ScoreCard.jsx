import React from 'react'

const scoreTable = [
    {
    name: "Siddharth",
    run: 96,
    balls: 48 
    },
    {
    name: "Aakash",
    run: 33,
    balls: 30 
    },
    {
    name: "Yaten",
    run: 45,
    balls: 20,
    out: "Harshit"
    },
]

export default function ScoreCard() {
  return (
    <div className='border-gray-500 border-y-1 flex flex-col gap-2'>
      <div className='flex justify-between text-gray-500'>
        <p className='text-sm'>Group Stage • T20 1 of 19</p>
        <p className='text-sm'>9 Sept</p>
      </div>
      <div className='flex justify-between text-gray-500'>
        <div className='flex gap-2 items-center'>
          <div className='bg-red-500 w-8 h-8 rounded-md'></div>
          <p>CS Challengers</p>
        </div>
        <p className='font-bold'>188/6 (20)</p>
      </div>
      
      <div className='flex justify-between text-gray-500'>
        <div className='flex gap-2 items-center'>
          <div className='bg-blue-500 w-8 h-8 rounded-md'></div>
          <p>EC Elites</p>
        </div>
        <p className='font-bold'>188/6 (20)</p>
      </div>
      <p>CSC Won by 19 Runs</p>
    </div>
  )
}
