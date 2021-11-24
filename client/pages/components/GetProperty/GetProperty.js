import React from 'react'

const GetProperty = ({result}) => {
    return (
        <div>
            {
                result.map(res => console.log(res))
            }
        </div>
    )
}

export default GetProperty
