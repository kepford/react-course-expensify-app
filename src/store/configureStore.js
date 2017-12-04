import { createStore, combineReducers } from 'redux';
import exspensesReducer from '../reducers/expenses';
import filtersReducer from '../reducers/filters'

export default () => {
  const store = createStore(
    combineReducers({
      expenses: exspensesReducer,
      filters: filtersReducer
    })
  );

  return store;
};

