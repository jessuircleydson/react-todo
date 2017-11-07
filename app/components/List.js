import React from "react";

export default class List extends React.Component {
  constructor(props) {
    super(props);
    
  }

  render() {
    return (
      <ul>
        {
         this.props.setValue.map(item => {
            return <li key={item}>{item}</li>
          })
        }
      </ul>
    )
  }

}
