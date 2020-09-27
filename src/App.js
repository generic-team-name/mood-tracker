import React, { Component } from 'react';
import { Layout } from './components/Layout';
import { Home } from './Home';
import { Stats } from './Stats';
import { NotFound } from './NotFound';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Jumbotron } from './components/Jumbotron';
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <Jumbotron />
          <Sidebar />
          <Layout>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/stats" component={Stats} />
              <Route component={NotFound} />
            </Switch>
          </Layout>
        </Router>
      </React.Fragment>
    )
  }
}

export default App;