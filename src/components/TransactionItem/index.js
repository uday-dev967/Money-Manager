/* eslint-disable react/no-unknown-property */
import './index.css'

const TransactionItem = props => {
  const {transcationDetails, onDeleteTransaction} = props
  const {id, title, amount, type} = transcationDetails

  const onDelete = () => {
    onDeleteTransaction(id)
  }
  return (
    <li className="his-list-item">
      <p className="his-list-head his-cell-width">{title}</p>
      <p className="his-list-head his-cell-width">{amount}</p>
      <p className="his-list-head his-cell-width">{type}</p>
      <button type="button" className="delete-button" onClick={onDelete}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          alt="delete"
          testid="delete"
          className="delete-icon"
        />
      </button>
    </li>
  )
}

export default TransactionItem
