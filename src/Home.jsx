import React from 'react'
import { Col, Container, Row } from "react-bootstrap";
import BookItem from './components/BookItem/BookItem'
import productList from './product.json'

function Home() {
  return (
    <Container>
            <Row>
                {productList.map(item => {
                    return (
                        <Col xl="3" key={item.id}>
                            <BookItem data={item} />
                        </Col>
                    )
                })}
            </Row>
        </Container>
  )
}

export default Home