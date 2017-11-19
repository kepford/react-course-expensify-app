import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import ExpenseDashboardPage from './../components/ExpenseDashboardPage'
import AddExpensePage from './../components/AddExpensePage'
import EditExpensePage from './../components/EditExpensePage'
import HelpPage from './../components/HelpPage'
import NotFoundPage from './../components/NotFoundPage'

const Header = () => (
  <header>
    <h1>Expensify</h1>
    <NavLink exact={true} to="/" activeClassName="is-active">Dashboard</NavLink>
    <NavLink exact={true} to="/create" activeClassName="is-active">Create Expense</NavLink>
    <NavLink exact={true} to="/edit" activeClassName="is-active">Edit Expense</NavLink>
    <NavLink exact={true} to="/help" activeClassName="is-active">Help</NavLink>
  </header>
);

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header/>
      <Switch>
        <Route path="/" component={ExpenseDashboardPage} exact={true} />
        <Route path="/create" component={AddExpensePage} />
        <Route path="/edit" component={EditExpensePage} />
        <Route path="/help" component={HelpPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
