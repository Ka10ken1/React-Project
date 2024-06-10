import React from "react";
import "./css/Filter.css"

function FilterDropdown({ onFilterChange }) {
    return (
        <select className="filter" onChange={(e) => onFilterChange(e.target.value)}>
            <option value="all">All</option>
            <option value="priceLowToHigh">Price: Low to High</option>
            <option value="priceHighToLow">Price: High to Low</option>
        </select>
    );
}

export default FilterDropdown;

