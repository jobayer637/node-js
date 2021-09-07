import React, { useState, useEffect } from 'react'
import axios from 'axios'

function AllTeacher() {
    const [teachers, setTeachers] = useState([])

    useEffect(() => {
        axios.get('/api/teacher/teachers')
            .then(res => {
                console.log(res.data.teachers)
                setTeachers(res.data.teachers)
            })
            .catch(error => {
                console.log(error)
            })
    }, [setTeachers])

    return (
        <div>
            <div className="card">
                <div className="card-header">
                    <h4>All Teachers of The School</h4>
                </div>
                <div className="card-body">
                    <table className="table table-success table-striped table-hover">
                        <thead>
                            <tr>
                                <th scope="col">name</th>
                                <th scope="col">image</th>
                                <th scope="col">email</th>
                            </tr>
                        </thead>
                        <tbody>
                        {teachers.map(teacher => 
                            <tr>
                                <td>{teacher.name}</td>
                                <td>{teacher.image}</td>
                                <td>{teacher.email}</td>
                            </tr>
                        )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default AllTeacher
