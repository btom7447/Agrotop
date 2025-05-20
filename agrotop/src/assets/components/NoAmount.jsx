import React from 'react'

const NoAmount = ({ text }) => {
    return (
        <div className='empty-placeholder'>
            <h6>No {text} Found</h6>
        </div>
    )
}

export default NoAmount;