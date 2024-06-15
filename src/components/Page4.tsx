import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { scroller } from 'react-scroll';

const Page4: React.FC<{ onSubmit: (data: any) => void }> = ({ onSubmit }) => {
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [input3, setInput3] = useState('');
  const [input4, setInput4] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ input1, input2, input3, input4 });
  };

  const scrollToPrevious = () => {
    scroller.scrollTo('page3', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart',
    });
  };

  return (
    <Container className="container-custom">
      <Row className="text-section">
        <Col>
          <h2>Wprowadź swoje dokładniejsze preferencje zywieniowe</h2>
        </Col>
      </Row>
      <Form onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Col>
            <Form.Group controlId="input1">
              <Form.Label>Input 1</Form.Label>
              <Form.Control
                type="text"
                value={input1}
                onChange={(e) => setInput1(e.target.value)}
                className="mb-3"
              />
            </Form.Group>
          </Col>
        </Row>
        <Row className="mb-3">
          <Col>
            <Form.Group controlId="input2">
              <Form.Label>Input 2</Form.Label>
              <Form.Control
                type="text"
                value={input2}
                onChange={(e) => setInput2(e.target.value)}
                className="mb-3"
              />
            </Form.Group>
          </Col>
        </Row>
        <Row className="mb-3">
          <Col>
            <Form.Group controlId="input3">
              <Form.Label>Input 3</Form.Label>
              <Form.Control
                type="text"
                value={input3}
                onChange={(e) => setInput3(e.target.value)}
                className="mb-3"
              />
            </Form.Group>
          </Col>
        </Row>
        <Row className="mb-3">
          <Col>
            <Form.Group controlId="input4">
              <Form.Label>Input 4</Form.Label>
              <Form.Control
                type="text"
                value={input4}
                onChange={(e) => setInput4(e.target.value)}
                className="mb-3"
              />
            </Form.Group>
          </Col>
        </Row>
        <Row className="navigation-buttons">
          <Col>
            <button onClick={scrollToPrevious} className="btn-custom">
              Back
            </button>
          </Col>
        </Row>
        <Row className="navigation-buttons">
          <Col>
            <button type="submit" className="btn-custom">
              Submit
            </button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};

export default Page4;
