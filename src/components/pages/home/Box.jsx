import React from "react";
import "./css/Box.css";
import { LuBadgeDollarSign } from "react-icons/lu";
import { useTranslation } from "react-i18next";
import ReactStars from "react-rating-stars-component";
import { TiShoppingCart } from "react-icons/ti";


function Img({ url }) {
    return <img src={url} alt="Hotel" />;
}

function Box({ url, name, amenities, onAddToCard, price, roomId }) {
    const [t, _] = useTranslation();

    const ratingChanged = (newRating) => {
        // console.log(newRating);
    };

    return (
        <div className="box">
            <Img url={url} />
            <div className="some">
                <h2>{t("Room")}: {roomId}</h2>
                <h3>{t(name)}</h3>
                <h3>
                    <LuBadgeDollarSign />
                    {price}
                </h3>
                <ul className="amenities">
                    {amenities.map((amenity, index) => (
                        <li key={index}>{t(amenity)}</li>
                    ))}
                </ul>
                <button className="Addcart" onClick={() => onAddToCard({ url, name, amenities, price: parseInt(price), nightCount: 1, roomId })}>
                    <TiShoppingCart />

                    {t("Add to Card")}
                </button>

                <ReactStars
                    count={5}
                    onChange={ratingChanged}
                    size={30}
                    activeColor="#ffd700"
                />

            </div>
        </div>
    );
}

export default Box;

