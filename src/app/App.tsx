import { Suspense } from "react";
import { Route, Routes, Link } from "react-router-dom";

import { AboutPage } from "pages/AboutPage";
import { MainPage } from "pages/MainPage";
import { useTheme } from "./providers/ThemeProvider";

import "./styles/index.scss";
import { classNames } from "shared/lib/classNames/classNames";

export const App = () => {

    const { theme, toggleTheme} = useTheme();

    return (
        <div className={classNames("app", {}, [theme])}>
            <button onClick={toggleTheme}>toggle Theme</button>
            <Link to={"/"}>Главная</Link>
            <Link to={"/about"}>О сайте</Link>
                
            <Suspense fallback={<div>Load</div>}>
                <Routes>    
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/" element={<MainPage />}/>     
                </Routes>
            </Suspense>
        </div>
    )
}