import React from "react";

export default class DisplayMessages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      // messages: [] // gerenciado pelo redux
    }
    this.handleChange = this.handleChange.bind(this);
    this.submitMessage = this.submitMessage.bind(this);
  }
  handleChange(event) {
    this.setState({ input: event.target.value });
  }

  submitMessage() {
    this.setState((state) => ({
      input: '',
      // messages: state.messages.concat(state.input)
    }))

    this.props.submitNewMessage(this.state.input);
  }

  render() {
    return (
      <form onSubmit={(e) => e.preventDefault()}>
        <h2>Type in a new Message:</h2>

        <input
          value={this.state.input}
          onChange={this.handleChange} /><br />

        <button onClick={this.submitMessage}>Submit</button>

        <ul>
          {/* {this.state.messages.map((message, idx) => (
            <li key={idx}>{message}</li>)
          )} */}

          {this.props.messages.map((message, index) => (
            <li key={index}>{message}</li>)
          )}
        </ul>
      </form>
    );
  }
};