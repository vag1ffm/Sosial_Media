import React from 'react';
import {Button, Form} from "react-bootstrap";

const AddNewPost = () => {
    return (
        <>
            <Form className="mt-4">
                <Form.Group controlId="newPost">
                    <Form.Label>Добавить новый пост</Form.Label>
                    <Form.Control as="textarea" rows={3} placeholder="Введите текст поста"/>
                </Form.Group>
                <Button className={'mt-2'} variant="primary" type="submit">
                    Опубликовать
                </Button>
            </Form>
        </>
    );
};

export default AddNewPost;