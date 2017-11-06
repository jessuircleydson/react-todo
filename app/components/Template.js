import React from "react";
import InputTask, {getNewValue} from "./Input"
import List from "./List"

export default class Template extends React.Component {
  
  addNewValue(e) {
    console.log(e)
  }

  render() {
    return(
        <div>
          <form>
            <InputTask addNew={this.addNewValue.bind(this)} type="text" placeholder="Do something" />
            <button>Add</button>
          </form>
          <List/>
        </div>
    );
  }
}
