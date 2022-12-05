/* eslint-disable react/no-unknown-property */
import './index.css'

const MoneyDetails = props => {
  const {totalExpenses, totalIncome, Balance} = props

  return (
    <>
      <div className="list-item balance">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
          className="details-image"
        />
        <div>
          <p className="text">Your Balance</p>
          <p className="amount" testid="balanceAmount">
            Rs {Balance}
          </p>
        </div>
      </div>
      <div className="list-item income">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
          className="details-image"
        />
        <div>
          <p className="text">Your Income</p>
          <p className="amount" testid="incomeAmount">
            Rs {totalIncome}
          </p>
        </div>
      </div>
      <div className="list-item expenses">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
          className="details-image"
        />
        <div>
          <p className="text">Your Expenses</p>
          <p className="amount" testid="expensesAmount">
            Rs {totalExpenses}
          </p>
        </div>
      </div>
    </>
  )
}

export default MoneyDetails
