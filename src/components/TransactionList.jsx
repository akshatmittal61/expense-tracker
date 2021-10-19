import React, { useContext } from 'react'
import { GlobalContext } from '../Context/GlobalState'
import Transaction from './Transaction';

const TransactionList = () => {
    const { transactions } = useContext(GlobalContext);
    console.log(transactions);
    return (
        <>
            <h3>History</h3>
            <ul className="list">
                {
                    transactions.length !== 0 ? (
                        transactions.map((transaction, index) => (
                            <Transaction transaction={transaction} key={index} />
                        ))
                    ) : (
                        <div>No Transactions Yet</div>
                    )
                }
            </ul>
        </>
    )
}

export default TransactionList
