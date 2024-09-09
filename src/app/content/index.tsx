'use client'

import { useEffect, useState } from "react";
import Carousel from "../view/clothes_carousel";
import Contato from "../view/contato";
import Copyrigh from "../view/copyrigh";
import Header from "../view/header";
import Poster from "../view/poster";
import InfoComponent from "../view/info";

const Main = () => {

    const [theme, setTheme] = useState(true);

    const handlerTheme = () => {
        setTheme(!theme);
        localStorage.setItem('theme', String(!theme));
    };

    useEffect(() => {
        const storedTheme = localStorage.getItem('theme');
        if (storedTheme !== null) {
            const themeBoolean = JSON.parse(storedTheme);
            setTheme(themeBoolean);
        }
    }, []);

    return (
        <div className="global">
            <Header theme={theme} handlerTheme={handlerTheme} />
            <Carousel theme={theme} />
            <InfoComponent theme={theme} />
            <Poster theme={theme} />
            <Contato theme={theme} />
            <Copyrigh theme={theme} />
        </div>
    )
}

export default Main;

