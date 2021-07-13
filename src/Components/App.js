import React, {useState} from "react";
import Header from "./Header/Header";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";
import {HashRouter as Router} from "react-router-dom";

const App = () => {
    const [activeAmount, setActiveAmount] = useState(0);
    const [finishedAmount, setFinishedAmount] = useState(0);

    return (
        <Router>
            <Header />
            <Main
                setActiveAmount={setActiveAmount}
                setFinishedAmount={setFinishedAmount}
            />
            <Footer activeAmount={activeAmount} finishedAmount={finishedAmount} />
        </Router>
    );
};

export default App;
