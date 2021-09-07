import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

function CurrentSession() {
    const [classes, setClasses] = useState([])

    useEffect(() => {
        axios.get('/api/class/current-session')
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
                    <h4>All Classes of This Academic Year (current session)</h4>
                </div>
                <div className="card-body">
                    
                    <input type="search" className="form-control my-1 w-25" />
                        
                    <table className="table table-success table-striped table-hover">
                        <thead>
                            <tr>
                                <th scope="col">Class Name</th>
                                <th scope="col">Academic Year</th>
                                <th>Result Section</th>
                                <th>Student View</th>
                            </tr>
                        </thead>
                        <tbody>
                        {classes.map(classes => 
                            <tr>
                                <td>
                                    <Link exact to={`/class/view-std-class/${classes._id}/${classes.name}`}>{classes.name}</Link>
                                </td>
                                <td>{classes.academicYear}</td>
                                <td>
                                    <button className="btn btn-sm btn-warning mx-2">
                                        <Link exact to={`/class/${classes.name.toLowerCase()}/${classes.academicYear}/result/${classes._id}`}>Result</Link>
                                    </button>
                                </td>
                                <td>
                                    <button className="btn btn-sm btn-info">
                                        <Link exact to={`/class/view-std-class/${classes._id}/${classes.name}`}>View</Link>
                                    </button>
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

export default CurrentSession
