import React, { Component } from "react";
import axios from "axios";

export default class People extends Component {
        state = {
            message: ''
        }

    checkData = (e) => {
        axios.get('http://127.0.0.1:8000/api/check/' + e.target.value).then((res) => {
            this.setState({
                message: res.data.message,
            })
        })
    }

    render() {
        return (
            <div>
                    <label>Name:</label>
                    <input type="text" name="name" onChange={this.checkData} />

                <p>{this.state.message}</p>
            </div>
        )}

}

