import { span } from "prelude-ls";
import React from "react";
import { useSelector } from "react-redux";
import cover from "../../img/cover.jpg";
import { Redirect } from "react-router-dom";

import "./Book.scss";

function Book() {
    const { chooseBook } = useSelector((state) => state.books);

    if (chooseBook.length === 0) {
        return <Redirect exact to="/" />;
    } else {
        const { authors, categories, description, imageLinks, title } =
            chooseBook[0].volumeInfo;
        return (
            <>
                {chooseBook && (
                    <section className="book">
                        <div className="book__wrapper">
                            <div className="book__inner">
                                <div className="book__item-img">
                                    <div className="book__item-img--block">
                                        <img
                                            src={
                                                imageLinks.thumbnail
                                                    ? imageLinks.thumbnail
                                                    : cover
                                            }
                                            alt="cover"
                                        />
                                    </div>
                                </div>
                                <div className="book__item">
                                    <div className="book__item-title">
                                        {title}
                                    </div>
                                    <div className="book__item-categories">
                                        Categories:
                                        {categories ? (
                                            categories.map((item, index) => (
                                                <span key={index}> {item}</span>
                                            ))
                                        ) : (
                                            <span> Без категории</span>
                                        )}
                                    </div>
                                    <div className="book__item-author">
                                        Authors:
                                        {authors ? (
                                            authors.map((item, index) => (
                                                <span key={index}> {item}</span>
                                            ))
                                        ) : (
                                            <span> Нет автора</span>
                                        )}
                                    </div>
                                    <div className="book__item-descr">
                                        {description ? description : ""}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                )}
            </>
        );
    }
}

export default Book;
