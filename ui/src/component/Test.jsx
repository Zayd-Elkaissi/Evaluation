import axios from 'axios';
import React, { Component } from 'react';

export default class Test extends Component {
    constructor(props){
        super(props)
        this.state = {
            data:[],
            result : [],
            first_name: "",
            dataSelected : []
        }
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
      

      addData = (item)=> {

        if(!this.state.dataSelected.includes(item)){
            this.setState({
                dataSelected : [...this.state.dataSelected, item],
            })
        }

        let result = this.state.result;
        
        let index = result.indexOf(item);

        result.splice(index,1);
      }

      removeData = (item)=>{
            let filterArray = this.state.dataSelected.filter((key) => key !== item)
            this.setState({dataSelected: filterArray,
                result : [...this.state.result, item]
            });
           
      }

  render() {
    return (
      <div className='container'>
        <h3>Test</h3>
        <div className='row'>

            <div className='col-md-12 pb-3'>
            <input type='search' placeholder='Search' onChange={this.Filter}  className='form-control'/>
            </div>

            <div id='table1' className='col-md-6'>
            <table class="table table-dark table-striped ">
                <thead>
                    <tr>
                    <th scope="col">First Name</th>
                    <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.result.map((item) => (
                        <tr>
                            <td>{item.firstName}</td>
                            <td><button class="btn btn-outline-success" onClick={ () => this.addData(item)}>+</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
            </div>

            <div className='col-md-6'>
                <table class="table table-dark table-striped">
                    <thead>
                        <tr>
                        <th scope="col">First Name</th>
                        <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.dataSelected.map((item => 
                            <tr>
                                <td>{item.firstName}</td>
                                <td><button class="btn btn-outline-danger" onClick={ () => this.removeData(item)}>-</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            </div>
      </div>
    )
  }
}