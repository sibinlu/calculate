import React, { Component } from 'react';
import axios from 'axios';
import './Page.css'

export default class Page extends Component {
    constructor(props) {
        super(props);
        this.state = {
            key1: 0,
            key2: 0,
            result: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const inputValue = event.target.value;
        const stateField = event.target.name;
        this.setState({
            [stateField]: parseInt(inputValue),
        });
        console.log(this.state);
    }
    async handleSubmit(event) {
        event.preventDefault();
        const { key1, key2 } = this.state;
        axios
            .post(
                'https://5wtkq4kcj7.execute-api.us-east-1.amazonaws.com/default/calculate',
                { key1, key2 }
            )
            .then((response) => {
                this.setState({
                    result: "Result is: " + response.data.result,
                });
            }, (error) => {
                console.log(error);
            });
    }

    render() {
        return (
            <div className="Page">
                <form onSubmit={this.handleSubmit}>
                    <label>Key1:</label>
                    <input
                        type="number"
                        name="key1"
                        onChange={this.handleChange}
                        value={this.state.key1}
                    />
                    <br/>
                    <br/>

                    <label>Key2:</label>
                    <input
                        type="number"
                        name="key2"
                        onChange={this.handleChange}
                        value={this.state.key2}
                    />
                    <br/>
                    <br/>

                    <button type="submit">Calculate</button>
                    <br/>
                </form>
                <p>{this.state.result}</p>
            </div>
        );
    }
}
