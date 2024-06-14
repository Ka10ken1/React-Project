import React, { useState } from "react";
import "./css/Filter.css";
import { useTranslation } from "react-i18next";

function Filter({ onFilterChange }) {
    const [activeFilters, setActiveFilters] = useState([]);
    const [priceRange, setPriceRange] = useState(500);
    const [isAvailable, setIsAvailable] = useState(false);

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
            priceRange: priceRange,
            isAvailable: isAvailable
        });
    };

    const handlePriceChange = (e) => {
        const value = e.target.value;
        setPriceRange(value);
        onFilterChange({
            filters: activeFilters,
            priceRange: value,
            isAvailable: isAvailable
        });
    };

    const handleAvailableChange = () => {
        setIsAvailable(!isAvailable);
        onFilterChange({
            filters: activeFilters,
            priceRange: priceRange,
            isAvailable: !isAvailable
        });
    };

    return (
        <div className="filter">
            <h3 className="filter-title">{t("Filter")}</h3>
            <div className="checkboxes">
                <label className="checkbox-label">
                    <input
                        type="checkbox"
                        value="Restaurant"
                        onChange={() => handleCheckboxChange("Restaurant")}
                    />
                    {t("Restaurant")}
                </label>
                <label className="checkbox-label">
                    <input
                        type="checkbox"
                        value="Swimming Pool"
                        onChange={() => handleCheckboxChange("Swimming Pool")}
                    />
                    {t("Swimming Pool")}
                </label>
                <label className="checkbox-label">
                    <input
                        type="checkbox"
                        value="Spa"
                        onChange={() => handleCheckboxChange("Spa")}
                    />
                    {t("Spa")}
                </label>
                <label className="checkbox-label">
                    <input
                        type="checkbox"
                        value="Water Sports"
                        onChange={() => handleCheckboxChange("Water Sports")}
                    />
                    {t("Water Sports")}
                </label>

                <label className="checkbox-label">
                    <input
                        type="checkbox"
                        value="Available"
                        onChange={handleAvailableChange}
                    />
                    {t("Available")}
                </label>
            </div>
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

export default Filter;

