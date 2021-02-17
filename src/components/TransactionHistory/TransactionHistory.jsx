import React from "react";
import PropTypes from "prop-types";
import styles from "./TransactionHistory.module.css";

/* {
    "id": "1e0700a2-5183-4291-85cc-2065a036a683",
    "type": "invoice",
    "amount": "964.82",
    "currency": "LRD"
  },*/ 
const TransactionHistory = ({items}) => (
    <table className={styles.transaction_history}>
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>
  <tbody>
      {items.map(item=> (
    <tr key={item.id}>
      <td>{item.type}</td>
      <td>{item.amount}</td>
      <td>{item.currency}</td>
    </tr>))}
    {/*<tr>
      <td>Withdrawal</td>
      <td>85</td>
      <td>USD</td>
    </tr>*/}
  </tbody>
</table>
);

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
     id: PropTypes.string.isRequired,
     type: PropTypes.string.isRequired,
     amount: PropTypes.number.isRequired,
     currency: PropTypes.string.isRequired,
    }) 
  )
}
export default TransactionHistory;