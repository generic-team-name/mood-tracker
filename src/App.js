import React, { Component } from 'react';
import { Layout } from './components/Layout';
import { SubmitForm } from './components/Form';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Layout>
          <br />
          <h1>How are you today?</h1>
          <SubmitForm />
        </Layout>
      </React.Fragment>
    )
  }
}

export default App;