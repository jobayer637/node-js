import React from 'react'

const Input = ({ label, type, name, value, HandleFormInput, style, error }) => {

    return (
        <div>
            <div className="mb-3 row">
                <label for={name} className="col-sm-2 col-form-label">
                    {label}
                </label>
                <div className="col-sm-10">
                    <input
                        type={type}
                        name={name}
                        className={style}
                        value={value}
                        onChange={HandleFormInput}
                    />
                    <small className="text-danger">{error??error}</small>
                </div>
            </div>
        </div>
    )
}

export default Input
