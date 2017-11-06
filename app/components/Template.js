import React from "react";
import InputTask, {getNewValue} from "./Input"
import List from "./List"

export default class Template extends React.Component {
  constructor() {
    super();

  }
  
  addNewValue(e) {
    
  }

  render() {
    return(
        <div>
          <form>
            <InputTask type="text" placeholder="Do something" />
            <button>Add</button>
          </form>
          <List/>
        </div>
    );
  }
}
