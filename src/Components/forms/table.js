import React, { Component } from "react";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";

class Table extends Component {
  render() {
    const { characterData, removeCharacter } = this.props;
    rows = props.characterData.map((row, index) => {
        return (
          <tr key={index}>
            <td>{row.name}</td>
            <td>{row.usercomment}</td>
            <td>
              <button onClick={() => props.editCharacter(index)}>Edit</button>
            </td>
            <td>
              <button onClick={() => props.removeCharacter(index)}>Delete</button>
            </td>
          </tr>
        );
    );
    return (
      <table>
        {/* <TableHeader /> */}
        {/* <TableBody
          characterData={characterData}
          removeCharacter={removeCharacter}
        /> */}
         <thead>
      <tr>
        <th>Name</th>
        <th>Comments</th>
        <th>Edit</th>
        <th>Remove</th>
      </tr>
    </thead>
        {rows}
      </table>
    
  }
}

export default Table;