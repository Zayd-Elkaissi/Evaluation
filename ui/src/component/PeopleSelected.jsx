import React, { Component } from 'react'

class PeopleSelectd extends Component {
    constructor(props) {
        super(props);
    }
    
    Delete = (e) => {
         
    };
    render() { 
        return ( 
            <div>
                 <table class="table">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{item.firstName}</td>
              <td><button onClick={this.Delete}>Delete</button></td>
            </tr>
          </tbody>
          <h1>{item.firstName} </h1>
        </table>

            </div>
         );
    }
}
 
export default PeopleSelectd;