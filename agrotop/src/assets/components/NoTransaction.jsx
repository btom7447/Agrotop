import React from 'react'
import emptyPlaceholder from '../images/no-transaction.png';

const NoTransaction = () => {
    return (
        <div className='empty-placeholder'>
            <img src={emptyPlaceholder} alt="No Transaction found" />
            <h6>No Transactions Yet</h6>
            <p>Every transaction performed will appear here.</p>
        </div>
    )
}

export default NoTransaction;