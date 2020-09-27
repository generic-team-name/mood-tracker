import React from 'react';
import { Container } from 'react-bootstrap'
import SubmitForm from './components/Form';
import History from './components/History';
import styled from 'styled-components';

const StyledDiv = styled.div`
    margin-left: 5em;
`;

export const Home = () => (
    <StyledDiv>
        <br />
          <h1>How are you today?</h1>
          <Container fluid>
            <SubmitForm />
          </Container>
          <Container fluid>
          <br />
                <h2>Your History</h2>
            <History />
          </Container>
    </StyledDiv>
)