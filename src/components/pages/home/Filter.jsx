import React, { useState } from "react";
import "./css/Filter.css";

function Filter({ onFilterChange }) {
    const [activeFilters, setActiveFilters] = useState([]);
    const [priceRange, setPriceRange] = useState(500);

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
            <label htmlFor="filter">Filter:</label>
            <div className="checkboxes">
                <label>
                    <input
                        type="checkbox"
                        value="Restaurant"
                        onChange={() => handleCheckboxChange("Restaurant")}
                    />
                    Restaurant
                </label>
                <label>
                    <input
                        type="checkbox"
                        value="Swimming Pool"
                        onChange={() => handleCheckboxChange("Swimming Pool")}
                    />
                    Swimming Pool
                </label>
                <label>
                    <input
                        type="checkbox"
                        value="Spa"
                        onChange={() => handleCheckboxChange("Spa")}
                    />
                    Spa
                </label>
            </div>
            <div className="price-filter">
                <label htmlFor="price">Price Range: ${priceRange}</label>
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

