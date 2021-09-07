import React, { useState, useEffect } from 'react'
import axios from 'axios'

function AcademicYear() {
    const [classes, setClasses] = useState([])

    useEffect(() => {
        axios.get('/api/class/academic-year')
            .then(res => {
                setClasses(res.data.classes)
            })
            .catch(error => {
                console.log(error)
            })
    }, [setClasses])

    return (
        <div>
            <div className="card">
                <div className="card-header">
                    <h4>Academic Year</h4>
                </div>
                <div className="card-body">
                    <table className="table table-success table-striped table-hover">
                        <thead>
                            <tr>
                                <th scope="col">Academic Year</th>
                            </tr>
                        </thead>
                        <tbody>
                        {classes.map(classes => 
                            <tr>
                                <td>{classes}</td>
                            </tr>
                        )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default AcademicYear
