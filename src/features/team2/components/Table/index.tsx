import { columns } from 'features/team2/data'
import React from 'react'
import TableHeader from '../TableHeader'
import TableRows from '../TableRows'



const Table = ({type ,search,sort ,setSort}:any) => {
  return (
    <div >
        <table className='w-full'> 
           <TableHeader columns={columns} setSort={setSort}/>
           <TableRows type={type}  search={search} sort={sort} />
        </table>
    </div>
  )
}

export default Table