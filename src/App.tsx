import React from 'react';
import Screen from "./screens/Screen";
import {BrowserRouter} from "react-router-dom";

const App = () => {
    return (
        <BrowserRouter>
            <Screen/>
        </BrowserRouter>

    );
};

export default App;