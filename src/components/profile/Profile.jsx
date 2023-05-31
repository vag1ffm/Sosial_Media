import React from 'react';
import {Container, Row, Col, Image, Button, Form} from 'react-bootstrap';
import './Profile.css'
import AddNewPost from "../helpers/AddNewPost";
import Post from "../helpers/Post";

const Profile = () => {
    return (
        <Container>
            <Row className="profile-container  py-3" style={{background: '#fff', borderRadius: '20px'}}>
                <Col md={4} className="text-center">
                    <div className="profile">
                        <Image
                            src="https://sun2-19.userapi.com/s/v1/ig2/APjNlfhOuZchga-F4fVxK8MuviG-XLIEPqvqWAYctmD6bHA5Catt4To1Ou4aOOKXiIoMpYAyCdtoGUlvJXAh1_Hx.jpg?size=200x200&quality=96&crop=0,328,1620,1620&ava=1"
                            alt="profileImg"
                            roundedCircle
                            fluid
                            width={150}
                        />
                    </div>
                </Col>
                <Col md={4} className="text-right">
                    <h4>Vagif Mammadov</h4>
                    <p><i className="fas fa-map-marker me-2"></i>Dubai</p>
                    <div className="rating">
                        <span>Рейтинг: </span>
                        <span className="stars">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>

                        </span>
                    </div>

                </Col>
                <Col className={''}>
                    <Button variant="primary" className="mt-3">
                        Изменить профиль
                    </Button>
                </Col>

            </Row>

            <Row>
                <Col md={8}>
                    <AddNewPost/>
                    <h3 className={'mt-4 mb-3'}>Мои посты</h3>
                    <div className="posts">
                        <Post/>
                    </div>

                </Col>
                <Col className={'mt-5'}>
                    <Col style={{background: '#fff', borderRadius: '20px'}}
                         className={'p-2'}
                    >
                        <h5>Подписчики 0</h5>

                    </Col>
                    <Col style={{background: '#fff', borderRadius: '20px'}}
                         className={'p-2 mt-4'}
                    >
                        <h5>Друзья 0</h5>

                    </Col>
                </Col>
            </Row>
            <Row className="mt-4">

            </Row>
        </Container>
    );
};

export default Profile;
