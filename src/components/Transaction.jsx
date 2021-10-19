import React, { useContext } from 'react'
import { GlobalContext } from '../Context/GlobalState'

const Transaction = ({ transaction }) => {
    const { deleteTransaction } = useContext(GlobalContext);
    const sign = transaction.amount < 0 ? '-' : '+';
    return (
        <li className={transaction.amount < 0 ? "minus" : "plus"}>
            {transaction.text}
            <span>{sign}&#8377;{Math.abs(transaction.amount)}</span>
            <button className="delete-btn" onClick={() => deleteTransaction(transaction.id)}>
                <span className="material-icons">close</span>
            </button>
        </li>
    )
}

export default Transaction
