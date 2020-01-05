import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Card from './CompanyCard';


export default class CompanyApplyList extends Component {

    constructor(props) {
        super(props)
        // use for delelte 
        this.deleteCompany = this.deleteCompany.bind(this);

        this.state = { companies: [] }
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
        this.setState({ companies: this.state.companies.filter(el => el._id !== id) })

    }

    render() {
        return (
            <div className="row">
                <div className = "col-md-3">
                    
                    <Card />
                </div>
            </div>
        );
    }
}