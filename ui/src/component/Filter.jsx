
import axios from 'axios';
import React from 'react';

class Filter extends React.Component {
  state = {
    first_name: "",
    result: [],
    selected:[]
  }

  Filter = (e) => {
    let first_name = { first_name: e.target.value }
    axios.post("http://127.0.0.1:8000/api/filter", first_name)
      .then(res => {
        this.setState({
          result: res.data.result
        })
      })

  }

  addToSelection(item) {
    // check if the item is already selected
    if (this.state.selected.includes(item)) {
      
        // if it is, remove it from the selected array
        this.setState({ selected: this.state.selected.filter(d => d !== item) });
    } else {
        // if it isn't, add it to the selected array
        this.setState({ selected: [...this.state.selected, item] });
    }
    console.log(this.state.selected);
}

//   Add = (e) => {
//     // const getCellValue = (cell) =>{
// this.setState({ result: this.state.result  });
// console.log(e.target.value)
//     // }
//   };
  render() {
    return (
      <div >
        <input type="text" onChange={this.Filter} />

          <table class="table">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
        {this.state.result.map((item) => (
            <tr>
              <td value={item.id}>{item.firstName}</td>
              <td > <button onClick={() => this.addToSelection(item)} >Add</button> </td> 
            </tr>
          ))}
          </tbody>
        </table>


{/* /// */}



        <div>
        {this.state.selected.map((value) => (
          <table class="table">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td value={value.id}>{value.firstName}</td>
              <td > <button onClick={() => this.addToSelection(value)} >Add</button> </td> 
            </tr>
          </tbody>
        </table>
        ))}
        </div>
        
      </div>
    );
  }
}

export default Filter;