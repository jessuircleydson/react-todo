import React from "react";

export default class List extends React.Component {
  constructor() {
    super();

    this.list = [
      {title:"My 1 taks"},
      {title:"My 2 task"},
      {title:"My 3 task"},
      {title:"My 4 task"},,
      {title:"My 5 task"},,
      {title:"My 6 task"},
    ];
  }

  render() {
    return (
      <ul>
        {
          this.list.map(item => {
            return <li key={item.title}>{item.title}</li>
          })
        }
      </ul>
    )
  }

}
