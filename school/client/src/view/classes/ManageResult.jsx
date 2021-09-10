import React, { Component } from 'react'
import axios from 'axios'
import {Modal, Button} from 'react-bootstrap'

export class ManageResult extends Component {
    state = {
        subjects: [],
        classes: [],
        search: '',
        fullscreen: true,
        show: false
    }

    componentDidMount = () => {
        const className = this.props.match.params.name
        const id = this.props.match.params.id
        axios.get('/api/subject/class/' + className)
            .then(res => {
                this.setState({
                    subjects: res.data.subject
                })
                console.log(res.data.subject)
            })
            .catch(error => {
                console.log(error)
            })

        axios.get('/api/std-class/single-class/' + id)
            .then(res => {
                this.setState({
                    classes: res.data.stdClasses
                })
            })
            .catch(error => {
                console.log(error)
            })
    }

    handleShow = (breakpoint) => {
        this.setState({
            show: true,
            fullscreen: breakpoint
        })
    }

    render() {
        const { subjects, classes, search } = this.state
        return (
            <div>
                <div className="card">
                    <div className="card-header">
                        {subjects ? subjects.map(subject => <button className="btn btn-sm btn-outline-dark my-1 mx-1">{subject.name}</button>) : ''}
                    </div>
                    <div className="card-body">
                        <table className="table table-success ">
                            <thead>
                                <tr>
                                    <th className="border border-dark" scope="col">SId</th>
                                    <th className="border border-dark" scope="col">Name</th>
                                    {subjects ? subjects.map(subject => <th className="border border-dark" scope="col">{subject.name}</th>) : ''}
                                </tr>
                            </thead>
                            <tbody>
                                {classes.filter(cls => {
                                    if (search.length === 0 || !search)
                                        return cls
                                    if (cls.student.name.toLowerCase().includes(search.toLowerCase()) || cls.student.studentId.includes(search))
                                        return cls
                                }).map(cls =>
                                    <tr>
                                        <td className="border border-dark">{cls.student.studentId}</td>
                                        <td className="border border-dark">{cls.student.name}</td>
                                        {subjects ? subjects.map(subject => <td className="border border-dark" scope="col">

                                        </td>) : ''}
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* add subject marks modal */}
                <Button key={idx} className="me-2" onClick={() => handleShow(v)}>
                    Full screen
                    {typeof v === 'string' && `below ${v.split('-')[0]}`}
                </Button>
                <Modal show={this.state.show} fullscreen={this.state.fullscreen} onHide={() => this.setState({show: false})}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Modal body content</Modal.Body>
                </Modal>
            </div>
        )
    }
}

export default ManageResult
