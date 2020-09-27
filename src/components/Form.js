import React, { Component } from 'react';
import { Form as Fo, ToggleButtonGroup, ToggleButton, Button } from 'react-bootstrap';

export default class SubmitForm extends Component {
    constructor() {
        super();
        this.state = {
            mood: '',
            entry: ''
        };

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
        alert('This was submitted: ' + mood + entry);
        event.preventDefault();
        let a = JSON.parse(localStorage.getItem('array'))
        a.unshift([Date.now(), parseInt(mood), entry]);
        console.log(a);
        localStorage.setItem('array', JSON.stringify(a));
    }

    render() {
        return (
            <Fo onSubmit={this.handleSubmit}>
                <Fo.Row>
                    <ToggleButtonGroup exclusive="true" name="mood" toggle size="lg">
                        <ToggleButton type="radio" value="5" variant="success" onChange={this.handleChange}><img alt='Great' src='../assets/png/great.png'/></ToggleButton>
                        <ToggleButton type="radio" value="4" variant="primary" onChange={this.handleChange}><img alt='Good' src='../assets/png/good.png'/></ToggleButton>
                        <ToggleButton type="radio" value="3" variant="info" onChange={this.handleChange}><img alt='Okay' src='../assets/png/okay.png'/></ToggleButton>
                        <ToggleButton type="radio" value="2" variant="warning" onChange={this.handleChange}><img alt='Bad' src='../assets/png/bad.png'/></ToggleButton>
                        <ToggleButton type="radio" value="1" variant="danger" onChange={this.handleChange}><img alt='Terrible' src='../assets/png/terrible.png'/></ToggleButton>
                    </ToggleButtonGroup>
                    <h6>Icons made by <a href="https://www.flaticon.local/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.local/" title="Flaticon">www.flaticon.local</a></h6>
                </Fo.Row>
                <br />
                <Fo.Row>
                    <Fo.Label>Write about your day.</Fo.Label>
                    <Fo.Control name="entry" value={this.state.value} as="textarea" rows="3" onChange={this.handleChange} />
                </Fo.Row>
                <br />
                <Fo.Row>
                    <Button variant="primary" value="submit" type="submit">Submit</Button>
                </Fo.Row>
            </Fo>
        );
    }
}