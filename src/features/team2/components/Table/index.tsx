import { columns } from 'features/team2/data'
import React from 'react'
import TableHeader from '../TableHeader'
import TableRows from '../TableRows'



const Table = ({type}:any) => {
  return (
    <div >
        <table className='w-full'> 
           <TableHeader columns={columns}/>
           <TableRows type={type} />
        </table>
    </div>
  )
}

export default Table