import React, { useEffect } from 'react'
import List from '../components/List'

const ChatPage = () => {

    useEffect(() => {
        async function get() {
            const res = await fetch('http://localhost:5000/data')
            const data = res.json()
            return data
        }
        get().then(d => {
            console.log(d)
        })
    }, [])
    return (
        <div className=" h-full w-full overflow-auto">
            <List name='Jack' />
            <h1>Chat page</h1>
        </div>
    )
}

export default ChatPage