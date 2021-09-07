import axios from 'axios'
import React, { Component } from 'react'
import ManageForm from './Form/ManageForm'
import CustomAlert from '../CustomAlert'

export class CreateStudent extends Component {
    state = {
        create: {
            studentId: '',
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
        image: null,
        error: {},
        successAlert: false,
        errorAlert: false,
        isError: true
    }

    HandleFormInput = (event) => {
        // this.setState({
        //     create: {...this.state.create, [event.target.name]: event.target.value}
        // })
        if (event.target.type === 'file') {
            this.setState({
                image: event.target.files[0]
            })
        }

        this.setState({
            create: { ...this.state.create, [event.target.name]: event.target.value }
        })


    }

    // handleImage = () => {
    //     const { studentId, name, email, phone, presentAddress, permanentAddress, blood, dob, gender, religion } = this.state.create
    //     let formData = new FormData()
    //     formData.append('image', this.state.image)
    //     formData.append('studentId', studentId)
    //     formData.append('name', name)
    //     formData.append('email', email)
    //     formData.append('phone', phone)
    //     formData.append('presentAddress', presentAddress)
    //     formData.append('presentAddress', presentAddress)
    //     formData.append('blood', blood)
    //     formData.append('dob', dob)
    //     formData.append('gender', gender)
    //     formData.append('religion', religion)
    //     axios.post('/api/student/create', formData)
    //         .then(t => { console.log(t) })
    // }

    HandleFormSubmit = (event) => {
        event.preventDefault()
        this.handleError(this.state.create)
    }

    handleStore = () => {
        const { studentId, name, email, phone, presentAddress, permanentAddress, blood, dob, gender, religion } = this.state.create
        let formData = new FormData()
        formData.append('image', this.state.image)
        formData.append('studentId', studentId)
        formData.append('name', name)
        formData.append('email', email)
        formData.append('phone', phone)
        formData.append('presentAddress', presentAddress)
        formData.append('presentAddress', presentAddress)
        formData.append('blood', blood)
        formData.append('dob', dob)
        formData.append('gender', gender)
        formData.append('religion', religion)

        axios.post('/api/student/create', formData)
            .then(res => {
                if (res.data.status === 'success') {
                    this.setState({
                        successAlert: true
                    }, () => {
                        setTimeout(() => {
                            this.setState({
                                successAlert: false
                            })
                        }, 2000)
                    })
                } else {
                    this.setState({
                        errorAlert: true
                    }, () => {
                        setTimeout(() => {
                            this.setState({
                                errorAlert: false
                            })
                        }, 2000)
                    })
                }
            })
            .catch(error => {
                console.log(error)
            })
    }

    handleError = (std) => {
        const setError = {}
        if (std.studentId == '' || !std.studentId) {
            setError.studentId = 'studentId cannot be empty'
        }
        if (std.name == '' || !std.name) {
            setError.name = 'Name cannot be empty'
        }
        if (std.phone == '' || !std.phone) {
            setError.phone = 'Phone cannot be empty'
        }
        if (std.presentAddress == '' || !std.presentAddress) {
            setError.presentAddress = 'presentAddress cannot be empty'
        }
        if (std.permanentAddress == '' || !std.permanentAddress) {
            setError.permanentAddress = 'permanentAddress cannot be empty'
        }
        if (std.dob == '' || !std.dob) {
            setError.dob = 'Date of Birth cannot be empty'
        }
        if (std.religion == '' || !std.religion) {
            setError.religion = 'religion cannot be empty'
        }
        if (std.gender == '' || !std.gender) {
            setError.gender = 'gender cannot be empty'
        }
        if (std.blood == '' || !std.blood) {
            setError.blood = 'blood group cannot be empty'
        }

        this.setState({
            error: setError,
        })

        if (!std.name || !std.phone || !std.presentAddress ||
            !std.permanentAddress || !std.blood || !std.religion ||
            !std.gender || !std.studentId) {
            //....
        } else {
            this.handleStore()
        }
    }

    handleAlert = () => {
        this.setState({
            alert: false
        })
    }


    render() {
        return (
            <div className="card border border-warning rounded-0">
                <div className="card-header bg-warning d-flex justify-content-between">
                    <h3>Create New Student Form</h3>
                    {this.state.successAlert ? <CustomAlert
                        title="Success"
                        message="New Student Successfully Added"
                        handleAlert={this.handleAlert}
                    /> : ''}
                    {this.state.errorAlert ? <CustomAlert
                        title="Error"
                        message="Error occoured when add new student!!"
                        handleAlert={this.handleAlert}
                    /> : ''}
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

export default CreateStudent
