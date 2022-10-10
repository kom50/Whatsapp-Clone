import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import MdIcon from './MdIcon'

function TopNavigationBar() {
    const tabs = [{
        name: "CAMERA",
        route: '/camera'
    }, {
        name: "CHATS",
        route: '/'
    }, {
        name: "CONTACTS",
        route: '/contacts'
    }]

    const [currentTab, setCurrentTab] = useState('CHATS')

    const changeTabHandler = (tabName: string) => {
        setCurrentTab(tabName)
    }

    return (
        <>
            <div className="h-28 text-white  shadow-sm bg-[#075E54] relative">
                <div className="flex p-4 justify-between">
                    <h1 className="text-3xl">WhatsApp</h1>
                    <div className="flex gap-x-4">
                        <MdIcon text="search" />
                        <MdIcon text="more_vert" />
                    </div>
                </div>
                <div className='flex p-2 justify-between pb-5 sticky top-1'>
                    {
                        tabs.map(tab => {
                            if (tab.name === 'CAMERA')
                                return (
                                    <p onClick={() => changeTabHandler(tab.name)} className={currentTab === tab.name ? 'border-b-2' : ''} key={tab.name}>
                                        <Link to={'/camera'}>
                                            <MdIcon text="photo_camera" />
                                        </Link>
                                    </p>
                                )
                            else
                                return (
                                    <p onClick={() => changeTabHandler(tab.name)} className={currentTab === tab.name ? 'border-b-2' : ''} key={tab.name}> <Link to={tab.route}>{tab.name}</Link></p>
                                )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default TopNavigationBar