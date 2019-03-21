import React, { Component } from "react";

export default class TodoList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userInput: '',
            list: []
        }
    }

    changeUserInput(input) {
        this.setState({
            userInput: input
        });
    }

    addToList(input) {
        let listArray = this.state.list
        listArray.push(input)
        this.setState({
            list: listArray,
            userInput: ''
        })
    }

    render() {
        return (
            <div className="todoListMain">
                <input
                    onChange={(e) => this.changeUserInput(e.target.value)}
                    value={this.state.userInput}
                    placeholder="Enter Task...">
                </input>
                <button onClick={() => this.addToList(this.state.userInput)}>Add</button>
                <ul>
                    {this.state.list.map((val) => <li>{val}</li>)}
                </ul>
            </div>
        )
    }
}
