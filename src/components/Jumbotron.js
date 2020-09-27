import React from 'react';
import { Jumbotron as Jumbo } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
  .jumbotron {
    background-color: #111;
    height: 8rem;
    padding: 1rem 3rem;
    display: flex;
  }
  .jumbotron h1, .jumbotron p{
    color: white;
    padding-left: 1rem;
  }
  .jumbotron h1 {
    padding-top: 0.25rem;
  }
  img {
    filter: invert(100%);
    padding: 1rem 1rem;
  }
`;

export const Jumbotron = () => (
  <Styles>
    <Jumbo fluid>
      <div>
        <img alt="logo" src="../assets/png/logo.png" />
      </div>
      <div>
        <h1>QuickNotes</h1>
        <p>Record your life</p>
      </div>
    </Jumbo>
  </Styles >
)