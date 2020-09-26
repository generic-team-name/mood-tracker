import React, { Component } from 'react';
import { Layout } from './components/Layout';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Layout>
          <h1>How are you today?</h1>
        </Layout>
      </React.Fragment>
    )
  }
}

export default App;