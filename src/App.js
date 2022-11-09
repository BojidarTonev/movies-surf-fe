import React from 'react';
import {Route, Routes} from "react-router-dom";
import {Home} from "./features/home/home";
import {Layout} from "./features/layout/layout";
import './App.css';

export const App = () => {
    return (
        <div className="wrapper">
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<Home/>}/>
                    {/*<Route path="about" element={<About/>}/>*/}
                    {/*<Route path="dashboard" element={<Dashboard/>}/>*/}
                    {/*<Route path="*" element={<NoMatch/>}/>*/}
                </Route>
            </Routes>
        </div>

    );
}