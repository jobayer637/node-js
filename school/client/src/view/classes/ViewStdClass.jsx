import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import {Row, Form, Col, Button} from 'react-bootstrap'
import CustomAlert from '../CustomAlert'

function ViewStdClass({match}) { 
    const [classes, setClasses] = useState([])
    const [search, setSearch] = useState('')
    const [successAlert, setSuccessAlert] = useState(false)
    const [successMessage, setSuccessMessage] = useState('')
    const {id} = match.params
   
    useEffect(() => {
        axios.get('/api/std-class/single-class/'+id)
            .then(res => {
                setClasses(res.data.stdClasses)
            })
            .catch(error => {
                console.log(error)
            })
    }, [setClasses])

    const handleSearch = (event) => {
        setSearch(event.target.value)
    }

    const handleRemoveStudent = (event) => {
        const id = event.target.id
        axios.delete('/api/std-class/delete/'+id)
        .then(res => {
            // setClasses(res.data.stdClasses)
            if(res.data.status === 'success') {
                let clss = classes.filter(c=> c._id != res.data.stdClass._id)
                setSuccessAlert(true)
                setSuccessMessage(res.data.message)
                setTimeout(()=> {
                    setSuccessAlert(false )
                    setClasses(clss)
                },2000)                
            }
        })
        .catch(error => {
            console.log(error)
        })
    }

    const handleAlert = () => {
        this.setState({
            successAlert: false
        })
    }

    return (
        <div>
             <div className="card">
                <div className="card-header">
                    <h4>All Student of Class {match.params.name} ({classes.length} students)</h4>
                    {successAlert? <CustomAlert
                    title="Success"
                    message={successMessage}
                    handleAlert={handleAlert}
                />:''}
                </div>
                <div className="card-body">

                    <Row className="align-items-center">
                        <Col xs="6">
                            <Form.Control className="rounded-0 my-2 w-50 border border-warning" onChange={handleSearch} placeholder="Search By Student Name of Id" />
                        </Col>
                        <Col xs="6" className="">
                            <div style={{float:'right'}}>
                                <Button type="submit" className="my-2 r-0 btn-warning rounded-0">
                                    <Link exact to={`/class/add-student/${id}/${match.params.name}`}>Add new Student</Link>
                                </Button>
                            </div>
                        </Col> 
                    </Row>

                    <table className="table table-success table-striped table-hover">
                        <thead>
                            <tr>
                                <th scope="col">Class Name</th>
                                <th scope="col">Student Id</th>
                                <th scope="col">Student Name</th>
                                <th scope="col">Academic Year</th>
                                <th scope="col">Action</th>
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
                                <td>{cls.classes.name}</td>
                                <td>{cls.student.studentId}</td>
                                <td>{cls.student.name}</td>
                                <td>{cls.classes.academicYear}</td>
                                <td>
                                    <button onClick={handleRemoveStudent} id={cls._id} className="btn btn-warning btn-sm">Remove</button>
                                </td>
                            </tr>
                        )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default ViewStdClass
