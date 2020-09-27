import React, { Component } from 'react';
import { Form as Fo, ToggleButtonGroup, ToggleButton, Button } from 'react-bootstrap';
import styled from 'styled-components';

const StyledImg = styled.img`
    width: 4rem;
`;

export default class SubmitForm extends Component {
    constructor() {
        super();
        this.state = {
            mood: 'info',
            entry: ''
        };
        try { const test = JSON.parse(localStorage.getItem('array'));
        test.push('');
        test.pop('');
        } catch {
            let array = [];
            localStorage.setItem('array', JSON.stringify(array));
            console.log('reset');
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({ [name]: value });
    }

    handleSubmit(event) {
        const mood = this.state.mood;
        const entry = this.state.entry;
        event.preventDefault();
        let a = JSON.parse(localStorage.getItem('array'))
        a.unshift([Date.now(), mood, entry]);
        console.log(a);
        localStorage.setItem('array', JSON.stringify(a));
        window.location.reload();
    }

    render() {
        return (
            <Fo onSubmit={this.handleSubmit}>
                <Fo.Row>
                    <ToggleButtonGroup exclusive="true" name="mood" toggle size="lg">
                        <ToggleButton style={{ width: '6rem' }} type="radio" value="success" variant="success" onChange={this.handleChange}><StyledImg alt='Great' src='../assets/png/great.png'/></ToggleButton>
                        <ToggleButton style={{ width: '6rem' }} type="radio" value="primary" variant="primary" onChange={this.handleChange}><StyledImg alt='Good' src='../assets/png/good.png'/></ToggleButton>
                        <ToggleButton style={{ width: '6rem' }} type="radio" value="info" variant="info" onChange={this.handleChange} selected><StyledImg alt='Okay' src='../assets/png/okay.png'/></ToggleButton>
                        <ToggleButton style={{ width: '6rem' }} type="radio" value="warning" variant="warning" onChange={this.handleChange}><StyledImg alt='Bad' src='../assets/png/bad.png'/></ToggleButton>
                        <ToggleButton style={{ width: '6rem' }} type="radio" value="danger" variant="danger" onChange={this.handleChange}><StyledImg alt='Terrible' src='../assets/png/terrible.png'/></ToggleButton>
                    </ToggleButtonGroup>
                </Fo.Row>
                <Fo.Row>
                    <p>Icons made by <a href="https://www.flaticon.local/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.local/" title="Flaticon">www.flaticon.local</a></p>
                </Fo.Row>
                <Fo.Row>
                    <Fo.Label as="h6">Write about your day.</Fo.Label>
                </Fo.Row>
                <Fo.Row>
                    <Fo.Control style={{ width: '50rem' }} name="entry" value={this.state.value} as="textarea" rows="3" onChange={this.handleChange} />
                </Fo.Row>
                <br />
                <Fo.Row>
                    <Button variant="primary" value="submit" type="submit">Submit</Button>
                </Fo.Row>
            </Fo>
        );
    }
}