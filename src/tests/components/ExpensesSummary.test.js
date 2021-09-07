import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';
import expenses from '../fixtures/expenses';

test('should render one expense summary correctly', () => {
  const wrapper = shallow(
    <ExpensesSummary expensesCount={1} expensesTotal={235} />
  );
  expect(wrapper).toMatchSnapshot();
});

test('should render multiple expenses correctly', () => {
  const wrapper = shallow(
    <ExpensesSummary expensesCount={expenses.length} expensesTotal={100010} />
  );
  expect(wrapper).toMatchSnapshot();
});
