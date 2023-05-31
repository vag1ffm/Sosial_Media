import React, {useState} from 'react';
import './Sidebar.css'
import {Route, Routes} from "react-router-dom";
import {routes} from "../../routes/routes";
import PublicRoute from "../publicRoute";
import PrivateRoute from "../privateRoute";
import Profile from "../profile";
import News from "../news";
import Messages from "../messages";
import Friends from "../friends";
import Groups from "../groups";
import Music from "../music";
import Video from "../video";
import Save from "../save";
import Settings from "../settings";

const Urls = () => {

    return (
        <>
            <Routes>
                <Route path={routes.authorization} element={<PublicRoute/>}/>


                <Route path={routes.news} element={<PrivateRoute/>}>
                    <Route path={routes.profile} element={<Profile/>}/>
                    <Route path={routes.news} element={<News/>}/>
                    <Route path={routes.messages} element={<Messages/>}/>
                    <Route path={routes.frineds} element={<Friends/>}/>
                    <Route path={routes.groups} element={<Groups/>}/>
                    <Route path={routes.music} element={<Music/>}/>
                    <Route path={routes.video} element={<Video/>}/>
                    <Route path={routes.save} element={<Save/>}/>
                    <Route path={routes.settings} element={<Settings/>}/>
                </Route>


            </Routes>


        </>
    );
};

export default Urls;
