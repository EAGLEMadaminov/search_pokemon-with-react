import React, {useState} from 'react'
import { Form, Container, Col, Button, Row } from 'react-bootstrap'

export default function Search(props) {
  const [search, setSearch] = useState('')

  return (
    <Container>
      <Form className='mt-2'>
        <Form.Group as={Row} className='align-items-center'>
          <Col sm={10} className='my-1'>
            <Form.Control
              onChange={(e) => setSearch(e.target.value)}
              placeholder='Search for Pokemon'
            />
          </Col>
          <Col sm={2} className='my-1'>
            <Button block='true' onClick={(e) => props.getPokemon(search)}>
              Search
            </Button>
          </Col>
        </Form.Group>
      </Form>
    </Container>
  )
}
