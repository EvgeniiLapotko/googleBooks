import React from "react";
import CartBook from "../cartBook/CartBook";
import "./ListBooks.scss";
import { useSelector } from "react-redux";

function ListBooks() {
    const books = useSelector((state) => state.books);
    console.log(books.item);
    return (
        <section className="results">
            <h2 className="results-title">
                {books.total === 0
                    ? "Книг не найдено"
                    : `Найдено ${books.total}`}
            </h2>
            <div className="results__inner">
                {books.item.map((item, index) => {
                    const { authors, title, categories, imageLinks } =
                        item.volumeInfo;
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
        </section>
    );
}

export default ListBooks;
