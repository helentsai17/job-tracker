import React, { Component } from 'react';
import axios from 'axios';


export default class CreateUser extends Component {

    constructor(props) {
        super(props)

        this.onChangeUser = this.onChangeUser.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            username: ''
        }
    }
    onChangeUser(e) {
        this.setState({
            username: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault()

        const user = {
            username: this.state.username
        }
   
        console.log(user)

        axios.post('http://localhost:5000/users/add',user)
            .then(res => console.log(res.data))

        this.setState({
            username: ''
        });

    }


    render() {
        return (
            <div className = "container">
                <h3>Create user</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>User Name</label>
                        <input type="text" className="form-control"
                            value={this.state.user}
                            onChange={this.onChangeUser} />
                    </div>
                    <div className="form-group">
                        <input type="submit" 
                        value="Add New User"
                        className="btn btn-primary" />
                    </div>

                </form>
            </div>
        );
    }
}