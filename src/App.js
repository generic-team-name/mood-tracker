import React, { Component } from 'react';
import { Layout } from './components/Layout';
import { Form } from './components/Form';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Layout>
          <br />
          <h1>How are you today?</h1>
          <Form />
        </Layout>
      </React.Fragment>
    )
  }
}

export default App;