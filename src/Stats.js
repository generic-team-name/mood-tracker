import React from 'react';
import Chart from './components/PieChart';
import styled from 'styled-components';

const StyledDiv = styled.div`
    margin-left: 5em;
`;

const CenterDiv = styled.div`
    width: 50%;
    margin: auto;
`;

export const Stats = () => (
    <StyledDiv>
        <br />
        <h1>Statistics</h1>
        <br />
        <div class="piechart">
            <Chart />
        </div>
    </StyledDiv>
)