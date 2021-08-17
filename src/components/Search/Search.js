import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Redirect, withRouter } from "react-router-dom";

import "./Search.scss";

import { ImSearch } from "react-icons/im";
import { getBooks } from "../../redux/actions/actionBooks";
import { actionSearch } from "../../redux/actions";
function Search({ history }) {
    const [textFeild, setTextFeild] = useState("");
    const [categories, setCategories] = useState("all");
    const [sorting, setSorting] = useState("relevance");

    const dispatch = useDispatch();

    const submitForm = (e) => {
        e.preventDefault();
        dispatch(actionSearch.setSerach(textFeild, categories, sorting));
        dispatch(getBooks(textFeild, categories, sorting));
        setTextFeild("");
        history.push("/");
        return <Redirect exact to="/" />;
    };

    return (
        <section className="search">
            <div className="search__wrapper">
                <h1 className="search__title">Search for books</h1>
                <div className="search__form">
                    <form onSubmit={submitForm}>
                        <div className="search__form-text-block">
                            <input
                                className="search__form-text"
                                type="text"
                                value={textFeild}
                                onChange={(e) => setTextFeild(e.target.value)}
                            />

                            <button type="submit" className="search__form-btn">
                                <ImSearch className="search__form-btn-icon" />
                            </button>
                        </div>

                        <div className="search__form-sort-block">
                            <div className="search__form-block search__form-categories">
                                <label htmlFor="section-categories">
                                    Categories
                                </label>
                                <select
                                    className="search__form-section"
                                    name="categories"
                                    id="section-categories"
                                    value={categories}
                                    onChange={(e) =>
                                        setCategories(e.target.value)
                                    }
                                >
                                    <option value="all">All</option>
                                    <option value="art">art</option>
                                    <option value="biography">biography</option>
                                    <option value="computers">computers</option>
                                    <option value="history4">history</option>
                                    <option value="medical">medical</option>
                                    <option value="poetry">poetry</option>
                                </select>
                            </div>
                            <div className="search__form-block search__form-sorting">
                                <label htmlFor="section-sorting">
                                    Sorting by
                                </label>
                                <select
                                    className="search__form-section"
                                    name="sorting"
                                    id="section-categories"
                                    value={sorting}
                                    onChange={(e) => setSorting(e.target.value)}
                                >
                                    <option value="relevance">relevance</option>
                                    <option value="newest">newest</option>
                                </select>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default withRouter(Search);
