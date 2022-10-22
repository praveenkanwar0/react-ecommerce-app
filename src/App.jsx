import { Component, Fragment } from "react";
import MainContent from "./MainContent";
import { NavBar } from "./NavBar";

export default class App extends Component {

    render() {
        return (
            <Fragment>
                <NavBar />
                <MainContent />
            </Fragment>
        )
    }
}