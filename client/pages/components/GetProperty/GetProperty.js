import React from 'react'
import ShowProperty from '../ShowProperty/ShowProperty'

const GetProperty = ({data,setData}) => {
  
    return (
        <div>
            {
                // result.map(res => <ShowProperty  result={result}/>)
                <ShowProperty data={data}/>
            }
        </div>
    )
}

export default GetProperty
