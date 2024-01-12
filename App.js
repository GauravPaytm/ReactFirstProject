import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
    return (<div className="Header">
        <div>
            <img src="https://images-platform.99static.com/A_Ax0GQuo_NHI0Y7XZHmFtGfBDY=/0x0:1000x1000/500x500/top/smart/99designs-contests-attachments/126/126252/attachment_126252018"></img>
        </div>
        <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Cart</li>
            </ul>
        </div>
    </div>);
}

const AppLayout = () =>{
    return (
        <div className="app">
            <Header/>
        </div>        
    )
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);









// const heading = React.createElement("h1",{id:"heading"},"Hello World From ReactJS");/
// const jsxHeading = (<h1 id="heading" className="head" tabIndex="5">
//     Trying JSX First Time
//     </h1>);

// Creating React Functional Component

// const HeadingComponent = () => {
//     return <h1 id="heading" className="head" tabIndex="5">Heading from React Functional Component</h1>;
// }

// const Title = <h1>This is title</h1>;

// const HeadingComponent = () => (
// <h1 id="heading" className="head" tabIndex="5">
//     {Title}
//     Heading from React Functional Component Type 2
//     </h1>);

// const FinalComponent = () => (<HeadingComponent />);
// const root = ReactDOM.createRoot(document.getElementById("root"));

// // root.render(heading);
// // root.render(jsxHeading);
// root.render(<FinalComponent/>);
