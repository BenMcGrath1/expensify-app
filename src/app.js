import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibileExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';

const store = configureStore();

// add expense -> water bill
// add expense -> Gas bill
// setTextFilter --> bill

store.dispatch(
  addExpense({
    description: 'water bill',
    note: 'month of July',
    amount: 10000,
    createdAt: 144455
  })
);

store.dispatch(
  addExpense({
    description: 'gas bill',
    note: 'month of July',
    amount: 20000,
    createdAt: 21230123
  })
);

store.dispatch(
  addExpense({
    description: 'new phone',
    note: 'cuz I broek the last one',
    amount: 30000
  })
);

store.dispatch(
  addExpense({
    description: 'Rent',
    amount: 185000,
    createdAt: 200
  })
);

const state = store.getState();
const visibleExpenses = getVisibileExpenses(state.expenses, state.filters);

console.log('State: ', state);

console.log('Visible Expenses: ', visibleExpenses);

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
