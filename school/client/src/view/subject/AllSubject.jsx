import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import {Row, Form, Col} from 'react-bootstrap'

function AllSubject() {
    const [subjects, setSubjects] = useState([])
    const [search, setSearch] = useState('')

    useEffect(() => {
        axios.get('/api/subject/subjects')
            .then(res => {
                setSubjects(res.data.subject)
            })
            .catch(error => {
                console.log(error)
            })
    }, [setSubjects])

    const handleSearch = (event) => {
        setSearch(event.target.value)
    }

    return (
        <div>
            <div className="card">
                <div className="card-header">
                    <h4>All Subjects of The School</h4>
                </div>
                <div className="card-body">
                    <Row className="mb-3 w-50">
                        <Form.Group as={Col} controlId="formGridCity">
                            <Form.Control onChange={handleSearch} placeholder="Search By Class Name" />
                        </Form.Group>
                    </Row>

                    <table className="table table-success table-striped table-hover">
                        <thead>
                            <tr>
                                <th scope="col">S/L</th>
                                <th scope="col">Subject Name</th>
                                <th scope="col">Class Name</th>
                                <th scope="col">Marks</th>
                                <th scope="col">Group</th>
                                <th scope="col">Subject Type</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>

                        {subjects.filter(subject => {
                            if(search.length === '' || !search) {
                                return subject
                            }
                            if(subject.name.toLowerCase().includes(search.toLowerCase()) || subject.academicYear.toString().includes(search)) {
                                return subject
                            }
                        }).map((subject,i) => 
                            <tr>
                                <td>{i+1}</td>
                                <td>{subject.name}</td>
                                <td>{subject.className}</td>
                                <td>{subject.marks}</td>
                                <td>{subject.group}</td>
                                <td>{subject.subjectType}</td>
                                <td>
                                    Edit | Delete
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

export default AllSubject
