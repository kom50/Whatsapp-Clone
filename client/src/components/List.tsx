import React from 'react'
import MdIcon from './MdIcon'

interface ListProps {
    name: string,
}
const List = (props: ListProps) => {
    return (
        <div className='bg-gray-400 border h-16 border-1 p-3 flex'>
            <div className='rounded-full h-8 w-8 bg-rose'>
                <MdIcon text='account_circle' />
            </div>
            <div className=''>
                <h1>{props.name}</h1>
            </div>
        </div>
    )
}

export default List