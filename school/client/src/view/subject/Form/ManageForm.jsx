import React, {useState, useEffect} from 'react'
import Input from "./Input"

const ManageForm = ({ data, HandleFormInput, HandleFormSubmit, error }) => {

    const [classes, setClasses] = useState(['Six','Seven','Eight','Nine','Ten'])
    const [group, setGroup] = useState(['General','Science','Commerce','Arts'])
    const [subjectType, setSubjectType] = useState(['Mandatory','Optional'])

    return (
        <div>
            <form onSubmit={HandleFormSubmit} enctype="multipart/form-data">

                <div className="mb-3 row">
                    <label for={'classNmae'} className="col-sm-2 col-form-label">
                        {'Select Class Name'}
                    </label>
                    <div className="col-sm-10">
                        <select className="form-select" name="className" onChange={HandleFormInput} aria-label="Default select example">
                            <option selected>Select Class</option>
                            {classes.map(cls=><option value={cls.toLocaleLowerCase()} >{cls}</option>)}
                        </select>
                        <small className="text-danger">{error ? error.className : ''}</small>
                    </div>
                </div>

                <div className="mb-3 row">
                    <label for={'group'} className="col-sm-2 col-form-label">
                        {'Select Group'}
                    </label>
                    <div className="col-sm-10">
                        <select className="form-select" name="group" onChange={HandleFormInput} aria-label="Default select example">
                            <option selected>Select Group</option>
                            {data.className === 'nine' || data.className === 'ten' ? group.map(grp=><option value={grp.toLocaleLowerCase()} >{grp}</option>)
                            :<option value="general" >General</option>}
                        </select>
                        <small className="text-danger">{error ? error.group : ''}</small>
                    </div>
                </div>

                <div className="mb-3 row">
                    <label for={'stype'} className="col-sm-2 col-form-label">
                        {'Select Subject Type'}
                    </label>
                    <div className="col-sm-10">
                        <select className="form-select" name="subjectType" onChange={HandleFormInput} aria-label="Default select example">
                            <option selected>Select Subject Type</option>
                            {subjectType.map(st=><option value={st.toLocaleLowerCase()} >{st}</option>)}
                        </select>
                        <small className="text-danger">{error ? error.subjectType : ''}</small>
                    </div>
                </div>
                <Input
                    label={'Subject Name'}
                    type={'text'}
                    name={'name'}
                    value={data.name}
                    HandleFormInput={HandleFormInput}
                    style={"form-control"}
                    error={error ? error.name : ''}
                    placeholder="Enter Subject Name"
                />

                <Input
                    label={'Subject Marks'}
                    type={'number'}
                    name={'marks'}
                    value={data.marks}
                    HandleFormInput={HandleFormInput}
                    style={"form-control"}
                    error={error ? error.marks : ''}
                    placeholder="Enter Subject Marks"
                />

                <Input
                    label={''}
                    type={'submit'}
                    value={'Submit'}
                    style={"btn btn-outline-primary"}
                />
            </form>
        </div>
    )
}

export default ManageForm
