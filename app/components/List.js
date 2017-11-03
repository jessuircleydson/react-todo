import React from "react";

export default class List extends React.Component {
  render() {
    return (
      <ul>
        <div contentEditable="true">Task1</div>
        <div contentEditable="true">Task2</div>
      </ul> 
    );
  }

}
