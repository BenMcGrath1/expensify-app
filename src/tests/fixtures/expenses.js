import moment from 'moment';

export default [
  {
    id: '1',
    description: 'golf',
    note: 'Yankee Trace',
    amount: 4500546565,
    createdAt: 0
  },
  {
    id: '2',
    description: 'beer',
    note: 'budweiser',
    amount: 1200,
    createdAt: moment(0).subtract(4, 'days').valueOf()
  },
  {
    id: '3',
    description: 'rent',
    note: 'August',
    amount: 185000,
    createdAt: moment(0).add(4, 'days').valueOf()
  }
];
