import React, { Component } from 'react'
import axios from 'axios'

export class ManageResult extends Component {
    state = {
        subjects: [],
        classes: [],
        search: ''
    }
   
    componentDidMount = () => {
        const className = this.props.match.params.name
        const id = this.props.match.params.id
        axios.get('/api/subject/class/'+className)
        .then(res => {
            this.setState({
                subjects: res.data.subject
            })
            console.log(res.data.subject)
        })
        .catch(error => {
            console.log(error)
        })

        axios.get('/api/std-class/single-class/'+id)
        .then(res => {
            this.setState({
                classes: res.data.stdClasses
            })
        })
        .catch(error => {
            console.log(error)
        })
    }
    render() {
        const {subjects, classes, search} = this.state
        return (
            <div>
                <div className="card">
                    <div className="card-header">
                        {subjects ? subjects.map(subject => <button className="btn btn-sm btn-primary mx-1">{subject.name}</button>): ''}
                    </div>
                    <div className="card-body">
                    <table className="table table-success ">
                        <thead>
                            <tr>
                                <th scope="col">SId</th>
                                <th scope="col">Name</th>
                                {subjects ? subjects.map(subject => <th scope="col">{subject.name}</th>): ''}
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
                                <td>{cls.student.studentId}</td>
                                <td>{cls.student.name}</td>
                                {subjects ? subjects.map(subject => <td scope="col">
                                    <input type="text" className="form-control w-50" />
                                </td>): ''}
                            </tr>
                        )}
                        </tbody>
                    </table>
                    </div>
                </div>
            </div>
        )
    }
}

export default ManageResult
