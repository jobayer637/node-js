import React from 'react'
import { Accordion, ListGroup } from 'react-bootstrap'
import { Link, NavLink } from 'react-router-dom'

function LeftSide() {
    const as = {
        // color: 'blue', 
        textDecoration: 'none',
    }
    const td = {
        textDecoration: 'none',
    }

    return (
        <div>
            <Accordion className="bg-info">
                <Accordion.Item eventKey="0" className="rounded-0">
                    <NavLink style={td} exact activeStyle={as} to="/">
                        <ListGroup.Item className="">Home</ListGroup.Item>
                    </NavLink>
                </Accordion.Item>

                <Accordion.Item eventKey="1">
                    <Accordion.Header>Student</Accordion.Header>
                    <Accordion.Body>
                        <NavLink style={td} exact activeStyle={as} to="/student">
                            <ListGroup.Item className="border-0">All Student</ListGroup.Item>
                        </NavLink>
                        <NavLink style={td} exact activeStyle={as} to="/student/create">
                            <ListGroup.Item className="border-0">Add New</ListGroup.Item>
                        </NavLink>
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="2">
                    <Accordion.Header>Teacher</Accordion.Header>
                    <Accordion.Body>
                        <NavLink style={td} exact activeStyle={as} to="/teacher">
                            <ListGroup.Item className="border-0">All Teacher</ListGroup.Item>
                        </NavLink>
                        <NavLink style={td} exact activeStyle={as} to="/teacher/create">
                            <ListGroup.Item className="border-0">Add New Teacher</ListGroup.Item>
                        </NavLink>
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="3">
                    <Accordion.Header>Class</Accordion.Header>
                    <Accordion.Body>
                        <NavLink style={td} exact activeStyle={as} to="/class/current-session">
                            <ListGroup.Item className="border-0">Current Session</ListGroup.Item>
                        </NavLink>
                        {/* <NavLink style={td} exact activeStyle={as} to="/class/academic-year">
                            <ListGroup.Item className="border-0">Academic Year</ListGroup.Item>
                        </NavLink> */}
                        <NavLink style={td} exact activeStyle={as} to="/class">
                            <ListGroup.Item className="border-0">All Classes</ListGroup.Item>
                        </NavLink>
                        <NavLink style={td} exact activeStyle={as} to="/class/create">
                            <ListGroup.Item className="border-0">Add New Classes</ListGroup.Item>
                        </NavLink>
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="4">
                    <Accordion.Header>Subject</Accordion.Header>
                    <Accordion.Body>
                        <NavLink style={td} exact activeStyle={as} to="/subject">
                            <ListGroup.Item className="border-0">All Subjects</ListGroup.Item>
                        </NavLink>
                        <NavLink style={td} exact activeStyle={as} to="/subject/create">
                            <ListGroup.Item className="border-0">Add New Subject</ListGroup.Item>
                        </NavLink>
                    </Accordion.Body>
                </Accordion.Item>
                
            </Accordion>
        </div>
    )
}

export default LeftSide
