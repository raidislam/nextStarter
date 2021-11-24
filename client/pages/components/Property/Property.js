import React, { useState } from 'react'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
const Property = () => {
    const [search,setSearchResult] = useState('');

    const handleSearchInput =(e)=>{
        const searchText = e.target.value;
        setSearchResult(searchText)
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
                        <Button variant="primary">Add Property</Button>
                    </Col>
               </Row>
           </Container>
        </>
    )
}

export default Property
