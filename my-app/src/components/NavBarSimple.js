import React from 'react'
import css from "./css/NavBarSimple.module.css";

class NavBarSimple extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            message: "Welcome",
            buttonText: "Log in"
        };
    }

    handleclick = () => {
        this.setState((prevState) => ({
            message: prevState.message === "Welcome" ? "Welcome back!" : "Welcome",
            buttonText: prevState.buttonText === "Log out"? "Log in" : "Log out"
        }), () => console.log(this.state.message));
    }

    render() {
        return (
            <div className = {css.NavBar}>
                <h1>My gallery</h1>
                <div>
                    <span>{this.state.message}</span>
                    <button onClick={() => this.handleclick()} >{this.state.buttonText}</button>
                </div>
            </div>
        )
    }
}

export default NavBarSimple