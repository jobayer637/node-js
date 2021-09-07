import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import AllStudents from './student/AllStudents'
import CreateStudent from './student/CreateStudent'

import AllTeacher from './teacher/AllTeacher'
import CreateTeacher from './teacher/CreateTeacher'

import AllClasses from './classes/AllClasses'
import CurrentSession from './classes/CurrentSession'
import AcademicYear from './classes/AcademicYear'
import CreateClasses from './classes/CreateClasses'
import ViewStdClass from './classes/ViewStdClass'
import AddStudentInClass from './classes/AddStudentInClass'
import ManageResult from './classes/ManageResult'

import AllSubject from './subject/AllSubject'
import CreateSubject from './subject/CreateSubject'

import Home from './Home'
import Nav from './Nav'
import LayoutIndex from './layout/LayoutIndex'
import LeftSide from './layout/LeftSide'


function Root() {
    return (
        <div>
            <BrowserRouter>
                <div className="card rounded-0 border-0">
                    <div className="card-header border-0">
                        <Nav />
                    </div>
                    <div className="card-body border-0">
                        <div className="row">
                            <div className="col-md-2 col-lg-2">
                                <LeftSide />
                            </div>
                            <div className="col-md-10 col-lg-10 border-0">
                                <Switch>
                                    <Route path="/" exact component={Home} />

                                    <Route exact path="/student" component={AllStudents} />
                                    <Route exact path="/student/create" component={CreateStudent} />

                                    <Route exact path="/teacher" component={AllTeacher} />
                                    <Route exact path="/teacher/create" component={CreateTeacher} />
                                    
                                    <Route exact path="/class/:name/:year/result/:id" component={ManageResult} />
                                    <Route exact path="/class/add-student/:id/:name" component={AddStudentInClass} />
                                    <Route exact path="/class/view-std-class/:id/:name" component={ViewStdClass} />
                                    <Route exact path="/class/current-session" component={CurrentSession} />
                                    <Route exact path="/class/academic-year" component={AcademicYear} />
                                    <Route exact path="/class/create" component={CreateClasses} />
                                    <Route exact path="/class" component={AllClasses} />

                                    <Route exact path="/subject/create" component={CreateSubject} />
                                    <Route exact path="/subject" component={AllSubject} />
                                    
                                </Switch>
                            </div>
                        </div>
                    </div>
                    <div className="card-footer"></div>
                </div>
            </BrowserRouter>

        </div>
    )
}

export default Root
