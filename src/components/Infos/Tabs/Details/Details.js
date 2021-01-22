import React from 'react';
import {Form,Row,Col} from "react-bootstrap";

export default function Details() {
    return (
        <Form>
            <Row>
                <Col>
                    <Form.Control placeholder="First name" />
                </Col>
                <Col>
                    <Form.Control placeholder="Last name" />
                </Col>
            </Row>
            <Row>
                <Col>
                    <Form.Control placeholder="First name" />
                </Col>
                <Col>
                    <Form.Control placeholder="Last name" />
                </Col>
            </Row>
        </Form>
    )
}
