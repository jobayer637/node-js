import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import {Row, Form, Col} from 'react-bootstrap'

function AllClasses() {
    const [classes, setClasses] = useState([])
    const [search, setSearch] = useState('')
    const [years, setYears] = useState([])

    useEffect(() => {
        axios.get('/api/class/classes')
            .then(res => {
                setClasses(res.data.classes)
            })
            .catch(error => {
                console.log(error)
            })

            const startYear = 2000
            const endYear = new Date().getFullYear()
            const yrs = []
            for(let i=endYear; i>=startYear; i--){
                yrs.push(i)
            }
            setYears(yrs)

    }, [setClasses,setYears])

    const handleSearch = (event) => {
        setSearch(event.target.value)
    }

    return (
        <div>
            <div className="card">
                <div className="card-header">
                    <h4>All Classes of The School</h4>
                </div>
                <div className="card-body">
                    <Row className="mb-3 w-50">
                        <Form.Group as={Col} controlId="formGridCity">
                            <Form.Control onChange={handleSearch} placeholder="Search By Class Name" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridState">
                            <Form.Select onChange={handleSearch}>
                                <option>Search By Academic Year...</option>
                                {years.map(year=><option value={year}>{year}</option>)}
                            </Form.Select>
                        </Form.Group>
                    </Row>

                    <table className="table table-success table-striped table-hover">
                        <thead>
                            <tr>
                                <th scope="col">Class Name</th>
                                <th scope="col">Academic Year</th>
                            </tr>
                        </thead>
                        <tbody>

                        {classes.filter(classes => {
                            if(search.length === '' || !search) {
                                return classes
                            }
                            if(classes.name.toLowerCase().includes(search.toLowerCase()) || classes.academicYear.toString().includes(search)) {
                                return classes
                            }
                        }).map(classes => 
                            <tr>
                                <td>
                                    <Link exact to={`/class/view-std-class/${classes._id}/${classes.name}`}>{classes.name}</Link>
                                </td>
                                <td>{classes.academicYear}</td>
                            </tr>
                        )}               
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default AllClasses
