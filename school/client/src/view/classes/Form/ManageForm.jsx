import React, {useState, useEffect} from 'react'
import Input from "./Input"

const ManageForm = ({ data, HandleFormInput, HandleFormSubmit, error }) => {
    const [years, setYears] = useState([])
    const [classes, setClasses] = useState(['Six','Seven','Eight','Nine','Ten'])

    useEffect(()=>{
        const startYear = 2000
        const endYear = new Date().getFullYear()
        const yrs = []
        for(let i=endYear; i>=startYear; i--){
            yrs.push(i)
        }
        setYears(yrs)
    },[setYears])

    return (
        <div>
            <form onSubmit={HandleFormSubmit} enctype="multipart/form-data">

                <div className="mb-3 row">
                    <label for={'religion'} className="col-sm-2 col-form-label">
                        {'Select Academic Year'}
                    </label>
                    <div className="col-sm-10">
                        <select className="form-select" name="name" onChange={HandleFormInput} aria-label="Default select example">
                            <option selected>Select Class</option>
                            {classes.map(cls=><option value={cls} >{cls}</option>)}
                        </select>
                        <small className="text-danger">{error ? error.name : ''}</small>
                    </div>
                </div>
    
                <div className="mb-3 row">
                    <label for={'religion'} className="col-sm-2 col-form-label">
                        {'Select Academic Year'}
                    </label>
                    <div className="col-sm-10">
                        <select className="form-select" name="academicYear" onChange={HandleFormInput} aria-label="Default select example">
                            <option selected>Select Academic Year</option>
                            {years.map(year=><option value={year}>{year}</option>)}
                        </select>
                        <small className="text-danger">{error ? error.academicYear : ''}</small>
                    </div>
                </div>

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
