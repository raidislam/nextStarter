import React from 'react'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

const ShowProperty = () => {  
    return (
       <Container>
           <Row>
           <Table striped bordered hover variant="dark">
            <thead>
                <tr>
                <th>serial</th>
                <th>Name</th>
                <th>Email</th>
                <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>1</td>
                <td>Mark</td>
                <td>Otto@mail.com</td>
                <td>
                    <Button>Edit</Button>
                    <Button className='ml-5'>Delete</Button>
                </td>
                </tr>
            </tbody>
        </Table>
           </Row>
       </Container>
    )
}

export default ShowProperty
