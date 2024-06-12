import React, { useState } from "react";
import "./css/Filter.css";
import { useTranslation } from "react-i18next";

function Filter({ onFilterChange }) {
    const [activeFilters, setActiveFilters] = useState([]);
    const [priceRange, setPriceRange] = useState(500);

    const [t, _] = useTranslation();

    const handleCheckboxChange = (filter) => {
        let updatedFilters;
        if (activeFilters.includes(filter)) {
            updatedFilters = activeFilters.filter(f => f !== filter);
        } else {
            updatedFilters = [...activeFilters, filter];
        }
        setActiveFilters(updatedFilters);
        onFilterChange({
            filters: updatedFilters,
            priceRange: priceRange
        });
    };

    const handlePriceChange = (e) => {
        const value = e.target.value;
        setPriceRange(value);
        onFilterChange({
            filters: activeFilters,
            priceRange: value
        });
    };

    return (
        <div className="filter">
            <label htmlFor="filter">{t("Filter")}</label>
            <div className="checkboxes">
                <label>
                    <input
                        type="checkbox"
                        value="Restaurant"
                        onChange={() => handleCheckboxChange("Restaurant")}
                    />
                    {t("Restaurant")}
                </label>
                <label>
                    <input
                        type="checkbox"
                        value="Swimming Pool"
                        onChange={() => handleCheckboxChange("Swimming Pool")}
                    />
                    {t("Swimming Pool")}
                </label>
                <label>
                    <input
                        type="checkbox"
                        value="Spa"
                        onChange={() => handleCheckboxChange("Spa")}
                    />
                    {t("Spa")}
                </label>
            </div>
            <div className="price-filter">
                <label htmlFor="price">{t("Price Range")}: ${priceRange}</label>
                <input
                    type="range"
                    id="price"
                    name="price"
                    min="50"
                    max="500"
                    value={priceRange}
                    onChange={handlePriceChange}
                />
            </div>
        </div>
    );
}

export default Filter;

