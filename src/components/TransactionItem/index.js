// Write your code here
import './index.css'

const TransactionItem = props => {
  const {transactionDetails, deleteTransaction} = props
  const {id, title, amount, type} = transactionDetails

  const onDeleteTransaction = () => {
    deleteTransaction(id)
  }

  return (
    <li>
      <p>{title}</p>
      <p>Rs{amount}</p>
      <p>{type}</p>
      <button type="button" onClick={onDeleteTransaction}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png "
          alt="delete"
        />
      </button>
    </li>
  )
}
export default TransactionItem
