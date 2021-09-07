import React from 'react'
import Input from "./Input";

const ManageForm = ({ blog, HandleFormInput, HandleFormSubmit, error }) => {
    return (
        <div>
            <form onSubmit={HandleFormSubmit} enctype="multipart/form-data">
                <Input
                    label={'Enter Blog Title'}
                    type={'title'}
                    name={'title'}
                    value={blog.title}
                    HandleFormInput={HandleFormInput}
                    style={"form-control"}
                    error={error ? error.title : ''}
                />

                <Input
                    label={'Enter Blog Image'}
                    type={'file'}
                    name={'image'}
                    HandleFormInput={HandleFormInput}
                    style={"form-control"}
                    error={error ? error.image : ''}
                />

                <div className="mb-3 row">
                    <label for="body" className="col-sm-2 col-form-label">
                        Enter Blog Body
                    </label>
                    <div className="col-sm-10">
                        <textarea
                            name="body"
                            className="form-control"
                            value={blog.body}
                            onChange={HandleFormInput}
                        />
                        {/* <small className="text-danger">{error ?? error}</small> */}
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
