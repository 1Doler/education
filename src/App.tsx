import { Suspense } from "react";
import { Route, Routes, Link } from "react-router-dom";

import { AboutPageAsync } from "./pages/AboutPage/AboutPage.async";
import { MainPageAsync } from "./pages/MainPage/MainPageAsync";

import "./styles/index.scss";
import { UseTheme } from "./theme/useTheme";
import { classNames } from "./helpers/classNames/classNames";

export const App = () => {

    const { theme, toggleTheme} = UseTheme();

    return <div className={classNames("app", {}, [theme])}>
        <button onClick={toggleTheme}>toggle Theme</button>
        <Link to={"/"}>Главная</Link>
        <Link to={"/about"}>О сайте</Link>
            
        <Suspense fallback={<div>Load</div>}>
            <Routes>    
                <Route path="/about" element={<AboutPageAsync />} />
                <Route path="/" element={<MainPageAsync />}/>     
            </Routes>
        </Suspense>
    </div>
}