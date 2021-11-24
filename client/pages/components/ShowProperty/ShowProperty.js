import React, { useState } from 'react'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Property from '../Property/Property'

const ShowProperty = ({data}) => {  
    console.log(data)
    return (
       <>
        <Container>
           <Row>
           <Table striped bordered hover variant="dark">
            <thead>
                <tr>
                <th>serial</th>
                <th>PropertyName</th>
                <th>Name</th>
                <th>Location</th>
                <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    data?.map(res=>{
                        return <tr key={res.id}>
                            <td>{res.id}</td>
                            <td>{res.propertyname}</td>
                            <td>{res.name}</td>
                            <td>{res.location}</td>
                            <td>
                                <Button>Edit</Button>
                                <Button className='mx-3'>Delete</Button>
                            </td>
                            </tr>
                    })
                }
            </tbody>
        </Table>
           </Row>
       </Container>
    <Property data={data} />

       </>
    )
}

export default ShowProperty
