import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react'

const teams = [
    "CSC",
    "ECE",
    "MEM",
    "EEE"
]

export default function 
() {
  return (
        <TableContainer>
            <Table stickyHeader>
                <TableHead>
                    <TableRow>
                        <TableCell align='left'> <p className='text-gray-500 text-xs'>Team</p></TableCell>
                        <TableCell align='right'><p className='text-gray-500 text-xs'>M</p></TableCell>
                        <TableCell align='right'><p className='text-gray-500 text-xs'>W</p></TableCell>
                        <TableCell align='right'><p className='text-gray-500 text-xs'>L</p></TableCell>
                        <TableCell align='right'><p className='text-gray-500 text-xs'>NRR</p></TableCell>
                        <TableCell align='right'><p className='text-gray-500 text-xs'>Pts</p></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        teams.map((n, i) => {
                            return(
                                <TableRow>
                                    <TableCell padding='none' align='left'>
                                        <div className='flex gap-2 items-center'>
                                            <p>{i + 1}.</p>
                                            <div className='w-8 h-8 bg-red-500 rounded-md'></div>
                                            <p>{n}</p>
                                        </div>
                                    </TableCell>
                                    <TableCell  align='right'>
                                        <p>3</p>
                                    </TableCell>
                                    <TableCell align='right'>
                                        <p>3</p>
                                    </TableCell>
                                    <TableCell align='right'>
                                        <p>3</p>
                                    </TableCell>
                                    <TableCell align='right'>
                                        <p>+0.912</p>
                                    </TableCell>
                                    <TableCell align='right'>
                                        <p className='font-bold'>6</p>
                                    </TableCell>
                                </TableRow>
                            )
                        })
                    }
                </TableBody>
            </Table>
        </TableContainer>
  )
}
