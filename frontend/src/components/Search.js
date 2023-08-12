/* eslint-disable prettier/prettier */
import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
//import styles from './style/mainPage.module.css'

const Search = ({ handleSubmit, searchWord, setSearchWord }) => {
  return (
    <Container className="mt-4">
      <Row className="justify-content-center">
        <Col xs={12} md={8} lg={6}>
          <Form onSubmit={handleSubmit}>
            <Row>
              <Col xs={9}>
                <Form.Control
                  type="text"
                  value={searchWord}
                  onChange={(e) => setSearchWord(e.target.value)}
                  placeholder="Search for new Image..."
                />
              </Col>
              <Col>
                <Button type="submit" variant="primary">
                  Search
                </Button>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Search;
