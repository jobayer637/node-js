import axios from 'axios'
import React, { Component } from 'react'
import ManageForm from './Form/ManageForm'
import CustomAlert from '../CustomAlert'

export class CreateTeacher extends Component {
    state = {
        create: {
            joinningDate: '',
            name: '',
            email: '',
            phone: '',
            presentAddress: '',
            permanentAddress: '',
            blood: '',
            dob: '',
            gender: '',
            religion: ''
        },
        error: {},
        successAlert: false,
        errorAlert: false
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
        axios.post('/api/teacher/create', this.state.create)
            .then(res => {
               if(res.data.status === 'success'){
                this.setState({
                    successAlert: true
                }, () => {
                    setTimeout(()=>{
                        this.setState({
                            successAlert: false
                        })
                    },2000)
                })
               } else {
                this.setState({
                    errorAlert: true
                }, () => {
                    setTimeout(()=>{
                        this.setState({
                            errorAlert: false
                        })
                    },2000)
                })
               }
            })
            .catch(error => {
                console.log(error)
            })
    }

    handleError = () => {
        const teacher = this.state.create
        const setError  = {}
        if(teacher.joinningDate == '' || !teacher.joinningDate){
            setError.joinningDate = 'Joinning Date cannot be empty'
        }
        if(teacher.name == '' || !teacher.name){
            setError.name = 'Name cannot be empty'
        }
        if(teacher.phone == '' || !teacher.phone){
            setError.phone = 'Phone cannot be empty'
        }
        if(teacher.presentAddress == '' || !teacher.presentAddress){
            setError.presentAddress = 'presentAddress cannot be empty'
        }
        if(teacher.permanentAddress == '' || !teacher.permanentAddress){
            setError.permanentAddress = 'permanentAddress cannot be empty'
        }
        if(teacher.dob == '' || !teacher.dob){
            setError.dob = 'Date of Birth cannot be empty'
        }
        if(teacher.religion == '' || !teacher.religion){
            setError.religion = 'religion cannot be empty'
        }
        if(teacher.gender == '' || !teacher.gender){
            setError.gender = 'gender cannot be empty'
        }
        if(teacher.blood == '' || !teacher.blood){
            setError.blood = 'blood group cannot be empty'
        }

        this.setState({
            error: setError,
        })

        if(!teacher.name || !teacher.phone || !teacher.presentAddress ||
            !teacher.permanentAddress|| !teacher.blood || !teacher.religion || 
            !teacher.gender || !teacher.joinningDate){
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
                <h3>Add New Teacher Form</h3>
                {this.state.successAlert? <CustomAlert
                    title="Success"
                    message="New Teacher Successfully Added"
                    handleAlert={this.handleAlert}
                />:''}
                {this.state.errorAlert? <CustomAlert
                    title="Error"
                    message="Error occoured when add new teacher!!"
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

export default CreateTeacher
