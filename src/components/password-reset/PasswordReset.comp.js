import React from "react";
import PropTypes from 'prop-types'
import { Container, Row, Col, Form, Button } from "react-bootstrap";



export const ResetPassword = ({handleOnChange, handleOnResetSubmit, formSwitcher, email}) => {
    return(
        <Container>
            <Row>
                <Col>
                <h1>Reset Password</h1>
                <hr />
                <Form autoComplete="off" onSubmit={handleOnResetSubmit}>
                    <Form.Group>
                        <Form.Label>Email Address*</Form.Label>
                        <Form.Control 
                        type="email"
                        name="email"
                        value={email}
                        onChange={handleOnChange}
                        placeholder="Enter Email"
                        required 
                        />
                    </Form.Group>
                    <br></br>

                    <Button type="Submit">Reset Password</Button>
                </Form>
                </Col>
            </Row>
            <hr/>
            <Row>
                <Col>
                <a href="#!"onClick={() => formSwitcher('login')}>Login now</a>
                </Col>
            </Row>
        </Container>
        
        
    );
};

ResetPassword.propTypes = {
    handleOnChange: PropTypes.func.isRequired,
    handleOnResetSubmit: PropTypes.func.isRequired,
    formSwitcher: PropTypes.func.isRequired,
    email: PropTypes.string.isRequired,
    
};