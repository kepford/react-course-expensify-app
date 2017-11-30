import { createStore, combineReducers } from 'redux';


// Expenses Reducer

const exspensesReducerDefaultState = [];

const exspensesReducer = (state = exspensesReducerDefaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const filtersReducerDefaultState = {
  text: '',
  sortBy: 'date', // date or amount
  startDate: undefined,
  endDate: undefined
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

// Store creation

const store = createStore(
  combineReducers({
    expenses: exspensesReducer,
    filters: filtersReducer
  })
);

console.log(store.getState());

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
    sortBy: 'amount', // date or amount
    startDate: undefined,
    endDate: undefined
  }
};


