import React from 'react';
import {Col, Image, Row} from "react-bootstrap";

const Post = () => {
    return (
        <>
            <div className="post" style={{background: '#fff', borderRadius: '20px'}}>
                <Row className="post-header d-flex py-2 px-2 align-items-center">
                    <Col md={10} className={'d-flex align-items-center'}>
                        <Image
                            src="https://sun2-19.userapi.com/s/v1/ig2/APjNlfhOuZchga-F4fVxK8MuviG-XLIEPqvqWAYctmD6bHA5Catt4To1Ou4aOOKXiIoMpYAyCdtoGUlvJXAh1_Hx.jpg?size=200x200&quality=96&crop=0,328,1620,1620&ava=1"
                            alt="profileImg"
                            roundedCircle
                            fluid
                            width={40}
                        />
                        <h5 className={'ms-2'}>Vagif Mammadov</h5>
                        <span className={'ms-5'}>12,12,2012</span>
                    </Col>
                    <Col md={2} className="text-right">
                        <i className="fas fa-ellipsis-h"></i>
                    </Col>
                </Row>
                <p className={'mx-2'}>Текст поста 3</p>
                <div className="post-actions d-flex align-items-center justify-content-between p-3">
                                <span>
                                  <i className="far fa-thumbs-up"></i> Лайк
                                </span>
                    <span>
                                  <i className="far fa-save"></i> Сохранить
                                </span>
                    <span>
                                  <i className="fas fa-share"></i> Поделиться
                                </span>
                </div>
            </div>
        </>
    );
};

export default Post;