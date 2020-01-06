import React, { Component} from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';

export default class StatusUpdate extends Component {

    

    constructor(props) {
        super(props);

        this.onChangeCompanyName = this.onChangeCompanyName.bind(this)
        this.onChangejobTitle = this.onChangejobTitle.bind(this)
        this.onChangeJobRequire = this.onChangeJobRequire.bind(this)
        this.onChangeCompanyDescribe = this.onChangeCompanyDescribe.bind(this)
        this.onChangeJobstatus = this.onChangeJobstatus.bind(this)
        this.onChangePossibility = this.onChangePossibility.bind(this)
        this.onChangeDate = this.onChangeDate.bind(this)
        this.onSubmit = this.onSubmit.bind(this)

        this.state = {
            CompanyName: 'hello',
            JobTitle: '',
            JobRequire: '',
            CompanyDescribe: '',
            JobStatus: '',
            possibility: false,
            date: new Date(),
        }
    }

    componentDidMount(){
        axios.get('http://localhost:5000/companies/'+this.props.match.params.id)
        .then(response => {
            this.setState({
                CompanyName:response.data.CompanyName,
                JobTitle: response.data.JobTitle,
                JobRequire: response.data.JobRequire,
                CompanyDescribe: response.data.CompanyDescribe,
                JobSatus: "response.data.JobSatus",
                possibility:response.data.possibility,
                date: new Date(response.data.date)
            }  
            )
        })
        .catch(function(error){
            console.log(error);
        })
    }


    onChangeCompanyName(e) {
        this.setState({
            CompanyName: e.target.value
        });
    }

    onChangejobTitle(e) {
        this.setState({
            JobTitle: e.target.value
        });
    }

    onChangeJobRequire(e) {
        this.setState({
            JobRequire: e.target.value
        });
    }

    onChangeCompanyDescribe(e) {
        this.setState({
            CompanyDescribe: e.target.value
        });
    }

    onChangeJobstatus(e) {
        this.setState({
            JobStatus: e.target.value
        });
    }
    onChangePossibility(e) {
        this.setState({
            possibility: e.target.check
        });
    }
    onChangeDate(date) {
        this.setState({
            date: date
        });
    }

    onSubmit(e) {
        e.preventDefault();

        const companies = {
            CompanyName: this.state.CompanyName,
            JobTitle: this.state.JobTitle,
            JobRequire: this.state.JobRequire,
            CompanyDescribe: this.state.CompanyDescribe,
            JobStatus: this.state.JobStatus,
            possibility: this.state.possibility,
            date: this.state.date
        }

        console.log(companies);

        axios.post('http://localhost:5000/companies/update/'+this.props.match.params.id,companies)
            .then(res => console.log(res.data))

         window.location = "/"

    }

        render() {
            return (
                <div className="container">
                    <h3>Update</h3>
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label>Company</label>
                            <input type="text" className="form-control"
                                placeholder="Company Name"
                                value={this.state.CompanyName}
                                onChange={this.onChangeCompanyName} />
                        </div>

                        <div className="form-group">
                            <label>Title</label>
                            <input type="text" className="form-control" placeholder="ex: software developer"
                                value={this.state.JobTitle}
                                onChange={this.onChangejobTitle} />
                        </div>

                        <div className="form-group">
                            <label>Require Skill</label>
                            <input type="text" className="form-control" placeholder="Java,JavaScript,css" value={this.state.JobRequire}
                                onChange={this.onChangeJobRequire} />
                        </div>

                        <div className="form-group">
                            <label>Apply Status</label>
                            <select className="form-control" id="exampleFormControlSelect1"
                                value={this.state.Jobstatus} onChange={this.onChangeJobstatus}>
                                <option>(select)</option>
                                <option>In progress</option>
                                <option>Done applying</option>
                                <option>reply positive</option>
                                <option>Interview set time</option>
                                <option>It been a while</option>
                                <option>screw up</option>
                                <option>find someone else already</option>

                            </select>
                        </div>

                        {/* date */}
                        <div className="form-group">
                            <label>memorize date</label>
                            <div>
                                <DatePicker
                                    selected={this.state.date}
                                    onChange={this.onChangeDate} />
                            </div>
                        </div>

                        <div className="form-group" >
                            <label>Company Detail</label>
                            <textarea className="form-control" rows="3"
                                value={this.state.CompanyDescribe} onChange={this.onChangeCompanyDescribe} />
                        </div>

                        <div className="form-group form-check">
                            <input className="form-check-input" type="checkbox" id="move-on"
                                value = {this.state.possibility}
                                onChange = {this.onChangePossibility}
                            />
                            <label className="form-check-label">move on</label>
                        </div>

                        <div className="form-group">
                            <input type="submit" value="Edit"
                                className="btn btn-primary" />
                        </div>

                    </form>
                </div>

            );
        }
    }