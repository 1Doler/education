import { Suspense } from "react";
import { Route, Routes, Link } from "react-router-dom";
import { Counter } from "./components/Counter"

import { AboutPageAsync } from "./pages/AboutPage/AboutPage.async";
import { MainPageAsync } from "./pages/MainPage/MainPageAsync";

import "./index.scss";

export const App = () => {
    return <div className="app">
        <Link to={"/"}>Главная</Link>
        <Link to={"/about"}>О сайте</Link>
            
        <Suspense fallback={<div>Load</div>}>
            <Routes>    
                <Route path="/about" element={<AboutPageAsync />} />
                <Route path="/" element={<MainPageAsync />}/>     
            </Routes>
        </Suspense>
        <Counter />
    </div>
}