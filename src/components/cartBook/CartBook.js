import React from "react";
import "./CartBook.scss";

function CartBook({ image, title, authors, categories }) {
    console.log(image);
    return (
        <div className="results__item">
            <div className="results__item-img">
                <img src={image.thumbnail} alt="prev" width="250" />
            </div>
            <div className="results__item-info">
                <div className="results__item-categories">
                    {categories === undefined ? "Без категории" : categories[0]}
                </div>
                <div className="results__item-name">
                    {title.length > 80 ? `${title.slice(0, 80)} ...` : title}
                </div>
                <div className="results__item-autor">
                    {authors === undefined
                        ? "Автор неизвестен"
                        : authors.map((item) => `${item} `)}
                </div>
            </div>
        </div>
    );
}

export default CartBook;
