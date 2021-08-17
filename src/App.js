import React from "react";
import { SearchBlock, ListBooks, Book } from "./components";
import { Route } from "react-router-dom";

function App() {
    return (
        <>
            <SearchBlock />
            <Route exact path="/">
                <ListBooks />
            </Route>
            <Route path="/book/:id">
                <Book />
            </Route>
        </>
    );
}

export default App;
