import React from 'react'

interface Props {
    text: string
}

const MdIcon = (props: Props) => {
    return (
        <>
            <span className="material-icons cursor-pointer text-white select-none">
                {props.text}
            </span>
        </>
    )
}

export default MdIcon