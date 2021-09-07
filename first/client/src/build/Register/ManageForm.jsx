import React from 'react'
import Input from "./Input";

const ManageForm = ({userRegister, HandleFormInput, HandleFormSubmit, error}) => {
    return (
        <div>
            <form onSubmit={HandleFormSubmit}>
                <Input
                    label={'Name'}
                    type={'text'}
                    name={'name'}
                    value={userRegister.name}
                    HandleFormInput={HandleFormInput}
                    style={"form-control"}
                    error={error? error.name: ''}
                />

                <Input
                    label={'Email'}
                    type={'email'}
                    name={'email'}
                    value={userRegister.email}
                    HandleFormInput={HandleFormInput}
                    style={"form-control"}
                    error={error? error.email:''}
                />

                <Input
                    label={'Password'}
                    type={'password'}
                    name={'password'}
                    value={userRegister.password}
                    HandleFormInput={HandleFormInput}
                    style={"form-control"}
                    error={error? error.password:''}
                />

                <Input
                    label={'Confirm Password'}
                    type={'password'}
                    name={'confirmPassword'}
                    value={userRegister.confirmPassword}
                    HandleFormInput={HandleFormInput}
                    style={"form-control"}
                    error={error? error.confirmPassword:''}
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
