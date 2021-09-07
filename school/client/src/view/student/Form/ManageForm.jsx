import React from 'react'
import Input from "./Input"
import Select from "./Select"

const ManageForm = ({ data, HandleFormInput, HandleFormSubmit, error }) => {
    return (
        <div>
            <form onSubmit={HandleFormSubmit} encType="multipart/form-data">
                <Input
                    label={'Id'}
                    type={'text'}
                    name={'studentId'}
                    value={data.studentId}
                    HandleFormInput={HandleFormInput}
                    style={"form-control"}
                    error={error ? error.studentId : ''}
                    placeholder="Enter Student Id (unique id)"
                />

                <Input
                    label={'Name'}
                    type={'name'}
                    name={'name'}
                    value={data.name}
                    HandleFormInput={HandleFormInput}
                    style={"form-control"}
                    error={error ? error.name : ''}
                    placeholder="Enter Student Name"
                />

                <Input
                    label={'Email (optional)'}
                    type={'email'}
                    name={'email'}
                    value={data.email}
                    HandleFormInput={HandleFormInput}
                    style={"form-control"}
                    error={error ? error.email : ''}
                    placeholder="Enter Student Email (optional)"
                />

                <Input
                    label={'Phone'}
                    type={'phone'}
                    name={'phone'}
                    value={data.phone}
                    HandleFormInput={HandleFormInput}
                    style={"form-control"}
                    error={error ? error.phone : ''}
                    placeholder="Enter Student Phone"
                />

               <Input
                    label={'Present Address'}
                    type={'text'}
                    name={'presentAddress'}
                    value={data.presentAddress}
                    HandleFormInput={HandleFormInput}
                    style={"form-control"}
                    error={error ? error.presentAddress : ''}
                    placeholder="Enter Present Address"
                />

                <Input
                    label={'Permanent Address'}
                    type={'text'}
                    name={'permanentAddress'}
                    value={data.permanentAddress}
                    HandleFormInput={HandleFormInput}
                    style={"form-control"}
                    error={error ? error.permanentAddress : ''}
                    placeholder="Enter Permanent Address"
                />

                <Input
                    label={'Date of Birth'}
                    type={'date'}
                    name={'dob'}
                    value={data.dob}
                    HandleFormInput={HandleFormInput}
                    style={"form-control"}
                    error={error ? error.dob : ''}
                    placeholder="Select Date of Birth"
                />

                <Select 
                    label={'Select Blood Group'}
                    name={'blood'}
                    value={data.blood}
                    HandleFormInput={HandleFormInput}
                    style={"form-control"}
                    error={error ? error.blood : ''}
                    placeholder="Select Blood Group"
                />

                <div className="mb-3 row">
                    <label for={'gender'} className="col-sm-2 col-form-label">
                        {'Select Gender'}
                    </label>
                    <div className="col-sm-10">
                        <select className="form-select" name="gender" onChange={HandleFormInput} aria-label="Default select example">
                            <option selected>Select Gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Others">Others</option>
                        </select>
                        <small className="text-danger">{error ? error.gender : ''}</small>
                    </div>
                </div>

                <div className="mb-3 row">
                    <label for={'religion'} className="col-sm-2 col-form-label">
                        {'Select Religion'}
                    </label>
                    <div className="col-sm-10">
                        <select className="form-select" name="religion" onChange={HandleFormInput} aria-label="Default select example">
                            <option selected>Select Religion</option>
                            <option value="Islam">Islam</option>
                            <option value="Hinduism">Hinduism</option>
                            <option value="Buddhuism">Buddhoism</option>
                        </select>
                        <small className="text-danger">{error ? error.religion : ''}</small>
                    </div>
                </div>

                <Input
                    label={'Select profile image'}
                    type={'file'}
                    name={'image'}
                    value={data.image}
                    HandleFormInput={HandleFormInput}
                    style={"form-control"}
                    error={error ? error.image : ''}
                    placeholder="Select Image"
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
