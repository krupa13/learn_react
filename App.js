import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => (
    <h1>Welcome to react🤞</h1>
);

const HeaderComponent = () => (
    <div id="container">
        {Title()}
        <h1>React Functional Component🤞</h1>
    </div>
);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<HeaderComponent />);