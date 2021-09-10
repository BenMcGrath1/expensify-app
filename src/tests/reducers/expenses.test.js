import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should set default state', () => {
  const state = expensesReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual([]);
});

test('should remove expense by id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: expenses[1].id
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should not remove expense if id is not found', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: '-1'
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

// should add an expense

test('should add an expense ', () => {
  const expense = {
    id: '109',
    description: 'dinner',
    note: 'cazadores',
    amount: 2300,
    createdAt: 20000
  };
  const action = {
    type: 'ADD_EXPENSE',
    expense
  };

  const state = expensesReducer(expenses, action);
  expect(state).toEqual([...expenses, expense]);
});

test('should edit an expense', () => {
  const description = 'coffee';
  const action = {
    type: 'EDIT_EXPENSE',
    id: expenses[0].id,
    updates: {
      description
    }
  };

  const state = expensesReducer(expenses, action);
  expect(state[0].description).toBe(description);
});

test('should not edit expense if it is not found', () => {
  const updates = {
    description: 'coffee',
    note: 'dunkin',
    amount: 10000,
    createdAt: 14
  };

  const action = {
    type: 'EDIT_EXPENSE',
    id: '47',
    updates
  };

  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test('should set expenses', () => {
  const initExpenses = [
    {
      id: '109',
      description: 'dinner',
      note: 'cazadores',
      amount: 2300,
      createdAt: 20000
    },
    {
      id: '123',
      description: 'lunch',
      note: '',
      amount: 1200,
      createdAt: 8712391
    }
  ];
  const action = { type: 'SET_EXPENSES', expenses };
  const state = expensesReducer(initExpenses, action);
  expect(state).toEqual(expenses);
});
