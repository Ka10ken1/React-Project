import React, { useState } from "react";
import "./css/Sort.css";
import { useTranslation } from "react-i18next";

function Sort({ onSortChange }) {
    const [priceRange, setPriceRange] = useState(500);
    const [sortAlphabetically, setSortAlphabetically] = useState(false);
    const [t, _] = useTranslation();

    const handlePriceChange = (e) => {
        const value = e.target.value;
        setPriceRange(value);
        onSortChange({
            priceRange: value,
            isAlphabetical: sortAlphabetically
        });
    };

    const handleSortAlphabetically = () => {
        setSortAlphabetically(!sortAlphabetically);
        onSortChange({
            priceRange: priceRange,
            isAlphabetical: !sortAlphabetically
        });
    };

    return (
        <div className="sort">
            <h3 className="filter-title">{t("Sort")}</h3>
            <label className="sort-alphabetically-label">
                <input
                    type="checkbox"
                    value="Sort Alphabetically"
                    onChange={handleSortAlphabetically}
                />
                {t("Sort Alphabetically")}
            </label>
            <div className="price-filter">
                <label className="price-label" htmlFor="price">{t("Price Range")}: ${priceRange}</label>
                <input
                    type="range"
                    id="price"
                    name="price"
                    min="50"
                    max="500"
                    value={priceRange}
                    onChange={handlePriceChange}
                    className="price-slider"
                />
            </div>
        </div>
    );
}

export default Sort;

