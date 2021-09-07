import React from 'react'

const Input = ({ label, type, name, value, HandleFormInput, style, error }) => {

    return (
        <div>
            <div className="mb-3 row">
                <label for={name} className="col-sm-2 col-form-label">
                    {label}
                </label>
                <div className="col-sm-10">
                <select className="form-select" name="blood" onChange={HandleFormInput} aria-label="Default select example">
                    <option selected>Select Blood Group</option>
                    <option value="O+">O+ (O possitive)</option>
                    <option value="B+">B+ (B possitive)</option>
                    <option value="A+">A+ (A possitive)</option>
                </select>
                    <small className="text-danger">{error??error}</small>
                </div>
            </div>
        </div>
    )
}

export default Input
