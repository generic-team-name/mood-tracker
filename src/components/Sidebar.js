import React from 'react';
import styled from 'styled-components';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const StyledSideNav = styled.div`
    position: fixed;
    height: 100%;
    width: 90px;
    z-index: 1;
    top: 8rem;
    background-color: #222;
    overflox-x: hidden;
    padding-top: 5rem;
    left: 0;
    `;

const StyledImg = styled.img`
    filter: invert(75%);
    padding-bottom: 2rem;
`;

const StyledImg2 = styled.img`
    filter: invert(75%);
    width: 50px;
`;

class SideNav extends React.Component {
    render() {
        return (
            <StyledSideNav>
                <Nav defaultActiveKey="/" className="flex-column">
                        <Nav.Item>
                            <Nav.Link>
                                <Link to="/"><StyledImg alt='Home' src='../assets/png/home.png'/></Link>
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link>
                                <Link to="/stats"><StyledImg2 alt='Stats' src='../assets/png/stats.png'/></Link>
                            </Nav.Link>
                        </Nav.Item>
                </Nav>
            </StyledSideNav>
        );
    }
}

export default class Sidebar extends React.Component {
    render() {
        return (
            <SideNav />
        );
    }
}