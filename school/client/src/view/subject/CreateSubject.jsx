import axios from 'axios'
import React, { Component } from 'react'
import ManageForm from './Form/ManageForm'
import CustomAlert from '../CustomAlert'


export class CreateSubject extends Component {
    state = {
        create: {
            name: '',
            className: '',
            subjectType: '',
            group: '',
            marks: 100
        },
        error: {},
        successAlert: false,
        errorAlert: false,
        errorMessage: ''
    }

    HandleFormInput = (event) => {
        this.setState({
            create: {...this.state.create, [event.target.name]: event.target.value}
        })
    }

    HandleFormSubmit = (event) => {
        event.preventDefault()
        this.handleError()
    }

    handleStore = () => {
        axios.post('/api/subject/create', this.state.create)
            .then(res => {
               console.log(res.data)
            })
            .catch(error => {
                console.log(error)
            })
    }

    handleError = () => {
        const newClass = this.state.create
        const setError  = {}
       
        if(newClass.name == '' || !newClass.name){
            setError.name = 'Name cannot be empty'
        }
       
        this.setState({
            error: setError,
        })

        if(!newClass.name ){
                //....
        } else {
            this.handleStore()
        }

    }

    handleAlert = () => {
        this.setState({
            successAlert: false
        })
    }

    render() {
        return (
            <div className="card border border-warning rounded-0">
            <div className="card-header bg-warning d-flex justify-content-between">
                <h3>Add New Subject Form</h3>
                {this.state.successAlert? <CustomAlert
                    title="Success"
                    message="New Class Successfully Added"
                    handleAlert={this.handleAlert}
                />:''}
                {this.state.errorAlert? <CustomAlert
                    title="Error"
                    message={this.state.errorMessage}
                    handleAlert={this.handleAlert}
                />:''}
            </div>
            <div className="card-body">
                <ManageForm 
                    data={this.state.create}
                    HandleFormInput={this.HandleFormInput}
                    HandleFormSubmit={this.HandleFormSubmit}
                    error={this.state.error}
                />
            </div>
        </div>
        )
    }
}

export default CreateSubject
