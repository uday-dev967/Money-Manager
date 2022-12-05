import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'
import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

// Write your code here

class MoneyManager extends Component {
  state = {
    title: '',
    amount: '',
    transactionList: [],
    type: 'Income',
  }

  onNewTransaction = event => {
    event.preventDefault()
    console.log('onNewTransaction triggered')
    const {title, amount, type} = this.state
    const newTransaction = {
      id: uuidv4(),
      title,
      amount,
      type,
    }
    this.setState(prevState => ({
      transactionList: [...prevState.transactionList, newTransaction],
      title: '',
      amount: '',
      type: 'Income',
    }))
  }

  onDeleteTransaction = id => {
    this.setState(prevState => ({
      transactionList: prevState.transactionList.filter(each => each.id !== id),
    }))
  }

  onChangeTitle = event => {
    this.setState({title: event.target.value})
  }

  onChangeAmount = event => {
    const x = event.target.value
    this.setState({amount: parseInt(x)})
  }

  onTypeChange = event => {
    const typeId = event.target.value
    const getType = () => {
      const [x] = transactionTypeOptions.filter(
        each => each.optionId === typeId,
      )
      return x.displayText
    }
    const type = getType(typeId)
    this.setState({type})
  }

  caluculation = () => {
    const {transactionList} = this.state
    const totalIncomeList = transactionList.map(each => {
      if (each.type === 'Income') {
        return each.amount
      }
      return 0
    })
    const totalExpensesList = transactionList.map(each => {
      if (each.type === 'Expenses') {
        return each.amount
      }
      return 0
    })
    const reducer = (accumulator, currentValue) => accumulator + currentValue
    const totalIncome =
      totalIncomeList.length > 0 ? totalIncomeList.reduce(reducer) : 0
    const totalExpenses =
      totalExpensesList.length > 0 ? totalExpensesList.reduce(reducer) : 0
    const Balance = totalIncome - totalExpenses
    const acountFinance = {
      totalIncome,
      totalExpenses,
      Balance,
    }
    return acountFinance
  }

  render() {
    const {title, amount, transactionList} = this.state
    const {totalIncome, totalExpenses, Balance} = this.caluculation()
    const detail = transactionTypeOptions
    return (
      <div className="app-container">
        <div className="main-container">
          <div className="master-container">
            <h1 className="name">Hi, Uday</h1>
            <p className="tag">
              Welcome back to your <span className="hiligt">Money Manager</span>
            </p>
          </div>
          <div className="money-details-container">
            <MoneyDetails
              totalExpenses={totalExpenses}
              totalIncome={totalIncome}
              Balance={Balance}
            />
          </div>
          <div className="acounting-contaier">
            <form
              className="transcation-form-contaniner"
              onSubmit={this.onNewTransaction}
            >
              <h1 className="form-heading">Add Transaction</h1>
              <label htmlFor="title" className="label">
                Title
              </label>
              <input
                type="text"
                value={title}
                className="input"
                id="title"
                placeholder="Title"
                onChange={this.onChangeTitle}
              />
              <label htmlFor="amount" className="label">
                Amount
              </label>
              <input
                type="text"
                className="input"
                id="amount"
                placeholder="Amount"
                value={amount}
                onChange={this.onChangeAmount}
              />
              <label htmlFor="type" className="label">
                Type
              </label>
              <select
                name="type"
                id="type"
                className="input"
                onChange={this.onTypeChange}
                defaultValue={detail[0].optionId}
              >
                <option value={detail[0].optionId}>
                  {detail[0].displayText}
                </option>
                <option value={detail[1].optionId}>
                  {detail[1].displayText}
                </option>
              </select>
              <button type="submit" className="add-button">
                Add
              </button>
            </form>
            <div className="history-container">
              <h1 className="form-heading">History</h1>
              <ul className="all-transactions-container">
                <div className="transaction-details">
                  <p className="his-head cell-width">Title</p>
                  <p className="his-head cell-width">Amount</p>
                  <p className="his-head cell-width">Type</p>
                </div>
                {transactionList.map(each => (
                  <TransactionItem
                    key={each.id}
                    transcationDetails={each}
                    onDeleteTransaction={this.onDeleteTransaction}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
