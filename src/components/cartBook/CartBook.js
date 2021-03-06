import React from "react";
import "./CartBook.scss";
import bg from "../../img/cover.jpg";
import { Link } from "react-router-dom";

function CartBook({ image, title, authors, categories, onClick, id }) {
    return (
        <Link to={`/book/${id}`} className="results__item">
            <div className="results__item-block" onClick={(e) => onClick(id)}>
                <div className="results__item-img">
                    <img
                        src={image === undefined ? bg : image.thumbnail}
                        alt="prev"
                    />
                </div>
                <div className="results__item-info">
                    <div className="results__item-categories">
                        {categories === undefined
                            ? "Без категории"
                            : categories[0]}
                    </div>
                    <div className="results__item-name">
                        {title.length > 80
                            ? `${title.slice(0, 80)} ...`
                            : title}
                    </div>
                    <div className="results__item-autor">
                        {authors === undefined
                            ? "Автор неизвестен"
                            : authors.map((item) => `${item} `)}
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default CartBook;
