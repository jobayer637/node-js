import axios from 'axios'
import React, { Component } from 'react'
import ManageForm from './Form/ManageForm'
import CustomAlert from '../CustomAlert'


export class AddStudentInClass extends Component {
    state = {
        create: {student: '', classes: ''},
        student: {},
        error: {},
        successAlert: false,
        errorAlert: false,
        errorMessage: ''
    }

    HandleFormInput = (event) => {
        axios.post('/api/student/search', { value: event.target.value })
            .then(res => {
                const std = res.data.data[0]
                this.setState({
                    student: { std }
                })
            })
            .catch(err => {
                //
            })
    }

    handleAddStudent = (event) => {
        const classId = this.props.match.params.id
        this.setState({
            create: {
                student: event.target.name,
                classes: classId
            }
        }, () => {
            this.handleStore()
        })
    }

    handleStore = () => {
        axios.post('/api/std-class/create', this.state.create)
            .then(res => {
                console.log(res.data)
                if (res.data.status === 'success') {
                    this.setState({
                        successAlert: true,
                        create: { student: '', classes: '' }
                    }, () => {
                        setTimeout(() => {
                            this.setState({
                                successAlert: false,
                            }, () => {
                                // this.props.history.push('/class')
                            })
                        }, 3000)
                    })
                } else {
                    this.setState({
                        errorAlert: true,
                        error: { [res.data.type]: res.data.message },
                        errorMessage:  res.data.message
                    }, () => {
                        setTimeout(() => {
                            this.setState({
                                errorAlert: false,
                                errorMessage: ''
                            })
                        }, 2500)
                    })
                }
            })
            .catch(error => {
                console.log(error)
            })
    }

   
    handleAlert = () => {
        this.setState({
            successAlert: false
        })
    }

    render() {
        const { std } = this.state.student

        return (
            <div className="card border border-warning rounded-0">
                <div className="card-header bg-warning d-flex justify-content-between">
                    <h3>Add New Student in Class {this.props.match.params.name}</h3>
                    {this.state.successAlert ? <CustomAlert
                        title="Success"
                        message="Student Successfully Added"
                        handleAlert={this.handleAlert}
                    /> : ''}
                    {this.state.errorAlert ? <CustomAlert
                        title="Error"
                        message={this.state.errorMessage}
                        handleAlert={this.handleAlert}
                    /> : ''}
                </div>
                <div className="card-body">
                    <div className="mb-3 row">
                        <label for={"name"} className="col-sm-2 col-form-label">
                            {"Enter Student Id"}
                        </label>
                        <div className="col-sm-10">
                            <input
                                type="search"
                                className="form-control"
                                onChange={this.HandleFormInput}
                                placeholder="Enter Student Id"
                            />
                            <small className="text-danger">{this.state.errorMessage}</small>
                        </div>
                    </div>
                </div>
                <div className="card-body">
                    <div className="mb-3 row">
                        <div className="col-sm-2"></div>
                        <div className="col-sm-10">
                        {std ?
                            <table className="table table-success table-striped table-hover">
                                <thead>
                                    <tr>
                                        <th scope="col"> Id</th>
                                        <th scope="col"> Name</th>
                                        <th scope="col"> Phone</th>
                                        <th scope="col"> Email</th>
                                        <th scope="col"> Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>{std.studentId}</td>
                                        <td>{std.name}</td>
                                        <td>{std.phone}</td>
                                        <td>{std.email}</td>
                                        <td>
                                            <button name={std._id} onClick={this.handleAddStudent} className="btn btn-sm btn-primary">Add Student</button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            : <h4>Student Not Found</h4>}
                            <h4 className="text-warning">{this.state.errorMessage}</h4>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default AddStudentInClass
