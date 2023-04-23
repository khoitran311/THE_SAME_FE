import React from "react";
import "./App.css";
import DefaultLayout from "./DefaultLayout/DefaultLayout";
import HomePage from "./HomePage/HomePage";

function App() {
    return (
        <>
            <DefaultLayout>
                <HomePage />
            </DefaultLayout>
        </>
    );
}

export default App;

