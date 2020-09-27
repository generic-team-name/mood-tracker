import React, { Component } from 'react';
import { Container } from 'react-bootstrap'
import { Layout } from './components/Layout';
import SubmitForm from './components/Form';
import History from './components/History';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Layout>
          <br />
          <h1>How are you today?</h1>
          <Container fluid>
          <SubmitForm />
          </Container>
          <Container fluid>
          <History />
          </Container>
        </Layout>
      </React.Fragment>
    )
  }
}

export default App;