import React from "react";
import CartBook from "../cartBook/CartBook";
import "./ListBooks.scss";
import { useSelector } from "react-redux";
import { BsInboxFill } from "react-icons/bs";

function ListBooks() {
    const books = useSelector((state) => state.books);
    console.log(books.item);
    return (
        <section className="results">
            {books.loader ? (
                <div className="results__loader">
                    <div class="lds-roller">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            ) : books.item.length === 0 ? (
                <div className="results__wrapper">
                    <div className="results__empty">
                        <h2>Здесь ничего нет</h2>
                        <div className="results__empty-icon-block">
                            <BsInboxFill className="results__empty-icon" />
                        </div>
                    </div>
                </div>
            ) : (
                <>
                    <h2 className="results-title">
                        {books.total === 0
                            ? "Книг не найдено"
                            : `Найдено ${books.total}`}
                    </h2>
                    <div className="results__inner">
                        {books.item &&
                            books.item.map((item, index) => {
                                const {
                                    authors,
                                    title,
                                    categories,
                                    imageLinks,
                                } = item.volumeInfo;
                                return (
                                    <CartBook
                                        key={index}
                                        authors={authors}
                                        title={title}
                                        categories={categories}
                                        image={imageLinks}
                                    />
                                );
                            })}
                    </div>
                    <div className="results_btn">
                        <button>Load more</button>
                    </div>
                </>
            )}
        </section>
    );
}

export default ListBooks;
