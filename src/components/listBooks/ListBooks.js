import React from "react";
import CartBook from "../cartBook/CartBook";
import "./ListBooks.scss";
import { useSelector, useDispatch } from "react-redux";
import { BsInboxFill } from "react-icons/bs";
import actionBooks, { addedBooks } from "../../redux/actions/actionBooks";

function ListBooks() {
    const books = useSelector((state) => state.books);
    const { textFeild, categories, sorting } = useSelector(
        (state) => state.search
    );

    const dispatch = useDispatch();

    const getMoreBooks = () => {
        dispatch(addedBooks(textFeild, categories, sorting, books.startIndex));
    };

    const chooseBook = (id) => {
        const chooseBook = books.item.filter((a) => a.id === id);
        dispatch(actionBooks.setChooseBook(chooseBook));
    };
    return (
        <section className="results">
            {books.loader ? (
                <div className="results__loader">
                    <div className="lds-roller">
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
                                        key={item.id + index}
                                        authors={authors}
                                        title={title}
                                        categories={categories}
                                        image={imageLinks}
                                        id={item.id}
                                        onClick={chooseBook}
                                    />
                                );
                            })}
                    </div>
                    {books.loaderMore ? (
                        <div className="results__loader-more">
                            <div className="lds-ellipsis">
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                        </div>
                    ) : (
                        <div className="results_btn">
                            <button onClick={getMoreBooks}>Load more</button>
                        </div>
                    )}
                </>
            )}
        </section>
    );
}

export default ListBooks;
