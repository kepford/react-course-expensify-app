import { createStore, combineReducers } from 'redux';

const demoState = {
  expenses: [{
    id: 'alajksdflkjsdf',
    description: 'January Rent',
    note: 'This was the final payment for that address',
    amount: 54500,
    createdAt: 0
  }],
  filters: {
    text: 'rent',
    sortBy: 'ammunt', // date or amount
    startDate: undefined,
    endDate: undefined
  }
};


