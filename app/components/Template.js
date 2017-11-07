import React from "react";
import InputTask from "./Input"
import List from "./List"

export default class Template extends React.Component {
  constructor(props){
    super(props);
    this.state = {list:["123", "1234456"]};
    this.getNewValue = this.getNewValue.bind(this);
  }

  getNewValue(info) {
   this.setState({list:info});
  }

  render() {

    return(
        <div>
          <InputTask getNewValue={this.getNewValue} type="text" placeholder="Do something" />
          <List setValue={this.state.list}  />
        </div>
    );
  }
}
