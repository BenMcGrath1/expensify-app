import React from 'react';
import { Link } from 'react-router-dom';

const ExpenseListItem = ({ amount, createdAt, description, dispatch, id }) => (
  <div>
    <Link to={`/edit/${id}`}>
      <h3>{description}</h3>
    </Link>
    <p>
      {amount} - {createdAt}
    </p>
  </div>
);

export default ExpenseListItem;
