import React, { useState } from 'react'
import Table from 'react-bootstrap/Table'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Link from 'next/link';
const Property = ({data,setData,search,setSearchResult}) => {
    const [editValue,setEditValue] = useState('');
    const handleSearchInput =(e)=>{
        const searchText = e.target.value;
        const matched = data?.filter(res => res.name.toLowerCase().includes(searchText.toLowerCase()))
        setSearchResult(matched);
    }
    console.log(search)
    const handleEditButton = (id)=>{
        console.log(id)
    }
    return (
        <>
           <Container>
               <Row className='my-3'>
                   <Col xs={12} md={7}>
                   <InputGroup className="mb-3">
                        <InputGroup.Text id="inputGroup-sizing-default">Search property</InputGroup.Text>
                        <FormControl onChange={handleSearchInput}
                        aria-label="Default"
                        aria-describedby="inputGroup-sizing-default"
                        />
                    </InputGroup>
                   </Col>
                    <Col xs={1} md={5}>
                        <Link href='/addproperty'>
                            <Button variant="primary">Add Property</Button>
                        </Link>
                    </Col>
               </Row>
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
                   search?.map(res=>{
                        return <tr key={res.id}>
                            <td>{res.id}</td>
                            <td>{res.propertyname}</td>
                            <td>{res.name}</td>
                            <td>{res.location}</td>
                            <td>
                                <Button onClick={()=>{handleEditButton(res.id)}}>Edit</Button>
                                <Button className='mx-3'>Delete</Button>
                            </td>
                            </tr>
                    })
                }
            </tbody>
        </Table>
           </Container>
        </>
    )
}

export default Property
