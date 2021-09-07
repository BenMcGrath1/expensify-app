import selectExpensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('should return 0 if no expenses', () => {
  const total = selectExpensesTotal([]);
  expect(total).toBe(0);
});

test('should correctly add up a single expense', () => {
  const amount = expenses[2].amount;
  const total = selectExpensesTotal([expenses[2]]);
  expect(total).toBe(amount);
});

test('should correct add up multiple expenses', () => {
  const total = selectExpensesTotal(expenses);
  expect(total).toBe(4500732765);
});
