import React from "react";

export default class InputTask extends React.Component {
  constructor(props) {
    super(props);

    this.getValue = this.getValue.bind(this);
  }

  getValue(e) {
    e.preventDefault();
    this.props.getNewValue(this.newItem.value);
  }

  render() {
    return (
        <form onSubmit={this.getValue}>
          <input ref={input => this.newItem = input} type={this.props.type} placeholder={this.props.placeholder}  />
          <button>Add</button>
        </form>
    )
  }
}
