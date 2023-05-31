import React, {useState} from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import Login from "../login";
import Registration from "../registration";

const Auth = () => {
    const [act, setAct] = useState('login')



    return (
        <Container fluid className="bg-dark text-light" style={{ height: '100vh', padding: '0' }}>
            <Row className="justify-content-center align-items-center" style={{ height: '100%', margin: '0' }}>

                {
                    (act==='login')
                        ? <Login setAct={setAct}/>
                        : <Registration setAct={setAct}/>

                }


            </Row>
        </Container>
    );
};

export default Auth;
