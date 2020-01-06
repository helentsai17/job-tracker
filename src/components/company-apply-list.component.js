import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';



const Card = props => (
    <tr>
        <td>{props.company.CompanyName}</td>
        <td>{props.company.JobTitle}</td>
        <td>{props.company.CompanyName}</td>
        <td>{props.company.date.substring(0,10)}</td>
        <td>
            <Link to={"/edit/" + props.company._id}>edit</Link> | <a href='#' onClick={() => { props.deleteCompany(props.company._id) }} >delecte</a>
        </td>
    </tr>
)


export default class CompanyApplyList extends Component {

    constructor(props) {
        super(props);
        // use for delelte 
        this.deleteCompany = this.deleteCompany.bind(this);

        this.state = { companies: [] };
    }

    componentDidMount() {
        axios.get('http://localhost:5000/companies/')
            .then(response => {
                this.setState({ companies: response.data });
            })
            .catch((error) => {
                console.log(error);
            })
    }

    deleteCompany(id) {
        //delecte from the backend 
        axios.delete('http://localhost:5000/companies/' + id)
            .then(res => console.log(res.data))

        // delete from the frontend 
        this.setState({
            companies: this.state.companies.filter(el => el._id !== id)
        })

    }

    companiesList() {
        return this.state.companies.map(currentCompany => {
            return <Card company={currentCompany} deleteCompany={this.deleteCompany} key={currentCompany._id} />;
        })
    }

    render() {
        return (
            <div>
                <h3>Company List</h3>
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th>company Name</th>
                            <th>job title</th>
                            <th>Required</th>
                            <th>Date</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.companiesList()}
                    </tbody>
                </table>
            </div>
        );
    }
}