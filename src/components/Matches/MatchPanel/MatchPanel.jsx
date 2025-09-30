import { Box } from '@mui/material'
import React from 'react'
import ScoreCard from '../ScoreCard/ScoreCard'


export default function MatchPanel() {
  return (
          <div className='flex flex-col gap-4'>
            <p>9 Sept</p>
            <ScoreCard /> 
            <p>10 Sept</p>
            <ScoreCard /> 
            <p>11 Oct</p>
            <ScoreCard /> 
          </div>
  )
}
