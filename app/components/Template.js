import React from "react";
import InputTask from "./Input"
import List from "./List"

export default class Template extends React.Component {

  render() {
    return(
        <div>
          <InputTask type="text" placeholder="Do something"/>
          <List/>
        </div>
    );
  }
}
