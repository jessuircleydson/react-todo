import React from "react";

export default class InputTask extends React.Component {
  constructor(props) {
    super(props);
  }

  getNewValeu(e) {
    this.props.addNew(this.newItem);
  }
 
  render() {
    return <input ref={input => this.newItem = input} type={this.props.type} placeholder={this.props.placeholder}  />
  }
}
