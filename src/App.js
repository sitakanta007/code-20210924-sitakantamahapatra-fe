//import react packages
import React, { Component } from 'react';

//import other packages
import  { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

//import components
import AppHeader from './components/PageLayout/AppHeader';
import AppFooter from './components/PageLayout/AppFooter';
import Home from './components/Pages/Home';
import CarList from './components/Pages/CarList';
import PageNotFound from './components/PageLayout/PageNotFound';

//import stylesheet
import './styles/css/styles.css';

//apollo client setup
const client = new ApolloClient({
  uri: process.env.REACT_APP_API_URL
})

function App() {
  return (
    <ApolloProvider client={client}>
    <Router>
      <div className="App" id="container">
        <AppHeader></AppHeader>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/car-list">
            <CarList />
          </Route>
          <Route path="*">
            <PageNotFound />
          </Route>
        </Switch>
        <AppFooter></AppFooter>
      </div>
    </Router>
    </ApolloProvider>
  );
}

export default App;
