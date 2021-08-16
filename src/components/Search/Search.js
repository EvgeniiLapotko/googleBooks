import React, { useState } from "react";
import { useDispatch } from "react-redux";

import "./Search.scss";

import { ImSearch } from "react-icons/im";
import { getBooks } from "../../redux/actions/actionBooks";
function Search() {
    const [textFeild, setTextFeild] = useState("");
    const [categories, setCategories] = useState(0);
    const [sorting, setSorting] = useState(0);

    const dispatch = useDispatch();

    const submitForm = (e) => {
        e.preventDefault();
        dispatch(getBooks(textFeild));
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
                                    <option value="0">All</option>
                                    <option value="1">art</option>
                                    <option value="2">biography</option>
                                    <option value="3">computers</option>
                                    <option value="4">history</option>
                                    <option value="5">medical</option>
                                    <option value="6">poetry</option>
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
                                    <option value="0">relevance </option>
                                    <option value="1">newest</option>
                                </select>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Search;
