import React from 'react'
import {Alert} from 'react-bootstrap'

const CustomAlert = ({title, message, handleAlert}) => {
    return (
        <div>
            <Alert className="bg-success" variant="danger" onClose={handleAlert} dismissible>
                <Alert.Heading>{title}!</Alert.Heading>
                <p> {message} </p>
            </Alert>
        </div>
    )
}

export default CustomAlert
