import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import {useForm} from "react-hook-form";
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';
import Sidebar from "../sidebar";
import Header from "../header/Header";
const Home = () => {



    return (
        <>
            <div className={'d-flex'}>

                <Sidebar/>
            </div>
        </>
    );
};

export default Home;
