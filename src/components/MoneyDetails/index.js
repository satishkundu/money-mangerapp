// Write your code here
import './index.css'

const MoneyDetails = props => {
  const {balanceAmount, incomeAmount, expensesAmount} = props

  return (
    <div className="money-details-container">
      <div className="balance-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt=" balance"
        />
      </div>
      <div>
        <p className="details-text">Your Balance</p>
        <p className="details-money">Rs{balanceAmount}</p>
      </div>
      <div className="income-conntainer">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
        />
      </div>
      <div>
        <p className="details-text">Your Income</p>
        <p className="details-money">Rs{incomeAmount}</p>
      </div>
      <div className="expenses-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png "
          alt="expenses"
        />
      </div>
      <div>
        <p className="details-text">Your Expenses</p>
        <p className="details-money">Rs{expensesAmount}</p>
      </div>
    </div>
  )
}
export default MoneyDetails
