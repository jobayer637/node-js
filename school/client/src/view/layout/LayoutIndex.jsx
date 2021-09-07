import React from 'react'
import LeftSide from './LeftSide'

function LayoutIndex() {
    return (
        <div>
            <div className="card rounded-0 border-0">
                <div className="card-header"></div>
                <div className="card-body border-0">
                    <div className="row">
                        <div className="col-md-2 col-lg-2 mx-0 px-0">
                            <LeftSide />
                        </div>
                        <div className="col-md-10 col-lg-10">
                            right side
                        </div>
                    </div>
                </div>
                <div className="card-footer"></div>
            </div>
        </div>
    )
}

export default LayoutIndex
