import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import {useForm} from "react-hook-form";
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';
const Login = ({setAct}) => {

    const schema = yup.object().shape({
        username: yup.string().required('Username is required'),
        password: yup.string().required('Password is required'),
    });

    const {handleSubmit, register, formState: {errors}} = useForm({
        resolver: yupResolver(schema),
    });


    const onSubmit = (data) => {
        console.log(data);
        // Здесь можно выполнить логику отправки данных на сервер или другие действия
    };

    return (
        <Container fluid className="bg-dark text-light" style={{ height: '100vh', padding: '0' }}>
            <Row className="justify-content-center align-items-center" style={{ height: '100%', margin: '0' }}>
                <Col md={6} className={'d-flex flex-column align-items-center'}>
                    <i className="fas fa-sign-in-alt fs-1"></i>
                    <Form onSubmit={handleSubmit(onSubmit)} className={'w-100 px-5'}>
                        <div className="form-group">
                            <label>Username</label>
                            <input type="text" className="form-control" {...register('username')} />
                            {errors.username && <p>{errors.username.message}</p>}
                        </div>
                        <div className="form-group mt-2">
                            <label>Password</label>
                            <input type="password" className="form-control" {...register('password')} />
                            {errors.password && <p>{errors.password.message}</p>}
                        </div>
                        <Button variant="primary" type="submit" block>
                            Войти
                        </Button>
                    </Form>
                </Col>
                <Col md={6} className="text-center">
                    <i className="fas fa-user-alt-slash fs-1 mb-2"></i>
                    <p>Нет аккаунта? Зарегистрируйтесь!</p>
                    <Button variant="secondary" block onClick={()=> setAct('registration')}>
                        Регистрация
                    </Button>
                </Col>
            </Row>
        </Container>
    );
};

export default Login;
