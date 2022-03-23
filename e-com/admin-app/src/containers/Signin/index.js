import React from 'react'
import { Col, Container, Form, Row, Button } from 'react-bootstrap'
import Layout from '../../components/Layouts'
import Input from '../../components/UI/input'

export default function Signin() {
    return (
        <Layout>
            <Container>
                <Row style={{ marginTop: '50px' }}>
                    <Col md={{ span: 6, offset: 3 }}>
                        <Form>
                            <Input
                                label='Email'
                                placeholder="Email"
                                value=""
                                type="email"
                                onChange={() => { }}
                            />
                            <Input
                                label='Password'
                                placeholder="password"
                                value=""
                                type="password"
                                onChange={() => { }}
                            />
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </Layout>
    )
}
