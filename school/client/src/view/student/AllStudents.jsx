import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {Form, FormControl} from 'react-bootstrap'

function AllStudents() {
    const [students, setStudents] = useState([])
    const [search, setSearch] = useState('')

    useEffect(() => {
        axios.get('/api/student/students')
            .then(res => {
                setStudents(res.data.students)
            })
            .catch(error => {
                console.log(error)
            })
    }, [setStudents])

    const handleSearch = (event) => {
        setSearch(event.target.value)
    }

    return (
        <div>
            <div className="card">
                <div className="card-header">
                    <h4>All Students of The School</h4>
                </div>
                <div className="card-body">
                    <div className="my-1">
                        <input type="search" onChange={handleSearch} className="form-control rounded-0 w-25" placeholder="Search" /> 
                    </div>
                    <table className="table table-success table-striped table-hover border border-warning">
                        <thead>
                            <tr>
                                <th scope="col">id</th>
                                <th scope="col">name</th>
                                <th scope="col">Last</th>
                                <th scope="col">Handle</th>
                            </tr>
                        </thead>
                        <tbody>
                            {students.filter(student => {
                                if(search.length === 0 || !search)
                                    return student
                                if(student.name.toLowerCase().includes(search.toLowerCase()) ||  student.studentId.includes(search))
                                    return student
                            }).map(student => 
                                <tr>
                                    <th scope="row">{student.studentId}</th>
                                    <td>{student.name}</td>
                                    <td>{student.image}</td>
                                    <td>{student.email}</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default AllStudents
